
/**
 * Route handler for users request
 * @param {*} router router object from express
 * @returns {*} response object
 */
const users = (router) => {
  router.get('/users', (req, res) => {
    res.status(200).send({ message: 'v1 api users' });
  });
};

export default users;
