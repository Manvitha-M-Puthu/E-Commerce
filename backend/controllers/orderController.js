import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
//Placing order using COD method
const placeOrder = async(req,res)=>{
    try{
        const {userId, items, amount, address} = req.body;
        const orderData = {
            userId, items, amount,address, paymentMethod:"COD",payment:false, date:Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId,{cartData:{}});

        res.json({success:true, message:"Order Placed Successfully!"});
    }catch(error){
        console.log(error);
        res.json({success:true, message:error.message});
    }
}

//Placing order using Stripe method
const placeOrderStripe = async(req,res)=>{
    
}

//Placing order using RazorPay method
const placeOrderRazor = async(req,res)=>{
    
}

//Displaying orders on admin panel
const allOrders = async(req, res)=>{
    try{
        const orders = await orderModel.find({})

        res.json({success:true, orders});
    }catch(error){
        console.log(error);
        res.json({success:false, message:error.message});
    }
}

const userOrders = async(req,res)=>{
    try{
        const {userId} = req.body;

        const orders = await orderModel.find({userId});
        res.json({success:true, orders});


    }catch(error){
        console.log(error);
        res.json({success:false, message:error.message});
    }
}

//Update order status from admin panel
const updateStatus = async(req,res)=>{
    try{
        const {orderId, status} = req.body;

        await orderModel.findByIdAndUpdate(orderId,{status});
        res.json({success:true, message:"Status Updated"});

    }catch(error){
        console.log(error);
        res.json({success:false, message:error.message});
    }
}

export {placeOrder,placeOrderStripe,placeOrderRazor,allOrders,userOrders,updateStatus}