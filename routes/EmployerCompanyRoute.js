import express from "express"; 
const EmployerCompanyRoute = express. Router();
import EmployerCompanyController from "../controllers/EmployerCompanyController.js";
import verifyToken from "../middleware/VerifyToken.js";

EmployerCompanyRoute.post("/register",EmployerCompanyController.Registration);
EmployerCompanyRoute.post("/login",EmployerCompanyController.login);

// EmployerCompanyRoute.get("/EmployerData",verifyToken,EmployerCompanyController.getdata);
// EmployerCompanyRoute.get("/EmployerData/:employername",verifyToken,EmployerCompanyController.getdatabyID);

// EmployerCompanyRoute.put("/EmployerUpdate/:id",EmployerCompanyController.Update);
// EmployerCompanyRoute.delete("/EmployerDelete",EmployerCompanyController.Delete);
// EmployerCompanyRoute.delete("/EmployerDelete/:Employername",EmployerCompanyController.DeletebyID);

export default EmployerCompanyRoute;