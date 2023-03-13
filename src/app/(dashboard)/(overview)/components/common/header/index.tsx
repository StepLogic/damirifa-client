import React, { useContext, useState } from "react";
import s from "./index.module.css";
import cn from "classnames";
import { Button } from "@components/ui/dashboard";
import { BiDashboardCreate } from "@components/icons";
// import { ActiveMenuEnum } from "@layouts/dashboard";
import { VscThreeBars } from "react-icons/vsc";
import { Context } from "../../context";
import AddButton from "@components/AddButton";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
}

const Header: React.FC<Props> = (props) => {
  const { className } = props;
  // const [showObituaryDropdown, setShowObituaryDropdown] = useState(false);
  // const [showPublishDropdown, setShowPublishDropdown] = useState(false);
  const { setCollapse } = useContext(Context);
  const router = useRouter();
  return (
    <header className={cn(s.root, className)}>
      <Button
        variant="outline"
        color="secondary"
        className={s.hamburger}
        onClick={() =>
          setCollapse((current) => {
            // console.log("hello.", current);
            if (current === 0) {
              return 2;
            } else {
              return 0;
            }
          })
        }
      >
        <VscThreeBars />
      </Button>
      <div className="flex flex-row gap-10 ml-auto lg:ml-0 mr-4 lg:mr-0">
        <p className={cn(s.damirifaTextLogo, "!hidden lg:!block")}>Damirifa</p>
        <div className={s.search}>
          <AiOutlineSearch color="#A5AAB5" />
          <input type="search" placeholder="Search something..." />
        </div>
      </div>
      <div className="flex flex-row items center gap-4">
        <AddButton label="Create" className={s.createButton} />
        <div className={s.profileImage}>
          <p>JB</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
