const api = require('../api-triangulo');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const Triangulo = require('../triangulo');

chai.use(chaiHttp);

describe('Verificando se é escaleno', () => {
    var a = 7;
	var b = 5;
    var c = 10;
    
	it('Teste: Os três lados são diferentes', (done) => {
		chai.request(api)
			.get('/triangulo?lado1='+ a +'&lado2=' + b + '&lado3=' + c)
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.have.property('tipo').eql('Escaleno');
				done();
			});
	});
});

describe('Verificando se é equilátero', () => {
    var a = 5;
	var b = 5;
    var c = 5;
    
	it('Teste: Os três lados são iguais', (done) => {
		chai.request(api)
			.get('/triangulo?lado1='+ a +'&lado2=' + b + '&lado3=' + c)
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.have.property('tipo').eql('Equilatero');
				done();
			});
	});
});

describe('Verificando se é isosceles', () => {
    var a = 10;
	var b = 7;
    var c = 7;
    
	it('Teste: Dois lados iguais e um diferente', (done) => {
		chai.request(api)
			.get('/triangulo?lado1='+ a +'&lado2=' + b + '&lado3=' + c)
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.have.property('tipo').eql('Isosceles');
				done();
			});
	});
});


describe('Verificando se é válido', () => {
    var a = 100;
	var b = 7;
    var c = 7;
    
	it('Teste: Os três lados são diferentes', (done) => {
		chai.request(api)
			.get('/triangulo?lado1='+ a +'&lado2=' + b + '&lado3=' + c)
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.have.property('tipo').eql('Invalido');
				done();
			});
	});
});
