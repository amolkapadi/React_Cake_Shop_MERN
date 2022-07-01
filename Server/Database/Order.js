const mongoose =require("mongoose");

const OrderSchema=new  mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      cakename:{
          type:String,
          required:true
      },
      contactNumber:{
          type:String,
          required: true
      },
      flavour:{
        type:String,
        required: true
      },
      delivery:{
          type:String,
          required: true
      },
      address:{
          type:String,
            required: true
      }
});
module.exports=mongoose.model("orders",OrderSchema);