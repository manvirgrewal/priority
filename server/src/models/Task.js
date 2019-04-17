module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    description: DataTypes.TEXT,
    class: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    difficulty: DataTypes.SMALLINT,
    isDone: DataTypes.BOOLEAN
  })
  return Task
}
