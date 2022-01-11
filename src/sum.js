export default function sum(a, b) {
  const result = a + b;

  if (result > 1000) {
    return 1000;
  }

  return result;
}
