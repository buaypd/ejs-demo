import express from 'express';
const app = express();
//
app.set('view engine', 'ejs')

const PORT = 3002;

app.get('/', (req, res) =>{
    let user = {
     name: "Buay",
     color: "purple",
     food: "pizza",
     grade: 1.5,
     age: 20
    }
  res.render('home', {user});
});

app.listen(PORT, () =>{
    console.log(`Server is runnning on http://localhost:${PORT}`);
});