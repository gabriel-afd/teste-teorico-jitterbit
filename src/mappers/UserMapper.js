const UserResponse = require("../dto/UserResponse");

const mapToUserResponse = (user) => {
  return new UserResponse(user);
};

module.exports = { mapToUserResponse };
