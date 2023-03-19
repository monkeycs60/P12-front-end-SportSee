export function reformateUser(data) {
  const id = data.id;
  const firstName = data.userInfos.firstName;
  const lastName = data.userInfos.lastName;
  const age = data.userInfos.age;
  const score = data.score;
  const Calories = data.keyData.calorieCount;
  const Proteines = data.keyData.proteinCount;
  const Glucides = data.keyData.carbohydrateCount;
  const Lipides = data.keyData.lipidCount;

  return {
    id,
    firstName,
    lastName,
    age,
    score,
    Calories,
    Proteines,
    Glucides,
    Lipides,
  };
}

export class User {
  constructor(data) {
    this.id = data.id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.age = data.age;
    this.score = data.score;
    this.Calories = data.Calories;
    this.Proteines = data.Proteines;
    this.Glucides = data.Glucides;
    this.Lipides = data.Lipides;
  }
}
