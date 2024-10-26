import React, { useEffect, useState } from 'react';
import { scoreData } from '../src/api/apiCall';
import toast, { Toaster } from 'react-hot-toast';

const ScoreAd = () => {
  const teamPoints = [
    'Al Fathah', 'Velliparamba', 'Kuttikkattoor', 'Kuttpadam', 'Kaniyath',
    'Periya', 'Hidaya', 'Ummalathoor', 'Kovoor', 'Chevayoor',
    'Poovattuparamba', 'Kottayithazham'
  ];
  

  
  const [formState, setFormState] = useState({});

 

  const handlePointChange = (e, team) => {
    const points = parseInt(e.target.value, 10) || 0;
    setFormState({
      ...formState,
      [team]: points,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading('Adding scores...');
    console.log('Submitted Form Data:', formState);
    const response = await scoreData(formState);
    toast.dismiss();
    if (response.message === true) {
      toast.success('Scores added successfully');
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
        {teamPoints.map((team,i) => (
          <React.Fragment key={team}>
            <label className="w-full cursor-pointer border p-3">
              {team === 'ManjeriEast' ? "Manjeri East" : team === 'ManjeriWest' ? "Manjeri West" : team}
              <input
                type="text"
                className="w-full cursor-pointer border border-theme_black p-3 placeholder:text-black mt-2"
                placeholder="Enter Point"
                value={formState[team] }
                onChange={(e) => handlePointChange(e, team)}
              />
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
