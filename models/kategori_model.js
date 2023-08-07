module.exports = (sequelize, Sequelize) => {
  const kategori = sequelize.define("kategori", {
    name: {
      type: Sequelize.STRING,
    }
  });
  return kategori
};