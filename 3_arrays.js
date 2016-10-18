// @flow

type Smurf = { name: string, age: number}

const papa: Smurf = {
  name: "Papa Smurf",
  age: 300,
  hatColor: "red"
}

const smurfette: Smurf = {
  name: "Smurfette",
  age: 200
}

// T[]
// Array<T>

function sumOfAges (smurfs: Smurf[]): number {
  return smurfs.reduce((sum, smurf) => sum + smurf.age, 0)
}

console.log(sumOfAges([papa, smurfette]))
