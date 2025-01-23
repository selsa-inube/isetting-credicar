import { Route, Routes } from "react-router-dom";
import { MoneyDestination } from "@pages/moneyDestination";
import { AddDestination } from "@pages/moneyDestination/tabs/moneyDestinationTab/addDestination";

function MoneyDestinationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MoneyDestination />} />
      <Route path="add-destination" element={<AddDestination />} />
    </Routes>
  );
}

export { MoneyDestinationRoutes };
