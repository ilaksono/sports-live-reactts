const mons = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export const formatEventDate = (d: string) => {
  if (!d) return 'Time not available';
  let dat = d;
  if (typeof dat === 'string') {
    dat = d.replace(' ', 'T')
  }
  const da = new Date(dat);
  const day = da.getDate();
  const hr = da.getHours();
  let min:any = da.getMinutes();
  if (min < 10)
    min = `0${min}`;

  return `${mons[da.getMonth()]} ${day} at ${hr}:${min}`;
}
