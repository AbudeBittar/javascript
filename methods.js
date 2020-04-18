console.log("Connected to methods.js"); // connecting test

/* write the HTNL-File to understand what's gone*/

var dog = {
    name: "Charky",
    sex: "male",
    age: 3, 
    speak: function(){
        console.log("Woof!");
    },
    info: function(){
        console.log("Dog infos: \n" + 
                    "name: " + this.name +
                    "\nSex: " + this.sex +
                    "\nAge: " + this.age +
                    "\nSpeak: " + this.speak());
    } 
};

var cat = {
    name: "Sally",
    sex: "female",
    age: 2.4, 
    speak: function(){
        console.log("Meao!");
    },
    info: function(){
        console.log("Cat infos: \n" + 
                    "name: " + this.name +
                    "\nSex: " + this.sex +
                    "\nAge: " + this.age +
                    "\nSpeak: " + this.speak());
    } 
};



dog.info();
cat.info();
