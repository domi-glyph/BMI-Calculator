export function calculate({height=150, weight}){
  return weight/((height / 100) ** 2);
}