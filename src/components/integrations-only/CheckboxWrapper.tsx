/**
 * Project: damirifa
 * File: CheckboxWrapper
 * Created by Pennycodes on 9/5/2022.
 * Copyright damirifa
 */

import React, { InputHTMLAttributes } from "react";

import { Controller, useFormContext } from "react-hook-form";
import ErrorWrapper from "@components/integrations-only/ErrorWrapper";
import CheckBox from "@components/ui/common/checkbox";
import cn from "classnames";
import Link from "@components/ui/common/link";
interface CheckboxWrapperProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  variant?: string;
  disableCopyAndPaste?: boolean;
  className?: string;
  registerOnlyLabel?: boolean;
}

const CheckboxWrapper: React.FC<CheckboxWrapperProps> = (props) => {
  const { control } = useFormContext();
  const { name, className, registerOnlyLabel, ...rest } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className={cn("flex flex-col w-auto", className)}>
          <div className="flex flex-row items-center gap-2">
            {/* @ts-ignore */}
            <CheckBox {...field} {...rest} />
            {registerOnlyLabel && (
              <label className="block text-white">
                I agree to the&nbsp;
                <Link href="src/components/integrations-only#!" className="!underline ">
                  Terms and Conditions
                </Link>
              </label>
            )}
          </div>

          <ErrorWrapper state={!!error} message={error?.message} />
        </div>
      )}
    />
  );
};

export default CheckboxWrapper;
