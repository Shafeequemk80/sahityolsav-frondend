import React, { useEffect, useState } from "react";
import { getTeamPoint } from "./api/apiCall";
import toast, { Toaster } from "react-hot-toast";

function TeamPoint() {
  const [points, setTeampoint] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const toastId = toast.loading("Waiting...");
      try {
        const response = await getTeamPoint();
        // Check if response.data[0] is an array before setting state
        if (Array.isArray(response.data)) {
          setTeampoint(response.data);
          toast.success("Team Points fetched successfully", { id: toastId });
        } else {
          toast.error("No data found", { id: toastId });
        }
      } catch (error) {
        console.error("Error fetching team points:", error); // Log error for debugging
        toast.error("Failed to fetch Team Points", { id: toastId });
      }
    };

    fetchData();
  }, []);
console.log(points)
  return (
    <>
      <div className="p-6 bg-[#FADFA1] flex justify-center">
  <div className=" w-full lg:w-2/3">
    <h1 className="text-4xl text-center font-bold mb-6 text-black">Final Result</h1>
    <div className="overflow-x-auto">
      <table className="w-full bg-white shadow-lg rounded-lg">
        <thead>
          <tr className="bg-[#9fb973] text-white">
            <th className="py-3 px-4 rounded-tl-lg" scope="col">Position</th>
            <th className="py-3 px-4"  scope="col">Team</th>
            <th className="py-3 px-4 rounded-tr-lg" scope="col">Points</th>
          </tr>
        </thead>
        <tbody>
          {points.length > 0 ? (
            points.map((data, index) => (
              <tr key={index} className={`${index % 2 === 1 ? 'bg-orange-50' : 'bg-white' }`}>
              <td className={`py-3 px-4 ${index < 3 ? 'text-red-600' : 'text-black'} text-center text-lg font-semibold   ${index < 3 ? 'text-red-600 font-semibold' : 'text-gray-800'}`} >
                {index + 1}
              </td>
              <td className={`py-3 px-4 text-lg  ${index < 3 ? 'text-red-600 font-semibold' : 'text-gray-800'}`}>
                {data.team}
              </td>
              <td className= {`py-3 px-4 text-lg  ${index < 3 ? 'text-red-600 font-semibold' : 'text-gray-800'}`}>
                {data.point}
              </td>
            </tr>
            
            ))
          ) : (
            <tr>
              <td colSpan="3" className="py-3 px-4 text-center text-lg text-gray-500">No points available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
</div>


      <Toaster />
    </>
  );
}

export default TeamPoint;
