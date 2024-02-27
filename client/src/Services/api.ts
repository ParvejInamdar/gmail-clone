import axios from "axios";

const API_URL = "http://localhost:5000";

const API_GMAIL_CLONE = async (urlObject,payload) => {
  console.log("App API called")
  return await axios({
    method: urlObject.method,
    url: `${API_URL}/${urlObject.endppoint}`,
    data: payload,
  });
};

export default API_GMAIL_CLONE;
