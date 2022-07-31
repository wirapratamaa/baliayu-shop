import React from "react";

const VisiMission = () => {
  return (
    <div className="flex flex-row space-x-2 px-5">
      <div className="flex flex-1 flex-col border p-4 rounded">
        <h2 className="text-center font-bold text-2xl">VISION</h2>
        <p>
          - To become a leading company in the field of beauty products by
          utilizing natural sources to produce environmentally friendly
          products.
        </p>
      </div>
      <div className="flex flex-1 flex-col border p-4 rounded">
        <h2 className="text-center font-bold text-2xl">MISSION</h2>
        <p>
          - Prioritizing quality service to all customers who end buyer
          oriented.
        </p>
        <p>
          - Producing safe and quality products in accordance with statutory
          regulations valid invitation.
        </p>
        <p>
          - Protecting the environment through the use of natural raw materials.
        </p>
      </div>
    </div>
  );
};

export default VisiMission;
