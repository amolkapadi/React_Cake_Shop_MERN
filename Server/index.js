const express = require("express");
const cors = require("cors");
require("./Database/config");
const User = require('./Database/User')
const Order =require("./Database/Order");
const app = express();


app.use(express.json());
app.use(cors());

//order post route
app.post("/myorder",async (req,resp)=>{
    let order= new Order(req.body);
    let result =await order.save();
    // result =result.toObject();
    resp.send(result);
});
//order get route
// app.get('/orders',async(req,resp)=>{
//     let orders = await Order.find();
//     if(orders.lenth>0){
//         resp.send(orders)
//     }else{
//         resp.send({result:"no order found"})
//     }
// });

//registration route
app.post("/register", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    result =result.toObject();
    delete result.password
    resp.send(result);
});
//login route
app.post("/login", async (req, resp) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            resp.send(user);
        } else {
            resp.send({ result: "user not found" });
        }
    } else {
        resp.send({ result: "user not found" });
    }
})
//file download
app.get("/",(req,res)=>{
    res.download('./Demo.jpg');
});
app.listen(4000);