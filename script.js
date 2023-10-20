/************************ 1  *************************/

const generateString = (person) => {
  let res = '';
  switch (person.name) {
    case "Marcel":
      res += `${person.name} is from France`;
      break;
    case "Silvester":
      res += `${person.name} is from America"??"`;
      break;
  }

  res += ' and ';

  if (person.status === "dead") {
    res += 'dead';
  } else {
    res += 'alive';
  }

  return res;
};

const person = {
  name: "Marcel",
  surname: "Proust",
  status: "dead",
  profession: "writer",
  books: {
    name: [
      "swann's way",
      "sodom and gomorrah",
      "in the shadow of young girls in flower",
      "the guermante's way",
      "the fugitive",
      "time regained",
    ],
  },
};

const person1 = {
  name: 'Silvester',
  surname: 'Stalone',
  status: 'alive',
}

console.log('person: ', generateString(person));
console.log('person: ', generateString(person1));

/************************ 2  *************************/

const myArr = (arr, num) => {
  if (arr.includes(num)) {
    return arr.indexOf(num);
  } else {
    return false;
  }
};

console.log(myArr([1, 2, 3], 3));
console.log(myArr([1, 2, 3], 5));

/************************ 3  *************************/

const myArr2 = (arr, num) => {
  if (!arr.includes(num)) arr.push(num);
  return arr;
};

const array = [1, 2, 3, 4, 5];

console.log("add number to array", myArr2(array, 3));
console.log("add number to array", myArr2(array, 10));
console.log("add number to array", myArr2(array, 6));
console.log("add number to array", myArr2(array, 3));

/************************ 4  *************************/

function resultData(name, surname, age, email) {
  return {
    name: name,
    surname: surname,
    age: age,
    email: email,
  };
}

// const name = prompt("Enter your name:");
// const surname = prompt("Enter your surname:");
// const age = prompt("Enter your age:");
// const email = prompt("Enter your email:");

// console.log(resultData(name, surname, age, email));

/************************ 5  *************************/

function addKey(key, value) {
  const obj = {
    name: "Gurdjieff",
    profession: ["mystic", "philosopher", "teacher", "music composer"],
    status: "dead",
    must_read_book: "meeting with remarkable men",
  };

  obj[key] = value;

  return obj;
}

console.log(
  addKey("other_books", ["the fourth way", "beelzebub's tales to his grandson"])
);
