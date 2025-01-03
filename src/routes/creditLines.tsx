import { Route, Routes } from "react-router-dom";

import { CreditLines } from "@pages/creditLines";
import { Addcreditlines } from "@pages/creditLines/AddCreditLines";

function CreditLinesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CreditLines />} />
      <Route path="/add-credit-line" element={<Addcreditlines />} />
    </Routes>
  );
}

export { CreditLinesRoutes };
