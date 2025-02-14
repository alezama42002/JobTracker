import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/database.js";

// Schema for userDailyNutrition table
const userDailyNutrition = sequelize.define("userDailyNutrition", {
  dailyNutritionID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  userID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  currentCalories: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  currentProtein: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  currentCarbohydrates: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  currentFats: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  currentFiber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  currentVitaminA: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  currentVitaminB1: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  currentVitaminB2: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  currentVitaminB3: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  currentVitaminB5: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  currentVitaminB6: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  currentVitaminB9: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  currentVitaminB12: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  currentCalcium: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  currentChlorine: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  currentCopper: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  currentIron: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  currentIodine: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  currentPotassium: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  currenMagnesium: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  currentManganese: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  currentSodium: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  currentPhosporus: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  currentSelenium: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  currentZinc: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default userDailyNutrition;
