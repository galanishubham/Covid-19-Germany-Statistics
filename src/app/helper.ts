export function sortData(data, field, order) {
  let sortedData = data.slice(0);
  sortedData.sort((a, b) => {
    var dep1 = a[field];
    var dep2 = b[field];
    if (dep1 < dep2) {
      return order === 'asc' ? -1 : 1;
    }
    if (dep1 > dep2) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });
  return sortedData;
}
