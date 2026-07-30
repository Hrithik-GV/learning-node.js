
const registeredHome = [];
module.exports=class Home{
    constructor(houseName,location,price,rating,photo){
        this.houseName=houseName;
        this.location=location;
        this.price=price;
        this.rating=rating;
        this.photo=photo;
    }

save(){
    registeredHome.push(this);
}
static fetchAll(){
    return registeredHome; 
}

}
