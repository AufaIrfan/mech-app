export default async function compareSimpleArray(a, b) {
  let stringA = JSON.stringify(a);
  let stringB = JSON.stringify(b);
  return stringA === stringB;
}
