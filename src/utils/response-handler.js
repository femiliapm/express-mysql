const responseData = (response, statusCode, data) => {
  let responseBody = {
    success: true,
    data,
  };
  response.status(statusCode).json(responseBody);
  response.end();
};

const responseMessage = (response, statusCode, message, isSuccess) => {
  let responseBody = {
    success: isSuccess,
    message,
  };
  response.status(statusCode).json(responseBody);
  response.end();
};

const responseError = (response, statusCode, message, error) => {
  let responseBody = {
    message,
    error,
  };
  response.status(statusCode).json(responseBody);
  response.end();
};

module.exports = {
  responseData,
  responseMessage,
  responseError,
};
