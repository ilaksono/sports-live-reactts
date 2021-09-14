const mons = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const formatEventDate = (d: string) => {
  if (!d) return 'Time not available';
  let dat = d;
  if (typeof dat === 'string') {
    dat = d.replace(' ', 'T')
  }
  const da = new Date(dat);
  const day = da.getDate();
  const yr = da.getFullYear();
  const hr = da.getHours();
  let min: string | number = da.getMinutes();
  if (min < 10)
    min = `0${min}`;

  return `${yr} ${mons[da.getMonth()]} ${day} at ${hr}:${min}`;
}

export const snakeToTitle = (str = '') => {
  let stg = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i + 1] === '_')
      stg += str[i].toUpperCase();
    else stg += str[i];
  }
  return stg;
}

// format is YYYY-MMM-DD
export const convertDateToAPIString = (d: Date) =>
  `${d.getFullYear()}-${mons[d.getMonth()]?.toUpperCase()}-${d.getDate()}`;
