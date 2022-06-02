'use strict';
module.exports = (sequelize, DataTypes) => {
  const People = sequelize.define('People', {
    name: {type: DataTypes.STRING,
    validate: {
      validatorFunction: function(data) {
        if (data.length < 3 ) throw new Error('field name must contain more than 3 characters')
      }
    }
    },
    active: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'invalid e-mail data'
        }
      }
    },
    role: DataTypes.STRING
  }, { 
    paranoid: true,
    defaultScope: {
      where: { active: true}
    },
     scopes: { 
       all: { where: {} },
  }
  }) 
  People.associate = function(models) {
    People.hasMany(models.Classes, {
      foreignKey: 'teacher_id'
    })
    People.hasMany(models.Registrations, {
      foreignKey: 'student_id'
    })
  }
  return People;
};