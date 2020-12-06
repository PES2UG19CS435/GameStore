import express from 'express';
import Bord from '../models/bordModel';
import { getTokenc } from '../util';


const router =express.Router();
router.post('/payment',async(req,res)=>{
    const paymentBord=await Bord.findOne({
        cardno:req.body.cardno,
        pin:req.body.pin
    });
    if(paymentBord){
        res.send({
            _id:paymentBord.id,
            cardno:paymentBord.cardno,
            isAdmin:paymentBord.isAuth,
            tokenc:getTokenc(paymentBord)        
        })
    }
    else{
        res.status(401).send({msg:"Invalid Card number or pin."});
    }
})
router.post('/details',async(req,res)=>{
    const bord = new Bord({
        cardno:req.body.cardno,
        pin:req.body.pin,
        cvv:req.body.cvv
    });
    const newBord=await bord.save();
    if (newBord) {
        res.send({
          _id: newBord.id,
          cardno: newBord.cardno,
          isAdin: newBord.isAdmin,
          tokenc: getTokenc(newBord)
        });
      } else {
        res.status(401).send({ message: 'Invalid User Data.' });
      }
    });
    router.get("/createauth",async(req,res)=>{
        try{
        const bord=new Bord({
            cardno:'6547281637',
            pin:'1234',
            cvv:'123',
            isAuth:true
        });
        const newBord= await bord.save();
        res.send(newBord);
    } catch(error){
        res.send({msg:error.message});
    }
    });
    export default router;
