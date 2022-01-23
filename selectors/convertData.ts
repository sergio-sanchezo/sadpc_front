export const convertData = (data: any) => {
  const final = [] as any;

  for (const prop in data) {
    final.push(
      ...data[prop].map((e: any) => ({
        title: `${prop.toLocaleUpperCase()} ${e.name}`,
        key: `${prop}-${e._id}`,
      }))
    );
  }

  return final;
};
