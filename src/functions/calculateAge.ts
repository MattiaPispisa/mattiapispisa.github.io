/**
 * Calculate age from a birth date string (YYYY-MM-DD format)
 * @param birthDateString - Birth date in YYYY-MM-DD format
 * @returns The age as a number
 */
function calculateAge(birthDateString: string): number {
    const birthDate = new Date(birthDateString);
    const today = new Date();

    const todayDayMonthYear = _dayMonthYear(today);
    const birthDateDayMonthYear = _dayMonthYear(birthDate);

    let age = todayDayMonthYear.year - birthDateDayMonthYear.year;
    const monthDiff = todayDayMonthYear.month - birthDateDayMonthYear.month;
    const dayDiff = todayDayMonthYear.day - birthDateDayMonthYear.day;

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}

function _dayMonthYear(date: Date): { year: number, month: number, day: number } {
    return {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate(),
    };
}

export default calculateAge;

