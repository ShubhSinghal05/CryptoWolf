import React, { createContext } from "react";

const FormContext = createContext();

export const FormProvider = FormContext.Provider;

export const FormConsumer = FormContext.Consumer;


export default FormContext;