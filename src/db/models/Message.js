const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate (models) {
      // Message.belongsTo(models.Dialog);
      Message.belongsTo(models.Dialog, {
        foreignKey: 'id',
      });
      Message.belongsTo(models.User, {
        foreignKey: 'id',
      });
    }
  }
  Message.init(
    {
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        field: 'user_id',
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      dialogId: {
        field: 'dialog_id',
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Message',
      tableName: 'messages',
    }
  );
  return Message;
};
