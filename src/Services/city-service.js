const {cityRepository}=require("../repository/index");

class cityService{
    constructor(){
        this.cityRepository=new cityRepository();
    }
    async CreateCity(data){
        try{
            const city=this.cityRepository.createCity(data);
            return city;

        }
        catch(err){
            
            throw {err};

        }
    }
    async getCity(cityId){
        try{
            const city=this.cityRepository.getCity(cityId);
            return city;

        }
        catch(err){
            console.log("service err");
            throw {err};

        }
    }
    async deleteCity(cityId){
        try{
            const city=this.cityRepository.deleteCity(cityId);
            return city;

        }
        catch(err){
            throw {err};


        }
    }
    async updateCity(cityId,data){
        try{
            const city=this.cityRepository.updateCity(cityId,data);
            return city;

        }
        catch(err){
            throw {err};

        }
    }
    async getAll(filter){
        try{
            const city=await this.cityRepository.getAll({name:filter.name});
            return city;

        }
        catch(err){
                   throw {err};
        }
    }
    async createAll(data){
        try{
            console.log("service layer");
            const response=await this.cityRepository.addBulkCities(data);
            return response;

        }
        catch(err){
            throw err;
        }
    }
    async createAll2(data){
        try{
            const response=await this.cityRepository.addBulkCities2(data);
            return response;

        }
        catch(err){
            throw {err};
        }
    }
}

module.exports=cityService;