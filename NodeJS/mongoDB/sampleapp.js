var mongoose = require('mongoose');

var schema = mongoose.Schema;

var skillSchema = new schema({
    skillName: String,
    exp: Number,
    proficiency: String
});

var jobSchema = new schema({
    Name: String,
    emailID: String,
    age: Number,
    certificate: Boolean,
    skills: [skillSchema]
});//defining the format for the collection

var jobs = mongoose.model('jobSeeker', jobSchema);//here jobSeeker is the collection and .model method will create the jobSeeker xollection based on jobSchema

mongoose.connect("mongodb://127.0.0.1:27017/task");

var fresher1 = new jobs({
    Name: "Sujeeth",
    emailID: "sujeeth@gmail.com",
    age: 22,
    certificate: true,
    skills: [
                { skillName: "Java", exp: 1, proficiency: "beginner" },
                { skillName: "Javascript", exp: 2, proficiency: "intermediate" }
            ]
});

fresher1.save();


     