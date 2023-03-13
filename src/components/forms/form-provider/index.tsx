/**
 * Project: damirifa
 * File: FromProvider
 * Created by Pennycodes on 4/27/2022.
 * Copyright damirifa
 */

import {FormProvider as Form, UseFormReturn} from 'react-hook-form';
import {FormEventHandler, ReactElement} from "react";

interface FormProvider {
    children: ReactElement,
    methods: UseFormReturn,
    onSubmit: FormEventHandler<HTMLFormElement>,
}

export default function FormProvider({children, onSubmit, methods}: FormProvider) {
    return (
        <Form {...methods}>
            <form onSubmit={onSubmit}>{children}</form>
        </Form>
    );
}
