const {airportRepository}=require('../repository/index.js');
const CrudService=require("../Services/Crud-service.js")
class airportService extends CrudService{
    constructor(){
        const AirportRespository=new airportRepository();
        super(AirportRespository);
    }
}
module.exports=airportService;