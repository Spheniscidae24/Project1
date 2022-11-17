const express = require("express");

const app = express();

const userRoutes = require("./routes/users");


app.set("view engine","ejs");


app.use(express.static('public'));
app.use(express.static('node_modules'));

app.use(userRoutes);



const data = [
    {id: 1, name: "iphone 12", price: 30000, isActive: true, isHome: true, imageUrl: "1.jpeg" },
    {id: 2, name: "iphone 15", price: 40000, isActive: false, isHome: false, imageUrl: "2.jpeg" },
    {id: 3, name: "iphone 16", price: 50000, isActive: true, isHome: true, imageUrl: "3.jpeg" },
];



app.listen(5500, () => {
    console.log("listenin on port 5500");
});