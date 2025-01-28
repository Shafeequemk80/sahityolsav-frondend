import React, { useEffect, useState } from 'react';
import { scoreData } from '../src/api/apiCall';
import toast, { Toaster } from 'react-hot-toast';
import {teams}from './data'
const ScoreAd = () => {
  

  const [formState, setFormState] = useState({});
  const [errors, setErrors] = useState({});

  const handlePointChange = (e, team) => {
    const points = parseInt(e.target.value, 10) || 0;
    setFormState({
      ...formState,
      [team]: points,
    });
    // Clear error when the user corrects the input
    if (errors[team]) {
      setErrors({
        ...errors,
        [team]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    teams.forEach((team) => {
      if (!formState[team] && formState[team] !== 0) {
        newErrors[team] = 'Points are required';
        isValid = false;
      } else if (formState[team] < 0) {
        newErrors[team] = 'Points cannot be negative';
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the errors before submitting.');
      return;
    }

    toast.loading('Adding scores...');
    console.log('Submitted Form Data:', formState);
    
    const response = await scoreData(formState);
    toast.dismiss();

    if (response.message === true) {
      toast.success('Scores added successfully');
      setFormState({}); // Reset form after successful submission
    } else {
      toast.error('Failed to add scores');
    }
  };

  return (
    <div className="border-x-2 border-b-2 border-theme_black w-full pb-10 pt-6 px-4 lg:px-16">
      <h1 className="mb-6 text-black font-poppins font-semibold text-center text-3xl">
        Results
      </h1>
      <form onSubmit={handleSubmit} className="mb-16 grid grid-cols-1 sm:grid-cols-2 gap-6 font-poppins">
        {teams.map((team) => (
          <React.Fragment key={team}>
            <label className="w-full cursor-pointer border p-3">
              {team === 'ManjeriEast' ? "Manjeri East" : team === 'ManjeriWest' ? "Manjeri West" : team}
              <input
                type="text"
                className={`w-full cursor-pointer border border-theme_black p-3 placeholder:text-black mt-2 ${errors[team] ? 'border-red-500' : ''}`}
                placeholder="Enter Point"
                value={formState[team] || ''}
                onChange={(e) => handlePointChange(e, team)}
              />
              {errors[team] && <span className="text-red-500 text-sm">{errors[team]}</span>}
            </label>
          </React.Fragment>
        ))}
        <button
          className="border border-theme_black cursor-pointer bg-gray-900 p-3 text-white font-medium col-span-1 sm:col-span-2"
          type="submit"
        >
          Upload
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default ScoreAd;
