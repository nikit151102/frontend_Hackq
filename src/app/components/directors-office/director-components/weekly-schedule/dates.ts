import { formatDate } from "@angular/common";

export class WorkingWithDates {
    formatDate(date: Date | string): string {
        if (typeof date === 'string' && date.trim() === '') {
            return ''; // Вернуть пустую строку, если дата пустая
        }
        if (typeof date === 'string') {
            date = new Date(date); // Преобразовать строку в объект Date
        }
        if (date instanceof Date && !isNaN(date.getTime())) {
            return formatDate(date, 'dd.MM.yyyy', 'en-US');
        } else {
            return ''; // Вернуть пустую строку, если преобразование не удалось
        }
    }


    filterdaysOfWeek(monday: Date) {
        console.log("monday", monday)
        const daysOfWeek = [];
        for (let i = 0; i < 7; i++) {
            const day = new Date(monday);
            day.setDate(monday.getDate() + i);

            daysOfWeek.push(this.formatDate(day));
        }

        return daysOfWeek;
    }


    currentWeek(){
        const today = new Date();
    const currentDayOfWeek = today.getDay();
    const mondayDifference = (currentDayOfWeek === 0) ? -6 : 1 - currentDayOfWeek;
    const sundayDifference = (currentDayOfWeek === 0) ? 0 : 7 - currentDayOfWeek;
    const monday = new Date(today);
    monday.setDate(today.getDate() + mondayDifference);
    const sunday = new Date(today);
    sunday.setDate(today.getDate() + sundayDifference);

    return { monday: monday, sunday: sunday }
    }



    viewLastWeek(dates: string[]) {
        const [day, month, year] = dates[0].split('.').map(Number);
        const firstDate = new Date(year, month - 1, day - 7);

        const [day2, month2, year2] = dates[6].split('.').map(Number);
        const lastDate = new Date(year2, month2 - 1, day2 - 7);

        return { firstDate: firstDate, lastDate: lastDate };
    }



    viewNextWeek(dates: string[]) {
        const [day, month, year] = dates[0].split('.').map(Number);
        const firstDate = new Date(year, month - 1, day + 7);

        const [day2, month2, year2] = dates[6].split('.').map(Number);
        const lastDate = new Date(year2, month2 - 1, day2 + 7);

        return { firstDate: firstDate, lastDate: lastDate };
    }
}

