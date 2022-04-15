export function convert(
  type: String,
  rawValue: number
) {
  let unit, minValue = 0, maxValue = 0;
  switch (type) {
    case "TEMPERATURE":
      minValue = -20;
      maxValue = 50;
      unit = "°C";
      break;
    case "HUMIDITY":
      minValue = 0;
      maxValue = 100;
      unit = "%HR";
      break;
    case "BARO":
      minValue = 950;
      maxValue = 1150;
      unit = "hPa";
      break;
    case "PROXIMITY":
      if (rawValue) {
        return "Actif";
      }
      return "Inactif";

    default:
      break;
  }

  return (
    ((rawValue * (maxValue - minValue)) / 1023 + minValue).toFixed(1) + unit
  );
}
