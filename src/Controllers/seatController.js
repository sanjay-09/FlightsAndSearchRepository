const {seatService}=require("../Services/index");
const seatServiceObj=new seatService();

const getSeat=async(req,res)=>{
    try{
        const flightId = req.query.flightId;
        const seatNumber = req.query.seatNumber;
        const data={
            flightId,
            seatNumber
        }
        console.log(data);
        const response=await seatServiceObj.getSeat(data);
        return res.status(200).json({
            data:response,
            status:true,
            message:"fetched the data",
            err:{}
        })


    }
    catch(err){
        
        return res.status(500).json({
            data:{},
            status:false,
            message:"not able to get",
            err:err.message
            
        })
    }
}
const updateSeat=async(req,res)=>{
    try{
        console.log(req.body);
        console.log(typeof(req.body.flightId));
        const response=await seatServiceObj.updateSeat(req.body);
        return res.status(200).json({
            data:response,
            status:true,
            message:"Succesfully updated",
            err:{}
        })

    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            data:{},
           status:false,
           message:"cannot get the data",
           err:err
        })
    }
}
const cleanUp=async(req,res)=>{
    try{

        const response=await seatServiceObj.cleanUp(req.body);
        return res.status(200).json({
            data:response,
            status:true,
            message:"Successfully cleaned up",
            err:{}


        })
    }
    catch(err){
        return res.status(500).json({
            data:{},
           status:true,
           message:"cannot get the data",
           err:err
        })
        
    }
}
const updateStatus=async(req,res)=>{
    try{
        console.log(req.body);
        const response=await seatServiceObj.updateStatus(req.body);
        return res.status(200).json({
            data:response,
            status:true,
            message:"updated",
            err:{}



        })

    }
    catch(err){
        return res.status(500).json({
            data:{},
            status:false,
            message:"not updated",
            err:err
        })
    }
}
module.exports={
    getSeat,
    updateSeat,
    cleanUp,
    updateStatus
}
