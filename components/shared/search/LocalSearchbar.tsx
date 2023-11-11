"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";

interface LocalSearchbarProps {
  route: String;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
}

const LocalSearchbar = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: LocalSearchbarProps) => {
  return (
    <div
      className={`${otherClasses} background-light800_darkgradient flex 
      min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 `}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          alt="Search icon"
          width={24}
          height={24}
          className={`${otherClasses} cursor-pointer`}
        />
      )}
      <Input
        type="text"
        placeholder={placeholder}
        value=""
        onChange={() => {}}
        className="no-focus paragraph-regular placeholder background-light800_darkgradient 
        text-dark400_light700 border-none shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearchbar;
