module.exports = (sequelize, DataTypes) => {
  const timekeeping_cutoff = sequelize.define(
    "timekeeping_cutoff",
    {
      ID: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      cutOffID: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      paranoid: true,
      deletedAt: "destroyTime",
    }
  );

  return timekeeping_cutoff;
};
