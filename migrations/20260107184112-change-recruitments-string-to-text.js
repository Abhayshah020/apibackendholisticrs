'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('recruitments', 'project', {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    await queryInterface.changeColumn('recruitments', 'vacancyLocations', {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    await queryInterface.changeColumn('recruitments', 'workEnvironment', {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    await queryInterface.changeColumn('recruitments', 'numberOfVacancies', {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    await queryInterface.changeColumn('recruitments', 'referralLinkContact', {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    await queryInterface.changeColumn('recruitments', 'companies', {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    await queryInterface.changeColumn('recruitments', 'agePreference', {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    await queryInterface.changeColumn('recruitments', 'nationalityPreference', {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    await queryInterface.changeColumn('recruitments', 'genderPreference', {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    await queryInterface.changeColumn('recruitments', 'licenceCar', {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    await queryInterface.changeColumn('recruitments', 'homeCountryRegistration', {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    await queryInterface.changeColumn('recruitments', 'englishIELTS', {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    await queryInterface.changeColumn('recruitments', 'otherLanguage', {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    await queryInterface.changeColumn('recruitments', 'skillAssessmentsRequired', {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    await queryInterface.changeColumn('recruitments', 'testing', {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    await queryInterface.changeColumn('recruitments', 'documentationVerification', {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    await queryInterface.changeColumn('recruitments', 'visaProcessTime', {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    await queryInterface.changeColumn('recruitments', 'agentIntroductoryVisaCost', {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    await queryInterface.changeColumn('recruitments', 'prOffered', {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    await queryInterface.changeColumn('recruitments', 'workHours', {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    // ✅ FILE PATH COLUMNS
    await queryInterface.changeColumn('recruitments', 'marketingFlyer', {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    await queryInterface.changeColumn('recruitments', 'vacancyFlyer', {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    await queryInterface.changeColumn('recruitments', 'candidateIdRequirements', {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    await queryInterface.changeColumn('recruitments', 'processFlowchart', {
      type: Sequelize.TEXT,
      allowNull: true,
    });

    await queryInterface.changeColumn('recruitments', 'frequentlyAskedQuestions', {
      type: Sequelize.TEXT,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    // ⚠️ Reverting TEXT → STRING(255) may truncate data
    // Use ONLY if you are sure
    const stringType = { type: Sequelize.STRING, allowNull: true };

    await queryInterface.changeColumn('recruitments', 'project', stringType);
    await queryInterface.changeColumn('recruitments', 'vacancyLocations', stringType);
    await queryInterface.changeColumn('recruitments', 'workEnvironment', stringType);
    await queryInterface.changeColumn('recruitments', 'numberOfVacancies', stringType);
    await queryInterface.changeColumn('recruitments', 'referralLinkContact', stringType);
    await queryInterface.changeColumn('recruitments', 'companies', stringType);
    await queryInterface.changeColumn('recruitments', 'agePreference', stringType);
    await queryInterface.changeColumn('recruitments', 'nationalityPreference', stringType);
    await queryInterface.changeColumn('recruitments', 'genderPreference', stringType);
    await queryInterface.changeColumn('recruitments', 'licenceCar', stringType);
    await queryInterface.changeColumn('recruitments', 'homeCountryRegistration', stringType);
    await queryInterface.changeColumn('recruitments', 'englishIELTS', stringType);
    await queryInterface.changeColumn('recruitments', 'otherLanguage', stringType);
    await queryInterface.changeColumn('recruitments', 'skillAssessmentsRequired', stringType);
    await queryInterface.changeColumn('recruitments', 'testing', stringType);
    await queryInterface.changeColumn('recruitments', 'documentationVerification', stringType);
    await queryInterface.changeColumn('recruitments', 'visaProcessTime', stringType);
    await queryInterface.changeColumn('recruitments', 'agentIntroductoryVisaCost', stringType);
    await queryInterface.changeColumn('recruitments', 'prOffered', stringType);
    await queryInterface.changeColumn('recruitments', 'workHours', stringType);

    await queryInterface.changeColumn('recruitments', 'marketingFlyer', stringType);
    await queryInterface.changeColumn('recruitments', 'vacancyFlyer', stringType);
    await queryInterface.changeColumn('recruitments', 'candidateIdRequirements', stringType);
    await queryInterface.changeColumn('recruitments', 'processFlowchart', stringType);
    await queryInterface.changeColumn('recruitments', 'frequentlyAskedQuestions', stringType);
  },
};
