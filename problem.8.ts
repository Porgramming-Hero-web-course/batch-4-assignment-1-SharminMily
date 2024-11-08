//Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.


function validateKeys<T extends object> (obj: T, keys: (keyof T)[]): boolean {
  for (const key of keys){
    if(!(key in obj)){
      return false;
    }
  }
  return true;
}

const personData1 = { name: "Mina", age: 21, email: "mina@gmail.com" };
// console.log(validateKeys(personData1, ["name", "age"]))
// console.log(validateKeys(personData1, ["name", "address"]))

