/**
 * Project: damirifa
 * File: TextWrapper
 * Created by Pennycodes on 9/5/2022.
 * Copyright damirifa
 */
import CountriesSelector from "@components/countries-selector";
import ErrorWrapper from "@components/integrations-only/ErrorWrapper";
import React, { InputHTMLAttributes } from "react";
import { Controller, useFormContext } from "react-hook-form";
import cn from "classnames";
interface CountrySelectorWrapperProps
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  variant?: string;
  disableCopyAndPaste?: boolean;
  showTooltip?: boolean;
  onTooltipClick?: Function;
  className?: string;
}

const CountrySelectorWrapper: React.FC<CountrySelectorWrapperProps> = (
  props
) => {
  const { control } = useFormContext();
  const { name, className, ...rest } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { error },
      }) => (
        <div className={cn("flex flex-col w-full", className)}>
          {/* @ts-ignore */}
          <CountriesSelector
            className={"w-full"}
            name={name}
            inputRef={ref}
            value={value}
            onChange={onChange}
          />
          <ErrorWrapper state={!!error} message={error?.message} />
        </div>
      )}
    />
  );
};

export default CountrySelectorWrapper;
