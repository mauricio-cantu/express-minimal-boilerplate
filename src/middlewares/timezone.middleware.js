export default async (req, _, next) => {
  req.timezone = req.headers['x-user-timezone'] || 'America/Sao_Paulo';
  next();
};
