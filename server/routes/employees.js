
/**
 * Route handler for employees request
 * @param {*} router router object from express
 * @returns {*} response object
 */
const employees = (router) => {
  router.get('/employees', (req, res) => {
    res.status(200).send({ message: 'v1 api test' });
  });
};

export default employees;
