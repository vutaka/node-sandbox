import { Writer } from "./Writer";

/**
 * サンプル実装
 */
export class HogehogeTsvWriter extends Writer {
  filePath: string = './hogehoge.tsv';
  header: string = `name\tage\n`;
  trailer: string = '';

  writeRecord(record: any): void {
    this.outputStream.write(`"${record.name}"\t${record.age}\n`);
  }

}