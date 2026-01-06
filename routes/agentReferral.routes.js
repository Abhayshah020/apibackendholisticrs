const express = require('express');
const router = express.Router();
const agentReferralController = require('../controllers/agentReferral.controller');
const uploadRecruitmentFiles = require('../models/uploadPatientImage');

// Create
router.post('/',
    uploadRecruitmentFiles.fields([
        { name: "resume", maxCount: 1 },
        { name: "passport", maxCount: 1 },
    ])
    , agentReferralController.createAgentReferral);

// Read (list with pagination)
router.get('/', agentReferralController.getAgentReferrals);

// Read (single)
router.get('/:id', agentReferralController.getAgentReferralById);

// Update
router.put('/:id',
    uploadRecruitmentFiles.fields([
        { name: "resume", maxCount: 1 },
        { name: "passport", maxCount: 1 },
    ])
    , agentReferralController.updateAgentReferral);

// Delete
router.delete('/:id', agentReferralController.deleteAgentReferral);

module.exports = router;
