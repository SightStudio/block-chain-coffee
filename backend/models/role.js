'use strict';
module.exports = (sequelize, DataTypes) => {
  const roles = sequelize.define('tb_role', {
    name: {
      type: DataTypes.STRING,
      allowNull : false,
    },
    desc: {
      type: DataTypes.STRING,
      allowNull : false,
    },
  }, {
    modelName  : 'roles',
    tableName  : 'tb_role',
    underscored: true,          // 컬럼 명을 underscore로
    timestamps : true,          // ROR activeRecord에서의 Created_at, Updated_at과 동일
    paranoid   : true           // db row을 flag 마킹을 통한 삭제 처리 (실제론 삭제 안되지만 row 상태가 삭제상태로 변환됨)
  });

  roles.associate = function(models) {
    roles.hasMany(models.users, {onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  };
  return roles;
};