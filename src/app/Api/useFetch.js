const scriptId = {
  barboc:
    "AKfycbz8V1ydBEgEltz73EtLt54qOpm4L8zaQpNbjwCmxW7x6mIRj8NwjU-0EJZIgenycWYv",
  matDbase:
    "AKfycbwnsLv1yOGDNZe6zxcmgZSHrj4m4rOQu_ElCvZrXGAI_OTDjzfcxBY6UVdx7OWJGpFlPA",
};

const url = (id) => {
  return "https://script.google.com/macros/s/" + id + "/exec";
};

export const useFetchBarboc = async (param) => {
  try {
    const res = await fetch(url(scriptId.barboc) + "?p=" + param);
    const data = await res.json();
    return data;
  } catch (error) {
    return [error.message];
  }
};

export const useFetchMatDbase = async (param) => {
  try {
    const res = await fetch(url(scriptId.matDbase) + "?p=" + param);
    const data = await res.json();
    return data;
  } catch (error) {
    return [error.message];
  }
};
