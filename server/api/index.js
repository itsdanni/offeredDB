/**
 * routing hub for all api routes
 */
const router = require('express').Router();

module.exports = router;

router.use('/comapnies', require('./companies'));

// error handling middleware for routes
router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
