const data = {
    locations: [],

    // getter 
    get location(){
        return this._location
    },
    // setter
    set location(value){
        this._location = value.trim();
        this.locations.push(this._location)
    }
}

// code that uses the date object
data.location = ' Oakland ';
data.location = '  SF';
console.log(data)

