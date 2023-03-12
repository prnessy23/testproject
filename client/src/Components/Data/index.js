import React from "react";
import Company from "../Company";
import './style.css'

export default function Data(props) {
    const companies = [{
        name: 'Amazon',
        revenue: 111111,
        cashFlow: 22222,
        netEarnings: 333333,
        cash: 4444444

    },
    {
        name: 'Tesla',
        revenue: 111111,
        cashFlow: 22222,
        netEarnings: 333333,
        cash: 4444444

    },
    {
        name: 'Meta',
        revenue: 111111,
        cashFlow: 22222,
        netEarnings: 333333,
        cash: 4444444

    },
    {
        name: 'Apple',
        revenue: 111111,
        cashFlow: 22222,
        netEarnings: 333333,
        cash: 4444444

    },
]

  const companyColumns = companies.map((company, index) => (
    <Company
      key={index}
      name={company.name}
      revenue={company.revenue}
      cashFlow={company.cashFlow}
      netEarnings={company.netEarnings}
      cash={company.cash}
    />
  ));

  return (
    <section>
      <h3>Financial Health</h3>
      <table className="financial-table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Revenue</th>
            <th>Cash Flow</th>
            <th>Net Earnings</th>
            <th>Cash</th>
          </tr>
        </thead>
        <tbody>
          {companyColumns}
        </tbody>
      </table>
    </section>
  );
}
