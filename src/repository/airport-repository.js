const CrudRepository=require("../repository/crud-repository");
const {Airport}=require("../models/index")
class airportRespository extends CrudRepository{
    constructor(){
        console.log("in airport repo");
        super(Airport);
    }
}
module.exports=airportRespository;