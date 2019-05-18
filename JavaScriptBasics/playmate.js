//var name = 'denerys';
var name = 'jon';
if (name == 'denerys'){
    console.log("motherof dragons");
}
else {
    console.log("king in the north");
}
var madison = {
    firstName : "Madison",
    lastName : "Kanna",
    age : 25,
    eyeColor : "blue"
}
//console.log(madison)
var person ={}

person['firstName'] = 'misbah'
person['lastName'] = 'aamer'
//console.log(person)
//console.log(person.firstName)
var cars = [
    "honda",
    "toyota",
    "hyundai",
    "nissan"
]
//console.log(cars)
//console.log(cars[1])
cars["honda"]={
    'model' : 'accord',
    'year': 2004
}
//console.log(cars)
for (var i = 0; i < cars.length; i++){
   // console.log(cars[i])
}
cars.forEach(item => {
    //console.log(cars[item])
})
function playMyShow(showName) {
    console.log(showName)
}
playMyShow("game of thrones")
function add(a,b){
    return a+b;
}
console.log(add(1,2))