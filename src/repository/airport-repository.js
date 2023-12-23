const CrudRepository=require("../repository/crud-repository");
const {Airport}=require("../models/index")
class airportRespository extends CrudRepository{
    constructor(){
        super(Airport);
    }
}
module.exports=airportRespository;