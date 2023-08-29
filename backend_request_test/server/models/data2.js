module.exports = (sequelize, DataTypes) => {
  const data2 = sequelize.define(
    "data2",
    {
      company_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      employees: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      emp_dept: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      paranoid: true,
      deletedAt: "destroyTime",
    }
  );
  return data2;
};
