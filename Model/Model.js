export default class Model{
#list = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
#lepes;
#aktElem;

constructor(){
    this.#lepes = 0;
    this.setaktElem();
}

setaktElem(){
    if (this.#lepes % 2 === 0){
        this.#aktElem = "X";
    }else{
        this.#aktElem = "O";
    }  
}

lepteto(index){
    this.#list[index] = this.#aktElem
    this.#lepes++;
    this.setaktElem();
}

getList(){
    return this.#list;
}

}