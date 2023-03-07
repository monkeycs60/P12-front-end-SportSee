export function reformateActivity(data) {
    const userId = data.userId;
  const sessions = data.sessions;

  const reformattedData = [];

  sessions.forEach((session) => {
    reformattedData.push({
      day: session.day,
      kilogram: session.kilogram,
      calories: session.calories,
    });
  });

  return {
    id: userId,
    reformattedData,
    }
    ;
}
export class ActivityData {
    constructor(data) {
        this.id = data.id;
        this.sessions = data.reformattedData;  }
}