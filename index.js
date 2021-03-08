const express = require('express');
const app = express();

require('dotenv').config();


const server = require('http').createServer(app);
const io = require('socket.io')(server);


const pug = require('pug');


app.use(express.static('publics'));


app.set('view engine', 'pug');
app.set('views', './views');




app.get('/', (req, res) => {
    res.render('index');
});

io.on('connection', (socket) => {
    console.log(`User id : ${socket.id} is connected now`);

    socket.on("disconnect", () => {
        console.log(`User id : ${socket.id} is disconnected`)
    })

    socket.on('Client-send-data', (data) => {
        console.log(`User ID say: ${data} `);
        io.sockets.emit('Server-send-data', data);
    });

});


server.listen(process.env.PORT, () => {
    console.log(`Server started on port on port:... ${process.env.PORT}`);
});