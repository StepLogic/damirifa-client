import React, { useState } from "react";
import s from "./index.module.css";
import { Button } from "@components/ui/dashboard";
import { BiExpand, BiExternalLink } from "@components/icons";
import cn from "classnames";
import { useCSR } from "@components/navigator/index";
import { ViewTree } from "../../../components/navigator/constants";
import { BiNewLink } from "../../../components/icons";
interface Props {}

const LivePreviewMini: React.FC<Props> = (props) => {
  const [expand, setExpand] = useState(false);
  const navigator = useCSR();
  return (
    <>
      <div
        className={cn(s.root, "hidden lg:block")}
        data-collapse={`${!expand}`}
        tabIndex={-1}
        onClick={() => {
          expand ? null : setExpand(true);
        }}
      >
        <div className={s.toolbar}>
          <p className={s.label}>Preview</p>
          <div className={s.icons}>
            <Button variant="icon">
              <BiNewLink color={"#BA181B"} />
            </Button>
            <Button
              variant="icon"
              // showTooltip={"Collapse"}
              onClick={() => {
                setExpand(false);
              }}
            >
              <BiExpand color={"#BA181B"} />
            </Button>
          </div>
        </div>
        {/* <div> */}
        <iframe
          src={"/api/preview"}
          className={s.frame}
          frameBorder="0"
          width="100%"
          height="950"
        />
      </div>
      <button
        onClick={() => navigator.setRoute(ViewTree.LIVE_PREVIEW)}
        className={cn(s.rootButton, "lg:!hidden")}
      >
        <p className={s.label}>Preview</p>
      </button>
    </>
  );
};

export default LivePreviewMini;
