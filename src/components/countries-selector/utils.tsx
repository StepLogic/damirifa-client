export const filterData = (data: Array<any>) => {
  // console.log(data);
  const ghana = data[0];
  let toSort = [ghana];
  const sliced = data.slice(1).sort((a, b) => a.name.localeCompare(b.name));
  let sorted = toSort.concat(sliced);
  return sorted.map((country) => {
    return { value: country.code, label: `${country.name} (${country.code})` };
  });
};
export const getDefault = (data: any) => {
  return (
    (data && data.find((country: any) => country.value === "GH")) || undefined
  );
};
