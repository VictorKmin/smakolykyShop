import * as Joi from 'joi';

import {RegExpEnum} from '../../constatns';

export const emailValidator = Joi.object({
  email: Joi.string().trim().regex(RegExpEnum.email).required()
});
