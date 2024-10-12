export default function getLocalstorage(key) {
  try {
    if (typeof localStorage !== "undefined") {
      return JSON.parse(localStorage.getItem(key));
    }
  } catch (error) {
    console.log(error.message);
  }
}
