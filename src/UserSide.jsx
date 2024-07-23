import React, { useState, useRef } from "react";
import { categories, itemsByCategory } from "./data.js";
import { getDataServer } from "./context/apiCall.js";
import html2canvas from "html2canvas";
import toast, { Toaster } from "react-hot-toast";
import Footer from "./Footer.jsx";

function UserSide() {
  const [category, setCategory] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [items, setItems] = useState([]);
  const [results, setResults] = useState(null);
  const downloadImageRef = useRef(null); // Reference for the element to capture

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    setItems(itemsByCategory[selectedCategory] || []);
    setResults(null);
  };

  const handleItemData = async (event) => {
    const itemValue = event.target.value;
    setSelectedItem(itemValue);

    try {
      toast.loading("Waiting...");
      const response = await getDataServer(itemValue, category);
      setResults(response.data);
      toast.dismiss();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDownloadImage = async () => {
    const element = downloadImageRef.current;
    const canvas = await html2canvas(element, {
      scale: 4,
    });
    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    link.href = data;
    link.download = `${category}-${selectedItem}.jpg`;
    document.body.appendChild(link); 
    link.click();
    document.body.removeChild(link);
  };

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        // style={{
        //   backgroundImage: "url('/bg.jpg')",
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
        className="bg px-10 xl:px-56 relative text-center w-full h-screen bg-[#161616] flex flex-col items-center justify-center pt-10 animated"
      >
        <h1 className="text-sm lg:text-xl pb-2 lg:pb-3 md:pb-5 italic">
          SSF KUNNAMANGALAM DIVISION
        </h1>
        <h1 className="flex flex-col text-center justify-center  xl:gap-2">
          {/* <span className="font-extrabold text-4xl lg:text-6xl xl:text-8xl">
            Sahithyolsav
          </span> */}
          <img
            className="  md:w-[600PX] w-sm "
            src="/sahiText.png"
            alt="Sahithyolsav"
          />
        </h1>
        <div className="pt-14 lg:pt-20">
          <button onClick={() => scrollToElement("results")}>
            <span
              className="iconify text-3xl lg:text-4xl rounded-full p-1 animate-bounce transition-all duration-500 bg-white"
              data-icon="mdi:chevron-down"
            ></span>
          </button>
        </div>
      </div>

      <div
        id="results"
        className="w-full text-center px-10 py-10 lg:py-20 xl:px-56"
      >
        <h2 className="py-5 md:py-10 text-4xl lg:text-5xl text-[#e8002c] font-bold">
          Results
        </h2>
        <div className="flex md:flex-row flex-col md:justify-between space-y-1.5 pt-5 lg:pt-10 md:space-y-0">
          <div className="flex flex-col gap-3 items-start">
            <label className="text-lg text-[#151622]">Category</label>
            <select
              onChange={handleCategoryChange}
              className="p-2 w-full font-medium text-white bg-black rounded md:text-lg md:p-3 md:px-8"
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-3 items-start">
            <label className="text-lg text-[#151622]">Item</label>
            <select
              id="item"
              onChange={handleItemData}
              className="p-2 w-full font-medium text-white bg-black rounded md:text-lg md:p-3 md:px-8"
            >
              <option value="">Select Item</option>
              {items.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        {results && (
          <div className="border flex justify-center text-black mt-10">
            <figure
              className="relative max-w-lg"
              id="downloadImage"
              ref={downloadImageRef}
            >
              <img
                className="h-auto max-w-full"
                src="/design.jpg"
                alt="Background"
              />

              <div className="absolute top-2 left-5 md:left-10 md:top-6  right-0 bottom-0 flex flex-col p-4">
                <div className="flex flex-row ">
                  <div className="flex items-center ">
                    <h1 className="text-xl poppins-bold lg:text-3xl text-black">
                      {results.resultCount}
                    </h1>
                  </div>

                  <div className="text-start  pl-1   md:pl-2">
                    <p className="text-sm md:text-lg  poppins-bold lg:text-xl text-black">
                      {results.category}
                    </p>
                    <p className=" text-sm md:text-lg  poppins-bold lg:text-xl text-black  -mt-1 md:-mt-1">
                      {results.item}
                    </p>
                  </div>
                </div>
                <div className="text-start mt-4">
                  {results.result.map((result, index) => (
                    <div key={index}>
                      <h2 className="text-sm/[14px]   md:text-xl md:mt-2 lg:text-xl text-black poppins-bold">
                        {result.firstPrice ||
                          result.secPrice ||
                          result.thirdPrice}
                      </h2>
                      <p className="text-[10px] mb-2 mt-0.5 poppins-light md:text-base lg:text-sm text-gray-800 -mt- md:-mt-1">
                        {result.firstUnit || result.secUnit || result.thirdUnit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </figure>
          </div>
        )}
        {results && (
          <button
            onClick={handleDownloadImage}
            className="mt-4 px-6 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50"
          >
            Download
          </button>
        )}

        {results == false && (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-4 rounded-md">
            <h2 className="font-bold text-lg">Notice:</h2>
            <p className="mt-2">
              The results for the {category} {selectedItem} Competition have not
              yet been published. Please check back later for updates.
            </p>
          </div>
        )}
      </div>
      <Footer />
      <button
        onClick={scrollToTop}
        className="flex items-center justify-center z-50 fixed bottom-10 right-10 p-2 bg-[#e8002c] text-white rounded-full"
      >
        <span
          className="iconify text-xl lg:text-2xl"
          data-icon="mdi:arrow-up"
        ></span>
      </button>
      <Toaster />
    </>
  );
}

export default UserSide;
