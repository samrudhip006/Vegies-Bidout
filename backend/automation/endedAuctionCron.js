import cron from "node-cron";
import { Auction } from "../models/auctionSchema.js";
import { User } from "../models/userSchema.js";
import { Bid } from "../models/bidSchema.js";
import { sendEmail } from "../utils/sendEmail.js";
// import { calculateCommission } from "../controllers/commissionController.js";

export const endedAuctionCron = () => {
  cron.schedule("*/1 * * * *", async () => {
    const now = new Date();
    console.log("Cron for ended auction running...");
    const endedAuctions = await Auction.find({
      endTime: { $lt: now },
      emailSent: false,
     // commissionCalculated: false,
    });
    
    for (const auction of endedAuctions) {
      try {
        //  const commissionAmount = await calculateCommission(auction._id);
        //  auction.commissionCalculated = true;
        
        const highestBidder = await Bid.findOne({
          auctionItem: auction._id,
          amount: auction.currentBid,
        });

        const auctioneer = await User.findById(auction.createdBy);

        // auctioneer.unpaidCommission = commissionAmount;
        if (highestBidder) {
          // Update auction with highest bidder details and email sent flag
          auction.highestBidder = highestBidder.bidder.id;
          auction.emailSent = true;

          // Save auction with updated details
          console.log('Auction before save:', auction);
         await auction.save();
         console.log('Auction after save:', auction);


          // Update the bidder's statistics
          const bidder = await User.findById(highestBidder.bidder.id);
          await User.findByIdAndUpdate(
            bidder._id,
            {
              $inc: {
                moneySpent: highestBidder.amount,
                auctionsWon: 1,
              },
            },
            { new: true }
          );

          // Optionally update auctioneer's statistics
          await User.findByIdAndUpdate(
            auctioneer._id,
            {
              $inc: {
                // unpaidCommission: commissionAmount,
              },
            },
            { new: true }
          );

          // Send email to the highest bidder
          const subject = `Congratulations! You won the auction for ${auction.title}`;
          const message = `Dear ${bidder.userName}, \n\nCongratulations! You have won the auction for ${auction.title}. \n\nBefore proceeding for payment contact your auctioneer via your auctioneer email: ${auctioneer.email} \n\nPlease complete your payment using the following methods:\n\n1. **Bank Transfer**: \n- Account Name: ${auctioneer.paymentMethods.bankTransfer.bankAccountName} \n- Account Number: ${auctioneer.paymentMethods.bankTransfer.bankAccountNumber} \n- Bank: ${auctioneer.paymentMethods.bankTransfer.bankName}\n\n\n- If you want to see the condition of your auction item, then send your email to: ${auctioneer.email}\n\nPlease ensure your payment is completed by [Payment Due Date]. Once we confirm the payment, the item will be shipped to you.\n\nThank you for participating!\n\nBest regards,\nAuction Team`;

          console.log("SENDING EMAIL TO HIGHEST BIDDER");
          sendEmail({ email: bidder.email, subject, message });
          console.log("SUCCESSFULLY EMAIL SENT TO HIGHEST BIDDER");
        }
      } catch (error) {
        console.error(error || "Some error in ended auction cron");
      }
    }
  });
};
