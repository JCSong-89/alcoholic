import { Model, DataTypes} from "sequelize";
import { sequelize } from '../../loaders/index';
import UserModel from "./User";


interface ReviewInstance extends Model {
  id: number,
  rating: number,
  text: string
}

const ReviewModel = sequelize.define<ReviewInstance>("Review", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  rating: {
    type: new DataTypes.NUMBER(),
    allowNull: false,
  },
  text: {
    type: new DataTypes.STRING(1000),
    allowNull: true,
  },
  item_id: {
    type: new DataTypes.STRING(1000),
    allowNull: true,
  },
});

ReviewModel.belongsTo(UserModel, { targetKey: "id" });

export default ReviewModel
