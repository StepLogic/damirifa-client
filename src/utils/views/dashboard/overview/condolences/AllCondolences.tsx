import { useCSR } from "@components/navigator";
import { Select } from "@components/ui/dashboard";
import ViewHeading from "@components/ViewHeading";
import s from "./index.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import CondolencesItem from "./condolences-item";
import cn from "classnames";
import SelectV2 from "@components/select-v2";
import { useState } from "react";
import { DaDone } from "@components/icons/Illustrations";
import SearchBarV2 from "@components/searchbar-v2";
type Props = {};
const AllCondolences = (props: Props) => {
  //   const { className } = props;
  const navigator = useCSR();
  const [hidden, setHidden] = useState(false);
  return (
    <div className={"h-full"}>
      <ViewHeading label="Announcement Condolences" className={"mb-[30px]"} />
      <div className="flex flex-row items-center gap-4">
        <button
          onClick={() => setHidden(false)}
          data-selected={`${!hidden}`}
          className={s.pill}
        >
          Published
        </button>
        <button
          data-selected={`${hidden}`}
          onClick={() => setHidden(true)}
          className={s.pill}
        >
          Hidden
        </button>
        <div className="flex flex-row items-center ml-auto">
          <SearchBarV2 />
        </div>
      </div>
      <div className="mt-4 mb-4">
        <SelectV2 className={s.select} />
      </div>
      {hidden ? (
        <div
          className={cn(
            s.list,
            "h-full justify-center gap-6 items-center flex flex-col"
          )}
        >
          <DaDone />
          <p className={s.label}>Awesome work, you are all caught up!</p>
        </div>
      ) : (
        <ul className={cn("mt-4 scrollbar", s.list)}>
          <CondolencesItem noImage={true} />
          <CondolencesItem noImage={true} />
          <CondolencesItem noImage={true} />
        </ul>
      )}
    </div>
  );
};

export default AllCondolences;
