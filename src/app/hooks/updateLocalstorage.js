import setLs from "./setLs";
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
  setLs(key, data);
  callback();
  endLoad();
}
