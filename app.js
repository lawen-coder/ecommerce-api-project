import express from "express";
import userRouter from "./src/routes/user.routes";

const app = express();

// setup routes 

app.use(userRouter);

app.listen(5000, () => {
    console.log("listening on http://localhos:2000");
});