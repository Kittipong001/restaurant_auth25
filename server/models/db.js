const { Sequelize } = require("sequelize");
const dbConfig = require("../config//db.config");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.DBPORT,
  dialect: dbConfig.DIALECT,
  logging: false,
  omitNull: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // ไม่แนะนำใน production
    },
  },
});

testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been etablished successfully");
  } catch (error) {
    console.log("Unable to connect to the database!", error);
  }
};

testConnection();
module.exports = sequelize;
