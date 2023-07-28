module.exports = (sequelize, DataTypes) => {
  const time_keeping = sequelize.define("time_keeping", {
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cutoff_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    REG: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    ABSENT: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    employee_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return time_keeping;
};
