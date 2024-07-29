import axios from "axios";
import { slides } from "../data";
const baseUrl = "http://localhost:3000";
//const baseUrl = "https://sahityolsav-backred.onrender.com";
async function getDataServer(item,category) {
  const response = await axios.get(`${baseUrl}/?item=${item}&category=${category}`);
console.log(response);
  return response.data
}

async function postDataServer(postData) {
  try {
    console.log("apicalled");
    const response = await axios.post(`${baseUrl}/data`, postData);
    console.log("apicalledres");
    return response.data

  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to handle it in the calling function
  }
}

const options = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
};

async function ImageUploadServer(formData){
try {
  console.log(formData);
  const response= await  axios.post(`${baseUrl}/imageUpload`,formData, options)
  console.log(response);
return response.data
} catch (error) {
  console.log(error);
}
}

async function getallresult(){
  const response= await axios.get(`${baseUrl}/allresult`)
 
  return response.data
}

export { postDataServer,getDataServer,ImageUploadServer,getallresult ,baseUrl};
