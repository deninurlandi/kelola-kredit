/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
const dataUsersContext = createContext();

function DataUserContextProvider({ children }) {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem('data')) || [],
  );

  return (
    <dataUsersContext.Provider value={{ data, setData }}>
      {children}
    </dataUsersContext.Provider>
  );
}

export const DataUser = dataUsersContext;
export default DataUserContextProvider;
