import React, { Fragment, useEffect, useState } from "react";

// import Dropzone from "@components/ui/dashboard/dropzone";
import { Select, TextArea, Textfield } from "@components/ui/dashboard";
// import DatePicker from "@components/ui/dashboard/date-picker";
import dynamic from "next/dynamic";
import { TipText } from "@components/TipText";
import { LoadingDots } from "@components/ui/common";
import { useController, useForm } from "react-hook-form";
import * as _ from "lodash";
import { formatTextFromCamel } from "../../../../../../utils/text.maipulation";
interface Props {}

const DatePicker = dynamic(
  () => import("@components/ui/dashboard/date-picker"),
  {
    suspense: true,
  }
);
const Dropzone = dynamic(() => import("@components/ui/dashboard/dropzone"), {
  suspense: true,
});
const Component: React.FC<Props> = (props) => {
  const [loading, setLoading] = useState(false);
  const { properties, label, defaultValues, onUpdate } = props;
  const fields = Object.entries(properties);

  console.log("default", defaultValues);
  const {
    control,
    formState: { isDirty },
    getValues,
  } = useForm({ defaultValues: defaultValues });

  useEffect(() => {
    const u = () => onUpdate(label, getValues());
    _.delay(u, 1000);
  });
  return (
    <div className={"grid grid-cols-1 gap-[1.5rem] pb-10 mt-[25px]"}>
      {loading && <LoadingDots />}
      {fields.map((f) => (
        <Input
          placeholder={f[0]}
          name={f[0]}
          control={control}
          required={Boolean(f[1]?.required)}
          variant={f[1]?.variant}
        />
      ))}
    </div>
  );
};
const Input = (props) => {
  const { name, control, variant, ...rest } = props;
  const {
    field,
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    rules: { required: true },
  });

  if (variant === "string")
    return (
      <Textfield
        color="secondary"
        value={field.value}
        onChange={field.onChange}
        className={"h-[3.5rem]"}
        {...rest}
      />
    );
  if (variant === "number")
    return (
      <Textfield
        color="secondary"
        value={field.value}
        type="number"
        onChange={field.onChange}
        className={"h-[3.5rem]"}
        {...rest}
      />
    );
  if (variant === "image")
    return (
      <Dropzone className="!h-[106px] mt-[1.125rem] !border-[#E0999B]">
        <div className="text-left  self-start  pl-[12px] my-auto !text-[#363636] ">
          <p className="!text-[base] font-bold">{formatTextFromCamel(name)}</p>
          <p className="text-[11px]">
            Drop an <b>{variant}</b>&nbsp;File. Maximum size xxmb&nbsp;
            <b className="text-[#E03A3D]">(approx one hour)</b>
          </p>
        </div>
      </Dropzone>
    );
  if (variant === "audio")
    return (
      <Dropzone className="!h-[106px] mt-[1.125rem] !border-[#E0999B]">
        <div className="text-left  self-start  pl-[12px] my-auto !text-[#363636] ">
          <p className="!text-[base] font-bold">{formatTextFromCamel(name)}</p>
          <p className="text-[11px]">
            Drop an <b>audio</b>&nbsp;File. Maximum size xxmb&nbsp;
            <b className="text-[#E03A3D]">(approx one hour)</b>
          </p>
        </div>
      </Dropzone>
    );
};

export default Component;
