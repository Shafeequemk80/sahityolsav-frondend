import React, { useEffect, useState } from 'react'
import { addBrochure, getBrochure } from '../api/apiCall';
import toast, { Toaster } from "react-hot-toast";
import { BarLoader } from "react-spinners";

const imageClass = 'object-cover w-full h-full rounded-md'
let dummy = "https://dummyimage.com/350x350/000/fff.png&text=Please+Click+me"


function AddBrochure() {
  const [loading, setLoading] = useState(false)
  const [brochure, setBrochure] = useState([null, null, null])
  const [uploadFiles, setUploadFiles] = useState([null, null, null])

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const response = await toast.promise(
          getBrochure(),
          {
            loading: 'Fetching description...',
            success: (res) => `Yes, ${res.message}`,
            error: 'Failed to fetch description. Please try again.',
          }
        )
        const data = response.data
        const newImage = [
          data.image1.path ? data.image1.path : null,
          data.image2.path ? data.image2.path : null,
          data.image3.path ? data.image3.path : null,
  
        ]
        setBrochure(newImage)
  
      } catch (error) {
        console.error("Error fetching brochure:", err);

      }finally {
        setLoading(false);
      }
     
    }
    fetchData()
  }, [])




  const handleImageClick = (index) => {
    document.getElementById(`fileInput${index}`).click()
  }
  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const newImages = [...brochure]
      newImages[index] = URL.createObjectURL(file)
      console.log('okay1')
      setBrochure(newImages)

      const newUploadFiles = [...uploadFiles]
      newUploadFiles[index] = file
      setUploadFiles(newUploadFiles)
    }
  }

  const handleSubmit = async () => {
    const formData = new FormData()
    uploadFiles.forEach((file, index) => {
      formData.append(`image${index + 1}`, file)
    });

    const responce = await toast.promise(
      addBrochure(formData),
      {
        loading: 'Saving...',
        success: 'Brochure saved successfully!',
        error: 'Failed to save Brochure.',
      }
    )
  }

  return (
    <>{loading ? (<div className="w-[100vw] h-[100vh] flex justify-center items-center  ">
      <BarLoader />
    </div>) : (
      <div className='w-full h-auto   flex-col bg-lime-50 flex justify-center items-center'>
        <div className='mb-10 mt-10'>
          <h3 className='font-bold text-3xl'>Add brochure</h3>
        </div>
        <div className=' grid grid-cols-1 md:grid-cols-3 gap-6 pb-16 px-10 xl:px-56'>

          {brochure.map((img, index) => (
            <>
              <img
                key={index} className={imageClass} src={img ? img : dummy} alt="Gallery"
                onClick={() => handleImageClick(index)} />
              <input type="file" id={`fileInput${index}`} hidden
                onChange={(e) => handleImageUpload(e, index)} />
            </>
          ))}

          {/* <img className={imageClass} src="/image1.jpg" alt="Gallery" />
          <img className={imageClass} src="/image2.jpg" alt="Gallery" /> */}

        </div>

        <div>
          <button
            onClick={handleSubmit}
            className='px-9 py-2 bg-[#5d772f] mb-10 text-black font-semibold rounded-md hover:bg-[#8aa857]'>Submit</button>

        </div>

      </div>)}
      <Toaster />
    </>
  )
}

export default AddBrochure