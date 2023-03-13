import React, { useRef, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
// export type OneWeekLandingPageProps = {}
// import ResponsiveImage from '@components/ui/image'
import { Button, CheckBox } from "@components/ui/common";
// import { useRouter } from 'next/router'
// import { v4 as uuidv4 } from 'uuid'
// const Container = styled.div`
// `
import s from "./index.module.css";
import cn from "classnames";

const DonationSummary = (props: any) => {
  // const damirifaServiceFee = 0.1
  const mobileProcessingFee = 0.0199;
  // const router = useRouter()
  // const option = [
  //   { label: 'Recipient', value: 'Jane Doe' },
  //   { label: 'Donation', value: 100 },
  //   { label: 'Mobile Provider Fee', value: 200 },
  //   { label: 'Damirifa Service Fee', value: 500 },
  //   { label: 'Total', value: 500 },
  // ]
  // const [total, setTotal] = useState<number>(100)
  const amountRef = useRef(100);
  // let donation =
  const [donation, setDonation] = useState<number>(
    amountRef.current * (1 - mobileProcessingFee)
  );
  // const recalculateTotal = (amount: number) => {
  //   setDonation(amount)
  //   setTotal((1-mobileProcessingFee) * amount)
  // }
  const recalculateDonation = (amount: number) => {
    amountRef.current = Number(
      parseFloat(String((1 + mobileProcessingFee) * amount)).toFixed(2)
    );
    setDonation(amount);
  };
  // useEffect(() => {
  //   setDonation(
  //     parseFloat(String((1 - mobileProcessingFee) * amountRef.current)).toFixed(
  //       2,
  //     ),
  //   )
  // }, [donation])
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  return (
    <section className=" px-4 md:px-20">
      <p className="mt-4 mb-8 capitalize text-center font-bold">
        Donation Summary
      </p>
      <div className={s.itenary}>
        <span className={s.span}>Your Recipient</span>
        <span className={s.value}>Jane&nbsp;Doe</span>
        <span className={s.span}>Your Donation</span>
        <span className={s.value}>
          GHS&nbsp;{parseFloat(String(amountRef.current)).toFixed(2)}
        </span>
        <span className={s.span}>Processing Fees</span>
        <span className={s.value}>
          (GHS&nbsp;
          {parseFloat(String(mobileProcessingFee * amountRef.current)).toFixed(
            2
          )}
          )
        </span>
        <span className={s.span}>Recipient gets</span>
        <div className={cn("", s.inputContainer, s.value)} ref={containerRef}>
          <span>GHS&nbsp;</span>
          <input
            type="number"
            className={cn("px-0 mx-0", s.input, s.editAmountField)}
            value={parseFloat(String(donation)).toFixed(2)}
            ref={inputRef}
            step="0.01"
            onChange={(e: any) => {
              recalculateDonation(Number(e.target.value));
            }}
          />
          <Button
            className={s.button}
            // style={{ width: "max-content!important" }}
            onClick={() => {
              if (inputRef.current !== null && containerRef.current !== null) {
                // containerRef.current.focus()
                inputRef.current.focus();
              }
            }}
          >
            <AiOutlineEdit className="text-damirifa-red ml-2" />
            <div
              className={cn("text-damirifia-red w-fit text-xs", s.changeText)}
            >
              Change
            </div>
          </Button>
        </div>
      </div>
      <div className="flex flex-row my-12">
        <CheckBox
          variant="secondary"
          id="box-sum"
          checked={true}
          className="mr-2 mt-1"
        />
        <p className="text-base text-muted mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-4 items-center justify-center mt-16 mb-5">
        <Button
          outline
          variant="primary"
          size="md"
          pill
          onClick={() => props.previousStep()}
          label="Back"
        />
        <Button
          pill
          variant="primary"
          size="md"
          className="mb-polyfill"
          onClick={() => props.nextStep()}
          label="Proceed To Checkout"
        />
      </div>
    </section>
  );
};

export default DonationSummary;
