import express from 'express';

import employees from './employees';
import users from './users';

/**
 * Route handler for api v1
 * Passes the router object to individual routers for processing
 */

const router = express.Router();

employees(router);
users(router);

export default router;
