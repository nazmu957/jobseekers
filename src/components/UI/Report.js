import React from 'react';
import { FaFileAlt } from "react-icons/fa";


const ReportCard = () => {
      const cards = [
        { number: "7634+", icon: "🚀", subtitle: "Total Apply" },
        { number: 262, icon: "🌟", subtitle: "Confirmed Application" },
        { number: 356, icon: "🔥", subtitle: "Actively hired" },
        { number: 4654, icon: "💻", subtitle: "Total Employ" },
      ];
    return (
      <div className="flex flex-wrap">
        
        {cards.map((card) => (
          <div
            key={card.number}
            className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4"
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4 flex justify-between text-[#1F2761]">
                {card.number}
                <FaFileAlt className="text-xl  mt-3" />
              </div>
              <div className="text-2xl mb-4">{card.icon}</div>
              <div className="text-md ">{card.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default ReportCard;