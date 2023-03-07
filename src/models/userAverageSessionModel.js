export function reformateAverageSession(data) {
   const sessions = data.sessions;

  const reformattedData = {};

  sessions.forEach((session, index) => {
    reformattedData[index] = {
      day: session.day,
      sessionLength: session.sessionLength,
    };
  });
 return reformattedData;
}
export class SessionData {
      constructor(data) {
    this.sessions = data;
  }
}