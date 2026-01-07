'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      UPDATE recruitments
      SET
        -- IMAGES
        "marketingFlyer" = REPLACE("marketingFlyer",
          '/uploads/recruitments/images/',
          '/uploads/recruitments/images/'
        ),

        "processFlowchart" = REPLACE("processFlowchart",
          '/uploads/recruitments/images/',
          '/uploads/recruitments/images/'
        ),

        -- PDFs
        "vacancyFlyer" = REPLACE("vacancyFlyer",
          '/uploads/recruitments/images/',
          '/uploads/recruitments/pdfs/'
        ),

        "candidateIdRequirements" = REPLACE("candidateIdRequirements",
          '/uploads/recruitments/images/',
          '/uploads/recruitments/pdfs/'
        ),

        "frequentlyAskedQuestions" = REPLACE("frequentlyAskedQuestions",
          '/uploads/recruitments/images/',
          '/uploads/recruitments/pdfs/'
        )
      WHERE
        "vacancyFlyer" LIKE '%/images/%'
        OR "candidateIdRequirements" LIKE '%/images/%'
        OR "frequentlyAskedQuestions" LIKE '%/images/%';
    `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      UPDATE recruitments
      SET
        "vacancyFlyer" = REPLACE("vacancyFlyer",
          '/uploads/recruitments/pdfs/',
          '/uploads/recruitments/images/'
        ),

        "candidateIdRequirements" = REPLACE("candidateIdRequirements",
          '/uploads/recruitments/pdfs/',
          '/uploads/recruitments/images/'
        ),

        "frequentlyAskedQuestions" = REPLACE("frequentlyAskedQuestions",
          '/uploads/recruitments/pdfs/',
          '/uploads/recruitments/images/'
        );
    `);
  }
};
