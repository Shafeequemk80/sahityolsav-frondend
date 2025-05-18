import React, { useEffect, useState } from 'react'
import { addBrochure, addDescription, getBrochure, getDescription } from '../api/apiCall';
import toast, { Toaster } from "react-hot-toast";
const imageClass = 'object-cover w-full h-full rounded-md'


function AddBrochure() {
  const [brochure, setBrochure] = useState(null, null, null)
  const [uploadFiles, setUploadFiles] = useState([null, null, null])

  useEffect(() => {
    async function fetchData() {
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

    }
    fetchData()
  }, [])

  const [image, setImage] = useState('');
  const [description, setDescription] = useState('')
  const maxLength = 1500
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getDescription();

        console.log(response);
        setDescription(response.data);
      } catch (error) {
        console.error(error.message);
        // No need for an additional toast here — toast.promise handles the error toast.
      }
    }

    fetchData();
  }, []);

  async function handleSaveDescription() {
    try {
      const response = await toast.promise(
        addDescription(description),
        {
          loading: 'Saving...',
          success: 'Description saved successfully!',
          error: 'Failed to save description.',
        }
      );
      console.log(response);
      setDescription(response.data.description); // or just `response.data` if that fits your structure
    } catch (error) {
      console.error("Save failed:", error);
      // No need to show toast.error again — toast.promise already handled it
    }
  }

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

  const  handleSubmit=async ()  =>{
    const formData= new FormData()
    uploadFiles.forEach((file,index) => {
      formData.append(`image${index+1}`,file)
    });

    const responce =await toast.promise(
      addBrochure(formData),
      {
        loading: 'Saving...',
        success: 'Brochure saved successfully!',
        error: 'Failed to save Brochure.',
      }
    )
  }

  return (
    <>
      <div className='w-full h-auto   flex-col bg-lime-50 flex justify-center items-center'>
        <div className='mb-10 mt-10'>
          <h3 className='font-bold text-3xl'>Add brochure</h3>
        </div>
        <div className=' grid grid-cols-1 md:grid-cols-3 gap-6 pb-16 px-10 xl:px-56'>

          {brochure && brochure.map((img, index) => (
            <>
              <img
                key={index} className={imageClass} src={img} alt="Gallery"
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
        <div className='relative  flex sm:max-w-4xl  max-w-full px-5 mb-5 '>
          {/* w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 shadow-sm transition */}
          <textarea className="w-screen  rounded-lg border border-grey-300 px-4 py-6 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-lime-500 shadow-sm transition"
            value={description}
            rows={5}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Type The Desicription '
            maxLength={maxLength}
            name="description" id="">
          </textarea>
          <div className='text-right flex justify-end absolute top-1 right-8 text-sm text-gray-500 mt-1'>{description && description.length}/{maxLength}</div>
          <button
            onClick={() => handleSaveDescription()}
            className='bg-blue-700 absolute bottom-3 right-9 px-4 py-1 text-sm text-white rounded'>Save</button>
        </div>
      </div>
      <Toaster />
    </>
  )
}

export default AddBrochure