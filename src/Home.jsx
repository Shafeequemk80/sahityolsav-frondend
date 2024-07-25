import React from 'react'

function Home() {
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
  return (
    <div className="bg px-10 xl:px-56 relative text-center w-full h-screen bg-[#161616] flex flex-col items-center justify-center pt-10 animated">
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
  )
}

export default Home
