const {Flights}=require("../models/index");
const {Op}=require("sequelize");
class flightRepository{
    

    #createFilter(data){
        let filter={};
        if(data.destinationAirportId){
                    
            filter.destinationAirportId=data.destinationAirportId;


        }
        if(data.departureAirportId){
            filter.depatureAirportId=data.depatureAirportId;
        }
        // if(data.minPrice&&data.maxPrice){
        //     Object.assign(filter,{[Op.and]:[

        //         {price:{[Op.gte]:data.minPrice}},

        //         {price:{[Op.lte]:data.maxPrice}}

                
        //     ]
        // }

            
        //     )
        
        // }
        let priceArr=[];
        if(data.minPrice){
            // Object.assign(filter,{price:{[Op.gte]:data.minPrice} })
            priceArr.push({price:{[Op.gte]:data.minPrice}});
        }
        if(data.maxPrice){
           priceArr.push({price:{[Op.lte]:data.maxPrice}})
        }
    
        Object.assign(filter,{[Op.and]:priceArr});
        return filter;

    }
    async createFlight(data){
        try{
            const flight=await Flights.create(data);
            return flight;

        }
        catch(err){
            console.log(err);
            return err;
        }
    }
    async getFlight(flightId){
        try{
            const flight=await Flights.findByPk(flightId);
            return flight;

        }
        catch(err){
            return err;
        }
    }
    async getFlightAll(filter){
        try{
            const filterData=this.#createFilter(filter);
            const response=await Flights.findAll({
                where:filterData
            })
            return response;

        }
        catch(err){

            return err;
        }
    }



}
module.exports=flightRepository;

