import Badge from "@components/Badge";
import { useCSR } from "@components/navigator";
import { ClickOutside, Image } from "@components/ui/common";
import { uuid } from "@lib/Utils";
import cn from "classnames";
import {usePathname, useRouter } from "next/navigation";
import React, { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import { BsChevronLeft } from "react-icons/bs";

import { MenuCollapse } from "../../index";
import { Context } from "../../context";
import { MenuItems, MenuItemsAlt } from "./constants";
import s from "./index.module.css";

interface Props {
  profileImage?: string;
  className?: string;
  state?: MenuCollapse;
  sidebarAlt: boolean;
}

const SideBar: React.FC<Props> = (props) => {
  const { profileImage = "", className, sidebarAlt, ...rest } = props;
  const router = useRouter();
  const path =usePathname()
  const menuRef = useRef<HTMLElement>(null);
  const { collapse, setCollapse } = useContext(Context);
  const [title, setTitle] = useState();
  // const getInfoFromRoute = () => {
  //   let route = navigator.route;
  //   let routeItems = route.split("/");
  //   if (routeItems.at(-2) === "inner") {
  //     let title = routeItems.at(-1)?.split("-").join(" ");
  //     setTitle(title);
  //   } else {
  //     setTitle(undefined);
  //   }
  // };
  // useEffect(() => {
  //   getInfoFromRoute();
  // }, [navigator.route]);
  return (
    <ClickOutside
      active={collapse}
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
      <aside
        ref={menuRef}
        data-collapse={`${collapse}`}
        className={cn(s.root, className)}
        {...rest}
      >
        {sidebarAlt ? (
          <div className="mb-5">
            <div className="flex flex-row items-center gap-6 my-4">
              <button onClick={() => router.back()}>
                <BsChevronLeft className="text-[1.6rem]" />
              </button>
              <p className={s.heading}>{title}</p>
            </div>
            <Image
              src={"/constants/image-announcement.jpg"}
              alt={"announcement image"}
              className={s.image}
            />
            <p className={s.packageName}>Mariam Makiba</p>
            <Badge
              className={"font-[400] !text-[14px] !h-[27px] w-[80px] mt-2"}
              bgColor={"#EDCFD0"}
              textColor={"#BA181B"}
            >
              obituary
            </Badge>
          </div>
        ) : (
          <div className={s.profileInformation}>
            <div className={s.image}>
              <p>JB</p>
            </div>
            <h6>Jane Boha</h6>
            <p className={s.email}>bohajane@gmail.com</p>
          </div>
        )}
        <ul className={cn(s.menu, "overflow-y-auto scrollbar")}>
          {sidebarAlt
            ? MenuItemsAlt.map((_) => {
                const Icon = _.Icon;
                const Noti = _.badge;
                router.prefetch(_.link);
                return (
                  <li
                    className={s.item}
                    role="button"
                    data-active={`${path?.includes(_.link)}`}
                    tabIndex={-1}
                    key={uuid()}
                    onClick={() => {
                      setCollapse((current) => {
                        // console.log("hello.", current);
                        if (current === 0) {
                          return 2;
                        } else {
                          return 0;
                        }
                      });
                      router.push(_.link);
                    }}
                  >
                    <Icon color="#595959" />
                    <p className={cn("caption", s.caption)}>{_.label}</p>
                    {Noti && <Noti />}
                  </li>
                );
              })
            : MenuItems.map((_) => {
                const Icon = _.Icon;
                const Noti = _.badge;
                router.prefetch(_.link);
                return (
                  <li
                      data-active={`${path?.includes(_.link)}`}
                    className={s.item}
                    role="button"
                    tabIndex={-1}
                    key={uuid()}
                    onClick={() => {
                      setCollapse((current) => {
                        // console.log("hello.", current);
                        if (current === 0) {
                          return 2;
                        } else {
                          return 0;
                        }
                      });
                      router.push(_.link);
                    }}
                  >
                    <Icon color="#595959" />
                    <p className={cn("caption", s.caption)}>{_.label}</p>
                    {Noti && <Noti />}
                  </li>
                );
              })}
        </ul>
      </aside>
    </ClickOutside>
  );
};

export default SideBar;
