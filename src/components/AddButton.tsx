import {ButtonHTMLAttributes} from "react";
import {BiDashboardCreate} from "./icons";
import {Button} from "./ui/dashboard";
import cn from "classnames";

type Props = {
    className?: string;
    label?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
const AddButton = ({className, label, ...rest}: Props) => {
    return (
        <Button
            variant="outline"
            color={"secondary" as const}
            className={cn("!px-[20px] !py-[12px] !border-[#E1E8EB]", className)}
            {...rest}
        >
            <BiDashboardCreate/>
            <span
                className="text-[#525252] capitalize tracking-[1.25px] text-[14px] leading-[16px] font-[500] ml-[11px] ">
        {label}
      </span>
        </Button>
    );
};
export default AddButton;
