import { Model, DataTypes} from "sequelize";
import { sequelize } from '../../loaders/index';
import ReviewModel from "./Review";


interface UserInstance extends Model {
  id: number,
  name: string,
  email: string
}

const UserModel = sequelize.define<UserInstance>("User", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(300),
    allowNull: false,
  },
  email: {
    type: new DataTypes.STRING(1000),
    allowNull: true,
  },
});

UserModel.hasMany(ReviewModel, {
  sourceKey: "id",
  foreignKey: "ReviewId",
  as: "Reviews",
});

export default UserModel
