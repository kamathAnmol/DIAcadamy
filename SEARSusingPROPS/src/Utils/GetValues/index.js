const getValues = (min, max) => {
  const med = Math.floor((+min + +max) / 2);
  const valueMatrix = [
    [
      { value: min * min, color: 'low' },
      { value: min * med, color: 'low' },
      { value: min * max, color: 'med' },
    ],
    [
      { value: med * min, color: 'low' },
      { value: med * med, color: 'med' },
      { value: med * max, color: 'high' },
    ],
    [
      { value: max * min, color: 'med' },
      { value: max * med, color: 'high' },
      { value: max * max, color: 'high' },
    ],
  ];
  return valueMatrix;
};

export default getValues;
