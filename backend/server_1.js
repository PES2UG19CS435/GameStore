import express from 'express';
import data from './data';
import topfreedata from './topfreedata';
import config from './config';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';
import bordRoute from'./routes/bordRoute';
import bodyParser from 'body-parser'


dotenv.config();
const mongodbUrl=config.MONGODB_URL;
mongoose.connect(mongodbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).catch(error=>console.log(error.reason));


const app=express();
app.use(bodyParser.json());
app.use("/api/users",userRoute);
app.use("/api/bords",bordRoute);
app.get("/api/Categories/:id",(req ,res)=> {
    const GamePlayId = req.params.id;
    const GamePlay = data.Categories.find(x=>x._id === GamePlayId);
    if(GamePlay)
        res.send(GamePlay);
    else
        res.status(404).send({msg:"Product Not Found."})    
});
app.get("/api/Freegames/:id",(req ,res)=> {
    const FreegameId = req.params.id;
    const Freegame= topfreedata.Freegames.find(x=>x._id === FreegameId);
    if(Freegame)
        res.send(Freegame);
    else
        res.status(404).send({msg:"Product Not Found."})    
});
app.get("/api/Categories",(req ,res)=> {
    res.send(data.Categories);
});
app.get("/api/Freegames",(req,res)=>{
    res.send(topfreedata.Freegames);
});
app.listen(5000,() => {console.log("Server started at http://localhost:5000")});