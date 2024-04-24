var mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/pavan")
.then(()=>{
    console.log('connection successfull');
})
.catch(()=>{
    console.log("falied to connect");
})
var sch=mongoose.Schema({
name:{
    required:true,
    type:String,
    trim:true
},
vehicletype:{
    required:true,
    type:String,
    trim:true
},
vehiclenumber:{
    required:true,
    type:String,
    trim:true
},
entrytime:{
    required:true,
    type:String,
    trim:true
},
exittime:{
    required:true,
    type:String,
    trim:true
},
entrydate:{
    required:true,
    type:String,
    trim:true
},
exitdate:{
    required:true,
    type:String,
    trim:true
}


})
var details=mongoose.model("parkingdetails",sch);
module.exports=details;