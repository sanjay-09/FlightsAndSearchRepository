const {seatRepository}=require("../repository/index");
const CrudService=require("./Crud-service");
const AppError=require("../utils/Error/appError")
const seatRespositoryObject=new seatRepository();

class seatService extends CrudService{
    constructor(){
       
        super(seatRespositoryObject);
    }
    async getSeat(data){
        try{
            const response=await seatRespositoryObject.getBySeat(data);
            
           if(!response){
                throw new Error("this seat is not avaiable");
           }
           const seatAvaiable=response.isBooked;
           console.log("first",seatAvaiable);
           await seatRespositoryObject.updateSeat(data);
           console.log("second",seatAvaiable);
            if(seatAvaiable==="false"){
                return true;
            }
            else{
                return false;
            }

        }
        catch(err){
            console.log(err);
            
           throw err;
        }
    }
    async updateSeat(data){
        try{
            const response=await seatRespositoryObject.updateSeat(data);

            return response;

        }
        catch(err){
            throw err;
        }
    }
    async cleanUp(data){
        try{
            const response=await seatRespositoryObject.cleanUp(data);
            return response;

        }
        catch(err){
            throw err;

        }
    }
    async updateStatus(data){
        try{
            await seatRespositoryObject.updateStatus(data);
            return true;

        }
        catch(err){
            throw err;
        }
    }

}
module.exports=seatService