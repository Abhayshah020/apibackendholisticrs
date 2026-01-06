const sequelize = require("../config/database");


const User = require("./User");
const Recruitment = require("./RecruitmentForm");
const AgentReferral = require("./AgentReferral");


module.exports = {
    sequelize,
    User,
    Recruitment,
    AgentReferral,
};
