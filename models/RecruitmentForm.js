const { DataTypes } = require('sequelize');
const sequelize = require("../config/database");

const Recruitment = sequelize.define("Recruitment", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    project: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    vacancyLocations: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    workEnvironment: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    numberOfVacancies: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    salary: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    referralLink: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    candidatesReferredFor: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    candidatesInterviewingFor: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    referralLinkContact: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    companies: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    totalCostToCandidate: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    refundPolicy: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    visaPackageCost: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    costIncludedInVisa: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    costNotIncludedInVisa: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    agePreference: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    nationalityPreference: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    genderPreference: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    licenceCar: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    homeCountryRegistration: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    qualificationsRequired: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    experienceRequired: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    englishIELTS: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    otherLanguage: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    skillAssessmentsRequired: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    testing: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    documentationVerification: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    visaProcessTime: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    agentIntroductoryVisaCost: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    documentsRequiredForJobOffer: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    prOffered: {
        type: DataTypes.STRING, // Y / N (as per curl)
        allowNull: true,
    },

    prAdditionalInformation: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    additionalDetails: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    workHours: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    inclusionsSummary: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    additionalBenefits: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    // ✅ JSONB ARRAYS
    countryTags: {
        type: DataTypes.JSONB,
        allowNull: true,
        defaultValue: [],
    },

    vacancyTypeTags: {
        type: DataTypes.JSONB,
        allowNull: true,
        defaultValue: [],
    },

    // ✅ FILE PATHS (Images / PDFs)
    marketingFlyer: {
        type: DataTypes.STRING, // stored path
        allowNull: true,
    },

    vacancyFlyer: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    candidateIdRequirements: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    processFlowchart: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    frequentlyAskedQuestions: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: "recruitments",
    timestamps: true,
    indexes: [
        { fields: ["project"] },
    ],
})

module.exports = Recruitment;
