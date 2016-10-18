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

type smurfMetric = {
  name: string,
  measure: (s: Smurf) => number
}

const lengthOfName: smurfMetric = {
  name: "lengthOfName",
  measure: (s) => s.name.length
}

const ageInCenturies: smurfMetric = {
  name: "ageInCenturies",
  measure: (s) => s.age / 100
}
