const express = require('express');
const app = express();

app.get('/converterTemperatura', (req,res) => {
	var val = parseInt(req.query.valor)

	if(req.query.de === "C") {
		if(req.query.para === "F") {
			
			var ans = (val*(9/5)) + 32;

			res.json({
				resposta: Number(ans.toFixed(2)),
				status:'ok'
			});
		} else if(req.query.para == "K") {
			
			var ans = val + 273.15;

			res.json({
				resposta: Number(ans.toFixed(2)),
				status:'OK'
			});
		} else if(req.query.para == "C") {
			
			var ans = val;

			res.json({
				resposta: Number(ans.toFixed(2)),
				status:'OK'
			});
		} else {
			res.json({
				resposta: -1,
				status:'KO'
			});
		}
	} else if(req.query.de === "F") {
		if(req.query.para === "C") {
			
			var ans = (val - 32)*(5/9);

			res.json({
				resposta: Number(ans.toFixed(2)),
				status:'ok'
			});
		} else if(req.query.para == "K") {
			
			var ans = (val - 32)*(5/9) + 273.15;

			res.json({
				resposta: Number(ans.toFixed(2)),
				status:'OK'
			});
		} else if(req.query.para == "F") {
			
			var ans = val;

			res.json({
				resposta: Number(ans.toFixed(2)),
				status:'OK'
			});
		} else {
			res.json({
				resposta: -1,
				status:'KO'
			});
		}
	} else if(req.query.de === "K") {
		if(req.query.para === "C") {
			
			var ans = val - 273.15;

			res.json({
				resposta: Number(ans.toFixed(2)),
				status:'ok'
			});
		} else if(req.query.para == "F") {
			
			var ans = (val - 273.15)*(9/5) + 32;

			res.json({
				resposta: Number(ans.toFixed(2)),
				status:'OK'
			});
		} else if(req.query.para == "K") {
			
			var ans = val;

			res.json({
				resposta: Number(ans.toFixed(2)),
				status:'OK'
			});
		} else {
			res.json({
				resposta: -1,
				status:'KO'
			});
		}
	}

	// res.end();
	res.connection.destroy();

});

// app.listen(8080, (err)=> {
//     if(err) {
//         console.log('Failed localhost:8080');
//     } else{
//         console.log('Running...')
//     }
// })

module.exports = app;
