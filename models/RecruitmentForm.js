const { DataTypes } = require('sequelize');
const sequelize = require("../config/database");

const Recruitment = sequelize.define("Recruitment", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    project: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    vacancyLocations: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    workEnvironment: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    numberOfVacancies: {
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
        allowNull: true,
    },

    companies: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    totalCostToCandidate: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    refundPolicy: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    visaPackageCost: {
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
        allowNull: true,
    },

    nationalityPreference: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    genderPreference: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    licenceCar: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    homeCountryRegistration: {
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
        allowNull: true,
    },

    otherLanguage: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    skillAssessmentsRequired: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    testing: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    documentationVerification: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    visaProcessTime: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    agentIntroductoryVisaCost: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    documentsRequiredForJobOffer: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    prOffered: {
        type: DataTypes.TEXT, // Y / N (as per curl)
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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT, // stored path
        allowNull: true,
    },

    vacancyFlyer: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    candidateIdRequirements: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    processFlowchart: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    frequentlyAskedQuestions: {
        type: DataTypes.TEXT,
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
