export default function removeLocalstorage(key) {
  try {
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem(key);
    }
  } catch (error) {
    console.log(error.message);
  }
}
