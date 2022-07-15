module.exports = (sequelize, Sequelize) => {
  const Notification = sequelize.define("Notification", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    read: {
      type: Sequelize.BOOLEAN
    },
    createdAt: {
      allowNull: true,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: true,
      type: Sequelize.DATE
    }
  });

  Notification.bulkCreate([
    { title: "Hello", description: "Welcome to Donor List!", read: false },
    { title: "Giving Tuesday", description: "Join us for Giving Tuesday", read: false, isAdmin: true },
  ])

  return Notification;
};