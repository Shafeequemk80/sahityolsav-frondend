import React, { useState } from "react";
import { categories, itemsByCategory, sectors } from "./data.js";
import { postDataServer } from "./api/apiCall.js";
import {  useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
function AdminSide() {
  const navigate= useNavigate()
  const [category, setcategory] = useState("");
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({

    item: "",
    firstPrice: "",
    firstUnit: "",
    secPrice: "",
    secUnit: "",
    thirdPrice: "",
    thirdUnit: "",
  });

  const handleCategoryChange = (event) => {
    const cate = event.target.value;
    setcategory(cate);
    setItems(itemsByCategory[cate]);
  };

  const handleformData = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handlesumbit = async (event) => {
    event.preventDefault()
    toast.loading('Waiting...');
    console.log("sumbit");
    const postData = {
      ...formData,
      category,
    };
    const data = await postDataServer(postData);
    console.log(data, data);
    toast.dismiss()
    toast.success('Successfully Added!');
    setFormData({
    
      item: "",
      firstPrice: "",
      firstUnit: "",
      secPrice: "",
      secUnit: "",
      thirdPrice: "",
      thirdUnit: "",
    })
  };

  return (
    <div>
      <form
        onSubmit={handlesumbit}
        className="flex flex-col min-h-screen space-y-12 p-10 md:py-24 lg:px-20 xl:px-56"
      >
<div className="flex flex-col lg:flex-row justify-between items-center mb-4">
  <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-0">Upload Results Here</h2>
  <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto text-center">
    <button 
      onClick={() => navigate('/admin/AddImage')}
      className="px-4 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50"
    >
      Add Image
    </button>
    <button 
      onClick={() => navigate('/')}
      className="px-4 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50"
    >
      Go Home
    </button>
  </div>
</div>

    
        <div className="flex flex-col space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-7 lgLgap-10">
            <div className="flex flex-col gap-2">
              <label for="category" className="text-lg font-medium ">
                Category
              </label>
              <select
                onChange={handleCategoryChange}
                id="category"
                className="w-full h-full p-2 border rounded bg-slate-50 hover:bg-slate-100"
              >
                <option value="">Select Category</option>
                {categories.map((catecory) => (
                  <option key={catecory} value={catecory}>
                    {catecory}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label for="item" className="text-lg font-medium ">
                Item
              </label>
              <select
                id="item"
                value={formData.item}
                onChange={handleformData}
                className="w-full h-full p-2 border rounded bg-slate-50 hover:bg-slate-100"
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
          <div className="grid grid-cols-1 grid-rows-3 gap-7 lg:gap-10">
            {/* first */}
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-semibold bg2 p-3 px-5 w-full rounded-t-3xl bg-opacity-50">
                First Price
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-5">
                <div className="flex flex-col gap-2">
                  <label for="firstName" className="font-medium text-lg">
                    Name
                  </label>
                  <input
                    id="firstPrice"
                    value={formData.firstPrice}
                    onChange={handleformData}
                    className="w-full p-2 border rounded bg-slate-50 hover:bg-slate-100"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label for="firstSector" className="font-medium text-lg">
                    Team{" "}
                  </label>
                  <select
                    id="firstUnit"
                    value={formData.firstUnit}
                    onChange={handleformData}
                    className="w-full h-full p-2 border rounded bg-slate-50 hover:bg-slate-100"
                  >
                    <option value="">Select Team</option>
                    {sectors.map((sector) => (
                      <option key={sector} value={sector}>
                        {sector}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            {/* second */}
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-semibold bg2 p-3 px-5 w-full rounded-t-3xl bg-opacity-50">
                Second Price
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-5">
                <div className="flex flex-col gap-2">
                  <label for="secondName" className="font-medium text-lg">
                    Name
                  </label>
                  <input
                    id="secPrice"
                    value={formData.secPrice}
                    onChange={handleformData}
                    className="w-full p-2 border rounded bg-slate-50 hover:bg-slate-100"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label for="secondSector" className="font-medium text-lg">
                  Team
                  </label>
                  <select
                    id="secUnit"
                    value={formData.secUnit}
                    onChange={handleformData}
                    className="w-full h-full p-2 border rounded bg-slate-50 hover:bg-slate-100"
                  >
                    <option value="">Select Team</option>
                    {sectors.map((sector) => (
                      <option key={sector} value={sector}>
                        {sector}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* third */}
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-semibold bg2 p-3 px-5 w-full rounded-t-3xl bg-opacity-50">
                Third Price
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-5">
                <div className="flex flex-col gap-2">
                  <label for="thirdName" className="font-medium text-lg">
                    Team
                  </label>
                  <input
                    id="thirdPrice"
                    value={formData.thirdPrice}
                    onChange={handleformData}
                    className="w-full p-2 border rounded bg-slate-50 hover:bg-slate-100"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label for="thirdSector" className="font-medium text-lg">
                  Team
                  </label>
                  <select
                    id="thirdUnit"
                    value={formData.thirdUnit}
                    onChange={handleformData}
                    className="w-full h-full p-2 border rounded bg-slate-50 hover:bg-slate-100"
                  >
                    <option value="">Select Team</option>
                    {sectors.map((sector) => (
                      <option key={sector} value={sector}>
                        {sector}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="sumbit"
          className="w-full p-3 px-12 text-xl font-semibold text-white rounded shadow-md bg-black hover:bg-gray-800"
        >
          Submit
        </button>
      </form>

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
      <Toaster />
    </div>
  );
}

export default AdminSide;
