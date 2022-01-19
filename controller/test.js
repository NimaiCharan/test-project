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
        "name":"Supriya",
        "brand":"Chhole"
    })

    data.save((err,data)=>{
        if(err)
            res.send(err);
        else
            res.send(data);
    });
    
}