
    const verifyToken=(req,res,next)=>{
        const myToken=req.headers["authorization"].split(" ")[1];
        if(!myToken){
            res.send("Token not found");
        }
        else{
            next();
        }
    }

 
export default verifyToken;