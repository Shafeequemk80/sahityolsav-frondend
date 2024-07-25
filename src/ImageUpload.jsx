import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl, ImageUploadServer } from "./context/apiCall";
import toast, { Toaster } from "react-hot-toast";

const ImageUpload = () => {
  const [images, setImages] = useState([null, null, null]);
  const [uploadedFiles, setUploadedFiles] = useState([null, null, null]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/showImage`);
        const data = response.data.data;
        console.log(data.image1); // Logging the fetched data

        const newImages = [
          data.image1 ? `${baseUrl}/static/results/${data.image1}` : null,
          data.image2 ? `${baseUrl}/static/results/${data.image2}` : null,
          data.image3 ? `${baseUrl}/static/results/${data.image3}` : null,
        ];

        setImages(newImages);

        // Logging the URLs directly
        newImages.forEach((image, index) => {
          if (image) {
            console.log(`Image ${index + 1} URL: ${image}`);
          }
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleImageClick = (index) => {
    document.getElementById(`fileInput${index}`).click();
  };

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const newImages = [...images];
      newImages[index] = URL.createObjectURL(file);
      setImages(newImages);

      const newUploadedFiles = [...uploadedFiles];
      newUploadedFiles[index] = file;
      setUploadedFiles(newUploadedFiles);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      toast.loading("Waiting...");
      const formData = new FormData();
      uploadedFiles.forEach((file, i) => {
        if (file) {
          formData.append(`image${i + 1}`, file);
        }
      });

      const response = await ImageUploadServer(formData);
      toast.dismiss();
      toast.success("Successfully Added!");
      console.log("Upload response:", response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.dismiss();
      toast.error("Failed to upload image.");
    }
  };

  return (
    <div className="px-4 py-6 sm:px-8 sm:py-8 lg:px-36 lg:py-12">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative drop-shadow max-w-[350px] max-h-[350px]"
            >
              <img
                src={image || "https://via.placeholder.com/350"}
                alt={`Design ${index + 1}`}
                className="w-full h-auto object-cover cursor-pointer"
                onClick={() => handleImageClick(index)}
              />
              <input
                id={`fileInput${index}`}
                type="file"
                name={`image${index + 1}`}
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageUpload(e, index)}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Add Images
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default ImageUpload;
