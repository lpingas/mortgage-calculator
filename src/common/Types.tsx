export type MonthMortgageData = {
  month: number;
  balance: number;
  grossPaid: number;
  capitalPaid: number;
  interest: number;
  deduction: number;
  netPaid: number;
  totalInvestment: number;
  accumulatedEquity: number;
  netEquity: number;
  houseMarketValue: number;
}

export type MortgageData = {
  totals: {
    totalPaidGross: number;
    totalPaidNet: number;
    totalInterestGross: number;
    totalInterestNet: number;
    totalInvestedGross: number;
    totalInvestedNet: number;
  };
  monthly: Array<MonthMortgageData>;
};
