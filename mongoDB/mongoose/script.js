const mongoose = require('mongoose');
const user = require('./models/userModel');

mongoose.connect('mongodb://localhost:27017/log').then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => { 
    console.log('Error:', err); 
}) 

// const per1 = new user({
//     name: 'sujeeth',
//     age: 22,
//     email:'kavin@h.com'
// });

// per1.save().then(() => {
//     console.log('saved');
// });

// async function run() {
//     const value = await per1.save();
//     console.log(value);
// }

async function run() {
    try {
        // const value = await user.create({
        //     name: 'kavin',
        //     age: 50,
        //     email:'sujeeth@gmail.com',
        //     hobbies: ['Sports', 'movies'],
        //     address: {
        //         city: 'Velur',
        //         Pincode: 638182
        //     }
        // });
        // const val = await per1.save();

        // console.log(val);
        // console.log(value);
        // const num = await user.findById('66992c0ad58bc7efd575e45f');
        // const num = await user.findOne({ name: 'sujeeth' });
      
        // const num = await user.exists({ name: 'sujeeth' });

        const num = await user.findOne({ name: 'sujeeth' });
        num.sampleFn();

        console.log(num);
    } catch (e) {
        console.log(e.message);
    }
}

run();