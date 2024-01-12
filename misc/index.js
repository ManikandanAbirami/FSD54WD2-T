// function add(a, b) {
//   return a + b;
// }

//Syntax: Arrow functions use the '=>' symbol
//They allow for shorter function syntax
// Advantage over 'this' keyword

const add = (a, b) => a + b;

console.log("Add function return value: ", add(10, 20));

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const resArr = [...arr1, ...arr2];

console.log(resArr);

const shareCookies = () => {
  const myCookies = ["Choco Chip", "Oatmeal"];
  const yourCookies = ["Peanut Butter", "Sugar"];

  const combinedCookies = [...myCookies, ...yourCookies];
  console.log(combinedCookies);
};

shareCookies();

function grabToys() {
  const allToys = ["Teddy Bear", "Race Car", "Doll", "Puzzle"];
  const [favToy, secToy, ...restOfTheToys] = allToys;

  console.log(favToy);
  console.log(secToy);
  console.log(restOfTheToys);
}

grabToys();

function addition(...rest) {
  console.log(rest);
  const res = rest.map((item) => {
    return item + item;
  });

  console.log(res);
}

addition(1, 2, 3, 5, 6, 7, 8, 9, 10);
