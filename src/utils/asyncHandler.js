//Higher order function
const asyncHandler = (fn) => async ( req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    // this is because writing try/catch in every reoute is boring
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
  }
};
export { asyncHandler };
