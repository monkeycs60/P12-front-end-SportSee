export function reformateUser(data) {
  const id = data.id;
  const firstName = data.userInfos.firstName;
  const lastName = data.userInfos.lastName;
  const age = data.userInfos.age;
  const todayScore = data.todayScore;
  const calorieCount = data.keyData.calorieCount;
  const proteinCount = data.keyData.proteinCount;
  const carbohydrateCount = data.keyData.carbohydrateCount;
  const lipidCount = data.keyData.lipidCount;

  return {
    id,
    firstName,
    lastName,
    age,
    todayScore,
    calorieCount,
    proteinCount,
    carbohydrateCount,
    lipidCount,
  };
}

export class User {
  constructor(data) {
    this.id = data.id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.age = data.age;
    this.todayScore = data.todayScore;
    this.calorieCount = data.calorieCount;
    this.proteinCount = data.proteinCount;
    this.carbohydrateCount = data.carbohydrateCount;
    this.lipidCount = data.lipidCount;
  }
}
