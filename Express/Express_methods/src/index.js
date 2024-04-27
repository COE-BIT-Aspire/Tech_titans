const express = require('express');
const gRoute = require('./routes/routers.js');
const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded()); 


//middleware
// app.use((req, res, next) => {
//     console.log(req.method);
//     console.log(req.url);
//     next();
// });

//error handling
// app.use((err, req, res, next) => {
//     console.error(err);
//     res.status(500).send('Internal Server Error');
// });

app.use(gRoute);


app.listen(port,()=>console.log("Starting.... at "+port));




// app.get('/groceries', (req, res) => {
//     res.send(lists);
// });

// app.get('/groceries/:cart', (req, res) => {
//     console.log(req.params.cart);
//     res.send(200);
// });

// app.post('/groceries', (req, res) => {
//     console.log(req.body);
//     lists.push(req.body);
//     res.send(201);
// });