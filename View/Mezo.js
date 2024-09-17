export default class Mezo{

    #szulElem
    #jel
    #index

    constructor(jel, index, szulElem){
        this.#index = index;
        this.#jel = jel;
        this.#szulElem = szulElem
        this.mkiir(this.#jel, this.#index, this.#szulElem);

        this.gombElem = $(`.mezo${this.#index}`);
        if(this.#jel === " "){
            this.gombLepes();
        }
    }

    mkiir(jel, index, szulElem){
        let txt = `<div id = "mezo" class = "mezo${index}">${jel}</div>`
        szulElem.append(txt);
    }

    gombLepes(){
        this.gombElem.on("click", () => {
            const e = new CustomEvent("katt", { detail:this.#index});
            window.dispatchEvent(e);
        })
    }
}