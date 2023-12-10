/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
const sliderNavbar = createContext();

function SliderNavbarProvider({ children }) {
  const [slider, setSlider] = useState(false);
  return (
    <sliderNavbar.Provider value={{ slider, setSlider }}>
      {children}
    </sliderNavbar.Provider>
  );
}

export const SliderNav = sliderNavbar;
export default SliderNavbarProvider;
