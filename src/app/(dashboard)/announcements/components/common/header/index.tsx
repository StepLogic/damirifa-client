import { BiNewLink, EosClusterManagement, BiDraft } from "@components/icons";
import { useCSR } from "@components/navigator";
import { ViewTree } from "@components/navigator/constants";
import { Dropdown } from "@components/ui/common";
import { Button, Textfield } from "@components/ui/dashboard";
import { uuid } from "@lib/Utils";
import cn from "classnames";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { BsCaretDownFill, BsChevronLeft } from "react-icons/bs";
import s from "./index.module.css";
import AnnouncementItem from "./partials/AnnouncementItem";

interface Props {
  className?: string;
}

const Header: React.FC<Props> = (props) => {
  const { className } = props;
  const [showObituaryDropdown, setShowObituaryDropdown] = useState(false);
  const [showPublishDropdown, setShowPublishDropdown] = useState(false);
  const router = useRouter();
  // const handelBack = () => {
  //   navigator.goBack();
  // };
  const announcements = [{ name: "" }];
  return (
    <header className={cn(s.root, className)}>
      <Button variant="icon" onClick={() => router.back()}>
        <BsChevronLeft className={s.caret} />
      </Button>
      <Dropdown
        show={showObituaryDropdown}
        variant="dropdown"
        toggle={setShowObituaryDropdown}
      >
        <Dropdown.Toggle>
          <div className={s.announcementDropdown}>
            <p>Miriam Makiba</p>
            <div role="text" className={cn(s.pill, "")}>
              obituary
            </div>
            <BsCaretDownFill />
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu variant="default" className={s.dropMenu}>
          {/* <div className={s.dropMenu}> */}
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-x-1">
              <Button
                variant="icon"
                className={s.icon}
                onClick={() => router.push("/dashboard/details-announcement")}
              >
                <EosClusterManagement />
              </Button>
              <p className={s.label}>Announcements</p>
            </div>
            <Button
              variant="outline"
              color="secondary"
              className={s.createButton}
              onClick={() => setShowObituaryDropdown(false)}
            >
              <AiOutlineClose />
            </Button>
          </div>
          <div className={s.searchField}>
            <AiOutlineSearch />
            <Textfield
              variant="default"
              placeholder={"Search details-announcement..."}
              className={s.textfield}
            />
          </div>
          {announcements.map((item) => (
            <Dropdown.Item className={s.item} key={uuid()}>
              <AnnouncementItem />
            </Dropdown.Item>
          ))}

          {/* </div> */}
        </Dropdown.Menu>
      </Dropdown>
      <div className={s.publishNotification}>
        <div className={s.toggle} />
        <p>Published</p>
      </div>
      <Dropdown
        show={showPublishDropdown}
        variant="dropdown"
        toggle={setShowPublishDropdown}
      >
        <Dropdown.Toggle>
          <button className={s.dropdownButton}>
            <BsCaretDownFill />
          </button>
        </Dropdown.Toggle>
        <Dropdown.Menu x="left" variant="default" className={s.publishDropdown}>
          <p>Actions</p>
          <div className={s.divider} />
          <Dropdown.Item
            className={s.item}
            // onClick={() => ref.current?.openModal()}
          >
            <span>Open Published</span>
            <BiDraft />
          </Dropdown.Item>
          <Dropdown.Item
            className={s.item}
            // onClick={() => ref.current?.openModal()}
          >
            <span> Open Draft</span>
            <BiNewLink />
          </Dropdown.Item>
          <div className={s.divider} />

          <Button
            label={"Unpublish"}
            variant={"default"}
            className={cn(s.item, s.button)}
          />
        </Dropdown.Menu>
      </Dropdown>
    </header>
  );
};

export default Header;
