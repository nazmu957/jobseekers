import React from "react";

const Slogan = () => {
  return (
    <div
      style={{
        position: "relative",
        backgroundImage:
          'url("https://img.freepik.com/free-photo/top-view-person-writing-laptop-with-copy-space_23-2148708035.jpg?w=1800&t=st=1704796267~exp=1704796867~hmac=93d1e4515542a13bbe6240467429d7efb76b5fc1fa64c1d977800c19f43deb7e")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "20rem",
        width: "100%",
      }}
      className="flex items-center justify-center "
    >
      {/* Semi-transparent overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(2, 0, 0, 0.5)", // Adjust the alpha channel for opacity
        }}
      ></div>

      <div className="text-center text-white relative z-10 font-serif">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-xl xl:text-4xl ">
          Join the Largest Job Site of Asia
        </h1>
        <p className="py-3 text-sm sm:text-base md:text-lg lg:text-md xl:text-2xl">
          Get relevant training and develop yourself as a keen professional to
          stand out in this competitive job market.
        </p>
        <button className="bg-[#1E2761] text-white px-8 py-2 text-sm sm:text-base md:text-lg lg:text-md ">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Slogan;
