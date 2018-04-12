'use strict';
import bcrypt from 'bcrypt';

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
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
    password: {
      type: DataTypes.STRING,
      allowNulls: false,
    },
    resetPasswordToken: {
      type: DataTypes.STRING,
      allowNulls: true,
    },
    resetPasswordExpires: {
      type: DataTypes.DATE,
      allowNulls: true,
    },
  }, {
    hooks: {
      beforeCreate: (user) => {
        user.hashPassword();
      },
      beforeUpdate: (user) => {
        if (user.changed('password')) {
          user.hashPassword();
        }
      },
      beforeBulkCreate: (user) => {
        user.hashPassword();
      },
      beforeBulkUpdate: (user) => {
        if (user.changed('password')) {
          user.hashPassword();
        }
      },
    },
  });

  // Class Method
  Users.associate = (models) => {
    // associations can be defined here
    Users.belongsTo(models.Employees, {
      onDelete: 'CASCADE',
      foreignKey: 'userId',
    });
    Users.belongsToMany(models.Privileges, {
      through: 'UserPrivileges',
      foreignKey: 'userId',
    });
  };

  // Instance method
  Users.prototype.hashPassword = function hashPassword() {
    this.password = bcrypt.hashSync(this.password, 10);
  };

  return Users;
};
