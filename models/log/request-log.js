const { Model, Sequelize } = require('sequelize');

class RequestLog extends Model {
  static init(sequelize) {
    super.init({
      url: Sequelize.STRING,
      body: Sequelize.STRING,
      method: Sequelize.STRING,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

module.exports = RequestLog;
