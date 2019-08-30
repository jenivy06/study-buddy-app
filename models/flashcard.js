module.exports = function(sequelize, DataTypes) {
    var Flashcard = sequelize.define("Flashcard", {
      Question: {
        type: DataTypes.STRING,
        // AllowNull is a flag that restricts a flashcard text from being entered if it doesn't
        // have a text value
        allowNull: false,
        // len is a validation that checks that our flashcard text is between 1 and 140 characters
        validate: {
          len: [1, 1000]
        }
      },
      Answer: {
        type: DataTypes.STRING,
        // AllowNull is a flag that restricts a flashcard text from being entered if it doesn't
        // have a text value
        allowNull: false,
        // len is a validation that checks that our flashcard text is between 1 and 140 characters
        validate: {
          len: [1, 1000]
        }
      }
    });
    return Flashcard;
  };