export const customErrors = {
  // 400
  BAD_REQUEST_USER_REGISTERED: {
    message: 'User is already registered',
    code: 4001
  },
  BAD_REQUEST_USER_ACTIVATED: {
    message: 'User is already activated',
    code: 4002
  },

  BAD_REQUEST_NO_TOKEN: {
    message: 'Token is not present'
  },

  // 404
  NOT_FOUND: {
    message: 'Record not found'

  }
};
