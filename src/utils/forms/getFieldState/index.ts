import { FormikValues } from "formik";

const getFieldState = (formik: FormikValues, fieldName: string) => {
  if (formik.errors[fieldName]) return "invalid";
};

export { getFieldState };
