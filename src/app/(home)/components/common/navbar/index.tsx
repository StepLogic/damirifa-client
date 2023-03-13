import { useMemo, useState } from "react";
import { VscThreeBars } from "react-icons/vsc";

import cn from "classnames";
import { LinksProp, NavBarLinks, SubMenu } from "@lib/NavConstants";

import { IoMdShare } from "react-icons/io";


import { Button, Dropdown, Image, Link } from "@common-ui/index";
import s from "./index.module.css";
import { v4 as uuid } from "uuid";
import SearchBar from "@components/search-bar";
import MobileMenu from "./mobile-menu";

import { useRouter } from "next/navigation";

export default function Navbar({ backgroundTransparent = false }) {
  // @ts-ignore

  const router = useRouter();
  const [showDropdown, toggleDropdown] = useState(false);

  const handleLogout = async () => {

  };
  const linksMemo = useMemo(() => {
    return NavBarLinks.map((link: LinksProp) => (
      <Link
        variant="primary"
        key={uuid()}
        href={link.href}
        className={s.navLink}
        data-cy={"nav-link"}
      >
        {link.name}
      </Link>
    ));
  }, []);

  const subMenuMemo = useMemo(() => {
    return SubMenu.map((menu: LinksProp) => (
      <Dropdown.Item className={cn("text-end", s.item)} key={uuid()}>
        {menu.name === "Share" ? (
          <IoMdShare className="me-2 text-damirifa-red" />
        ) : null}
        &nbsp;
        <Link href={menu.href}>{menu.name}</Link>
      </Dropdown.Item>
    ));
  }, []);

  return (
    <>
      <header
        data-transparency={`${backgroundTransparent}`}
        className={cn("items-center px-0 hidden lg:flex", s.root)}
      >
        <div className="container mx-auto flex  relative flex-row items-center justify-between">
          <Link href="/">
            <svg className={s.logoSvg}>
              <image xlinkHref={"/logo.svg"} />
            </svg>
          </Link>
          <nav
            data-cy={"nav"}
            className={
              "flex items-center relative mx-auto flex-row justify-between lg:w-6/12 min-w-fit"
            }
          >
            {linksMemo}
            <Dropdown
              show={showDropdown}
              variant="dropdown"
              toggle={toggleDropdown}
            >
              <Dropdown.Toggle>
                <Button icon variant="primary" className={s.menuButton}>
                  <VscThreeBars className={""} />
                </Button>
              </Dropdown.Toggle>

              <Dropdown.Menu className={s.dropDown}>
                {subMenuMemo}
              </Dropdown.Menu>
            </Dropdown>
            <SearchBar />
            <Link
              href="/pricing"
              className={cn("transition-all ml-2 xxl:ml-0", {
                // 'opacity-0': expand,
              })}
            >
              <Button
                className={cn("ml-1", s.getStartedButton)}
                size="sm"
                label={"Get Started"}
              />
            </Link>
          </nav>

          <>
            {false? (
              <>
                <div className={s.hoverDropdown}>
                  <Button
                    icon
                    className={cn(
                      "mx-0 md:mx-3 2xl:mx-10 w-full h-full transition-all",
                      s.loginLink,
                      s.avatarButton,
                      {
                        // 'opacity-0': expand,
                      }
                    )}
                  >
                    <Image
                      src={"/constants/death-notice.jpeg"}
                      alt={"userIamge"}
                      className={s.avatar}
                      objectFit="cover"
                      objectPosition={"center"}
                    />
                  </Button>
                  <div className={cn(s.options)}>
                    <Link
                      // variant="secondary"
                      href="/src/app/dashboard"
                      className={cn(
                        "transition-all py-2 w-full hover:bg-[#b8000c1a] xxl:ml-0",
                        s.item,
                        {
                          // 'opacity-0': expand,
                        }
                      )}
                    >
                      Dashboard
                    </Link>
                    <Button
                      // variant="secondary"
                      icon
                      role={"button"}
                      onClick={handleLogout}
                      tabIndex={-1}
                      className={cn(
                        "transition-all py-2 w-full hover:bg-[#b8000c1a] xxl:ml-0",
                        s.item,
                        {
                          // 'opacity-0': expand,
                        }
                      )}
                    >
                      Log Out
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className={s.hoverDropdown}>
                <Button
                  icon
                  label="Log In"
                  onClick={() => router.push("/login")}
                  className={cn(
                    "mx-0 md:mx-3 2xl:mx-10 transition-all",
                    s.loginLink,
                    {
                      // 'opacity-0': expand,
                    }
                  )}
                />
                <div className={cn(s.options)}>
                  <Link
                    // variant="secondary"
                    href="/src/app/login"
                    className={cn(
                      "transition-all py-2 w-full hover:bg-[#b8000c1a] xxl:ml-0",
                      s.item,
                      {
                        // 'opacity-0': expand,
                      }
                    )}
                  >
                    Log In
                  </Link>
                  <Link
                    // variant="secondary"
                    href="/src/app/register"
                    className={cn(
                      "transition-all py-2 w-full hover:bg-[#b8000c1a] xxl:ml-0",
                      s.item,
                      {
                        // 'opacity-0': expand,
                      }
                    )}
                  >
                    Register
                  </Link>
                </div>
              </div>
            )}

            {/* <Dropdown.Menu className={s.dropDown}>
              <Dropdown.Item className={cn("text-center")} key={uuid()}>
                <Link
                  variant="secondary"
                  href="/login"
                  className={cn("transition-all ml-2 xxl:ml-0", {
                    // 'opacity-0': expand,
                  })}
                >
                  Log In
                </Link>
              </Dropdown.Item>
              <Dropdown.Item className={cn("text-center")} key={uuid()}>
                <Link
                  variant="secondary"
                  href="/register"
                  className={cn("transition-all ml-2 xxl:ml-0", {
                    // 'opacity-0': expand,
                  })}
                >
                  Register
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu> */}
          </>
        </div>
      </header>

      <header
        data-transparency={`${backgroundTransparent}`}
        className={cn("items-center px-4 flex lg:hidden", s.root)}
      >
        <div className="container mx-auto flex flex-row items-center justify-between">
          <Link href="/">
            <svg className={s.logoSvg}>
              <image xlinkHref={"/logo.svg"} />
            </svg>
          </Link>
          <div className="flex flex-row items-center">
            <SearchBar />
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
}
