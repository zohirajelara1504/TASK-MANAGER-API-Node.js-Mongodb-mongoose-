const { customAPIError } = require("../middleware/custom-err");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof customAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  const statusCode = err.status || 500;
  return res.status(statusCode).json({ msg: err.message });
};

module.exports = errorHandlerMiddleware;
