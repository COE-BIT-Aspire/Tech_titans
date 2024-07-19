const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    city: String,
    Pincode:Number
});

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 20, max: 60,
        validate: {
            validator: v => v % 2 == 0,     //user validation
            message: props => `${props.value} not even`
        }
    },
    email: {            //schema validation
        type: String,
        required: true,
        lowercase:true      //convert to lowercase
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
    },
    updateAt: Date,
    best: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:'user'
    },
    hobbies: {
        type: [String],
        min:2
    },
    address: addressSchema
});

userSchema.methods.sampleFn = function () {
    console.log(`Entered name is ${this.name} and the age is ${this.age}`);
} 

const uModel = mongoose.model('thing', userSchema);

module.exports = uModel;