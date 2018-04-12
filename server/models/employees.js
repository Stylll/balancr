'use strict';

module.exports = (sequelize, DataTypes) => {
  const Employees = sequelize.define('Employees', {
    firstname: {
      type: DataTypes.STRING,
      allowNulls: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNulls: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNulls: false,
      unique: {
        args: true,
        msg: 'This email already exists',
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'This email is invalid',
        },
      },
    },
    gender: {
      type: DataTypes.STRING,
      allowNulls: false,
    },
    telephone_no: {
      type: DataTypes.STRING,
      allowNulls: false,
    },
    profile_pic: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
      allowNulls: false,
    },
  }, {});
  Employees.associate = (models) => {
    // associations can be defined here
    Employees.hasOne(model.Users, {
      as: 'User',
      foreignKey: 'userId',
    });
  };

  return Employees;
};
