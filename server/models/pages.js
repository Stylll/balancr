'use strict';

module.exports = (sequelize, DataTypes) => {
  const Pages = sequelize.define('Pages', {
    pagename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pageurl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  Pages.associate = (models) => {
    // associations can be defined here
    Pages.belongsToMany(models.Privileges, {
      through: 'PagePrivileges',
      foreignKey: 'pageId',
    });
  };

  return Pages;
};
