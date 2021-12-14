import  Jwt  from "jsonwebtoken"

function isAuth(req, res, next) {
     const token = req.headers.authorization;
     try {
         const user = jwt.verify(token, process.env.JWT_KEY)
         req.user = user
     } catch (error) {
         return res.status(401).json({error: "not authorized"})
         
     }
     next();
}