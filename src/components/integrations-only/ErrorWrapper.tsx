/**
 * Project: damirifa
 * File: ErrorWrapper
 * Created by Pennycodes on 9/5/2022.
 * Copyright damirifa
 */
import cn from "classnames";

export default function ErrorWrapper({state, message}: { state: boolean, message: string | undefined }) {

    return (
        <div
            className={cn("bg-red-100 border border-red-400 text-red-700 px-4 py-3 my-2 rounded relative ", {"hidden": !state})}
            role="alert">
            <span className="block sm:inline">{message}</span>
        </div>
    )
}
