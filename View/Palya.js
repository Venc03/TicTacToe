import Mezo from "./Mezo.js";

export default class Palya{
    #list = {}
    #szulElem

    constructor(list, szulElem){
        this.#list = list;
        this.#szulElem = szulElem;
        this.#szulElem.empty();
        this.pkiir();
    }

    pkiir(){
        this.#list.forEach((elem, index) => {
            new Mezo(elem, index, this.#szulElem);
        });
    }
}