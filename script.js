const favoriteMovie = ["IronMan", "Avengers", "Spiderman"];
const hobbie = new Array ("sports", "movies", "gym");
const luckyNumbers = new Array("7", "8", "9");
const fortune = ["yes", "no", "maybe", "ask again"];
console.log(fortune[2]);
fortune[0] = "absoloutly";
console.log(fortune[0]);  
fortune[4] = "awesome";
console.log(fortune[4]);
const superLong = ["1","2","3","4","5","6","7","8","9","10"];
console.log(superLong.length);
superLong[superLong.length-1] = 100000;
console.log(fortune[fortune.length-1]);
fortune.push("sometimes");
console.log(fortune[fortune.length-1]);
fortune.pop();
console.log(fortune[fortune.length-1]);
function printFirstAndThird(arr){
    console.log("1st element:" + arr[0]);
    console.log("3rd element:" + arr[2]);
}

printFirstAndThird(favoriteMovie);
printFirstAndThird(superLong);