/**
 *Project:damirifa
 *File:Navigator
 *Created by KojoGyaase
 *Copyright damirifa
 **/
import AnnouncementView from "@features/../../views/dashboard/announcement";

// import styled from 'styled-components'
// import Default from "@features/views/dashboard/default";
import React, {
  ComponentProps,
  ComponentType,
  MouseEventHandler,
  PropsWithChildren,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { LoadingDots } from "@components/ui/common";
import AnnouncementLayout from "@layouts/dashboard.old/announcement";
import EditFuneralFund, {
  FormList,
} from "@features/../../views/dashboard/announcement/edit-donation";
import EditAnnouncement from "@features/../../views/dashboard/announcement/edit-announcement";
import TermsOfService from "@features/../../views/dashboard/announcement/edit-donation/terms-of-service";
import InstitutionalFund from "@components/forms/dashboard/funeral-fund/institutional-fund";
import FamilyFund from "@components/forms/dashboard/funeral-fund/family-fund";
import { ViewTree } from "./constants";
import DashboardLayout from "@layouts/dashboard.old/dashboard";

interface Context {
  route: string;
  setRoute: (route: string, replace?: boolean) => void;

  goBack: () => void;
  history: string[];
  setHistory: Function;
}

export const ClientRouterContext = React.createContext<Context>({
  route: "/dashboard",
  setRoute: (route: string, replace?: boolean) => {},
  goBack: () => {},
  history: [],
  setHistory: (value: string[]) => {},
});
export const useCSR = () => {
  return useContext(ClientRouterContext);
};

interface RouteProps {
  path: string;
  component: JSX.Element;
}

type PortalProps = {
  basePath: string;
  Component: ComponentType;
  children?: ReactNode;
};

export const ClientRoute = ({ component, path }: RouteProps) => {
  const { route } = useContext(ClientRouterContext);
  const newPath = path;
  const handelRoute = () => {
    const nestedPaths = newPath.split("/").filter((r) => r !== "");
    const currentRoute = route.split("/").filter((r) => r !== "");
    if (nestedPaths.at(-1) === currentRoute.at(-1)) return true;
    return false;
  };
  return handelRoute() ? component : null;
};
export const Portal = ({ Component, children, basePath }: PortalProps) => {
  const { route } = useContext(ClientRouterContext);
  const newPath = basePath;
  const handelRoute = () => {
    const nestedPaths = newPath.split("/").filter((r) => r !== "");
    const currentRoute = route.split("/").filter((r) => r !== "");
    if (currentRoute.includes(basePath)) return true;
    return false;
  };
  return handelRoute() ? <Component>{children}</Component> : <></>;
};

interface LinkProps extends ComponentProps<"a"> {
  to: string;
  replace?: boolean;
}

export const ClientLink = ({
  children,
  to,
  replace,
  ...restProps
}: LinkProps) => {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    window.history.pushState({}, "", to);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <a href={to} onClick={handleClick} {...restProps}>
      {children}
    </a>
  );
};

interface RouterProps {
  whileLoading?: JSX.Element;
}

export const ClientRouter = ({
  children,
  whileLoading,
}: PropsWithChildren<RouterProps>) => {
  const { setRoute, route, history, setHistory } =
    useContext(ClientRouterContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const back = (event: Event) => {
      console.log("client.router", history);
      if (route !== (ViewTree.HOME as string)) {
        if (history.length > 0) {
          const step = history.at(-1);
          if (step) {
            setRoute(step);
          }
        } else {
          setRoute(ViewTree.HOME);
        }
        event.preventDefault;
      }
    };
    window.history.pushState({}, "");
    window.addEventListener("popstate", back);
    setLoading(false);
    return () => window.removeEventListener("popstate", back);
  }, [history, route, setHistory, setRoute]);

  // useEffect(() => {
  //   setRoute(ViewTree.HOME);
  // }, []);
  useEffect(() => {
    setLoading(false);
  }, []);

  return <>{loading ? whileLoading : children}</>;
};

export const ClientRouterProvider = ({ children }: PropsWithChildren<{}>) => {
  const [route, setRoute] = useState<string>("home");
  const [historyState, setHistoryState] = useState<string[]>([]);

  useEffect(() => {
    // const persistedRoute = getCookie("dashboard-route");
    // if (persistedRoute !== null && persistedRoute !== undefined) {
    //   handleSetRoute(persistedRoute as string);
    // }
    // handleSetRoute(ViewTree.HOME);
  }, []);
  const goBack = () => {
    history.back();
  };

  const handleSetRoute = (value: string) => {
    // if (value !== (ViewTree.HOME as string))
    //   setCookie("dashboard-route", value);
    const path = value;
    setRoute(path);
    setHistoryState((r) => {
      if (r.at(-1) !== path) {
        r.push(path);
      }
      return r;
    });
  };
  return (
    <ClientRouterContext.Provider
      value={{
        route,
        setRoute: handleSetRoute,
        goBack: goBack,
        history: historyState,
        setHistory: setHistoryState,
      }}
    >
      {children}
    </ClientRouterContext.Provider>
  );
};

// usage

const Navigator = () => {
  return (
    <>
      <ClientRouterProvider>
        <ClientRouter whileLoading={<LoadingDots />}>
          <Portal
            basePath={ViewTree.ANNOUNCEMENT}
            Component={AnnouncementLayout}
          >
            <ClientRoute
              path={ViewTree.ANNOUNCEMENT}
              component={<AnnouncementView />}
            />
            <ClientRoute
              path={ViewTree.EDIT_ANNOUNCEMENT}
              component={<EditAnnouncement />}
            />
            <Portal
              basePath={ViewTree.EDIT_FUNERAL_FUND}
              Component={EditFuneralFund}
            >
              <ClientRoute
                path={ViewTree.FUND_TERMS_SERVICE}
                component={<TermsOfService name={"terms-of-service"} />}
              />
              <ClientRoute
                path={ViewTree.FUND_LIST}
                component={<FormList name="landing" />}
              />
              <ClientRoute
                path={ViewTree.CHARITABLE_FUND}
                component={<InstitutionalFund name="institutional-fund" />}
              />
              <ClientRoute
                path={ViewTree.FAMILY_FUND}
                component={<FamilyFund name="family-fund" />}
              />
            </Portal>
          </Portal>
          <Portal basePath={ViewTree.HOME} Component={DashboardLayout}></Portal>
        </ClientRouter>
      </ClientRouterProvider>
    </>
  );
};

export default Navigator;
// export async function getServerSideProps({ req, res }: NextPageContext) {
//   const isLoggedIn = getCookies({ req, res }); // - server si
//   return checkLoggedIn("/login", isLoggedIn);
// }
