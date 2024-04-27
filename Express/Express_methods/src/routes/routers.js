const  Router  = require('express');
const route = Router();

const lists = [
    {
        item: "milk",
        quantity: 3
    },
    {
        item: "meat",
        quantity: 5
    },
    {
        item: "vegetables",
        quantity: 10
    }
];

route.get('/groceries', (req, res) => {
    res.send(lists);
});

route.get('/groceries/:cart', (req, res) => {
    console.log(req.params);
    res.send(req.params);
});

route.post('/groceries', (req, res) => {
    console.log(req.body);
    lists.push(req.body);
    res.send(201);
});

module.exports = route;