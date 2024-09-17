import React from 'react';

function TeamPoint() {
  // Dummy data for teams and their points
  const teams = [
    { name: 'Fath-hul Kareem', points: 569 },
    { name: 'Fath-hunoor', points: 487 },
    { name: 'Fath-hussamad', points: 474 }
  ];

  return (
    <div className="p-6 bg-[#FADFA1]">
      <h1 className="text-4xl font-bold mb-6 text-black text-center">Final Result</h1>
      <table className="min-w-full bg-white shadow-lg overflow-hidden rounded-lg">
        <thead>
          <tr className="bg-[#9fb973] text-white">
            <th className="py-3 px-4 rounded-tl-lg">Position</th>
            <th className="py-3 px-4">Team</th>
            <th className="py-3 px-4 rounded-tr-lg">Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index} className={`${index % 2 === 1 ? 'bg-orange-50' : 'bg-white'}`}>
              <td className="py-3 px-4 text-center text-lg font-semibold text-orange-700">{index + 1}</td>
              <td className="py-3 px-4 text-lg text-gray-800">{team.name}</td>
              <td className="py-3 px-4 text-center text-lg font-semibold text-red-600">{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeamPoint;
