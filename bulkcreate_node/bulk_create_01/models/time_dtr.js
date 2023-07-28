module.exports = (sequelize, DataTypes) => {
  const time_dtr = sequelize.define("time_dtr", {
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Time: { type: DataTypes.STRING, allowNull: true },
    BioID: { type: DataTypes.STRING, allowNull: true },
  });
  return time_dtr;
};
