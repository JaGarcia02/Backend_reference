module.exports = (sequelize, DataTypes) => {
  const timekeeping_data = sequelize.define(
    "timekeeping_data",
    {
      ID: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      cutOffID: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      REG: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      OT: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      UT: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      ND: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      LWP: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      REGNS: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      OTNS: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      OTND: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      LATES: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      ABSENT: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      Employee_ID: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      paranoid: true,
      deletedAt: "destroyTime",
    }
  );

  return timekeeping_data;
};
