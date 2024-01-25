const express = require('express');

const app = express();

app.listen(5000, () => {
    console.log("Dum Dum Daa Daa Daa");
});

app.get('/', (req, res) => {
    res.status(200).json({
        message: "hey buddy"
    })
})