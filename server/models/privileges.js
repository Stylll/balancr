'use strict';

module.exports = (sequelize, DataTypes) => {
  const Privileges = sequelize.define('Privileges', {
    privilege: {
      type: DataTypes.STRING,
      allowNulls: false,
    },
    hierarchy: {
      type: DataTypes.INTEGER,
      allowNulls: false,
    },
  }, {});
  Privileges.associate = (models) => {
    // associations can be defined here
    Privileges.belongsToMany(models.Users, {
      through: 'UserPrivileges',
      foreignKey: 'privilegeId',
    });

    Privileges.belongsToMany(models.Pages, {
      through: 'PagePrivileges',
      foreignKey: 'privilegeId',
    });

    Privileges.belongsToMany(models.Menus, {
      through: 'MenuPrivileges',
      foreignKey: 'privilegeId',
    });
  };
  return Privileges;
};
