function mergeSection(originArr) {
  if (originArr.length === 1) {
    return originArr;
  }
  const arr = originArr.slice().sort((a, b) => a[0] - b[0]);

  let start = arr[0][0];
  let end = arr[0][1];

  const result = [];
  for (let i = 1, len = arr.length; i < len; i += 1) {
    const [s, e] = arr[i];
    if (s >= start && s < end && e > end) {
      end = e;
    } else if (s > end) {
      result.push([start, end]);
      start = s;
      end = e;
    }
  }
  result.push([start, end]);
  return result;
}
