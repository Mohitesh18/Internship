// const maths = require("./modules/maths");

// console.log(maths.sum(2, 3));
// console.log(maths.subtract(5, 2));
// console.log(maths.multiply(4, 6));

const express = require("express");
const app = express();
const news = require("./dataset/news");
const { searchByCategory: seCat , searchterm} = require("./modules/util");
// function a(req, res) {
//   res.send("Hello, World!");
// }

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/about", (req, res) => {
  res.send("This is the about page.");
});

// "/news" --> send all
// l news
app.get("/news", (req, res) => {
  let filternews=news;
  if (req.query.category) {
    console.log("Category: " + req.query.category);
    filternews = seCat(req.query.category, filternews);
  }

  if(req.query.limit){
    console.log("Limit:"+req.query.limit);
    filternews=filternews.slice(0,req.query.limit);
    console.log(filternews);
  }

  if(req.query.searchterm){
    console.log("Search Term:"+ req.query.searchterm);
    filternews= searchterm(req.query.searchterm,filternews);
  }

  return res.send(filternews)
  

  res.send(news);
});

// "/news/1" --> send news with id 1
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  for (let i = 0; i < news.length; i++) {
    if (news[i].id == id) {
      return res.send(news[i]);
    }
  }
  return res.send("News not found");
});

// "/news?category=Technology" --> send news with category Technology
// "/news?limit=2" --> send 2 news
// app.get("/news",(req,res)=>{

// })
// "/news?category=Technology&limit=2" --> send 2 news with category Technology

app.listen(9020, () => {
  console.log("Server is running on port http://localhost:9020");
  // connect database
  console.log("Database connected successfully");
  // notify user
  console.log("User notified about database connection");
});

const a = {
  name: "anisirj",
  age: 22,
  city: "Delhi",
};

// const username = a.name
// const age = a.age
// const city = a.city

// const { name: username, age: myage, city } = a;

// console.log(username, myage, city);
