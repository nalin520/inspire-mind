export function mapToArray(data: IMap) {
  const list: any[] = [];

  Object.keys(data).forEach(key => {
    if (data[key]) {
      list.push(key);
    }
  });

  return list;
}
