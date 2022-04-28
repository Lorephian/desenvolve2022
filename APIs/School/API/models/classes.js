'use strict';
module.exports = (sequelize, DataTypes) => {
const Class = sequelize.define('Classes',  {
  starting_date: DataTypes.DATEONLY
}, {})
Class.associate = function(models) {
  Class.hasMany(models.Registrations, {
    foreignKey: 'class_id'
  })
  Class.belongsTo(models.People, {
    foreignKey: 'teacher_id'
  })
  Class.belongsTo(models.Levels, {
    foreignKey: 'level_id'
  })
}
  return Class;
};