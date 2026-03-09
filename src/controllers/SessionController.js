const jwt = require("jsonwebtoken");
const UserService = require("../services/UserService");

class SessionController {
  async store(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await UserService.findByEmail(email);

      if (!user) {
        return res.status(401).json({
          message: "Invalid credentials",
        });
      }

      const passwordMatch = await UserService.checkPassword(
        password,
        user.password,
      );

      if (!passwordMatch) {
        return res.status(401).json({
          message: "Invalid credentials",
        });
      }

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      return res.json({
        user: {
          id: user._id,
          email: user.email,
        },
        token,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new SessionController();
