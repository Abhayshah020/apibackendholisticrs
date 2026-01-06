const { DataTypes } = require('sequelize');
const sequelize = require("../config/database");

const AgentReferral = sequelize.define('AgentReferral', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    firstName: {
        type: DataTypes.STRING,
        allowNull: true
    },

    surname: {
        type: DataTypes.STRING,
        allowNull: true
    },

    mobile: {
        type: DataTypes.STRING,
        allowNull: true
    },

    email: {
        type: DataTypes.STRING,
        allowNull: true
    },

    dateOfBirth: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },

    countryOfBirth: {
        type: DataTypes.STRING,
        allowNull: true
    },

    resumePath: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'PDF or Image file path'
    },

    passportPath: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'PDF or Image file path'
    },

    passportNumber: {
        type: DataTypes.STRING,
        allowNull: true
    },

    providerContactName: {
        type: DataTypes.STRING,
        allowNull: true
    },

    providerContactEmail: {
        type: DataTypes.STRING,
        allowNull: true
    },

    providerContactPhone: {
        type: DataTypes.STRING,
        allowNull: true
    },

    status: {
        type: DataTypes.ENUM('pending', 'approved', 'rejected'),
        defaultValue: 'pending'
    },

    extraDetails: {
        type: DataTypes.JSONB,
        defaultValue: {}
    }

}, {
    tableName: 'agent_referrals'
});

module.exports = AgentReferral;
