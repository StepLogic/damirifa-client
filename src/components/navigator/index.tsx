/**
 *Project:damirifa
 *File:Navigator
 *Created by KojoGyaase
 *Copyright damirifa
 **/
'use client';
// import FamilyFund from "@components/forms/dashboard/funeral-fund/family-fund";
// import InstitutionalFund from "@components/forms/dashboard/funeral-fund/institutional-fund";

import dynamic from "next/dynamic";
import React, {
  ComponentProps,
  ComponentType,
  MouseEventHandler,
  PropsWithChildren,
  ReactNode,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import Loader from "../ui/common/loader";
import { ViewTree } from "./constants";
import AnnouncementTermsOfService
  from "@root/src/utils/views/dashboard/announcement/edit-announcement/announcement-terms-of-service";
// import {EditFuneralFund} from "@root/src/app/(dashboard)/announcements/[slug]/edit-funeral-fund";
import FamilyFund from "@dashboard-forms/funeral-fund/family-fund";
import TermsOfService from "@components/tos";
import InstitutionalFund from "@dashboard-forms/funeral-fund/institutional-fund";
import EditAnnouncement from "@root/src/utils/views/dashboard/announcement/edit-announcement";
import AnnouncementView from "@root/src/utils/views/dashboard/announcement";
import AnnouncementLayout from "@layouts/dashboard/announcement";
import DashboardLayout from "@layouts/dashboard/dashboard";
import LivePreview from "@root/src/utils/views/dashboard/announcement/live-preview";
import Condolences from "@components/forms/condolences";
import AllCondolences from "@root/src/utils/views/dashboard/overview/condolences/AllCondolences";
import Donations from "@root/src/utils/views/dashboard/overview/donations";
import AllThankYous from "@root/src/utils/views/dashboard/overview/donations/AllThankYous";
import AnnouncementAnalytic from "@root/src/utils/views/dashboard/overview/analytics/AnnouncementAnalytic";
import {EditFuneralFund} from "@root/src/app/(dashboard)/announcements/[id]/edit-funeral-fund/[...slug]/page";
import {FormList} from "@root/src/utils/views/dashboard/announcement/edit-donation";

// import AnnouncementView from "@features/views/dashboard/announcement";
// import EditAnnouncement from "@features/views/dashboard/announcement/edit-announcement";
// import TermsOfService from "@features/views/dashboard/announcement/edit-donation/terms-of-service";
// import AnnouncementLayout from "@layouts/dashboard/announcement";
// import DashboardLayout from "@layouts/dashboard/dashboard";

interface Context {
  route: string;
  setRoute: (route: string, replace?: boolean) => void;
  historySetRoute: (route: string, replace?: boolean) => void;
  goBack: () => void;
  historyRef: RefObject<string[]>;
}

export const ClientRouterContext = React.createContext<Context>({
  route: "/dashboard",
  setRoute: (route: string, replace?: boolean) => {},
  historySetRoute: (route: string, replace?: boolean) => {},
  goBack: () => {},
  historyRef: React.createRef(),
  // handleHistory: (value: string) => {},
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
  const { setRoute, historySetRoute, route, historyRef } =
    useContext(ClientRouterContext);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const back = (event: Event) => {
  //     // console.log("client.router", history);
  //     if (route !== (ViewTree.HOME as string)) {
  //       event.preventDefault;
  //       if (historyRef.current?.length && historyRef.current?.length > 0) {
  //         historyRef.current.pop();
  //         let step = historyRef.current.at(-1);
  //         if (step) {
  //           setRoute(step);
  //         }
  //       } else {
  //         setRoute(ViewTree.HOME);
  //       }
  //     } else {
  //       window.removeEventListener("popstate", back);
  //     }
  //     setLoading(false);
  //     return () => window.removeEventListener("popstate", back);
  //   };
  // }, [historyRef, route, setRoute]);
  useEffect(() => {
    window.history.pushState({}, "");
    const back = (event: Event) => {
      // console.log("client.router", history);
      if (route !== (ViewTree.HOME as string)) {
        event.preventDefault;
        if (historyRef.current?.length && historyRef.current?.length > 0) {
          let step = historyRef.current.pop();
          if (step) {
            historySetRoute(step);
          }
        } else {
          historySetRoute(ViewTree.HOME);
        }
      } else {
        location.replace(document.referrer || "/");
      }
    };

    window.addEventListener("popstate", back);
    setLoading(false);
    return () => window.removeEventListener("popstate", back);
  }, [historyRef, route, setRoute]);

  return <>{loading ? whileLoading : children}</>;
};

export const ClientRouterProvider = ({
  children,
  persistedHistory,
  persistedRoute,
}: PropsWithChildren<{ persistedHistory: any[]; persistedRoute: string }>) => {
  const [route, setRoute] = useState<string>("home");
  const historyRef = useRef<string[]>([]);
  useEffect(() => {
    if (persistedRoute && history) {
      historyRef.current = historyRef.current.concat(persistedHistory);
      setRoute(persistedRoute);
    }
  }, [persistedHistory, persistedRoute]);
  const goBack = () => {
    window.history.back();
  };

  const handleSetRoute = (value: string) => {
    if (historyRef.current.at(-1) !== route && route !== value) {
      historyRef.current.push(route);
      sessionStorage.setItem(
        "dashboard-history",
        JSON.stringify({ history: historyRef.current, route: value })
      );
    }
    const path = value;
    setRoute(path);
  };
  const handleHistorySetRoute = (value: string) => {
    sessionStorage.setItem(
      "dashboard-history",
      JSON.stringify({ history: historyRef.current, route: value })
    );
    setRoute(value);
  };
  return (
    <ClientRouterContext.Provider
      value={{
        route,
        setRoute: handleSetRoute,
        goBack: goBack,
        historyRef: historyRef,
        historySetRoute: handleHistorySetRoute,
      }}
    >
      {children}
    </ClientRouterContext.Provider>
  );
};

// usage

const Navigator = ({ history, route }: { history: any[]; route: string }) => {
  return (
    <>
      <ClientRouterProvider persistedHistory={history} persistedRoute={route}>
        <ClientRouter whileLoading={<Loader />}>
          <Portal
            basePath={ViewTree.ANNOUNCEMENT}
            Component={AnnouncementLayout}
          >
            <ClientRoute
              path={ViewTree.ANNOUNCEMENT}
              component={<AnnouncementView />}
            />
            <ClientRoute
              path={ViewTree.ANNOUNCEMENT_TERMS_SERVICE}
              component={<AnnouncementTermsOfService />}
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
                component={<TermsOfService />}
              />
              <ClientRoute path={ViewTree.FUND_LIST} component={<FormList />} />
              <ClientRoute
                path={ViewTree.CHARITABLE_FUND}
                component={<InstitutionalFund />}
              />
              <ClientRoute
                path={ViewTree.FAMILY_FUND}
                component={<FamilyFund />}
              />
            </Portal>
          </Portal>
          <ClientRoute
            path={ViewTree.LIVE_PREVIEW}
            component={<LivePreview />}
          />
          <Portal basePath={ViewTree.HOME} Component={DashboardLayout}>
            <ClientRoute
              path={ViewTree.ANNOUNCEMENTS_OVERVIEW}
              component={<Announcements />}
            />
            <ClientRoute
              path={ViewTree.CONDOLENCES_OVERVIEW}
              component={<Condolences />}
            />
            <ClientRoute
              path={ViewTree.ALL_CONDOLENCES}
              component={<AllCondolences />}
            />
            <ClientRoute
              path={ViewTree.DONATIONS_OVERVIEW}
              component={<Donations />}
            />
            <ClientRoute
              path={ViewTree.ALL_THANK_YOUS}
              component={<AllThankYous />}
            />
            <ClientRoute
              path={ViewTree.ALL_THANK_YOUS}
              component={<AllThankYous />}
            />

            <ClientRoute
              path={ViewTree.ANALYTICS_INNER}
              component={<AnnouncementAnalytic />}
            />
          </Portal>
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
