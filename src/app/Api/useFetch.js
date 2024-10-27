const scriptId = {
  barboc:
    "AKfycbz9D-RkcI0rZd0N_NAlB66iD0l2QylKChq5i6WZhJBq8S6_RLkauqN662QZt-GYHScL",
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

export const usePostBarboc = async (param, data) => {
  try {
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    const res = await fetch(url(scriptId.barboc) + "?p=" + param, {
      method: "POST",
      body: formData,
    });
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
    return [error.message];
  }
};
