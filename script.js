/************************ 1  *************************/

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

switch (person) {
  // case person:{
  //     console.log(person.name);
  // }
  // break;
  case person:
    {
      console.log(person.books.name);
    }
    break;
}

if (person) {
  console.log(person.name);
} else {
  console.log("404");
}

/************************ 2  *************************/

/* 

const arr = [1, 2, 3];

if(arr.includes(3)) {
    console.log(arr.indexOf(3));
} else {
    console.log(false);
}


*/

/************************ 3  *************************/

const num = 5;

const arr = [1, 2, 3, 4];

if (arr.includes(num)) {
  console.log("Number is already exist in array");
} else {
  arr.push(num);
  console.log(arr);
}

/************************ 4  *************************/

const humanBeing = {
  name: "ad1",
  surname: "filankesov",
  age: "35",
  email: "filankes@gmail.com",
};

function changeValue(value) {
  humanBeing.name = value;
  console.log(humanBeing.name);
}

changeValue("filankes");

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

console.log(addKey("other_books", ["the fourth way", "beelzebub's tales to his grandson"]));
