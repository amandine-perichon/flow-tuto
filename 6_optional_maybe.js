// @flow

// age? number or undefined

// type Smurf = { name: string, age?: number}

// ?number number or undefined or null

type Smurf = { name: string, age: ?number}

const papa: Smurf = {
  name: "Papa Smurf",
  age: 300,
  hatColor: "red"
}

const smurfette: Smurf = {
  name: "Smurfette",
  age: 200
}

function toString(smurf: Smurf): string {
  if (smurf.age == null) {
    return `${smurf.name} is immortal`
  }
  return `${smurf.name} is ${smurf.age} years old`
}

// or
const x: number | string = 42
