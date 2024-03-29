import { formatDate } from "@angular/common";

interface changeWeek{
    firstDate: Date,
    lastDate: Date
}



export class WorkingWithDates {
    formatDate(date: Date | string): string {
        if (typeof date === 'string' && date.trim() === '') {
            return ''; // Вернуть пустую строку, если дата пустая
        }
        if (typeof date === 'string') {
            date = new Date(date); // Преобразовать строку в объект Date
        }
        if (date instanceof Date && !isNaN(date.getTime())) {
            return formatDate(date, 'yyyy-MM-dd', 'en-US');
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



    viewWeek(dates: string[],type: string): changeWeek {
        let newday: number = 0;
        let newday2: number = 0;

        const [year, month, day] = dates[0].split('-').map(Number);
        const [year2, month2, day2] = dates[6].split('-').map(Number);
        
        if(type == "last"){
            newday = day - 7;
            newday2 = day2 - 7;
        }
        if(type == "next"){
            newday = day + 7;
            newday2 = day2 + 7;
        }

        return { firstDate: new Date(year, month - 1, newday), lastDate: new Date(year2, month2 - 1, newday2) };
    }

    DatesSplit(dates: string[]) {
        let spltDates: {day: string, month: string, year: string}[] = [];
        for (let date of dates) {
          let parts = date.split('-');
          if (parts.length === 3) {
            let day = parts[2];
            let month = parts[1];
            let year = parts[0];
            spltDates.push({ day, month, year });
          } else {
            console.log(`Неверный формат даты: ${date}`);
          }
        }
        return spltDates;
      }
    
      changeWeek(week: changeWeek, daysOfWeek: string[]) {
        const formattedFirstDate = week.firstDate;
        const formattedLastDate = week.lastDate;

        daysOfWeek.splice(0, daysOfWeek.length);
        daysOfWeek = this.filterdaysOfWeek(week.firstDate);
        let datesSplit = this.DatesSplit(daysOfWeek);
  
        const formattedDate = `${formattedFirstDate.getFullYear()}-${(formattedFirstDate.getMonth() + 1).toString().padStart(2, '0')}-${formattedFirstDate.getDate().toString().padStart(2, '0')}`;
        const formattedDate2 = `${formattedLastDate.getFullYear()}-${(formattedLastDate.getMonth() + 1).toString().padStart(2, '0')}-${formattedLastDate.getDate().toString().padStart(2, '0')}`;
       
        return { formattedDate: formattedDate, formattedDate2: formattedDate2, daysOfWeek: daysOfWeek };
    }

}

