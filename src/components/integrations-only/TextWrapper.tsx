/**
 * Project: damirifa
 * File: TextWrapper
 * Created by Pennycodes on 9/5/2022.
 * Copyright damirifa
 */
import React, { InputHTMLAttributes } from "react";

import { Controller, useFormContext } from "react-hook-form";
import ErrorWrapper from "@components/integrations-only/ErrorWrapper";
import TextField from "@components/ui/common/textfield";
import cn from "classnames";
interface TextWrapperProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  variant?: string;
  disableCopyAndPaste?: boolean;
  showTooltip?: boolean;
  onTooltipClick?: Function;
  className?: string;
}

const TextWrapper: React.FC<TextWrapperProps> = (props) => {
  const { control } = useFormContext();
  const { name, className, ...rest } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className={cn("flex flex-col w-full", className)}>
          {/* @ts-ignore */}
          <TextField {...field} {...rest} />
          <ErrorWrapper state={!!error} message={error?.message} />
        </div>
      )}
    />
  );
};

export default TextWrapper;
