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

function toString(smurf: Smurf): string {
  return `${smurf.name} is ${smurf.age} years old`
}

toString(papa)
