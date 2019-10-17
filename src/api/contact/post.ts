export default (req, res) => {
  return res.send(`Hello from '/api/contact'! (${req.method})`);
};
