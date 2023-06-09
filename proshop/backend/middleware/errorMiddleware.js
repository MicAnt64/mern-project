const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  // Sometimes there will be an err even if code is 200.
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  // We set status
  res.status(statusCode);
  // Return msg in json format
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export {notFound, errorHandler};
