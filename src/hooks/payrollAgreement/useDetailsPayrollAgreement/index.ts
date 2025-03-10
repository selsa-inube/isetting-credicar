import { useState } from "react";
import { useMediaQuery } from "@inubekit/inubekit";

import { mediaQueryMobile } from "@config/environment";
import { IEntry } from "@design/data/table/types";
import { IDetailsTabsConfig } from "@design/modals/detailsPayrollAgreementModal/types";

const useDetailsPayrollAgreement = (
  data: IEntry,
  detailsTabsConfig: IDetailsTabsConfig,
) => {
  const [isSelected, setIsSelected] = useState<string>();
  const [showModal, setShowModal] = useState(false);
  const isMobile = useMediaQuery(mediaQueryMobile);

  const normalizeData = {
    id: data.id,
    TypePayroll: data.payrollForDeductionAgreementType,
    daysToDetermineDate: data.numberOfDaysForReceivingTheDiscounts,
    company: data.legalPersonName,
    paymentSources: "prueba",
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleTabChange = (tabId: string) => {
    setIsSelected(tabId);
  };

  const ordinaryPaymentData = () => {
    return Object.entries(data.regularPaymentCycles).length > 0
      ? data.regularPaymentCycles.map((item: IEntry) => {
          return {
            name: item.regularPaymentCycleName,
            periodicity: item.schedule,
            dayPayment: item.paymentDay,
            numberDays: item.regularPaymentCycleNumber,
          };
        })
      : [];
  };

  const extraordinaryPaymentData = () => {
    let extraordinary: IEntry[] = [];
    if (data.payrollSpecialBenefitPaymentCycles) {
      extraordinary = extraordinary.concat(
        Object.entries(data.payrollSpecialBenefitPaymentCycles).length > 0 &&
          data.payrollSpecialBenefitPaymentCycles.map(
            (item: IEntry, index: string) => {
              return {
                id: index,
                name: item.abbreviatedName,
                typePayment: "Prima",
                cuttingDay: item.paymentDay,
                numberDays: item.numberOfDaysBeforePaymentToBill,
              };
            },
          ),
      );
    }

    if (data.severancePaymentCycles) {
      extraordinary = extraordinary.concat(
        Object.entries(data.severancePaymentCycles).length > 0 &&
          data.payrollSpecialBenefitPaymentCycles.map(
            (item: IEntry, index: string) => {
              return {
                id: index,
                name: item.abbreviatedName,
                typePayment: "Cesantias",
                cuttingDay: item.paymentDay,
                numberDays: item.numberOfDaysBeforePaymentToBill,
              };
            },
          ),
      );
    }

    return extraordinary;
  };

  const filteredTabsConfig = Object.keys(detailsTabsConfig).reduce(
    (acc, key) => {
      const tab = detailsTabsConfig[key as keyof IDetailsTabsConfig];

      const ordinaryData = ordinaryPaymentData();
      const extraordinaryData = extraordinaryPaymentData();

      if (key === "ordinaryPayment" && ordinaryData.length === 0) {
        return acc;
      }

      if (key === "extraordinaryPayment" && extraordinaryData.length === 0) {
        return acc;
      }

      if (tab !== undefined) {
        acc[key as keyof IDetailsTabsConfig] = tab;
      }
      return acc;
    },
    {} as IDetailsTabsConfig,
  );

  const getFirstFilteredTab = (filteredTabsConfig: IDetailsTabsConfig) => {
    const keys = Object.keys(filteredTabsConfig);
    if (keys.length > 0) {
      return filteredTabsConfig[keys[0] as keyof IDetailsTabsConfig];
    }
    return undefined;
  };

  const defaultSelectedTab = getFirstFilteredTab(filteredTabsConfig)?.id;

  return {
    showModal,
    normalizeData,
    isSelected,
    isMobile,
    filteredTabsConfig,
    defaultSelectedTab,
    ordinaryPaymentData,
    extraordinaryPaymentData,
    handleTabChange,
    handleToggleModal,
  };
};

export { useDetailsPayrollAgreement };
