import { useFormik } from "formik";
import { Button } from "@inubekit/inubekit";
import { useState } from "react";
import { object } from "yup";

import { validationRules } from "@validations/validationRules";
import { validationMessages } from "@validations/validationMessages";
import { AddCycleModal, IAddCycleModal } from "..";

const ControllerAddCycle = (props: IAddCycleModal) => {
  const { actionText } = props;

  const [showModal, setShowModal] = useState(false);

  const validationSchema = object({
    nameCycle: validationRules.string.required(validationMessages.required),
    periodicity: validationRules.string.required(validationMessages.required),
    payday: validationRules.string.required(validationMessages.required),
    numberDaysUntilCut: validationRules.number.required(
      validationMessages.required,
    ),
  });

  const initialValues = {
    nameCycle: "",
    periodicity: "",
    payday: "",
    numberDaysUntilCut: 0,
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: async () => {
      return Promise.resolve(true);
    },
  });

  const handleChange = (name: string, value: string) => {
    formik.setFieldValue(name, value).then(() => {
      formik.validateForm().then((errors) => {
        formik.setErrors(errors);
      });
    });
  };

  const numberDaysUntilCutOptions = [
    {
      id: "1",
      label: "1",
      value: "1",
    },
    {
      id: "2",
      label: "2",
      value: "2",
    },
    {
      id: "3",
      label: "3",
      value: "3",
    },
  ];

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Show Modal</Button>
      {showModal && (
        <AddCycleModal
          {...props}
          numberDaysUntilCutOptions={numberDaysUntilCutOptions}
          actionText={actionText}
          formik={formik}
          onChange={handleChange}
          onCloseModal={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export { ControllerAddCycle };
