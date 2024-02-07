const express=require("express");
const bodyParser=require("body-parser");
const dotenv=require("dotenv")
dotenv.config();
const PORT=process.env.PORT;
const {City,Airport}=require("./models/index");
const db=require("../src/models/index.js")
const ApiRouter=require("./Routes/index.js");
const {seatRepository}=require("./repository/index.js");
const seatRespositoryObject=new seatRepository();



const setUpAndStartServer=async()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.get("/",async(req,res)=>{
        
        res.send("ok");
    });


    app.use("/flightService/api",ApiRouter);

    app.listen(PORT,async(req,res)=>{
        console.log(`server is listening on PORT ${PORT}`);
        setInterval(seatRespositoryObject.cleanUp,60000);
        
    })


}
setUpAndStartServer();