let username: string = "Marc";
let isLoggedIn: boolean = true;

username += " Dilley";

let myNumber: number = 22;

let regEx: RegExp = /foo/;

const names: string[] = username.split(" ");
const myArray: Array<number> = [1, 2, 3];

interface Person {
  first: string;
  last: string;
}

const myPerson: Person = {
  first: "Marc",
  last: "Dilley",
};

// mapping through an object
const ids: Record<number, string> = {
  10: "a",
  20: "b",
};

ids[30] = "c";

// picks up the error
if (ids[30] === 20) {

}
