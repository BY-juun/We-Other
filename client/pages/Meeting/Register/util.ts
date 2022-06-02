export const meetingOption = [
  { text: "2:2", value: 0, num: 2 },
  { text: "3:3", value: 1, num: 3 },
  { text: "4:4", value: 2, num: 4 },
];

export const isRegist = (partner: string[], num: number) => {
  console.log(num);
  console.log(partner);
  if (partner.filter((v) => v === "").length !== num) return true;
  return false;
};

export const isAllRegist = (partner: string[]) => {
  if (partner.filter((v) => v === "").length > 0) return false;
  return true;
};
