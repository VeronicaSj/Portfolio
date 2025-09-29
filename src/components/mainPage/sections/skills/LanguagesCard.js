
import { BiColor } from 'react-icons/bi';
import  '../../../../index.css';

import  LanguagesStyle from './LanguagesCard.module.css';

function LanguagesCard({languageList}) {

  return (
        <div>
              <h3>Languages</h3>
              <div className={LanguagesStyle.container}>
                  <table className={LanguagesStyle.table}>
                      <thead>
                          <tr>
                              <th className={LanguagesStyle.th}>Language</th>
                              <th className={LanguagesStyle.th}>CEFR Level</th>
                              <th className={LanguagesStyle.th}>Certificate</th>
                          </tr>
                      </thead>
                      <tbody>
                          {languageList.map((item, index) => (
                              <tr key={index} >
                                  <td className={LanguagesStyle.td}>{item.lang}</td>
                                  <td className={LanguagesStyle.td}>{item.cerfLevel}</td>
                                  <td className={LanguagesStyle.td}>{item.certificate}</td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>
        </div>
  );
}

export default LanguagesCard;