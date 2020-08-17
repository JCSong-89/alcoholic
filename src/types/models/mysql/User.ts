import { Model, DataTypes} from "sequelize";
import { sequelize } from '../../loaders/index';

interface UserAttributes {
  id: number,
  name: string,
  email: string
}

class User extends Model<UserAttributes>
  implements UserAttributes{
  public id!: number;
  public email!: string;
  public name!: string;
}

User.init(
  {
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
  },
  {
    tableName: "users",
    sequelize,
  }
);