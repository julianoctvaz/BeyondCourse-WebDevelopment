class Animal{
    //ja cria os attr automatiacmente
    constructor(nome){
        this.nome = nome
    }

    falar(){ //nao usa function no assinatura
        console.log(this.nome + " fez barulho")
    }

}