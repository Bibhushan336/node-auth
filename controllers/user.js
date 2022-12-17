const User = require("../models/User");

/* 
  @desc     Get Users
  @route    Get /api/v1 User
  @acess    Public
*/
exports.getUser = async (req, res, next) => {
  try {
    // const users = await User.find();
    // res.status(200).json({
    //   success: true,
    //   data: users,
    // });
    res.send("Node Boileplate");
  } catch (error) {
    next(error);
  }
};