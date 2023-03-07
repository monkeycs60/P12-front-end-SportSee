export function reformateActivity(data) {
    const sessions = data.sessions;

  const reformattedData = {};

  sessions.forEach((session) => {
    reformattedData[session.day] = {
      kilogram: session.kilogram,
      calories: session.calories,
    };
  });

  return reformattedData;
}
export class ActivityData {
     constructor(data) {
    Object.keys(data).forEach((day) => {
      this[day] = data[day];
    });
  }
}