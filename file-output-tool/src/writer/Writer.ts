import * as fs from 'fs';

/**
 * 書き出しを行う定義
 */
export abstract class Writer {
  /** 書き出すファイルのパス */
  abstract readonly filePath: string;

  /** 書き出すファイル */
  outputStream!: fs.WriteStream;

  /** ファイルのヘッダ */
  abstract readonly header: string;

  /** ファイルのトレイラ */
  abstract readonly trailer: string;

  /**
   * ファイルの初期化を行う。
   */
  init(): void {
    this.outputStream = fs.createWriteStream(this.filePath);
    this.outputStream.write(this.header);
  }

  /**
   * 1レコード分の書き出しを行う。
   */
  abstract writeRecord(record: any): void;

  /**
   * ファイルの書き出しを終了する。
   */
  terminate(): void {
    this.outputStream.write(this.trailer);
  }
}
