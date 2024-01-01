const convertTime = (time) => {
  const date = new Date(time);
  const humanReadableTime = date.toLocaleString();
  const [datepart] = humanReadableTime.split(', ');
  return datepart;
};

export default convertTime;