import React from "react";

const ProgressBar = () => {
  return (
    <div>
      

     

     <div class=" w-full bg-white p-8 rounded-md shadow-md">
    <h2 class="text-xl font-semibold mb-4">Monthly Response Rate</h2>
    
   
    <div class="space-y-4">
    
      <div class="flex items-center justify-between">
        <div>
          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
            January
          </span>
        </div>
        <div class="text-right">
          <span class="text-xs font-semibold inline-block text-teal-600">
            30%
          </span>
        </div>
      </div>
      <div class="relative pt-1">
        <div className="flex space-x-2">
          <div style={{ width: '30%' }} className="h-2 bg-gradient-to-r from-teal-500 to-teal-300 rounded-full"></div>
        </div>
      </div>

    
      <div class="flex items-center justify-between">
        <div>
          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
            December
          </span>
        </div>
        <div class="text-right">
          <span class="text-xs font-semibold inline-block text-blue-600">
            60%
          </span>
        </div>
      </div>
      <div class="relative pt-1">
        <div className="flex space-x-2">
          <div style={{ width: '60%' }} className="h-2 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"></div>
        </div>
      </div>

     
      <div class="flex items-center justify-between">
        <div>
          <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
            November
          </span>
        </div>
        <div class="text-right">
          <span class="text-xs font-semibold inline-block text-purple-600">
            90%
          </span>
        </div>
      </div>
      <div class="relative pt-1">
        <div className="flex space-x-2">
          <div style={{ width: '90%' }} className="h-2 bg-gradient-to-r from-purple-500 to-purple-300 rounded-full"></div>
        </div>
      </div>
    </div>

  </div>
    </div>
  );
};

export default ProgressBar;
