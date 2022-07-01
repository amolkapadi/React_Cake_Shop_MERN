const mongoose=require('mongoose');
const url="mongodb+srv://demo:demo@cluster0.3hemy.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url).then(()=>{
    console.log("Connection Done");
}).catch((err)=>{
    console.log(err)
});

