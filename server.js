const express = require("express");
const app = express();
const db = require("./models");
const userRoutes = require("./routes/user.routes");

app.use(express.json());
app.use("/api/users", userRoutes);

// Sync database and start server
const PORT = process.env.PORT || 3000;
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
