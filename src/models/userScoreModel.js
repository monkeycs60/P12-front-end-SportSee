export function reformateUserScore(data) {
  const score = data.score;

  return {
    score,
  };
}

export class UserScore {
  constructor(data) {
    this.score = data.score;
  }
}
