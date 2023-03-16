export function reformatePerformance(data) {
  const userId = data.userId;
  const kind = data.kind;
  const values = data.data;
  const reformattedData = {};

  for (let i = 0; i < values.length; i++) {
    const kindName = kind[values[i].kind];
    reformattedData[kindName] = values[i].value;
  }

  return {
    id: userId,
    ...reformattedData,
  };
}

export class PerformanceData {
  constructor(props) {
    this.cardio = props.cardio;
    this.energy = props.energy;
    this.endurance = props.endurance;
    this.strength = props.strength;
    this.speed = props.speed;
    this.intensity = props.intensity;
  }
}