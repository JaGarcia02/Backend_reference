module.exports = (sequelize, DataTypes) => {
  const TimeRecord = sequelize.define(
    "timekeeping_dtr",
    {
      Cutoff: { type: DataTypes.STRING, allowNull: false },
      Time_in: { type: DataTypes.STRING, allowNull: false },
      Time_break_out: { type: DataTypes.STRING, allowNull: false },
      Time_break_in: { type: DataTypes.STRING, allowNull: false },
      Time_out: { type: DataTypes.STRING, allowNull: false },
      BioID: { type: DataTypes.STRING, allowNull: false },
    },
    {
      paranoid: true,
      deletedAt: "destroyTime",
    }
  );
  return TimeRecord;
};
