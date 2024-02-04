
export const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
export const dateNow = new Date();

export const getCurrentWeek = ():Date[]=> {
	const currentDate:Date = new Date();

	// Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
	const currentDayOfWeek:number = currentDate.getDay();

	// Calculate the start date of the current week (Monday)
	const daysUntilMonday = (currentDayOfWeek + 6) % 7;
	const startDate: Date = new Date(currentDate);
	startDate.setDate(currentDate.getDate() - daysUntilMonday);
	
	// look previous week
	const currentWeek = daysOfWeek(startDate);
	return currentWeek
}

export const prevNextWeek = (): Date[] =>{
	const currentDate:Date = new Date();
	const currentDayOfWeek:number = currentDate.getDay();
	const daysUntilMonday = (currentDayOfWeek + 6) % 7;
	const startDate: Date = new Date(currentDate);
	// TODO: don't forget change this
	startDate.setDate(currentDate.getDate() - daysUntilMonday - 14);
	return daysOfWeek(startDate);

} 

const daysOfWeek = ( startDate: Date): Date[] => Array.from({ length: 7 }, (_:unknown, i:number) => {
	// const dayIndex = (currentDayOfWeek + i) % 7; // Ensure a circular index to avoid exceeding 6
	const day:Date = new Date(startDate);
	day.setDate(startDate.getDate() + i);
	return day;
});