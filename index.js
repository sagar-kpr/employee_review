const express = require('express');
const port = 1000;
const app = express();






app.listen(port, (err) => {
    if(err) { console.log('err in port'); return}

    console.log('express is running ')
} );