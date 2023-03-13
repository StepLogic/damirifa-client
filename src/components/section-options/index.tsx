import { Dropdown } from "@components/ui/common";
import { Button } from "@components/ui/dashboard";
import { formFields } from "@views/dashboard/announcement/edit-announcement";
import cn from "classnames";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCaretDownFill, BsChevronRight } from "react-icons/bs";
import { v4 as uuid } from "uuid";

import s from "./index.module.css";
import { menuOptions } from "../../utils/views/dashboard/announcement";
import { useCSR } from "@components/navigator";
import { useRouter } from "next/navigation";

type Props = {
  label: string;
  formType: "announcement" | "funeral-fund";
  className?: string;
};

function SectionOptions(props: Props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const { label, formType } = props;
  const router = useRouter();
  return (
    <>
      <div className={s.root}>
        <div className={s.dropdownBar}>
          <Dropdown
            show={showDropdown}
            className={"w-full"}
            toggle={() => setShowDropdown((current) => !current)}
          >
            <Dropdown.Toggle>
              <div className="flex flex-row items-center justify-between px-4">
                <h4 className={cn(s.headline, "")}>{label} </h4>
                <BsCaretDownFill
                  className={cn({
                    ["rotate-180 transition-transform"]: showDropdown,
                  })}
                />
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu variant="default" className={s.dropdown}>
              <div className={s.header}>
                <p>What do you want to do?</p>
                <Button
                  variant="outline"
                  color="secondary"
                  onClick={() => setShowDropdown(false)}
                  className={s.button}
                >
                  <AiOutlineClose />
                </Button>
              </div>
              <div className={s.options}>
                {menuOptions.map((option) => {
                  const Icon = option.icon;
                  return option.disabled ? (
                    <></>
                  ) : (
                    <Dropdown.Item
                      data-disabled={`${option.disabled}`}
                      key={uuid()}
                      onClick={() => {
                        setShowDropdown((current) => !current);
                        !option.disabled &&
                          router.push(`/dashboard/1/${option.name}`);
                      }}
                      className={s.item}
                    >
                      <div className={s.icon}>
                        <Icon />
                      </div>
                      <p>{option.label}</p>
                      {!option.disabled && (
                        <BsChevronRight className={s.arrowSvg} />
                      )}
                    </Dropdown.Item>
                  );
                })}
              </div>
            </Dropdown.Menu>
          </Dropdown>
          <div className={s.progressBar}>
            <div className={s.bar} />
          </div>
        </div>
        <Button disabled variant="fill" className={s.pill}>
          58% to Post
        </Button>
      </div>
    </>
  );
}

export default SectionOptions;
