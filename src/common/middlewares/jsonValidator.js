const jsonValidator = (err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: "JSON không hợp lệ",
    });
  }
  next(err);
};

export default jsonValidator;
