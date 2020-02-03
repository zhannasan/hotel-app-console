class Trip{
    constructor(id, name, imageUrl){
        this.id=id;
        this.name=name;
        this.imageUrl=imageUrl;
    }
   
    get price(){
        return this._price;
    }
    set price(newPrice){
        this._price=newPrice;
        }
    static getDefaultTrip(){
        let rio = new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
        return rio;
    }
    toString(){
        return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this._price}]`;
    }

}
      tripMap = new Map();
      tripMap.set('paris',new Trip('paris', 'Paris', 'img/paris.jpg',100));
      tripMap.set('rio-de-janeiro',new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg',800));
      //tripMap.set('nantes', new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
      
      for(const t of tripMap.keys()){
       console.log(tripMap.get(t))
        if(t==='paris'){
            console.log(t==='paris');
        }
    }