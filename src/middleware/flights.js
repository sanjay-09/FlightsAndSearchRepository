const {clientErrorCodes}=require("../utils/error-codes");

const validateCreateFlight=(req,res)=>{
    if(
        !req.body.flightNumber || !req.body.airplaneId || req.body.depatureAirportId || req.body.destinationAirportId || ! req.body.arrivalTime || ! req.body.departureTime || req.body.price)
    {
        return res.status(clientErrorCodes.BAD_REQ).json({
            data:{},
            status:false,
            message:"Invalid request for create flight in request body",
            err:"Missing madatory properties for creating a flight"
        })

    }
    next();

}
module.exports=validateCreateFlight;