function Triangulo(a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
}


// Para construir um triângulo é necessário que a 
// medida de qualquer um dos lados seja menor que a 
// soma das medidas dos outros dois e maior que o valor 
// absoluto da diferença entre essas medidas.
Triangulo.prototype.valido = function () {
	if(this.a <= 0 || this.b <= 0 || this.c <= 0) {
		return false;
	} 

	if( ((this.a + this.b > this.c) && (Math.abs(this.a - this.b) < this.c)) ||
		((this.b + this.c > this.a) && (Math.abs(this.b - this.c) < this.a)) || 
		((this.c + this.a > this.b) && (Math.abs(this.c - this.a) < this.b)) ) {
		return true;
	}

	return false;
}

Triangulo.prototype.tipo = function () {
	if(this.a == this.b && this.b == this.c) {
		return "Equilatero";
	} else if(this.a != this.b && this.b != this.c && this.a != this.c) {
		return "Escaleno";
	} else {
		return "Isosceles";
	}
}
  
Triangulo.prototype.toString = function () {
	return `Lado A ${this.a}, Lado B ${this.b}, Lado C ${this.c}`
};


module.exports = Triangulo;