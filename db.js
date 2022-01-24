const mongoose = require('mongoose');


mongoose.connect(url,(err)=>{
    if(err)
        console.log(err);
    console.log("Connected to the database");
});

