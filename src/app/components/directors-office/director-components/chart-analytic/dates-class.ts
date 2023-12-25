export class WorkingWithDates{

    updateDateRange(fromDate: string, toDate: string) {
        const startDate = new Date(fromDate);
        const endDate = new Date(toDate);
        const range: string[] = [];
        if (startDate <= endDate) {
            let currentDate = startDate;
            while (currentDate <= endDate) {
                const formattedDate = this.formatDate(currentDate); // Форматируем дату
                range.push(formattedDate);
                currentDate.setDate(currentDate.getDate() + 1);
            }
            return range
        } else {
            return range
        }
    }

    formatDate(date: Date): string {
        const day = date.getDate().toString().padStart(2, '0'); // Получаем день и добавляем ведущий ноль
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Получаем месяц (начиная с 0) и добавляем ведущий ноль
        const year = date.getFullYear();
        return `${year}-${month}-${day}`;
    }
}