import { ChartTypeRegistry } from "chart.js";

export class CreateChart {

  private selectedChartType: keyof ChartTypeRegistry = 'line';
  private Lines: lines[] = []

  private dateRange: string[] = [];
  private dataFromServer: any[] = [];

  setChartType(value: keyof ChartTypeRegistry){
    this.selectedChartType = value;
  }
  getChartType(){
    return this.selectedChartType ;
  }
  setLines(values: any) {
    this.Lines =values
  }
  getLines() {
    return this.Lines
  }
  setdateRange(values: string[]) {
    this.dateRange = values
  }
  getdateRange() {
    return this.dateRange
  }

  setdataFromServer(values: any) {
    this.dataFromServer = values
  }
  getdataFromServer() {
    return this.dataFromServer
  }

  createColor(ctx: any, rgb1: string, rgb2: string) {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, rgb1);
    gradient.addColorStop(1, rgb2);
    return gradient
  }

  createChartData(labels: string, backgroundColors: string, borderColors: string, borderWidths: number, dataArrays: any) {
    this.Lines.push({
      label: labels,
      backgroundColor: backgroundColors,
      borderColor: borderColors,
      borderWidth: borderWidths,
      data: dataArrays,
    })
  }

  updateDateCounts(flag1: boolean, valueFlag1: string | false = false, flag2: boolean, valueFlag2: string | false = false) {
    const dateCounts = [];

    for (const date of this.dateRange) {
      let filteredData: any[] = this.dataFromServer;

      if (flag1 && valueFlag1) {
        filteredData = filteredData.filter((item) => item.status_application === valueFlag1);
      }
      if (flag2 && valueFlag2) {
        filteredData = filteredData.filter((item) => item.initials === valueFlag2);
      }

      const count = filteredData.filter((item) => item.datas === date).length;
      dateCounts.push({ date, count });
    }

    const lineArray: number[] = dateCounts.map(item => item.count);

    return lineArray;
  }
}



interface lines {
  label: string,
  backgroundColor: string,
  borderColor: string,
  borderWidth: number
  data: number[]
}

