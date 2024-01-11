//var, let and const

// var myToy = "teddy bear";
// console.log(myToy);
// myToy = "race car";
// console.log(myToy);

// let myToy = "teddy bear";
// console.log(myToy);
// myToy = "race car";
// console.log(myToy);

function playWithToys() {
  //Hall
  if (true) {
    //Room 1
    var toy1 = "toy1";
    let toy2 = "toy2";
    const toy3 = "toy3";
  } else {
    //Room 2
    let toy4 = "toy4";
    console.log(toy4);
  }
  //Hall
  // console.log(toy1);
  // console.log(toy2);
  // console.log(toy3);
  // console.log(toy4);
  return ["Manikandan", "Anbalagan", "Guvi"];
}

let result = playWithToys();
console.log(result);
