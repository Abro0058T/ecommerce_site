const express=require("express");
const router=express.Router()
const {isAuthenticatedUser}=require("../middleware/auth");
const { processPayment, sendStripeApiKey } = require("../controllers/paymentControler");


router.route("/payment/process").post(isAuthenticatedUser,processPayment)

router.route("/stripeapikey").get(isAuthenticatedUser,sendStripeApiKey)

module.exports=router;