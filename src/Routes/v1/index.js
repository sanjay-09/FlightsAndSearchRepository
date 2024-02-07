const router=require("express").Router();
const cityController=require("../../Controllers/cityController");
const airportController=require("../../Controllers/airportController");

const flightController=require("../../Controllers/flightController");
const seatController=require("../../Controllers/seatController")
const middleware=require("../../middleware/index");


router.post("/city",cityController.create);


router.get("/city/:id",cityController.get);

router.delete("/city/:id",cityController.destroy);

router.get("/city",cityController.getAll);


router.patch("/city/:id",cityController.update);

router.post("/city/all",cityController.createAll);

router.post("/city/all2",cityController.createAll2);




//airport
router.post("/airport",airportController.create);

router.get("/airport/:id",airportController.get);

router.delete("/airport/:id",airportController.destroy);

router.patch("/airport/:id",airportController.update)


router.post("/flight",middleware.validateCreateFlight,flightController.create);
router.get("/flight/:id",flightController.get);
router.get("/flight",flightController.getall);
router.patch("/flightUpdate/:id",flightController.updateFlight)


router.get("/seat",seatController.getSeat);
router.patch("/seat",seatController.updateSeat);
router.patch("/status",seatController.updateStatus);

router.post("/seat",seatController.cleanUp);






module.exports=router;