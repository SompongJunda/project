const nofFoundHandler = (req, res, next) => {
  res.status(404).json({ message: "Not FoundHandler" });
};

module.exports = nofFoundHandler;
