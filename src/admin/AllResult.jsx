import React, { useEffect, useState } from "react";
import { getallresult } from "../api/apiCall";
import toast, { Toaster } from "react-hot-toast";

function AllResult() {
    const [results, setResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState(""); // state to hold the search query

    useEffect(() => {
        const fetchData = async () => {
            const toastId = toast.loading("Waiting...");
            try {
                const response = await getallresult();
                setResults(response.data);
                toast.success("All results fetched successfully", { id: toastId });
            } catch (error) {
                toast.error("Failed to fetch results", { id: toastId });
            }
        };

        fetchData();
    }, []);

    // Filter results based on the search query
    const filteredResults = results.filter(
        (element) =>
            element.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            element.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
            element.result[0]?.firstPrice.toLowerCase().includes(searchQuery.toLowerCase()) ||
            element.result[1]?.secPrice.toLowerCase().includes(searchQuery.toLowerCase()) ||
            element.result[2]?.thirdPrice.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Published Results</h1>
                <input
                    type="text"
                    placeholder="Search by Category or Item"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="mb-4 p-2 border border-gray-300 rounded-md w-full"
                />
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
                        {filteredResults.length > 0 ? (
                            filteredResults.map((element, index) => (
                                <tr key={index} className={`${index % 2 === 1 ? "bg-gray-100" : ""}`}>
                                    <td className="py-2 px-4 border-b">{index + 1}</td>
                                    <td className="py-2 px-4 border-b">{element.category}</td>
                                    <td className="py-2 px-4 border-b">{element.item}</td>
                                    <td className="py-2 px-4 border-b">
                                        {element.result[0]?.firstPrice || <p className="text-red-500">No Data</p>}
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        {element.result[1]?.secPrice || <p className="text-red-500">No Data</p>}
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        {element.result[2]?.thirdPrice || <p className="text-red-500">No Data</p>}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center py-4">
                                    No results found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <Toaster />
        </>
    );
}

export default AllResult;
