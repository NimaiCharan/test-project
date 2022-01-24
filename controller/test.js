const mongoose = require('mongoose');

const {testSchema} = require("../schema/test")

exports.stutiController = (req, res) => {
    res.send('Bijaya is a bada thhaka, Ever and always');
};

exports.testController1 = (req, res) => {
    res.send('Bijaya is a good girl');
}

exports.getData = (req, res)=>{
    const testData = mongoose.model("testSchema",testSchema);
    testData.find({},(err,data)=>{
        if(err)
            res.send(err);
        else
            res.send(data);
    });
}

exports.postData = (req, res)=>{
    const testData = mongoose.model("testSchema",testSchema);
    var data = new testData({
        "name":req.body.name,
        "brand":req.body.brand,
        "smoke":req.body.smoke
    })

    data.save((err,data)=>{
        if(err)
            res.send(err);
        else
            res.send(data);
    });
    


}

exports.postman = (req, res)=>{
    //res.send("Postman is working");
    var username= req.body.username;
    var pass = req.body.password;

    if(username=="nimai" && pass=="pass"){
        res.send("LOGGED IN");
    }
    else{
        res.send("INVALID CREDENTIALS");
    }
   
}