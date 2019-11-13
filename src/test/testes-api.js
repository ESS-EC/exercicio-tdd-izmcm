const api = require('../api');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

// FROM CELSIUS
describe('Testando conversão de C para F', () => {
	var tempFrom = 20.00;
	var tempTo = 68.00;
	var from = "C"
	var to = "F";

	it('Teste deve retornar a temperatura em ' + from + ' equivalente a temperatura passada em ' + to, (done) => {
		chai.request(api)
			.get('/converterTemperatura?valor='+ tempFrom +'&de=' + from + '&para=' + to)
			.end((err, res) => {

				res.should.have.status(200);
				res.body.should.have.property('resposta').eql(tempTo);
				done();
			});
	});
});

describe('Testando conversão de C para K', () => {
	var tempFrom = 20.00;
	var tempTo = 293.15;
	var from = "C"
	var to = "K";

	it('Teste deve retornar a temperatura em ' + from + ' equivalente a temperatura passada em ' + to, (done) => {
		chai.request(api)
			.get('/converterTemperatura?valor='+ tempFrom +'&de=' + from + '&para=' + to)
			.end((err, res) => {

				res.should.have.status(200);
				res.body.should.have.property('resposta').eql(tempTo);
				done();
			});
	});
});

describe('Testando conversão de C para C', () => {
	var tempFrom = 20.00;
	var tempTo = 20.00;
	var from = "C"
	var to = "C";

	it('Teste deve retornar a temperatura em ' + from + ' equivalente a temperatura passada em ' + to, (done) => {
		chai.request(api)
			.get('/converterTemperatura?valor='+ tempFrom +'&de=' + from + '&para=' + to)
			.end((err, res) => {

				res.should.have.status(200);
				res.body.should.have.property('resposta').eql(tempTo);
				done();
			});
	});
});

// FROM FAHRENHEIT
describe('Testando conversão de F para C', () => {
	var tempFrom = 32.00;
	var tempTo = 0.00;
	var from = "F"
	var to = "C";

	it('Teste deve retornar a temperatura em ' + from + ' equivalente a temperatura passada em ' + to, (done) => {
		chai.request(api)
			.get('/converterTemperatura?valor='+ tempFrom +'&de=' + from + '&para=' + to)
			.end((err, res) => {

				res.should.have.status(200);
				res.body.should.have.property('resposta').eql(tempTo);
				done();
			});
	});
});

describe('Testando conversão de F para K', () => {
	var tempFrom = 50.00;
	var tempTo = 283.15;
	var from = "F"
	var to = "K";

	it('Teste deve retornar a temperatura em ' + from + ' equivalente a temperatura passada em ' + to, (done) => {
		chai.request(api)
			.get('/converterTemperatura?valor='+ tempFrom +'&de=' + from + '&para=' + to)
			.end((err, res) => {

				res.should.have.status(200);
				res.body.should.have.property('resposta').eql(tempTo);
				done();
			});
	});
});


describe('Testando conversão de F para F', () => {
	var tempFrom = 283.00;
	var tempTo = 283.00;
	var from = "F"
	var to = "F";

	it('Teste deve retornar a temperatura em ' + from + ' equivalente a temperatura passada em ' + to, (done) => {
		chai.request(api)
			.get('/converterTemperatura?valor='+ tempFrom +'&de=' + from + '&para=' + to)
			.end((err, res) => {

				res.should.have.status(200);
				res.body.should.have.property('resposta').eql(tempTo);
				done();
			});
	});
});

// FROM KELVIN
describe('Testando conversão de K para C', () => {
	var tempFrom = 0.00;
	var tempTo = -273.15;
	var from = "K"
	var to = "C";

	it('Teste deve retornar a temperatura em ' + from + ' equivalente a temperatura passada em ' + to, (done) => {
		chai.request(api)
			.get('/converterTemperatura?valor='+ tempFrom +'&de=' + from + '&para=' + to)
			.end((err, res) => {

				res.should.have.status(200);
				res.body.should.have.property('resposta').eql(tempTo);
				done();
			});
	});
});

describe('Testando conversão de K para F', () => {
	var tempFrom = 10.00;
	var tempTo = -441.67;
	var from = "K"
	var to = "F";

	it('Teste deve retornar a temperatura em ' + from + ' equivalente a temperatura passada em ' + to, (done) => {
		chai.request(api)
			.get('/converterTemperatura?valor='+ tempFrom +'&de=' + from + '&para=' + to)
			.end((err, res) => {

				res.should.have.status(200);
				res.body.should.have.property('resposta').eql(tempTo);
				done();
			});
	});
});

describe('Testando conversão de K para K', () => {
	var tempFrom = 10.00;
	var tempTo = 10.00;
	var from = "K"
	var to = "K";

	it('Teste deve retornar a temperatura em ' + from + ' equivalente a temperatura passada em ' + to, (done) => {
		chai.request(api)
			.get('/converterTemperatura?valor='+ tempFrom +'&de=' + from + '&para=' + to)
			.end((err, res) => {

				res.should.have.status(200);
				res.body.should.have.property('resposta').eql(tempTo);
				done();
			});
	});
});
