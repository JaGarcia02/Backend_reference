module.exports = (sequelize, DataTypes) => {
  const new_DTR = sequelize.define(
    "new_DTR",
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
  return new_DTR;
};
