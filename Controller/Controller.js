import Palya from "../View/Palya.js";
import Model from "../Model/Model.js";

export default class Controller{
    constructor(){
        this.taroloElem = $('.palya');
        this.model = new Model()
        new Palya(this.model.getList(), this.taroloElem);
        this.#esemenykez();
    }
    

    #esemenykez(){
        $(window).on("katt", (event)=> {
            console.log(event.detail)
            this.model.lepteto(event.detail);
            new Palya(this.model.getList(), this.taroloElem);
        });
    }
}