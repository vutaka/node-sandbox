import { Writer } from "./Writer";

/**
 * サンプル実装
 */
export class HogehogeCsvWriter extends Writer {
  filePath: string = './hogehoge.csv';
  header: string = `name,age\n`;
  trailer: string = '';

  writeRecord(record: any): void {
    this.outputStream.write(`"${record.name}",${record.age}\n`);
  }

}