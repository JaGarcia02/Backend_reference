module.exports = (sequelize, DataTypes) => {
  const testing = sequelize.define("testing", {
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    employee_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return testing;
};
