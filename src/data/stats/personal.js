import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1994-07-11T03:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'currentschool',
    label: 'Current School',
    value: "New York University",
  },
  {
    key: 'location',
    label: 'Current City',
    value: 'New York, NY',
  },
  {
    key: 'hometown',
    label: 'Home Town',
    value: 'Lanzhou Gansu, China',
  },
];

export default data;
