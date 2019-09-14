'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('tb_user', {
    user_id: {
      type: DataTypes.STRING,
      unique    : true,
      allowNull : false,
    },
    user_pw:  {
      type: DataTypes.STRING,
      allowNull : false,
    },
    name:  {
      type: DataTypes.STRING,
      unique    : true,
      allowNull : false,
    },
    role_seq: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    modelName  : 'users',
    tableName  : 'tb_user',
    underscored: true,          // 컬럼 명을 underscore로
    timestamps : true,          // ROR activeRecord에서의 Created_at, Updated_at과 동일
    paranoid   : true           // db row을 flag 마킹을 통한 삭제 처리 (실제론 삭제 안되지만 row 상태가 삭제상태로 변환됨)
  });

  users.associate = function(models) {
    users.belongsTo(models.roles, {
      foreignKey: 'fk_role_to_user',
      targetKey : 'role_seq'
    })
  };
  return users;
};

