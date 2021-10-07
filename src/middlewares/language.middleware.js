export default async (req, _, next) => {
  req.language = req.headers['accept-language'] || 'pt-br';
  next();
};
