const {City}=require("../models/index.js");
const {Op}=require("sequelize");

class cityRepository{
    async createCity({name}){
        try{
            const city=await City.create({name});
            return city;

        }
        catch(err){
            console.log("repp err");
            throw {err}

        }
    }
    async deleteCity(cityId){
        try{
            await City.destroy({
                where:{
                    id:cityId
                }
            })
            return true;
        }
        catch(err){
            throw {err};
        }
    }
    async getCity(cityId){
       try{
        console.log(cityId);
        const city=await City.findByPk(cityId,{
            attributes:['id','name','createdAt','updatedAt']
        })
        console.log(city);
        return city;
       }
       catch(err){
        console.log("repo err");
        throw {err}
       }
    }
    async updateCity(cityId,data){
        try{
            await City.update(data,{
                where:{
                    id:cityId
                }
            })
            return true;


        }
        catch(err){
            throw {err}

        }
    }
    async getAll(filter){
        if(filter.name){
            try{
                const response=await City.findAll(
                    {
                        where:{
                            name:{
                                [Op.startsWith]:filter.name
                            }
                        },
                        attributes: ['id', 'name', 'createdAt', 'updatedAt'],

                    }
                )
                return response;

            }
            catch(err){
                throw {err};
            }


        }
        else{
            try{
                const response=await City.findAll({
                    attributes:["id","name","createdAt","updatedAt"]
                })
                return response;
            }
            catch(err){
                throw {err}
            }
        }

    }
    async addBulkCities(data){
        try{
            
          for(let city of data){
          
            
                await City.create({name:city});
            
           
          }
          return true;

        }
        catch(err){
            throw err;
        }

    }
    async addBulkCities2(data){
        try{
            await City.bulkCreate(data);
            return true;

        }
        catch(err){
            throw {err};
        }
    }
    
}
module.exports=cityRepository;