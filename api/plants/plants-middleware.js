const verifyPlantInputs = async (req, res, next) => {
  const { nickname, species, h2oFrequency } = req.body;

  if (!nickname || !species || !h2oFrequency) {
    next({ message: "Please enter the required information!" });
  } else {
    next();
  }
};

//could build a middleware to restrict other users from deleting other users posts

module.exports = {
  verifyPlantInputs,
};
