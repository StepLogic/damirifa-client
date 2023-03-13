import React from "react";
import StepWizard from "react-step-wizard";
import FormOne from "../form-one/form-one";
import FormTwo from "../form-two/form-two";
import FormThree from "../form-three/form-three";

export type DonationFormWizardProps = { setFormComplete: any };
export const DonationFormContext = React.createContext({});

export default function DonationFormWizard({
                                               setFormComplete,
                                           }: DonationFormWizardProps) {
    return (
        <div>
            <StepWizard>
                <FormOne/>
                <FormTwo/>
                <FormThree setFormComplete={setFormComplete}/>
            </StepWizard>
        </div>
    );
}
