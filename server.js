const express = require('express');
const http = require('http');
const router = require('./routers');
const app = express();
const fs = require('fs');
const port = 5000;

app.use(express.json());
JSON.parse();


fs.writeFile(student.JSON)

fs.readFile('student.json', (err, data) => {
  if (err) throw err;
  console.log(data);
});


app.get('/studentdata',(res,req)=>{
    req.json
})


app.use(router);
// get
app.get('/students', (req, res) => {
  res.send('GET request to the homepage');
});

// post
app.post('/sudents', (req, res) => {
  res.send('POST request to the homepage');
 
});

// get req
app.get('/students', (req, res) => {
  res.send('student data');
  console.log("THIS IS STUDENT DATA")
  
});

//err
app.use((req, res) => {
  res.status(400).json({ error: 'Not Found' });
});

// server
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});