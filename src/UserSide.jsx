import React, { useState } from "react";
import { categories, itemsByCategory } from "./data.js";
import { getDataServer } from "./context/apiCall.js";

function UserSide() {
  const [category, setcategory] = useState("");
  const [item, setItem] = useState([]);
  const [results, setResults] = useState(null);
  const handleCategoryChange = (event) => {
    const Category = event.target.value;
    setItem([]);
    setcategory(Category);
    setItem(itemsByCategory[Category]);
    setResults(null)
  };

  const handleItemData = async (event) => {
    const itemValue = event.target.value;
    try {
      const response = await getDataServer(itemValue, category);
      
      // Do something with the response, e.g., update state or UI
      setResults(response.data);
     
       
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error, e.g., show an error message to the user
    }
  };

  const scrolltoteam = () => {
    const element = document.getElementById("results");
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
      <div className="bg px-10 xl:px-56 relative text-center w-full h-screen flex flex-col items-center justify-center pt-10 animated">
        {/* <p className="text-[#fae2e8] text-xl">"India's Largest Chain Event"</p>  */}
        <h1 className=" text-sm lg:text-xl pb-2 lg:pb-3 md:pb-5 italic">
          SSF KUNNAMANGALAM DIVISION
        </h1>
        <h1 className="flex flex-col text-center gap-1 xl:gap-2">
          <span className=" font-extrabold text-4xl lg:text-6xl xl:text-8xl">
            Sahithyolsav
          </span>
        </h1>
        {/* <button className="bg-[#151622] mt-12 rounded-full flex p-3 px-5 text-white">
      <a className="flex items-center gap-1" target="_blank" href="https://youtube.com">
        <span className="iconify text-xl" data-icon="mdi:whatsapp"></span>
        <span className="ml-1 text-lg"> Join Group</span>
      </a>
    </button>  */}
        <div className="pt-14 lg:pt-20 ">
          <button onClick={scrolltoteam}>
            <span
              className="iconify text-3xl lg:text-4xl  rounded-full p-1 animate-bounce transition-all duration-500 bg-white"
              data-icon="mdi:chevron-down"
            ></span>
          </button>
        </div>
      </div>
      <div
        id="results"
        className="w-full text-center px-10 py-10 lg:py-20 xl:px-56"
      >
        <h2 className="py-5 md:py-10 text-4xl lg:text-5xl text-[#e8002c] font-bold ">
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
              {categories.map((element) => (
                <option key={element} value={element}>
                  {element}
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
              {item.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="pt-10 border mt-10 h-96 flex justify-center items-center">
          
          {results? <p>{results.resultCount}</p>:'' }
          {results? <p>{results.category}</p>:'' }
          {results? <p>{results.item}</p> : <p>No results available</p>}
          {results?
          results.result.map((item, index) => (
        <div key={index} className="text-center">
          <h2>{item.firstPrice}</h2>
          <h5>{item.firstUnit}</h5>
        </div>
      )):''}
        </div>
      </div>

      <div className="flex flex-col gap-8 py-14 mt-4 text-center w-full px-10 xl:px-56">
        <h2 className=" text-4xl lg:text-5xl text-[#e8002c] font-bold ">
          What's Sahithyolsav
        </h2>
        <p className="text-lg lg:text-xl font-thin">
          "SSF Kerala's Sahityotsav is an annual literary festival celebrating
          the rich cultural and literary heritage of Kerala, organized by the
          Sunni Students' Federation (SSF) Kerala. The Kunnamangalam division's
          theme for this year is 'Travel, inviting participants to delve into
          the literary and cultural dimensions of journeys and voyages. This
          event serves as a vibrant platform for writers, poets, scholars, and
          literary enthusiasts to come together, share their work, and engage in
          meaningful discussions. The festival features a variety of activities
          such as poetry readings, book launches, panel discussions, and
          workshops, all aimed at promoting literature and fostering a love for
          reading and writing among the youth."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-16 px-10 xl:px-56">
        <img
          src="/image.jpg"
          className="object-cover h-full w-full rounded-md"
        />
        <img
          src="/image.jpg"
          className="object-cover h-full w-full rounded-md"
        />
        <img
          src="/image.jpg"
          className="object-cover h-full w-full rounded-md"
        />
      </div>

      <footer className="px-5 md:px-10 lg:px-10 xl:px-36 w-full gap-5 sm:max-w-full bg-[#151622] flex flex-col items-center justify-center">
        <h1 className="text-white mt-8 font-semibold text-sm lg:text-base">
          Get connected
        </h1>
        <div className="flex items-center justify-center text-white gap-1">
          <a target="_blank" href="https://www.instagram.com/ssf_kunnamangalam">
            <span
              className="text-xl lg:text-3xl iconify"
              data-icon="mdi:instagram"
            ></span>
          </a>
          <a target="_blank" href="https://www.instagram.com/ssf_kunnamangalam">
            <span
              className="text-xl lg:text-3xl iconify"
              data-icon="mdi:facebook"
            ></span>
          </a>
          <a href="sahithyolsavkgm.vercel.app">
            <span
              className="text-xl lg:text-3xl iconify"
              data-icon="mdi:web"
            ></span>
          </a>
          <a href="https://www.instagram.com/ssf_kunnamangalam">
            <span
              className="text-xl lg:text-3xl iconify"
              data-icon="mdi:youtube"
            ></span>
          </a>
        </div>
        <h1 className="text-gray-100 mt-4 mb-2">
          <span className="text-xl">&copy;</span> - 2023
        </h1>
      </footer>

      <button
        onClick={scrollToTop}
        className="flex items-center justify-center z-50 fixed bottom-10 right-10  p-2 bg-[#e8002c] text-white rounded-full"
      >
        <span
          className="iconify text-xl lgtext-2xl"
          data-icon="mdi:arrow-up"
        ></span>
      </button>
    </>
  );
}

export default UserSide;
