import React, { useState, useEffect } from "react";
import { getBrochure, getDescription } from '../api/apiCall'
function Footer() {
  const [description, setDescription] = useState('')
  const [brochure, setBrochure] = useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        const responce = await getDescription()
        console.log(responce)
        setDescription(responce.data)
        toast.success(`Yes, ${responce.message}}`);

      } catch (error) {
      }
    }
    fetchData()
  }, [])



  useEffect(() => {
    async function fetchData() {
      const response = await getBrochure()

      setBrochure(response.data)

    }
    fetchData()
  }, [])
  return (
    <>

      <div className="flex flex-col gap-8 py-14 mt-4 text-center w-full px-10 xl:px-56">
        <h2 className="text-4xl lg:text-5xl  font-bold">
          What's Theme
        </h2>
        <p className="text-lg lg:text-xl font-thin text-justify">{description} </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-16 px-10 xl:px-56">


        {Object.values(brochure || {}).map((imgObj, index) => (
          imgObj?.path && (
            <img
              key={index}
              src={imgObj.path}
              className="object-cover h-full w-full rounded-md "
              alt={`Gallery ${index + 1}`}
            />
          )
        ))} 

        {/* <img
          src="/image2.jpg"
          className="object-cover h-full w-full rounded-md"
          alt="Gallery"
        /> */}
      </div>

      <footer className="px-5 md:px-10 lg:px-10 xl:px-36 w-full gap-5 sm:max-w-full bg-[#151622] flex flex-col items-center justify-center">
        <h1 className="text-white mt-8 font-semibold text-sm lg:text-xl">
          JUBILO Program committe
        </h1>
        {/* <div className="flex items-center justify-center text-white gap-1">
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
        </div> */}
        <h1 className="text-gray-100  -mt-3 mb-5">
          <span className="text-xl">&copy;</span> Designed <a href='https://wa.link/m0k31s'>By Shafeeque Sa'adi</a>
        </h1>
      </footer>

    </>
  )
}

export default Footer
