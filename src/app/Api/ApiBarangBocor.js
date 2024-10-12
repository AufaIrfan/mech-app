const url =
  "https://script.google.com/macros/s/AKfycbz9v4VYqL_iaHT5J-acawn--JRAQ1ySfXsp7mcLdC6T0ZMUplm6lBaZgVYoQYR9FigI/exec";

export const useFetchBarboc = async (param) => {
  const res = await fetch(url + "?p=" + param);
  const data = await res.json();
  return data;
};
