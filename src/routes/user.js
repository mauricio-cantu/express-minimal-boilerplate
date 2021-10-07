import userController from '../controllers/user.js';

export default (router, baseUrl) => {
  router.get(`${baseUrl}/users`, userController.getAll);
  router.get(`${baseUrl}/users/:id`, userController.getById);
  router.post(`${baseUrl}/users/:id`, userController.create);
  router.put(`${baseUrl}/users/:id`, userController.update);
  router.delete(`${baseUrl}/users/:id`, userController.remove);

  return router;
};
