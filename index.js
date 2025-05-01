// number one

// pseudocode

/*
totalSteps() :
  sum = 0
  for each step in stepsWalked:
    sum = sum + step
  return sum

averageSteps() :
  if stepsWalked is empty:
    return 0
  else:
    return totalSteps() / length of stepsWalked

*/

const User = (name, stepsWalked) => {
    return {
      name,
      stepsWalked,
      totalSteps: function() {
        return this.stepsWalked.reduce((sum, steps) => sum + steps, 0);
      },
      averageSteps: function() {
        if (this.stepsWalked.length === 0) {
          return 0;
        }
        return this.totalSteps() / this.stepsWalked.length;
      }
    };
  };

  const user1 = User("Kelvin", [1500, 2050, 3000, 4000, 5000]);
  console.log(user1.name);
  console.log(user1.totalSteps()); 
  console.log(user1.averageSteps()); 
  
  const user2 = User("Katya", [2500, 3000, 1500]);
  console.log(user2.name); 
  console.log(user2.totalSteps()); 
  console.log(user2.averageSteps()); 
//    number two
/* pseudocode
 // Define a Recipe constructor
Recipe(name, ingredients, cookTime):
    // Initialize the recipe object with name, ingredients, and cookTime

    // Method to display recipe details
    displayRecipe():
        // Print recipe name
        // Print "Ingredients:"
        // Loop through the ingredients array
        //   Print each ingredient with a bullet point
    end displayRecipe

    // check if the recipe is a quick meal
    isQuickMeal():
        // Return true if cookTime is 30 minutes or less
        // Otherwise, return false
    end isQuickMeal
end Recipe
*/
function Recipe(name, ingredients, cookTime) {
    this.name = name;
    this.ingredients = ingredients;
    this.cookTime = cookTime;
  
    this.displayRecipe = function() {
      console.log("Recipe: " + this.name);
      console.log("Ingredients:");
      for (let i = 0; i < this.ingredients.length; i++) {
        console.log("- " + this.ingredients[i]);
      }
    };
  
    this.isQuickMeal = function() {
      return this.cookTime <= 30;
    };
  }
  
  
  const pastaRecipe = new Recipe("Pasta", ["Pasta", "Tomato Sauce", "Minced meat"], 25);
  const  meatStewRecipe= new Recipe("Meat Stew", ["Beef", "Shreded Carrots", "Corriander", "Soy Sauce"], 45);
  
  pastaRecipe.displayRecipe(); 
  console.log("Is Quick Meal? " + pastaRecipe.isQuickMeal());
  
  meatStewRecipe.displayRecipe(); 
  console.log("Is Quick Meal? " + meatStewRecipe.isQuickMeal());

// Number three
/*pseudocode
Define a car constructor
 initialise the car object with model,mileage, serviceHistory[]
//   method to add services
     addservice():
     push date to serviceHistory
    //  method to  get the last service date
      Check if serviceHistory.length=== 0
      return null

     add all elements to the serviceHistory
      return 
*/

const Car = {
    model: "",
    mileage:0,
    serviceHistory:[],
    addService:function(date){
        this.serviceHistory.push(date);

    },
    lastServiceDate:function(){
        if(this.serviceHistory.length===0){
            return null;
        }
        return this.serviceHistory.reduce(function (a,b){
            return a>b?a:b;
        });
    }
};
Car.model = "toyota Camry";
Car.mileage = 50000;
Car.addService(new Date("2024-01-15"));
Car.addService(new Date("2024-05-20"));
Car.addService(new Date("2024-03-10"));

console.log("Model:", Car.model);
console.log("Mileage:",Car.mileage);
console.log("Service History:",Car.serviceHistory);
console.log("Last service Date:",Car.lastServiceDate());

// number four
/*
pseudocode
 define  a createPlaylist function
  define a constructor Playlist
   intialize songs[] an empty array
    create a method  addsong and push song title to the  songs[] array
    create  a method removeSong  and filter out the song that is to be removed from the array
    // method to list all songs
    listSongs():
    log  out all songs in form of a list
    return playlist

*/
const createPlaylist = () => {
  const Playlist = {
    songs: [],
    addSong: function(title) {
      this.songs.push(title);
    },
    removeSong: function(title) {
      this.songs = this.songs.filter(song => song !== title);
    },
    listSongs: function() {
      console.log("Playlist songs:");
      this.songs.forEach(song => console.log("- " + song));
    }
  };
  return Playlist;
};
const myPlaylist = createPlaylist();
myPlaylist.addSong("Hero");
myPlaylist.addSong("Alone");
myPlaylist.addSong("Who I am")
myPlaylist.addSong("It's Okay to be Okay")
myPlaylist.listSongs();
myPlaylist.removeSong("Hero");
myPlaylist.listSongs();

// number five
/*
idefine a course constructor
course(title, lessons, completedLessons)
Initialise the  course objects with title, lessons, and cooktime
create a method  marksincomplete that has a parameter of (lesson)
pushlesson to the completeLesson[]array
create method  getProgress
  return completed lessons
create a variable myCourse  that has the course the lessons
output the completed lessons
log the getProgress  

*/
function Course(title, lessons,){
    this.title=title;
    this.lessons=lessons;
    this.completedLessons=[];
    this.marksComplete = function(lesson){
        this.completedLessons.push(lesson);

    };
    this.getProgress = function(){
        return `${this.completedLessons.length} out of  ${this.lessons.length} lessons complete`

    };
}
const myCourse = new Course("Kotlin",["Operators", "Variable","Introduction","Data","Objects"]);

myCourse.marksComplete("Objects");
myCourse.marksComplete("Variable");
myCourse.marksComplete("Introduction");
console.log(myCourse.getProgress());
