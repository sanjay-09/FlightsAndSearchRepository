const router=require("express").Router();
const cityController=require("../../Controllers/cityController");
const airportController=require("../../Controllers/airportController");
const flightController=require("../../Controllers/flightController");
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






module.exports=router;