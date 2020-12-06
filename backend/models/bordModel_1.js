import mongoose from 'mongoose';
const bordSchema=new mongoose.Schema({
    cardno:{type:String,required:true,unique:true,dropDups:true},
    pin:{type:String,required:true,unique:true},
    cvv:{type:String,required:true,unique:true},
    isAuth:{type:Boolean,required:true,default:false}
});
const bordModel=mongoose.model("Bord",bordSchema);
export default bordModel;