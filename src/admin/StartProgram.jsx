import React from 'react'
import { startProgram } from '../api/apiCall';
import Swal from "sweetalert2";
import { steps } from '../data';

function StartProgram() {
    

      async function handleStarButtton() {
        const isStart = await startProgram();
        if (isStart.success) {
          Swal.fire({
            icon: "success",
            title: "Program Started Successfully",
            text: "You can now begin using the website.",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Failed to Start Program",
            text: isStart.message || "An unexpected error occurred.",
          });
        }
      }
      
    
      return (
       <div>
         <div className="md:max-w-xl md:mx-auto mx-5 p-6 bg-blue-100 rounded mt-10  shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">How to Start Using Our Website</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            {steps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-center mt-10 gap-2 sm:gap-4 px-4">
  <button
    className="bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 px-6 py-2 sm:px-10 sm:py-2 rounded text-lg sm:text-2xl text-white transition duration-300"
    onClick={() => handleStarButtton()}
  >
    Start
  </button>
  <button
    className="bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-300 px-6 py-2 sm:px-10 sm:py-2 rounded text-lg sm:text-2xl text-white transition duration-300"
    onClick={() => handleStarButtton()}
  >
    Stop
  </button>
  <button
    className="bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 px-6 py-2 sm:px-10 sm:py-2 rounded text-lg sm:text-2xl text-white transition duration-300"
    onClick={() => handleStarButtton()}
  >
    Reset
  </button>
</div>


       </div>
      );
    };

export default StartProgram

