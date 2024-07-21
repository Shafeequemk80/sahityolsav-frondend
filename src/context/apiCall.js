import axios from "axios";

const baseUrl = "http://localhost:3000/";
async function getDataServer(item,category) {
  const response = await axios.get(`${baseUrl}?item=${item}&category=${category}`);

  return response.data
}

async function postDataServer(postData) {
  try {
    console.log("apicalled");
    const response = await axios.post(`${baseUrl}data`, postData);
    console.log("apicalledres");
    alert("Data received and saved successfully")
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to handle it in the calling function
  }
}

export { postDataServer,getDataServer };
