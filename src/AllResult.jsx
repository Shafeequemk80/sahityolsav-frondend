import React, { useEffect, useState } from "react";
import { getallresult } from "./api/apiCall";

function AllResult() {
    const [results,setResult]= useState([])
  // Create an array with 20 elements

  useEffect(()=>{
const fecthData = async ()=>{
    const response=await getallresult()
    console.log(response);
    setResult(response.data)
}

fecthData()
  },[])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Published Results</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">No.</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Item</th>
            <th className="py-2 px-4 border-b">First</th>
            <th className="py-2 px-4 border-b">Second</th>
            <th className="py-2 px-4 border-b">Third</th>
          </tr>
        </thead>
        <tbody>
          {results.map((element, index) => (
            <tr key={index} className={`${index%2==1?'bg-gray-100':''}`}>
              <td className="py-2 px-4  border-b">{index+1}</td>
              <td className="py-2 px-4  border-b">{element.category}</td>
              <td className="py-2 px-4 border-b">{element.item}</td>
              <td className="py-2 px-4 border-b">{element.result[0].firstPrice}</td>
              <td className="py-2 px-4 border-b">{element.result[1].secPrice}</td>
              <td className="py-2 px-4 border-b">{element.result[2].thirdPrice}</td>
           
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllResult;
