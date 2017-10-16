var cats_array = [
  {name: "Boba", food: "Sock fluff", url: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
  {name: "Barnaby", food: "Tuna", url: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"},
  {name: "Max", food: "Whiskas Temptations", url: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"},
  {name: "Rudolph", food: "flowers", url: "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb"}
];

var createCatName = function(name){
  var nameLi = document.createElement("li");
  nameLi.textContent = "Name: " + name;
  return nameLi;
}

var createCatFood = function(favouriteFood){
  var foodLi = document.createElement("li");
  foodLi.textContent = "Favourite food: " + favouriteFood;
  return foodLi;
}

var createCat = function(){
  var catUl = document.createElement("ul");
  catUl.classList.add("cat");
  return catUl;
}

var createCatPicture = function(photoURL){
  var catPicture = document.createElement("img");
  catPicture.width = 500;
  catPicture.src = photoURL;
  return catPicture;
}

var addCat = function(name, favouriteFood, photoURL){
  var catUl = createCat();
  var nameLi = createCatName(name);
  var foodLi = createCatFood(favouriteFood);
  var catPicture = createCatPicture(photoURL);

  var cats = document.getElementById("cats");
  catUl.appendChild(nameLi);
  catUl.appendChild(foodLi);
  catUl.appendChild(catPicture);
  cats.appendChild(catUl);
}

var app = function(){
  for(cat of cats_array){
    addCat(cat.name, cat.food, cat.url);
  }
}

window.addEventListener('DOMContentLoaded', app);
