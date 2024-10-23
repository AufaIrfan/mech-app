export default function getLs(key) {
  try {
    if (typeof localStorage !== "undefined") {
      return JSON.parse(localStorage.getItem(key));
    }
  } catch (error) {
    console.log(error.message);
  }
}
