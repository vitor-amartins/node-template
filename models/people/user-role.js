const { Model, Sequelize } = require('sequelize');

class UserRole extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.hasMany(models.User, { foreignKey: 'role_id', as: 'users' });
  }
}

module.exports = UserRole;
