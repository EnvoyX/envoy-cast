"use client";
import Image from "next/image";
import { useState } from "react";

const DropdownList = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="filter-trigger">
          <figure>
            <Image
              src={`/assets/icons/hamburger.svg`}
              alt="menu"
              width={14}
              height={14}
            />
            Most Recent
            <Image
              src={`/assets/icons/arrow-down.svg`}
              alt="arrow"
              width={14}
              height={14}
            />
          </figure>
        </div>
      </div>
      {isOpen && (
        <ul className="dropdown">
          {["Most recent", "Most liked", "Most viewed"].map((option) => (
            <li key={option} className="list-item">
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownList;
