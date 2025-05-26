import React, { useState } from 'react'
import { addTitle } from '../api/apiCall';
import toast, { Toaster } from 'react-hot-toast'

function AddTitle() {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const trimmed = title.trim()
        if (trimmed === "") {
            setErrors('Title name is required')
            return;
        }

        try {

            const response = await toast.promise(
                addTitle(trimmed),
                {
                    loading: 'Loading...',
                    success: 'Title successfully!',
                    error: 'Failed to add Title ',
                }
            )
            console.log(response);


            setErrors('')
            if (response.title) {
                setTitle(response.title)
            }

        } catch (error) {
            console.log(error.message);

        }
    };
    const [error, setErrors] = useState('')
    const [title, setTitle] = useState('')
    const handlePointChange = (e) => {
        const text = e.target.value
        setTitle(text)
        if (error) setErrors('')
    };

    return (
        <>
            <div>
                <form
                    onSubmit={handleSubmit}
                    className="mb-16 flex w-full items-center justify-center gap-6 font-poppins 
               flex-col md:flex-row border p-4"
                >
                    <label className="w-full cursor-pointer p-3 md:flex-1">
                        Add Title
                        <input
                            type="text"
                            className={`w-full cursor-pointer border border-theme_black p-3 placeholder:text-black mt-2 ${error ? 'border-red-500' : ''
                                }`}
                            placeholder="Enter Title"
                            value={title}
                            onChange={(e) => handlePointChange(e)}
                        />
                        {error && <span className="text-red-500 text-sm">{error}</span>}
                    </label>

                    <button
                        type="submit"
                        className="border border-theme_black cursor-pointer md:mt-8 bg-gray-900 p-3 text-white font-medium w-full md:w-auto"
                    >
                        Save Title
                    </button>
                </form>
            </div>
            <Toaster />
        </>

    )
}

export default AddTitle