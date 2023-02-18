const express = require("express");
const { newOrder, getSingleOrder, myOrders } = require("../controllers/orderController");
const router = express.Router();

const{isAuthenticatedUser, authorizeRole, authorizeRoles} =require("../middleware/auth");


router.route("/order/new").post(isAuthenticatedUser, newOrder)

// get a single user order details -----admin
router.route("/order/:id").get(isAuthenticatedUser, authorizeRoles("admin"), getSingleOrder);



module.exports = router;