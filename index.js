const express = require('express');
const PORT = 8000;
const app = express();
const path = require('path');
const routes = require('./routes/routes');



app.use(express.static(path.join(__dirname, 'public')))
app.use('/routes', routes);

app.listen(PORT, ()=>{
    console.log('server running on port', PORT)
})
