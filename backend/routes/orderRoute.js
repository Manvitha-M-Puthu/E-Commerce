import express from "express"
import {placeOrder,placeOrderStripe,placeOrderRazor,allOrders,userOrders,updateStatus} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from "../middleware/auth.js";

const orderRoute = express.Router();

orderRoute.post("/list",adminAuth, allOrders);
orderRoute.post("/status",adminAuth, updateStatus);

orderRoute.post("/place", authUser, placeOrder );
orderRoute.post("/stripe", placeOrderStripe);
orderRoute.post("/razorpay", placeOrderRazor);

orderRoute.post("/userorders", authUser, userOrders);

export default orderRoute;
