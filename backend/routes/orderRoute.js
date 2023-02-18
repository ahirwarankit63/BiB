const express = require("express");
const { newOrder, getSingleOrder, myOrders, getAllOrders, updateOrder, deleteOrder } = require("../controllers/orderController");
const router = express.Router();

const{isAuthenticatedUser, authorizeRole, authorizeRoles} =require("../middleware/auth");


router.route("/order/new").post(isAuthenticatedUser, newOrder)

// get a single user order details -----admin
router.route("/order/:id").get(isAuthenticatedUser, authorizeRoles("admin"), getSingleOrder);

// myOrder  (logged in user's orders details)
router.route("/orders/me").get(isAuthenticatedUser, myOrders)

// get all orders ----admin
router.route("/admin/orders").get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders)

// update order ----admin
router.route("/admin/order/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder)


// delete order ----admin
router.route("/admin/order/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder)


module.exports = router;