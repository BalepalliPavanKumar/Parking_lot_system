var exp=require('express');
var app=exp();
var body=require('body-parser');
var st=require('./store');
var encoded=body.urlencoded({extended:false});
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/dummy.html');
})
app.post('/vdetails',encoded,async(req,res)=>{
    var s=await st(req.body);
    s.save()
    .then(()=>{
        res.redirect("sadd");
    })

})
app.get('/sadd',(req,res)=>{
    res.sendFile(__dirname+'/sadd.html');
})
app.post('/search',encoded,async(req,res)=>{
    var d = req.body.search;
    var vehicles = await st.find({ vehiclenumber: d });

    
    let formattedData = '';

   
    vehicles.forEach(vehicle => {
        formattedData += `Name: ${vehicle.name}<br><br>`;
        formattedData += `Vehicle Type: ${vehicle.vehicletype}<br><br>`;
        formattedData += `Vehicle Number: ${vehicle.vehiclenumber}<br><br>`;
        formattedData += `Entry Time: ${vehicle.entrytime}<br><br>`;
        formattedData += `Exit Time: ${vehicle.exittime}<br><br>`;
        formattedData += `Entry Date: ${vehicle.entrydate}<br><br>`;
        formattedData += `Exit Date: ${vehicle.exitdate}<br><br>`; 
    });
    
    res.send(`${formattedData} <a href="/">click here to go back</a>`);
    
})
app.listen(3001);