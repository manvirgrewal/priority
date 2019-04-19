module.exports = (sequelize, DataTypes) => {
  const ClassModel = sequelize.define('ClassModel', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    professor: DataTypes.STRING,
    description: DataTypes.STRING,
    difficulty: DataTypes.SMALLINT,
    importance: DataTypes.SMALLINT,
    targetGrade: DataTypes.STRING,
    classSelected: DataTypes.BOOLEAN
  })
  return ClassModel
}
