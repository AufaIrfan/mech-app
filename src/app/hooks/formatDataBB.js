// data 1 = {date, pallet, checker, start time}
// data2 = [plant, mid, desc, qty, oum, damage, note, maintainDesc]
// result =[ DATE, MID DESC, QTY, OUM, DAMAGE TYPE, PALLET, PLANT, CHECKER, S TIME, E TIME, NOTE, MAINTAIN]

export default function formatDataBB(data1, data2, time) {
  try {
    let result = [];
    let endTime = time.getHours() + ":" + time.getMinutes();
    data2.map((d) =>
      result.push([
        data1.date,
        d[1],
        d[2].toUpperCase(),
        d[3],
        d[4],
        d[5],
        data1.pallet,
        d[0],
        data1.checker,
        data1.time,
        endTime,
        duration(data1.time, endTime),
        d[7].toString().toUpperCase(),
        removeKoma(d[6]).toUpperCase(),
      ])
    );
    console.log("formatDataBB", "success");
    return result;
  } catch (error) {
    console.log("formatDataBB", error.message);
    return [];
  }
}

function duration(start, end) {
  try {
    const [startHour, startMinute] = start.split(":").map(Number);
    const [endHour, endMinute] = end.split(":").map(Number);
    const startTotal = startHour * 60 + startMinute;
    const endTotal = endHour * 60 + endMinute;
    const total = endTotal - startTotal;
    const hours = Math.floor(total / 60);
    const minutes = total % 60;
    const h = hours < 10 ? "0" + hours : hours;
    const m = minutes < 10 ? "0" + minutes : minutes;
    console.log("duration", h, m);
    return `${h}:${m}`;
  } catch (error) {
    console.log("duration", error.message);
  }
}

function removeKoma(data) {
  try {
    return data.replace(",", "");
  } catch (error) {
    console.log("removeKoma", error.message);
  }
}
