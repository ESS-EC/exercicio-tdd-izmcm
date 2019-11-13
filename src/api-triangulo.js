const express = require('express');
const app = express();
const Triangulo = require('./triangulo');

app.get('/triangulo', (req,res) => {
    var a = parseInt(req.query.lado1)
    var b = parseInt(req.query.lado2)
    var c = parseInt(req.query.lado3)

    const newTriangulo = new Triangulo(a, b, c);
    if(newTriangulo.valido() == true){
        res.json({
            tipo: newTriangulo.tipo(),
            status:'OK'
        }); 
    } else {
        res.json({
            tipo: "Invalido",
            status:'KO'
        }); 
    }
});

// app.listen(8080, (err)=> {
//     if(err) {
//         console.log('Failed localhost:8080');
//     } else{
//         console.log('Running...')
//     }
// })

module.exports = app;
