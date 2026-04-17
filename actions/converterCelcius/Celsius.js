function ConverterCelcius(Celsius) {
  // Verifica se "celsius" é válido
  if (Celsius === 0) {
    return "O valor de 'celsius' não pode ser 0";
  }
  let f = (Celsius * 9/5) + 32;

  return `${Celsius}°C = ${f}°F`;
}
