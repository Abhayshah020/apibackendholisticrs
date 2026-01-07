'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      UPDATE recruitments
      SET
        "marketingFlyer" = REPLACE("marketingFlyer", '/uploads/recruitments/', '/uploads/recruitments/images/'),
        "vacancyFlyer" = REPLACE("vacancyFlyer", '/uploads/recruitments/', '/uploads/recruitments/images/'),
        "candidateIdRequirements" = REPLACE("candidateIdRequirements", '/uploads/recruitments/', '/uploads/recruitments/images/'),
        "processFlowchart" = REPLACE("processFlowchart", '/uploads/recruitments/', '/uploads/recruitments/images/'),
        "frequentlyAskedQuestions" = REPLACE("frequentlyAskedQuestions", '/uploads/recruitments/', '/uploads/recruitments/images/')
      WHERE
        "marketingFlyer" IS NOT NULL
        OR "vacancyFlyer" IS NOT NULL
        OR "candidateIdRequirements" IS NOT NULL
        OR "processFlowchart" IS NOT NULL
        OR "frequentlyAskedQuestions" IS NOT NULL;
    `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      UPDATE recruitments
      SET
        "marketingFlyer" = REPLACE("marketingFlyer", '/uploads/recruitments/images/', '/uploads/recruitments/'),
        "vacancyFlyer" = REPLACE("vacancyFlyer", '/uploads/recruitments/images/', '/uploads/recruitments/'),
        "candidateIdRequirements" = REPLACE("candidateIdRequirements", '/uploads/recruitments/images/', '/uploads/recruitments/'),
        "processFlowchart" = REPLACE("processFlowchart", '/uploads/recruitments/images/', '/uploads/recruitments/'),
        "frequentlyAskedQuestions" = REPLACE("frequentlyAskedQuestions", '/uploads/recruitments/images/', '/uploads/recruitments/');
    `);
  }
};
