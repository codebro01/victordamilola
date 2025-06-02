"use client";

import { useState, useEffect } from 'react';

const useYearsOfExperience = (startDateString: string): number | null => {
  const [experience, setExperience] = useState<number | null>(null);

  useEffect(() => {
    const calculateExperience = () => {
      const startDate = new Date(startDateString);
      const currentDate = new Date();
      
      if (isNaN(startDate.getTime())) {
        console.error("Invalid start date for experience calculation.");
        setExperience(null);
        return;
      }

      let years = currentDate.getFullYear() - startDate.getFullYear();
      const currentMonth = currentDate.getMonth();
      const startMonth = startDate.getMonth();
      const currentDay = currentDate.getDate();
      const startDay = startDate.getDate();

      if (currentMonth < startMonth || (currentMonth === startMonth && currentDay < startDay)) {
        years--;
      }
      // For simplicity, we return whole years. Could be more precise if needed.
      setExperience(Math.max(0, years));
    };

    calculateExperience();
    // Optional: Recalculate if the component is long-lived and crosses a year boundary
    // const interval = setInterval(calculateExperience, 1000 * 60 * 60 * 24); 
    // return () => clearInterval(interval);
  }, [startDateString]);

  return experience;
};

export default useYearsOfExperience;
