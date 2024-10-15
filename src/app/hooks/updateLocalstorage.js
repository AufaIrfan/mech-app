import setLocalstorage from "./setLocalstorage";
export default async function updateLocalstorage(
  key,
  fetch,
  startLoad = () => {},
  endLoad = () => {},
  callback = () => {}
) {
  startLoad();
  let data = false;
  data = await fetch();
  setLocalstorage(key, data);
  callback();
  endLoad();
}
