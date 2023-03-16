export function reformateUserScore(data) {
  const todayScore = data.todayScore;

  return {
    todayScore,
  };
}

export class UserScore {
  constructor(data) {
    this.todayScore = data.todayScore;
  }
}
