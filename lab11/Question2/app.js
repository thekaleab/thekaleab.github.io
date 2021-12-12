const http = require('http')
const fs = require('fs')
const path = require('path')
// const server = http.createServer((req,res)=>{
//     fs.readFile(path.join(__dirname,'Photo.jpeg'),
//     (err,data)=>{
//         if(err) throw err
//         else res.end(data)
//     }
//     )
// })

// server.listen(5500)

const http = require('http');
const fs = require('fs');
const server = http.createServer();
server.on('request', function (req, res) {
 res.writeHead(200, { 'Content-Type': 'image/jpeg' });
 let image = fs.readFileSync('./tiles.jpg');
 res.end(image, 'binary');
});
server.listen(8080);

const fs = require('fs');
const server = require('http').createServer();
server.on('request', (request, response) => {
 fs.readFile('./tiles.jpg', (err, data) => {
 if (err) throw err;
 response.end(data);
 });
});
server.listen(8000);

require('http').createServer((req, res) => {
    const img = require('fs').createReadStream('./tiles.jpg');
    img.pipe(res);
   }).listen(9090, () => console.log("listening to 9090"));

const fs = require('fs');
const server = require('http').createServer();
server.on('request', (req, res) => {
 fs.createReadStream("./tiles.jpg").pipe(res);
});
server.listen(9000);