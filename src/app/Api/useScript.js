const scriptId = {
    repair:
        "AKfycbz-509tU_sOXfaWCF6ZI8eV1Bk9Hl_yCmrYP-hz1jGpUZ3bCRsDXzLWNWjFIhJalSlk6w",
    mechStock:
        "AKfycbw74wE0DvZkYol-jImZJbXFc8CdF_2oYuPoPOdiTCGud08Iyk-2g6cHvSipr4DzaNtF",
  };
  
  const url = (id) => {
    return "https://script.google.com/macros/s/" + id + "/exec";
  };
  
  export const useScriptRepair = async (param) => {
    try {
      const res = await fetch(url(scriptId.repair) + "?p=" + param);
      const data = await res.json();
      console.log(param, "success");
      return data;
    } catch (error) {
      console.log(param, error.message);
      return [error.message];
    }
  };
  
  export const useScriptmechStock = async (param) => {
    try {
      const res = await fetch(url(scriptId.mechStock) + "?p=" + param);
      const data = await res.json();
      console.log(param, "success");
      return data;
    } catch (error) {
      console.log(param, error.message);
      return [error.message];
    }
  };
  
  export const usePostRepair = async (param, data) => {
    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      const res = await fetch(url(scriptId.repair) + "?p=" + param, {
        method: "POST",
        body: formData,
      });
      const response = await res.json();
      console.log(param, response);
      return response;
    } catch (error) {
      console.log(error);
      return [error.message];
    }
  };
  