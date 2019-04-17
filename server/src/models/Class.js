module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    professor: DataTypes.STRING,
    difficulty: DataTypes.SMALLINT,
    importance: DataTypes.SMALLINT,
    targetgrade: DataTypes.SMALLINT
  })
  return Task
}
