import { Route, Routes } from "react-router-dom";
import { MoneyDestination } from "@pages/moneyDestination";

function MoneyDestinationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MoneyDestination />} />
    </Routes>
  );
}

export { MoneyDestinationRoutes };
