import React from "react";

function CustomCard() {
  return (
    <div class=" cursor-pointer  rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] mx-5 md:mx-0 relative group">
      <img
        src="https://readymadeui.com/Imagination.webp"
        alt="Blog Post 1"
        class="w-full h-96 object-cover"
      />
      <div class="p-6 absolute bottom-0 left-0 right-0  bg-[#e6480a66] opacity-90">
        <span class="text-sm block text-gray-100 mb-2">
          10 FEB 2023 | BY JOHN DOE
        </span>
        <h3 class="text-xl font-bold text-gray-100">
          A Guide to Igniting Your Imagination
        </h3>
        <div class="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
          <p class="text-gray-100 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            accumsan, nunc et tempus blandit, metus mi consectetur felis turpis
            vitae ligula.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CustomCard;
