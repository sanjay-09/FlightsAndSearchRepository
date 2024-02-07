const {Seat,sequelize}=require("../models/index");
const CrudRepository=require("./crud-repository");
const {Op}=require("sequelize")
class seatRepository extends CrudRepository{
    constructor() {
        super(Seat)

        
    }
    async getBySeat(data){
        try{
            console.log("repo");
            const response=await Seat.findOne({
                where:{
                    flightId:data.flightId,
                    seatNumber:data.seatNumber,
                    
                  
                }
            })
            return response;

        }
        catch(err){
            console.log("repo",err);
            throw err;
        }
    }
    async updateSeat(data){
        try{
            console.log("repo");
            await sequelize.transaction(async(t)=>{
                const reservationExpiryMinutes=10;
                const reminderExpiryTime=new Date(Date.now() + reservationExpiryMinutes * 60 * 1000);
                const seat=await Seat.findOne({
                    where:{
                        flightId:data.flightId,
                        seatNumber:data.seatNumber,
                        isBooked:"false"

                    },
                    transaction:t
                })
                if(seat){
                    await seat.update({ isBooked: "true", reminderExpiryTime }, { transaction: t });


                }
                else{
                    throw new Error("seat is already booked");
                }

            })
            return true;


        }
        catch(err){
            throw err;
        }
    }

    async  updateStatus(data){
        try{
            console.log(data);
            const seat=await Seat.findOne({
                where:{
                    flightId:data.flightId,
                    seatNumber:data.seatNumber
                }
            })
            
            seat.status="true",
            await seat.save();

        }
        catch(err){

        }
    }

    async cleanUp(){
        try{
            await sequelize.transaction(async(t)=>{
                const currentTime=new Date();

                await Seat.update({isBooked:"false",reminderExpiryTime:null},{
                    where:{
                        isBooked:"true",
                        reminderExpiryTime:{ [Op.lt]: currentTime },
                        status:"false"

                    },
                    transaction: t,
                })
               




            })
            return true;

        }
        catch(err){
            console.log(err);
            throw err;
        }

    }


}
module.exports=seatRepository