import dotenv from 'dotenv'; 
dotenv.config({ path: './config/config.env' });  // This will load variables from a custom path

import express from 'express';
const app = express();

// Your application logic
import cors from 'cors';
app.use(
    cors({
      origin: [process.env.FRONTEND_URL],
      methods: ["POST", "GET", "PUT", "DELETE"],
      credentials: true,
    })
  );
  
  import cookieParser from "cookie-parser";
  import fileUpload from "express-fileupload";
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
   fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
); 

import userRouter from "./router/userRoutes.js"; 
app.use("/api/v1/user", userRouter); 

import auctionItemRouter from "./router/auctionItemRoutes.js"; 
app.use("/api/v1/auctionitem", auctionItemRouter); 

import bidRouter from "./router/bidRoutes.js";
app.use("/api/v1/bid", bidRouter); 
import superAdminRouter from "./router/superAdminRoutes.js";
app.use("/api/v1/superadmin", superAdminRouter); 

import { connection } from "./database/connection.js"; 
// import { endedAuctionCron } from "./automation/endedAuctionCron.js";
endedAuctionCron();
connection(); 
import { errorMiddleware } from "./middlewares/error.js";
import { endedAuctionCron } from './automation/endedAuctionCron.js';
app.use(errorMiddleware);


export default app;
