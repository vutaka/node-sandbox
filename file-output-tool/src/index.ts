import { Writer } from "./writer/Writer";
import dummy from "./hogehoge.json";
import { HogehogeCsvWriter } from "./writer/HogehogeCsvWriter";
import { HogehogeTsvWriter } from "./writer/HogehogeTsvWriter";

/**
 * メイン処理。
 * 
 */
function main(): void {
  let writers = createWriters();
  writers.forEach(w => w.init());

  dummy.forEach(element => {
    writers.forEach(w => w.writeRecord(element))
  });

  writers.forEach(w => w.terminate());
}

/**
 * @see Writer インスタンスを作成する簡易実装
 */
function createWriters(): Array<Writer> {
  return [new HogehogeCsvWriter(), new HogehogeTsvWriter()];
}

main();