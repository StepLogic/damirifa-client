'use client';
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Dropdown } from "./ui/common";
import { Button } from "./ui/dashboard";
import cn from "classnames";

type Props = {
  className?: string;
  dropdownClassName?: string;
};

function OptionsButton(props: Props) {
  const { className, dropdownClassName } = props;
  const [showDropdown, toggleDropdown] = useState(false);
  return (
    <Dropdown
      show={showDropdown}
      toggle={() => toggleDropdown((current) => !current)}
      className={cn("ml-auto", dropdownClassName)}
    >
      <Dropdown.Toggle>
        <Button variant="default">
          <BsThreeDotsVertical color="#BA181B" />
        </Button>
      </Dropdown.Toggle>
      <Dropdown.Menu
        className="w-[280px] !h-[160px] !rounded-[4px] pt-[19px] px-[23px] pb-[23px]"
        x="left"
        variant="default"
      >
        <p className="!h-[37px] pl-[6px]">Actions</p>
        <div className="w-full h-[0.5px] bg-[#E7E7E7]" />
        <Dropdown.Item className="!pl-[4px] !h-[36px] flex flex-col justify-center">
          Edit
        </Dropdown.Item>
        <Dropdown.Item className="!pl-[4px] !h-[36px] flex flex-col justify-center">
          Remove
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default OptionsButton;
