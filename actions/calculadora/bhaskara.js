function baskara(a, b, c) {
  // Verifica se "a" é válido
  if (a === 0) {
    return "O valor de 'a' não pode ser 0";
  }
 
  // Calcula o delta
  let delta = (b * b) - (4 * a * c);
 
  // Verifica o delta
  if (delta < 0) {
    return "Não existem raízes reais";
  }
 
  // Calcula as raízes
  let x1 = (-b + Math.sqrt(delta)) / (2 * a);
  let x2 = (-b - Math.sqrt(delta)) / (2 * a);
 
  return `x1 = ${x1}, x2 = ${x2}`;
}