import Image from "next/image";
import React from "react";

const AchievmentCard = ({ src, detail }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 my-2">
      <Image
        src={"/img/hero-picture.jpeg"}
        alt={""}
        width={500}
        height={500}
        style={{ width: "100%", borderRadius: 8 }}
        objectFit="cover"
        priority
      />
      <div className="p-5">
        <p className="mb-3 font-medium text-gray-700 dark:text-gray-400 ">
          {detail}
        </p>
      </div>
    </div>
  );
};

export default AchievmentCard;
