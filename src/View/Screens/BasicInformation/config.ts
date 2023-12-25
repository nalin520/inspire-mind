export const genderList = [
  {
    id: 0,
    name: 'Male',
  },
  {
    id: 1,
    name: 'Female',
  },
  {
    id: 2,
    name: 'Non-Binary',
  },
  {
    id: 3,
    name: 'I prefer not to say',
  },
  {
    id: 4,
    name: 'Other',
  },
];
export const activityList = [
  {
    id: 0,
    name: 'Light',
  },
  {
    id: 1,
    name: 'Moderate',
  },
  {
    id: 2,
    name: 'Heavy',
  },
];
export const leisureTimeList = [
  {
    id: 0,
    name: 'Inactive',
  },
  {
    id: 1,
    name: 'Moderate',
  },
  {
    id: 2,
    name: 'Very Active ',
  },
];
export const ageList = Array(52)
  .fill(1)
  .map((_, i) => {
    const value = (i + 10).toString();
    return {label: value, value: value};
  });
