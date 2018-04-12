'use strict';

module.exports = (sequelize, DataTypes) => {
  const Menus = sequelize.define('Menus', {
    menuname: {
      type: DataTypes.STRING,
      allowNulls: false,
    },
    menuurl: {
      type: DataTypes.STRING,
      allowNulls: false,
    },
  }, {});
  Menus.associate = (models) => {
    // associations can be defined here
    Menus.belongsToMany(models.Privileges, {
      through: 'MenuPrivileges',
      foreignKey: 'menuId',
    });
  };

  return Menus;
};
