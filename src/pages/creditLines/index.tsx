import { useState } from "react";

import { CreditLinesUI } from "./interface";

function CreditLines() {
  const [searchCreditLines, setSearchCreditLines] = useState<string>("");

  const handleSearchCreditLines = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCreditLines(e.target.value);
  };

  return (
    <CreditLinesUI
      loading={false}
      searchCreditLines={searchCreditLines}
      onSearchCreditLines={handleSearchCreditLines}
    />
  );
}

export { CreditLines };
