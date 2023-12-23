const repository = require(".");

class CrudRepository{
    constructor(model){
        this.model=model;
    }
    async create(data){
        try{
            const result=await this.model.create(data);
            return result;

        }
        catch(err){
            throw err;
        }
    }
    async get(modelId){
        try{
            const result=await this.model.findByPk(modelId);
            return result;

        }
        catch(err){
            throw err;
        }

    }
    async destroy(modelId){
        try{
            const result=await this.model.destroy({
                where:{
                    id:modelId

                }
            })
            return result;

        }
        catch(err){
            throw err;
        }
    }
    async getAll(data){
        try{

            const result=await this.model.findAll(data);
            return result;
        }
        catch(err){
            throw err;
        }

    
    }
    async update(data,modelId){
        try{
            await this.model.update(data,{
                where:{
                    id:modelId
                    
                }
            })
           return true;
        }
        catch(err){
            throw err;
        }

    }
}
module.exports=CrudRepository;


// the Airport repository will look like 
//const {Airport}=require("../")
// class AirportRepository extends CrudRepository{
//     constructor(){
//         super(Airport)
//     }
// }
// module.exports=AirportRepository();
