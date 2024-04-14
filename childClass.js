const  Person1  =require("./start");
class Pet extends Person1
{

    // getter 
        get location()
        {
            return "ALEx";
        }

    constructor(firstName ,lastName)
    {
        //call parent class constractor
        super(firstName ,lastName)
    }


}



let pet = new Pet("sam","san")
pet.fullname1();
console.log(pet.location)
