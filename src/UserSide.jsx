import React, { useState } from "react";
import { categories, itemsByCategory } from "./data.js";
import { getDataServer } from "./context/apiCall.js";
import html2canvas from "html2canvas";

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
      const response = await getDataServer(itemValue, category);
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDownloadImage = async () => {
    const element = document.getElementById("downloadImage");
    const canvas = await html2canvas(element);
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
      <div className="bg px-10 xl:px-56 relative text-center w-full h-screen flex flex-col items-center justify-center pt-10 animated">
        <h1 className="text-sm lg:text-xl pb-2 lg:pb-3 md:pb-5 italic">
          SSF KUNNAMANGALAM DIVISION
        </h1>
        <h1 className="flex flex-col text-center gap-1 xl:gap-2">
          <span className="font-extrabold text-4xl lg:text-6xl xl:text-8xl">
            Sahithyolsav
          </span>
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
            <figure className="relative max-w-lg" id="downloadImage">
              <img
                className="h-auto max-w-full"
                src="/design.jpg"
                alt="Background"
              />

              <div className="absolute top-2 left-5 md:left-10 md:top-6 left-5 right-0 bottom-0 flex flex-col p-4">
                <div className="flex flex-row font-bold">
                  <div className="flex align-middle">
                    <h1 className="text-xl md:pt-2  md:text-2xl lg:text-3xl text-black">
                      {results.resultCount}
                    </h1>
                  </div>
                  <div className="text-start pl-1  md:pl-2">
                    <p className="text-xs md:text-sm lg:text-xl text-black">
                      {results.category}
                    </p>
                    <p className="text-xs md:text-sm lg:text-xl text-black  -mt-1 md:-mt-2">
                      {results.item}
                    </p>
                  </div>
                </div>
                <div className="text-start mt-4">
                  {results.result.map((result, index) => (
                    <div key={index}>
                      <h2 className="text-sm  md:text-xl lg:text-xl text-black roboto-bold">
                        {result.firstPrice ||
                          result.secPrice ||
                          result.thirdPrice}
                      </h2>
                      <p className="text-sm/snug md:text-base lg:text-sm text-black -mt-1 md:-mt-2">
                        {result.firstUnit || result.secUnit || result.thirdUnit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </figure>
          </div>
        )}
        {results?<button onClick={handleDownloadImage}>Download</button>:""}
      {results==false&&(
        
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-4 rounded-md">
        <h2 className="font-bold text-lg">Notice:</h2>
        <p className="mt-2">The results for the {category} {selectedItem} Competition have not yet been published. Please check back later for updates.</p>
      </div>


      )}
      </div>

      <div className="flex flex-col gap-8 py-14 mt-4 text-center w-full px-10 xl:px-56">
        <h2 className="text-4xl lg:text-5xl text-[#e8002c] font-bold">
          What's Sahithyolsav
        </h2>
        <p className="text-lg lg:text-xl font-thin">
          "SSF Kerala's Sahityotsav is an annual literary festival celebrating
          the rich cultural and literary heritage of Kerala, organized by the
          Sunni Students' Federation (SSF) Kerala. The Kunnamangalam division's
          theme for this year is 'Travel,' inviting participants to delve into
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
          alt="Gallery"
        />
        <img
          src="/image.jpg"
          className="object-cover h-full w-full rounded-md"
          alt="Gallery"
        />
        <img
          src="/image.jpg"
          className="object-cover h-full w-full rounded-md"
          alt="Gallery"
        />
      </div>

      <footer className="px-5 md:px-10 lg:px-10 xl:px-36 w-full gap-5 sm:max-w-full bg-[#151622] flex flex-col items-center justify-center">
        <h1 className="text-white mt-8 font-semibold text-sm lg:text-base">
          Get connected
        </h1>
        <div className="flex items-center justify-center text-white gap-1">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/ssf_kunnamangalam"
          >
            <span
              className="text-xl lg:text-3xl iconify"
              data-icon="mdi:instagram"
            ></span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/ssf_kunnamangalam"
          >
            <span
              className="text-xl lg:text-3xl iconify"
              data-icon="mdi:facebook"
            ></span>
          </a>
          <a href="https://sahithyolsavkgm.vercel.app">
            <span
              className="text-xl lg:text-3xl iconify"
              data-icon="mdi:web"
            ></span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/channel/ssf_kunnamangalam"
          >
            <span
              className="text-xl lg:text-3xl iconify"
              data-icon="mdi:youtube"
            ></span>
          </a>
        </div>
        <h1 className="text-gray-100 mt-4 mb-2">
          <span className="text-xl">&copy;</span> 2023
        </h1>
      </footer>

      <button
        onClick={scrollToTop}
        className="flex items-center justify-center z-50 fixed bottom-10 right-10 p-2 bg-[#e8002c] text-white rounded-full"
      >
        <span
          className="iconify text-xl lg:text-2xl"
          data-icon="mdi:arrow-up"
        ></span>
      </button>
    </>
  );
}

export default UserSide;
