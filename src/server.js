require("dotenv").config();

const app = require("./app");
const connectDatabase = require("./config/database");

const PORT = 3000;

connectDatabase();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});