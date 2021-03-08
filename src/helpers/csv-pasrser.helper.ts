import {UploadedFile} from 'express-fileupload';
import {parse} from '@fast-csv/parse';

export const csvParser = (csv: UploadedFile): Promise<Array<Array<string>> | Error> => {
  return new Promise((resolve, reject) => {
    //          [[ key ], [ value ]]
    const data: Array<Array<string>> = [];

    const csvParserStream = parse()
      .on('data', (chunk: Array<string>) => {
        data.push(chunk);
      })
      .on('error', (err: Error) => {
        reject(err);
      });

    csvParserStream.write(csv.data as Buffer);
    csvParserStream.end(() => {
      resolve(data);
    });
  });
};
