import React, { useState, useRef } from "react";
import { categories, itemsByCategory } from "./data.js";
import { getDataServer } from "./context/apiCall.js";

import toast, { Toaster } from "react-hot-toast";
import Footer from "./Footer.jsx";
import ImageDownlad from "./ImageDownlad.jsx";

function UserSide() {
  const [category, setCategory] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [items, setItems] = useState([]);
  const [results, setResults] = useState(null);


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
const nameRow="flex flex-row mb-3 md:mr-5 lg:mr-0"
const position="text-center poppins-bold text-3xl me-3 text-gray-400 flex align-middle"
const resultName="poppins-bold text-2xl"
const resultItem="poppins-medium text-gray-600 -mt-1"
  return (
    <>
      <div
    
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
        className="w-full text-center "
      >
        <h2 className="py-5 md:py-10 text-4xl lg:text-5xl  font-bold">
          Results
        </h2>
        <div className="flex md:flex-row flex-col md:justify-between  poppins-medium   space-y-1.5 pt-5 lg:pt-10 md:space-y-0 px-10 py-10 lg:py-20 xl:px-56">
          <div className="flex flex-col gap-3 items-start">
            <label className="text-xl poppins-medium  text-[#151622]">Category</label>
            <select
              onChange={handleCategoryChange}
              className="p-2 w-full font-medium text-white bg-black rounded md:text-lg md:p-3 md:px-8 "
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
            <label className="text-xl poppins-medium  text-[#151622]">Item</label>
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
          <div className="flex flex-col ml-16 md:flex-row justify-between  lg:px-52 ">
          
    <div className={nameRow}>
      <div className={position}>01</div>
      <div className="text-start">
        <p className={resultName}>{results.result[0].firstPrice}</p>
        <p className={resultItem}>{results.result[0].firstUnit}</p>
      </div>
     </div>
      <div className={nameRow}>
      <div className={position}>02</div>
      <div className="text-start">
      <p className={resultName}>{results.result[1].secPrice}</p>
        <p className={resultItem}>{results.result[1].secUnit}</p>
      </div>
      </div >
       <div className={nameRow}>
       <div className={position}>03</div>
      <div className="text-start">
      <p className={resultName}>{results.result[2].thirdPrice}</p>
        <p className={resultItem}>{results.result[2]. thirdUnit}</p>
      </div>
       </div>
        </div>
  )}

        <div className={`grid grid-cols-1 py-7 lg:grid-cols-3 ${results ? 'bg-slate-100' : ''} md:px-28`}>
          
        <ImageDownlad results={results} category={category} selectedItem={selectedItem} image={'/design.jpg'} color={'text-black'}/>
        <ImageDownlad results={results} category={category} selectedItem={selectedItem} image={'/design2.jpg'} color={'text-white'}/>
        <ImageDownlad results={results} category={category} selectedItem={selectedItem} image={'/design3.jpg'} color={'text-black'}/>
        
        
        </div>
      </div>
     
        {results == false && (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-4 rounded-md">
            <h2 className="font-bold text-lg">Notice:</h2>
            <p className="mt-2">
              The results for the {category} {selectedItem} Competition have not
              yet been published. Please check back later for updates.
            </p>
          </div>
        )}
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
