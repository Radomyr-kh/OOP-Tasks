export default function getMin(arr) {
  const foo = (array) => Math.min(...array);
  return foo.apply(this, [arr]);
}
