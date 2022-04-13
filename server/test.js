const test = {
  name: "kichang",
};
console.log(test.name);
console.log("dirname    : ", __dirname);

const t = async (v) => {
  console.log(v);
};
console.log(
  t().then((v) => {
    v;
  })
);
