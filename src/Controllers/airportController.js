const {airportService}=require("../Services/index");

const AirportService=new airportService();


//post==>/airport
const create=async(req,res)=>{
    try{
        const response=await AirportService.create(req.body);
        return res.status(200).json({
             data:response,
             status:true,
             message:"Airport has been created",
             err:{}
        })
        

    }
    catch(err){
        return res.status(500).json({
            data:{},
            status:false,
            message:"Airport cannot be created",
            err:err
        })


    }
}
const get=async(req,res)=>{
    try{
        const response=await AirportService.get(req.params.id);
        return res.status(200).json({
            data:response,
            status:true,
            message:"Successfully fetched all the airport",
            err:{}
        })

    }
    catch(err){
        return res.status(500).json({
            data:{},
            status:false,
            message:"Not able to fetch the airport",
            err:{err}
        })
    
    }
}
const destroy=async(req,res)=>{
    try{
        const response=await AirportService.destroy(req.params.id);
        return res.status(200).send({
            data:response,
            status:true,
            message:"Successfully deleted the airport",
            err:{}


        })

    }
    catch(err){
        return res.status(500).send({
            data:{},
            status:false,
            message:"Cannot delete a airport",
            err:{}
        })

        
    }
}
const update=async(req,res)=>{
    try{
        const response=await AirportService.update(req.body,req.params.id);
        return res.status(200).json({
            data:response,
            status:true,
            message:"Succesfully updated the city",
            err:{}


              
        })

    }
    catch(err){
        return res.status(500).json({
            data:{},
            status:false,
            message:"Cannot updated the city",
            err:{err}
        })

    }
}
module.exports={
    create,
    get,
    destroy,
    update
}