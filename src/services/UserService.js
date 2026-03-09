const bcrypt = require("bcrypt");
const User = require("../models/User");

class UserService {
    
    async create(userData) {

        const hashedPassword = await bcrypt.hash(userData.password, 10);

        return await User.create({
        ...userData,
        password: hashedPassword
        });
    }

    async findByEmail(email) {
        return await User.findOne({ email });
    }

    async checkPassword(password, hash) {
        return await bcrypt.compare(password, hash);
    }
}

module.exports = new UserService();