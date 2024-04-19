import mongoose from "mongoose";
const ConnectDB = async(Database_URL)=>{
    try{
        const DB_Options={
            dbName:"JobPortalMainDB"
        };
        await mongoose.connect(Database_URL,DB_Options);
        console.log("Connection connected...");
    }
    catch(err){
        console.log(err);
    }
};
export default ConnectDB;