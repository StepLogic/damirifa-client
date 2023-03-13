import { useModalContext } from "@contexts/ModalContext";
import { ComponentType } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
type Props = {
  title: string;
  Icon: ComponentType;
};
const TOS = () => {
  const terms = `
Only the widow(er), Parent or adult child of the deceased are eligible to receive funds donated. An eligible recipient must be selected to receive funds donated to the family.  

  \nA Ghanaian registered mobile money account is required to receive donations. Funds are deposited to the recipient's mobile money money account within 24 hours.
  \nA Ghanaian registered mobile money account is required to receive donations. Funds are deposited to the recipient's mobile money money account within 24 hours.
  \nStandard mobile money and bank fees apply.
  \nTo minimize fraud, we will require additional information to validate the relationship of funds recipients to the deceased. This could take up to 48 hours. The fund will display on your obituary page ONLY after validation is complete.
  `;
  return (
    <div className="grid grid-cols-1 gap-[1.5rem] max-w-[545px] max-h-[70vh] overflow-y-auto overflow-x-hidden scrollbar pb-4">
      <p
        style={{ whiteSpace: "break-spaces" }}
        className="text-[1rem] p-4 rounded-sm bg-[#f5f5f5] whitespace-[break]"
      >
        {terms}
      </p>
    </div>
  );
};
function FuneralFundHeader({ title, Icon }: Props) {
  const modal = useModalContext();
  return (
    <div className="flex flex-row items-center w-full ">
      <div className="flex flex-row items-center">
        <div
          className={
            "bg-gray-400 w-12 h-12 mr-4 rounded-[50%] flex items-center justify-center"
          }
        >
          <Icon />
        </div>
        <p>{title}</p>
      </div>
      {/* <div className="flex flex-col ml-auto relative"> */}
      <button
        onClick={() => modal.openModal(<TOS />, "Important Information")}
        className={
          "text-[#065fd4] mt-auto ml-auto font-medium text-xs underline mr-3"
        }
      >
        <AiOutlineInfoCircle className="text-sm ml-auto w-4 h-4 text-[#065fd4]" />
      </button>
      {/* </div> */}
    </div>
  );
}
export default FuneralFundHeader;
