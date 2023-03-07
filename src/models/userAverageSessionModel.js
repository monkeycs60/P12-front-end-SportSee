export function reformateAverageSession(data) {
  const sessions = data.sessions;

  const reformattedData = {};

  sessions.forEach((session) => {
    reformattedData[session.day] = session.sessionLength;
  });

  return reformattedData;
}
export class SessionData {
  constructor(data) {
    Object.keys(data).forEach((day) => {
      this[day] = data[day];
    });
  }
}