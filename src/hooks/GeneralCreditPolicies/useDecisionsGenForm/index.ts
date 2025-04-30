import { useEffect, useImperativeHandle, useState } from "react";
import { useMediaQuery } from "@inubekit/inubekit";
import { useFormik } from "formik";
import { object } from "yup";

import { validationRules } from "@validations/validationRules";
import { validationMessages } from "@validations/validationMessages";
import { mediaQueryMobile } from "@config/environment";
import { IUseDecisionsGenForm } from "@ptypes/hooks/IUseDecisionsGenForm";

const useDecisionsGenForm = (props: IUseDecisionsGenForm) => {
  const { initialValues, ref, onSubmit, onFormValid } = props;
  const validationSchema = object().shape({
    reference: validationRules.string.required(validationMessages.required),
    additionalDebtors: validationRules.boolean,
    sourcesIncome: validationRules.boolean,
    financialObligations: validationRules.boolean,
    realGuarantees: validationRules.boolean,
    calculation: validationRules.boolean,
    reciprocity: validationRules.boolean,
    factor: validationRules.boolean,
  });

  const [showModal, setShowModal] = useState(false);
  const [isDisabledButton, setIsDisabledButton] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit: onSubmit ?? (() => true),
  });

  useImperativeHandle(ref, () => formik);

  useEffect(() => {
    if (onFormValid) {
      formik.validateForm().then((errors) => {
        const isFormValid = Object.keys(errors).length === 0;
        onFormValid(isFormValid);
      });
    }
  }, [formik.values, onFormValid]);

  useEffect(() => {
    setIsDisabledButton(!formik.isValid);
  }, [formik.isValid]);

  const handleInfoModal = () => {
    setShowModal(!showModal);
  };

  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    formik.setFieldValue(name, checked);
  };

  const handleChangeMethods = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    formik.setFieldValue(name, checked);
  };

  const handleChange = (name: string, value: string) => {
    formik.setFieldValue(name, value).then(() => {
      formik.validateForm().then((errors) => {
        formik.setErrors(errors);
      });
    });
  };

  const isMobile = useMediaQuery(mediaQueryMobile);

  return {
    formik,
    showModal,
    isMobile,
    isDisabledButton,
    handleChangeMethods,
    handleInfoModal,
    handleChange,
    handleToggleChange,
  };
};

export { useDecisionsGenForm };
