module.exports = (sequelize, DataTypes) => {
  const timekeeping_dtr = sequelize.define(
    "timekeeping_dtr",
    {
      ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      Time: { type: DataTypes.STRING, allowNull: true },
      BioID: { type: DataTypes.STRING, allowNull: true },
    },
    {
      paranoid: true,
      deletedAt: "destroyTime",
    }
  );
  return timekeeping_dtr;
};
