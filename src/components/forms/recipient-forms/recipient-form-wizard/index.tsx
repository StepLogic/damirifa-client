import React, {useState} from "react";
// import styled from 'styled-components'
import StepWizard from "react-step-wizard";
import FormOne from "../form-one";
import FormTwo from "../form-two";
import FormThree from "../form-three";
import FormFour from "../form-four";
import FormFive from "../form-five";

export type RecipientFormWizardProps = {};
export const RecipientFormContext = React.createContext({
    isOutsideGhana: false,
    setIsOutsideGhana: (value: boolean) => {
    },
});

export default function RecipientFormWizard({}: RecipientFormWizardProps) {
    const [isOutsideGhana, setIsOutsideGhana] = useState(false);

    return (
        <div>
            <RecipientFormContext.Provider
                value={{
                    isOutsideGhana: isOutsideGhana,
                    setIsOutsideGhana: (value) => {
                        console.log(value);
                        setIsOutsideGhana(value);
                    },
                }}
            >
                <StepWizard>
                    <FormOne/>
                    {isOutsideGhana ? <FormFour/> : <FormTwo/>}
                    {isOutsideGhana ? <FormFive/> : <FormThree/>}
                </StepWizard>
            </RecipientFormContext.Provider>
        </div>
    );
}
