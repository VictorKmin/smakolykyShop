import {NextFunction, Response} from 'express';
import { UploadedFile } from 'express-fileupload';

import {FileType, ResponseStatusCodesEnum} from '../../constatns';
import {IRequestExtended} from '../../models';
import {customErrors, ErrorHandler} from '../../errors';

export const checkCSVFileMiddleware = (req: IRequestExtended, res: Response, next: NextFunction): void => {
  try {
    const product_csv = req.files?.product_csv as UploadedFile;

    if (!FileType.CSV.includes(product_csv.mimetype)) {
      throw new ErrorHandler(ResponseStatusCodesEnum.BAD_REQUEST, customErrors.BAD_REQUEST_NOT_VALID_FILE.message);
    }

    next();
  } catch (e) {
    next(e);
  }
};
