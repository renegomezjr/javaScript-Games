let menu = {
  _courses: {
    _appetizers:[],
    _mains: [],
    _desserts: [],
    get appetizers(){
      return this._appetizers;
    },
    set appetizers(appetizers){
      this._appetizers = appetizers;
    },
    get mains(){
      return this._mains;
    },
    set mains(mains){
      this._mains = mains;
    },
    get desserts(){
      return this._desserts;
    },
    set desserts(desserts){
      this._desserts = desserts;
    }
  },
  get courses(){
    return this._courses;
  },
  addDishToCourse(courseName, dishName, dishPrice){
    let dish = {};
    dish.name = dishName;
    dish.price = dishPrice;
    if(courseName === 'appetizers'){
    	//console.log(dish);
      this._courses._appetizers.push(dish);
    }else if(courseName === 'mains'){
      //console.log(dish);
      this._courses._mains.push(dish);
    }else if(courseName === 'desserts'){
      //console.log(dish);
      this._courses._desserts.push(dish);
    }
  },
  getRandomDishFromCourse(courseName){
    let dishes;
    if(courseName === 'appetizers'){
      dishes = this._courses._appetizers[Math.floor(Math.random() * this._courses._appetizers.length)];
      //console.log(dishes);
    }else if(courseName === 'mains'){
      dishes = this._courses._mains[Math.floor(Math.random() * this._courses.mains.length)];
    }else if(courseName === 'desserts'){
      dishes = this._courses._desserts[Math.floor(Math.random() * this._courses._desserts.length)];
    }
    return dishes;
  },
  generateRandomMeal(){
    let appetizers = this.getRandomDishFromCourse('appetizers');
    //console.log(appetizers);
    let mains = this.getRandomDishFromCourse('mains');
    let desserts = this.getRandomDishFromCourse('desserts');

    return `You will have ${appetizers.name} as an appetizer, ${mains.name} as your main meal, and ${desserts.name} as your dessert.  The meal will cost $${appetizers.price + mains.price + desserts.price}.`
  }
};
menu.addDishToCourse('appetizers', 'shrimp', 7);
menu.addDishToCourse('appetizers', 'moz sticks', 8);
menu.addDishToCourse('appetizers', 'crab cakes', 9);
menu.addDishToCourse('mains', 'steak and rice', 12);
menu.addDishToCourse('mains', 'lobster', 19);
menu.addDishToCourse('mains', 'clam chowder', 10);
menu.addDishToCourse('desserts', 'ice cream', 5);
menu.addDishToCourse('desserts', 'cookies', 3);
menu.addDishToCourse('desserts', 'pudding', 4);
let meal = menu.generateRandomMeal();
console.log(meal);
