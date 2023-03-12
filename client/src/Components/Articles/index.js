import React from "react";
import Company from "../Company";
import './style.css'

export default function Data(props) {
    const companies = [{
      name: 'Amazon',
      zachs: 'zachs.com',
      marketWatch: 'marketwatch.com',
      bezinga: 'bezinga.com',
      forbes: 'forbes.com',
      cnn: 'cnn.com'

  },
  {
    name: 'Tesla',
    zachs: 'zachs.com',
    marketWatch: 'marketwatch.com',
    bezinga: 'bezinga.com',
    forbes: 'forbes.com',
    cnn: 'cnn.com'

},
{
  name: 'Meta',
  zachs: 'zachs.com',
  marketWatch: 'marketwatch.com',
  bezinga: 'bezinga.com',
  forbes: 'forbes.com',
  cnn: 'cnn.com'

},
{
  name: 'Apple',
  zachs: 'zachs.com',
  marketWatch: 'marketwatch.com',
  bezinga: 'bezinga.com',
  forbes: 'forbes.com',
  cnn: 'cnn.com'

},
]
  const companyColumns = companies.map((company, index) => (
    <Company
      key={index}
      zachs={company.zachs}
      marketWatch={company.marketWatch}
      bezinga={company.bezinga}
      forbes={company.forbes}
      cnn={company.cnn}
    />
  ));

  return (
    <section>
      <h3>Financial Health</h3>
      <table className="financial-table">
        <thead>
          <tr>
            <th>Zachs</th>
            <th>Market Watch</th>
            <th>Bezinga</th>
            <th>Forbes</th>
            <th>CNN</th>
          </tr>
        </thead>
        <tbody>
          {companyColumns}
        </tbody>
      </table>
    </section>
  );
}
