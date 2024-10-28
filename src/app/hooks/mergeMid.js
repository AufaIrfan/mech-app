// data = [plant, mid, desc, qty, oum, damage, note, maintainDesc]
export default function mergeMid(data) {
  try {
    let mergeResult = {};
    let result = [];
    data.map((d) => {
      let key = Object.keys(mergeResult);
      if (!key.length) mergeResult[d[1] + d[4]] = d;
      if (key.includes(d[1].toString())) {
        mergeResult[d[1] + d[4]][3] += d[3];
        mergeResult[d[1] + d[4]][6] += ", " + d[6];
      } else mergeResult[d[1] + d[4]] = d;
    });

    Object.keys(mergeResult).map((k) => result.push(mergeResult[k]));
    console.log("mergeMid", "success");
    console.log(result);
    return result;
  } catch (error) {
    console.log("mergeMid", error.message);
    return [];
  }
}
