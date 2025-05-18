import { data } from "autoprefixer";
import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
console.log(baseUrl);
//const baseUrl = "https://sahityolsav-backred.onrender.com";
async function getDataServer(item, category) {
  const response = await axios.get(
    `${baseUrl}/?item=${item}&category=${category}`
  );
  console.log(response);
  return response.data;
}

async function postDataServer(postData) {
  try {
    console.log("apicalled");
    const response = await axios.post(`${baseUrl}/data`, postData);
    console.log("apicalledres");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to handle it in the calling function
  }
}

const options = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

async function ImageUploadServer(formData) {
  try {
    console.log(formData);
    const response = await axios.post(
      `${baseUrl}/imageUpload`,
      formData,
      options
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function getallresult() {
  const response = await axios.get(`${baseUrl}/allresult`);

  return response.data;
}
async function getTeamPoint() {
  const response = await axios.get(`${baseUrl}/teampoint`);

  return response.data;
}

async function scoreData(formData) {
  try {
    const response = await axios.post(`${baseUrl}/saveteampoint`, formData);

    return response.data;
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error(
        "Server error:",
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      // No response was received after the request was made
      console.error("No response received:", error.request);
    } else {
      // Other errors during the request setup
      console.error("Error setting up request:", error.message);
    }
  }
}

async function addDescription(description) {
  const response = await axios.put(`${baseUrl}/adddescription`, {
    description,
  });
  return response.data;
}
async function getDescription(description) {
  const response = await axios.get(`${baseUrl}/getdescription`);
  return response.data;
}

async function getBrochure() {
  const response = await axios.get(`${baseUrl}/getbrochuse`);
  return response.data;
}
async function addBrochure(formData) {
  const response = await axios.put(`${baseUrl}/addbrochure`, formData);
  return response.data;
}

async function addTeamName(teamName) {
  const response = await axios.post(`${baseUrl}/addteamname`, { teamName });
  return response.data;
}
async function getTeam() {
  const response = await axios.get(`${baseUrl}/getteamname`);
  return response.data;
}
export {
  baseUrl,
  postDataServer,
  getDataServer,
  ImageUploadServer,
  getallresult,
  getTeamPoint,
  scoreData,
  addDescription,
  getDescription,
  getBrochure,
  addBrochure,
  addTeamName,
  getTeam,
};
