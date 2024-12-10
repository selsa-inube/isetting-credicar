import { string, object } from "yup";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { DecisionModalUI } from "./interface";
import { IDecisionEntry } from "./types";

const validationSchema = object({
  justification: string(),
});

interface IDecisionModal {
  actionText: string;
  description: string;
  portalId: string;
  title: string;
  onClick: () => void;
  onCloseModal: () => void;
  isLoading?: boolean;
  justificationOfDecision?: boolean;
  setFieldEntered?: (value: string) => void;
}

const initialValues: IDecisionEntry = {
  justification: "",
};

const DecisionModal = (props: IDecisionModal) => {
  const {
    actionText,
    description,
    isLoading = false,
    justificationOfDecision = false,
    portalId,
    title,
    onClick,
    onCloseModal,
    setFieldEntered,
  } = props;

  const [dynamicValidationSchema, setDynamicValidationSchema] =
    useState(validationSchema);

  const formik = useFormik({
    initialValues,
    validationSchema: dynamicValidationSchema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: async () => {
      return Promise.resolve(true);
    },
  });

  useEffect(() => {
    if (justificationOfDecision) {
      setDynamicValidationSchema(
        validationSchema.shape({
          justification: string()
            .required("El dato es requerido")
            .min(5, "Debe registrar como mínimo 5 caracteres.")
            .max(130, "No puede superar de 130 caracteres."),
        }),
      );
    }
  }, [justificationOfDecision, setDynamicValidationSchema]);

  useEffect(() => {
    if (formik.values && setFieldEntered)
      setFieldEntered(formik.values.justification);
  }, [formik.values, setFieldEntered]);

  const comparisonData = Boolean(
    justificationOfDecision &&
      formik.values.justification === initialValues.justification,
  );

  return (
    <DecisionModalUI
      actionText={actionText}
      comparisonData={comparisonData}
      description={description}
      formik={formik}
      isLoading={isLoading}
      justificationOfDecision={justificationOfDecision}
      onClick={onClick}
      onCloseModal={onCloseModal}
      portalId={portalId}
      title={title}
    />
  );
};

export { DecisionModal };
export type { IDecisionModal };
