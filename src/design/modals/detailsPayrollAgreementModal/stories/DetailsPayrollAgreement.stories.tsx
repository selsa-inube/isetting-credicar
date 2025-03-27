import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Meta, StoryFn } from "@storybook/react";
import { Button } from "@inubekit/inubekit";

import {
  DetailsPayrollAgreementModal,
  IDetailsPayrollAgreementModal,
} from "..";

const meta: Meta<typeof DetailsPayrollAgreementModal> = {
  title: "modals/DetailsPayrollAgreementModal",
  component: DetailsPayrollAgreementModal,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const detailsTabsConfig = {
  ordinaryPayment: {
    id: "ordinaryPayment",
    isDisabled: false,
    label: "Ciclos de pago ordinario",
  },
  extraordinaryPayment: {
    id: "extraordinaryPayment",
    isDisabled: false,
    label: "Ciclos de pago extraordinario",
  },
};

const labelsDetails = [
  {
    id: "TypePayroll",
    titleName: "Tipo de nómina",
  },
  {
    id: "daysToDetermineDate",
    titleName: "Días para determinar la fecha de aplicación",
  },
  {
    id: "company",
    titleName: "Empresa",
  },
  {
    id: "paymentSources",
    titleName: "Fuentes de ingreso",
  },
];

const data = {
  id: "1",
  TypePayroll: "Nómina regular",
  daysToDetermineDate: "8",
  company: "Empresa de prueba",
  paymentSources: "Salario mensual, arrendamientos",
};

const labelsPaymentCard = [
  {
    id: "name",
    titleName: "Nombre",
  },
  {
    id: "periodicity",
    titleName: "Periodicidad",
  },
  {
    id: "dayPayment",
    titleName: "Día de pago",
  },
  {
    id: "numberDays",
    titleName: "No. de días para el corte",
  },
];

const ordinaryPaymentData = [
  {
    id: "1",
    name: "Nómina regular",
    periodicity: "Quincenal",
    dayPayment: "15, 30",
    numberDays: "8",
  },
  {
    id: "2",
    name: "Nómina mensual para independientes",
    periodicity: "Mensual",
    dayPayment: "30",
    numberDays: "10",
  },
  {
    id: "3",
    name: "Nómina regular",
    periodicity: "Quincenal",
    dayPayment: "15, 30",
    numberDays: "8",
  },
];

const extraordinaryPaymentData = [
  {
    id: "1",
    name: "Nómina regular",
    periodicity: "Quincenal",
    dayPayment: "15, 30",
    numberDays: "8",
  },
  {
    id: "2",
    name: "Nómina mensual para independientes",
    periodicity: "Mensual",
    dayPayment: "30",
    numberDays: "10",
  },
  {
    id: "3",
    name: "Nómina regular",
    periodicity: "Quincenal",
    dayPayment: "15, 30",
    numberDays: "8",
  },
];

const Template: StoryFn<IDetailsPayrollAgreementModal> = (args) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Show Modal</Button>
      {showModal && (
        <DetailsPayrollAgreementModal
          {...args}
          onCloseModal={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  portalId: "portal",
  filteredTabsConfig: detailsTabsConfig,
  detailsTabsConfig: detailsTabsConfig,
  data: data,
  isSelected: detailsTabsConfig.ordinaryPayment.id,
  defaultSelectedTab: detailsTabsConfig.extraordinaryPayment.id,
  ordinaryPaymentData,
  extraordinaryPaymentData,
  labelsDetails,
  labelsPaymentCard,
};

export default meta;
