import React, { useRef } from "react";
import html2canvas from "html2canvas";

function ImageDownload({ results, color, category, selectedItem, image }) {
  const downloadImageRef = useRef(null);

  // Define class names in variables
  const containerClass = " mx-1 sm:mx-auto  drop-shadow-xl px-5 ";

  const imageContainerClass = "relative h-[350px] w-[350px] mb-24";
  const backgroundImageClass = "max-w-full object-cover h-full w-full";
  const overlayClass = "absolute top-2 left-5 md:left-5 md:top-2 right-0 bottom-0 flex flex-col p-4";
  const flexRowClass = "flex flex-row";
  const resultTextClass = `text-3xl  poppins-bold ${color}`;
  const categoryTextClass = `text-sm poppins-bold ${color}`;
  const unitTextClass = `text-sm/[14px]  poppins-bold ${color}`;
  const unitSmallTextClass = `text-[10px] mb-1 poppins-light  ${color}`;
  const buttonClass = "mt-4 px-6 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50";

  const handleDownloadImage = async () => {
    const element = downloadImageRef.current;
    const canvas = await html2canvas(element, {
      scale: 4, // Increase the scale to improve image quality
    });
    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");
  
    link.href = data;
    link.download = `${category}-${selectedItem}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={containerClass}>
      {results && (
        <div>
          
            <div className={imageContainerClass} ref={downloadImageRef} id="downloadImage">
              <img
                className={backgroundImageClass}
                src={image}
                alt="Background"
              />
              <div className={overlayClass}>
                <div className={flexRowClass}>
                  <div className="flex items-start">
                    <div className={resultTextClass}>
                      {results.resultCount}
                    </div>
                  </div>
                  <div className="text-start pl-1 md:pl-2">
                    <div className={categoryTextClass}>
                      {results.category}
                    </div>
                    <div className={`${categoryTextClass} -mt-1`}>
                      {results.item}
                    </div>
                  </div>
                </div>
                <div className="text-start mt-4">
                  {results.result.map((result, index) => (
                    <div key={index}>
                      <div className={unitTextClass}>
                        {result.firstPrice || result.secPrice || result.thirdPrice}
                      </div>
                      <div className={unitSmallTextClass}>
                        {result.firstUnit || result.secUnit || result.thirdUnit}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
            onClick={handleDownloadImage}
            className={buttonClass}
          >
            Download
          </button>
            </div>
            
          
          
        </div>
      )}
    </div>
  );
}

export default ImageDownload;
