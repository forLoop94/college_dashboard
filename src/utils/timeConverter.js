const convertTime = (time) => {
  const date = new Date(time);
  const humanReadableTime = date.toLocaleString();
  return humanReadableTime;
  // const [, timePart] = humanReadableTime.split(', ');
  // return timePart;
};

export default convertTime;