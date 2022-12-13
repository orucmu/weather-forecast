import { createContext, useContext, useState } from "react";

const CityContext = createContext();

export const CityContextProvider = ({ children }) => {
  const [cityName, setCityName] = useState("Diyarbakır");

  const values = {
    cityName,
    setCityName,
  };

  return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};

export const useCity = () => {
  const city = useContext(CityContext);

  return city;
};
