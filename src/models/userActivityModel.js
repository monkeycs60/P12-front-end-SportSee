export function reformateActivity(data) {
   const sessions = data.sessions;

  const reformattedData = sessions.map((session) => {
    return {
      day: session.day,
      kilogram: session.kilogram,
      calories: session.calories,
    };
  });

  return reformattedData;
}
export class ActivityData {
      constructor(data) {
    this.sessions = data;
  }
}