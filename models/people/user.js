const { Model, Sequelize } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      last_login: Sequelize.DATE,
      removed_at: Sequelize.DATE,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.UserRole, { foreignKey: 'role_id', as: 'role' });
  }
}

module.exports = User;
