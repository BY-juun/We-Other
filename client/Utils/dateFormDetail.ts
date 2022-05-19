export const dateFormDetail = (date: Date) => {
	const newDate = new Date(date);
	newDate.setHours(newDate.getHours() + 9);
	return `${newDate.getFullYear()}.${newDate.getMonth() + 1}.${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}`;
};
