import Swal from "sweetalert2";
import { checkProgram, startProgram } from "../api/apiCall";
import { SiTruenas } from "react-icons/si";


export const checkProgramStarted = async () => {
  try {
    
    const response = await startProgram();
 
console.log(response);

    if (response?.success) {
      await Swal.fire({
        icon: "warning",
        title: "Program is Started",
        text: "You cannot make any changes now.",
      });
    }

    return response?.success;
  } catch (error) {
    console.error("Program check failed:", error);
    await Swal.fire({
      icon: "error",
      title: "Error",
      text: "Failed to check program status.",
    });
    return { success: false };
  }
};

export const canAddResult = async () => {
    try {
      
      const response = await checkProgram();

  
      if (!response?.success) {
        await Swal.fire({
          icon: "warning",
          title: "Program Not Started",
          text: "Please start the program",
        });
      }
      return response?.success;
    } catch (error) {
      console.error("Program check failed:", error);
      await Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to check program status.",
      });
      return { success: true };
    }
  };
  