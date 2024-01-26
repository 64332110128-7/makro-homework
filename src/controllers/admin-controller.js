exports.createProduct = async (req, res, next) => {
  try {
    res.json({ message: "Create Product" });
  } catch (err) {
    next(err);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    res.json({ message: "Update Product" });
  } catch (err) {
    next(err);
  }
};

exports.createCategory = async (req, res, next) => {
  try {
    res.json({ message: "Create Category" });
  } catch (err) {
    next(err);
  }
};

exports.createBrand = async (req, res, next) => {
  try {
    res.json({ message: "Create Brand" });
  } catch (err) {
    next(err);
  }
};

exports.createPromotion = async (req, res, next) => {
  try {
    res.json({ message: "Create Promotion" });
  } catch (err) {
    next(err);
  }
};
