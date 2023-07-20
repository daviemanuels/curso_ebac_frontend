function Carro(marca, modelo, valor) {
    this.marca = marca;
    this.modelo = modelo;
    let _valor = valor;

    this.getValor = function() {
        return _valor;
    }

    this.setValor = function(custo) {
        if(typeof custo === "number") {
            _valor = custo;
        }
    }

    this.desconto = function() {
        const novoValor = this.getValor() * 0.9;
        this.setValor(novoValor);
    }
}

function Ford(marca) {
    Carro.call(this, marca, "Ford Ka", 35000);

    this.desconto = function() {
        const novoValor = this.getValor() * 0.9;
        this.setValor(novoValor);
    }
}

function Fiat(marca) {
    Carro.call(this, marca, "Fiat Uno", 27000);

    this.desconto = function() {
        const novoValor = this.getValor() * 0.86;
        this.setValor(novoValor);
    }
}

const carro1 = new Carro("Hyundai", "Creta", 55000);
const ford = new Ford("Ford");
const fiat = new Fiat("Fiat");

carro1.desconto();
console.log(carro1.getValor());

ford.desconto();
console.log(ford.getValor());

fiat.desconto();
console.log(fiat.getValor());