class CrudService{
    constructor(respository){
        this.respository=respository;
    }
    async create(data){
        try{
            const result=await this.respository.create(data);
            return result;

        }
        catch(err){
            throw err;

        }
    }
    async get(id){
        try{
            const result=await this.respository.get(id);
            return result;

        }
        catch(err){
            throw err;
        }
    }
    async getAll(data){
        try{

            const result=await this.respository.getAll(data);
            return result;


        }
        catch(err){
            throw err;
        }

    }
    async update(data,id){
        try{
            console.log(data,id);
            const result=await this.respository.update(data,id);
            return result;


        }
        catch(err){
            throw err;
        }


    }
    async destroy(id){
        try{
            const result=await this.respository.destroy(id);
            return result;


        }
        catch(err){
            throw err;
        }

    }
}
module.exports=CrudService