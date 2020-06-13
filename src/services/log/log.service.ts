import {LogModel} from '../../database';
import {ILog} from '../../models';

class LogService {
  createLog(log: Partial<ILog>): Promise<ILog> {
    const logToCreate = new LogModel(log);

    return logToCreate.save();
  }
}

export const logService = new LogService();
