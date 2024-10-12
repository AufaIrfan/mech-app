export default function setLocalstorage(key, value) {
  try {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  } catch (error) {
    console.log(error.message);
  }
}
