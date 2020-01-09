import React from "react";

import ActiveShapeWrapper from "./activeShape.style";

interface IProps {
  isActive: boolean;
}

const ActiveShape: React.FC<IProps> = ({ isActive }) => {
  return (
    <ActiveShapeWrapper title={isActive ? "Active" : "Inactive"}>
      {isActive ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          width="16px"
          height="16px"
        >
          <path
            fill="#bae0bd"
            d="M20,38.5C9.799,38.5,1.5,30.201,1.5,20S9.799,1.5,20,1.5S38.5,9.799,38.5,20S30.201,38.5,20,38.5z"
          />
          <path
            fill="#5e9c76"
            d="M20,2c9.925,0,18,8.075,18,18s-8.075,18-18,18S2,29.925,2,20S10.075,2,20,2 M20,1 C9.507,1,1,9.507,1,20s8.507,19,19,19s19-8.507,19-19S30.493,1,20,1L20,1z"
          />
          <path
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M11 20L17 26 30 13"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          width="16px"
          height="16px"
        >
          <path
            fill="#f78f8f"
            stroke="#c74343"
            strokeMiterlimit="10"
            d="M20,1C9.507,1,1,9.507,1,20s8.507,19,19,19s19-8.507,19-19	S30.493,1,20,1z M6,20c0-7.732,6.268-14,14-14c2.963,0,5.706,0.926,7.968,2.496L8.496,27.968C6.926,25.706,6,22.963,6,20z M20,34	c-2.963,0-5.706-0.926-7.968-2.496l19.472-19.472C33.074,14.294,34,17.037,34,20C34,27.732,27.732,34,20,34z"
          />
        </svg>
      )}
    </ActiveShapeWrapper>
  );
};
export { ActiveShape };
