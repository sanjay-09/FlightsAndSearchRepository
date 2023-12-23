const {flightRepository,airplaneRespository}=require('../repository/index');
const {CompareTime}=require("../utils/helper");


class flightService{
    constructor(){
        this.AirplaneRespository=new airplaneRespository();
        this.flightRepository=new flightRepository();
    }
    async createFlight(data){

        try{
            
            if(!CompareTime(data.arrivalTime,data.departureTime)){
             
                throw {error:"Arrival time cannot be less than depature timee"}
            }
            
            const airplane=await this.AirplaneRespository.getAirplane(data.airplaneId);
            console.log(airplane.capacity)
            const flight=await this.flightRepository.createFlight(
                {
                    ...data,totalSeats:airplane.capacity
                }
            )
            return flight;

        }
        catch(err){
            return err;
        }
    }
    async getFlight(flightId){
        try{
            const flights=await this.flightRepository.getFlight(flightId);
            return flights;

        }
        catch(err){
            return err;
        }
    }
    async getAllFlight(filter){
        try{
            const response=await this.flightRepository.getFlightAll(filter);
            return response;

        }
        catch(err){
            return err;
        }
    }



}
module.exports=flightService;