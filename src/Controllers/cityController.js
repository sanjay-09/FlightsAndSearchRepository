const {cityService}=require("../Services/index.js");
const CityService=new cityService();

//create: POST=>/v1/city
const create=async(req,res)=>{
    try{
        const city=await CityService.CreateCity(req.body);
        return res.status(200).json({
            data:city,
            success:true,
            message:"New City is created",
            err:{}

        })

    }
    catch(err){
        return res.status(500).json({
            data:{},
            succes:false,
            message:"Cannot create the city",
            err:err
        })

    }
}

//get : GET:/v1/:cityId

const get=async(req,res)=>{
    try{
        const city= await CityService.getCity(req.params.id);
        return res.status(200).json({
            data:city,
            status:true,
            message:"Succesfully fetched the city",
            err:{}
        })

    }
    catch(err){
        return res.status(500).json({
            data:{},
            status:false,
            message:"Cannot fetched the city",
            err:err

        })

    }
}

// delete :Delete /v1/:cityId
const destroy=async(req,res)=>{
    try{
        const response=await CityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            status:true,
            message:"succesfully deleted the city",
            err:{}

        })

    }
    catch(err){
        return res.status(500).json({
            data:{},
            status:false,
            message:"cannot delete the city",
            err:err
        })

    }
}

//update :patch  /v1/:cityId  
const update=async(req,res)=>{
    try{
         const response=await CityService.updateCity(req.params.id,req.body);
         return res.status(200).json({
            data:response,
            status:true,
            message:"successfully updatedthe city",
            err:{}
         })


    }
    catch(err){
        return res.status(500).json({
            data:{},
            status:false,
            message:"cannot update the city",
            err:err
        })

    }
}


//GET: /v1/get?name=h

const getAll=async(req,res)=>{
    try{
        const response=await CityService.getAll(req.query);
        return res.status(200).json({
            data:response,
            status:true,
            message:"succesfully get the city",
            err:{}

        })

    }
    catch(err){
        return res.status(500).json({
            data:{},
            status:false,
            message:"Cannot get the city",
            err:err
        })


    }
}

const createAll=async(req,res)=>{
try{
    console.log("cityController");
    const response=await CityService.createAll(req.body.cities);
     return res.status(500).json({
        data:response,
        status:true,
        message:"All cities are created",
        err:{}

     })

}     
catch(err){
    return res.status(200).json({
        data:{},
        status:false,
        message:"Cannot create a whole city",
        err:{err}
    })

}
}
const createAll2=async(req,res)=>{
    try{
        const response=await CityService.createAll2(req.body);
        return res.status(200).json({
            data:response,
            status:true,
            message:"Successfully created all the cities",
            err:{}

        })

    }
    catch(err){
        return res.status(500).json({
            data:{},
            status:false,
            message:"Cannot create all the cities",
            err:{err}
        })

    }

}



module.exports={
    create,
    get,
    destroy,
    update,
    getAll,
    createAll,
    createAll2
}