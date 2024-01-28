const {flightService}=require("../Services/index");
const {successfullErrorCodes}=require("../utils/error-codes");
const {serverErrorCodes}=require("../utils/error-codes");
const FlightService=new flightService();


const create=async(req,res)=>{
    try{
        const response=await FlightService.createFlight(req.body);
        return res.status(successfullErrorCodes.CREATED).json({
            data:response,
            status:true,
            message:"Successfully created a flight",
            err:{}

        })

    }
    catch(err){
        return res.status(500).json({
            data:{},
            status:false,
            message:"Cannot create a flight",
            err:{err}
        })
    }
}
const get=async(req,res)=>{
    try{
        const response=await FlightService.getFlight(req.params.id);
        return res.status(successfullErrorCodes.OK).json({
            data:response,
            status:true,
            message:"Succesfully fetched the flight data",
            err:{}
        })

    }
    catch(err){
        return res.status(500).json({
            data:{},
            status:false,
            message:"Cannot fetched the flight data",
            err:{err}
        })
    }

}
const getall=async(req,res)=>{
    try{
        const response=await FlightService.getAllFlight(req.query);
        return res.status(200).json({
            data:response,
            status:true,
            message:"Successully fetched the required data",
            err:{}
        })

    }
    catch(err){
        return res.status(500).json({
            data:{},
            status:false,
            message:"Cannot fetched the flight data",
            err:{err}
        })
    }
}
const updateFlight=async(req,res)=>{
    try{
        console.log(req.body);
        console.log(req.params.id);
       const response=await FlightService.updateFlight(req.body,req.params.id);
       return res.status(200).json({
        data:response,
        success:true,
        message:"Updated the flight successfully",
        err:{}

       })
    }
    catch(err){
        return res.status(500).json({
            data:{},
            success:false,
            message:"Cannot update the flight",
            err:err
        })

    }
}







module.exports={
    create,
    get,
    getall,
    updateFlight

}