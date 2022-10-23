class Imotor  {
motor;    
#nitro = 'VRIONNNNNNNNNN (Turbina)';
set motor(motor){
    this.motor = motor
}

get motor(){
    return this.motor
}
    constructor(){
    }
    acelerarGol(){
        return "Vrummm.... Gol";
    } 
    acelerarBmw(){
        return `BMW muito rápida VRUMMMMMMMMM!!!....${this.#nitro}` ;

    } 
    acelerarMercedes(){
        return "VRUMMMMM!!... Mercedes a milhão";
    }
}
