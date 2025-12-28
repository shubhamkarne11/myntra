// import React from "react";

// const Card = (props) => {
//   return (
//     <>
//       {/* https://m.media-amazon.com/images/I/511O-a9eUyL.jpg */}
//         <div className="flex bg-[green] h-72 w-53 flex-col justify-center items-center mb-[30px] ml-6 mr-6 ">
//           <img
//             src={props.imgsrc}
//             alt="cardimg"
//             className="w-46 h-46"
//           />
//           <p className="text-white font-bold text-[15px]">{props.name}</p>
//           <p className="text-white font-bold text-[26px] mt-0">{props.off1}-{props.off2}% OFF</p>
//           <p className="text-white font-bold text-[15px] mt-0">{props.btname}</p>
//         </div>
//     </>
//   );
// };

// export default Card;

import React from "react";

const Card = ({ imgsrc, name, off1, off2, btname }) => {
  return (
    <div className="bg-[#2e7d32] w-53 h-74 flex flex-col items-center p-4">
      
      {/* Image */}
      <div className="bg-white p-3 mb-3">
        <img
          src={imgsrc}
          alt={name}
          className="w-40 h-40 object-contain"
        />
      </div>

      {/* Text */}
      <p className="text-white text-sm tracking-wide">
        {name}
      </p>

      <p className="text-white text-2xl font-bold leading-tight">
        {off1}-{off2}% OFF
      </p>

      <p className="text-white text-xs opacity-90">
        {btname}
      </p>
    </div>
  );
};

export default Card;

