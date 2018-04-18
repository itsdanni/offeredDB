'use strict';
module.exports = (sequelize, DataTypes) => {
  var Company = sequelize.define('company', {
    name: DataTypes.STRING,
    website: DataTypes.TEXT,
    builtinnyc: DataTypes.STRING,
    domain: DataTypes.STRING,
    legalName: DataTypes.STRING,
    description: DataTypes.TEXT,
    foundedYear: DataTypes.BIGINT,
    employees: DataTypes.BIGINT,
    raised: DataTypes.BIGINT,
    crunchbase: DataTypes.STRING,
    careerPage: DataTypes.TEXT,
    geo: DataTypes.JSON,
    handles: DataTypes.JSON,
  }, {});
  Company.associate = function(models) {
    // associations can be defined here
  };
  return Company;
};
