//mongodb+srv://vaishu:vaishu@cluster0.qskmh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const mongoose = require("mongoose");
exports.connect = () => {
  try {
    mongoose.connect(
      "mongodb+srv://Kishoref1:kishorec@cluster0.rru3b.mongodb.net/amazon"
    );
    console.log("connection Success");
  } catch (err) {
    console.log(err);
  }
};
