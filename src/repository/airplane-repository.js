const {Airplane}=require("../models/index");

class airplaneRepository{
    async getAirplane(id){
        try{
            const airplane=await Airplane.findByPk(id);
            return airplane;

        }
        catch(err){
            
            throw err;
        }
    }



}
module.exports=airplaneRepository;