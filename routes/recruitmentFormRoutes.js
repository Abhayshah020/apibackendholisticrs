const express = require("express");
const router = express.Router();
const recruitmentFormController = require("../controllers/recruitmentFormController.js");
const uploadRecruitmentFiles = require("../models/uploadPatientImage.js");
const authMiddleware = require("../middlewares/auth.middleware.js");
const { rateLimiter } = require("../middlewares/rateLimiter.js");

router.use(rateLimiter)

router.get("/", recruitmentFormController.getAllRecruitments);
router.get("/:id", recruitmentFormController.getRecruitmentById);
router.use(authMiddleware)
// CRUD Routes
router.post("/",
    uploadRecruitmentFiles.fields([
        { name: "marketingFlyer", maxCount: 1 },
        { name: "vacancyFlyer", maxCount: 1 },
        { name: "candidateIdRequirements", maxCount: 1 },
        { name: "processFlowchart", maxCount: 1 },
        { name: "frequentlyAskedQuestions", maxCount: 1 },
    ])
    , recruitmentFormController.createRecruitment);


router.put("/:id",
    uploadRecruitmentFiles.fields([
        { name: "marketingFlyer", maxCount: 1 },
        { name: "vacancyFlyer", maxCount: 1 },
        { name: "candidateIdRequirements", maxCount: 1 },
        { name: "processFlowchart", maxCount: 1 },
        { name: "frequentlyAskedQuestions", maxCount: 1 },
    ])
    , recruitmentFormController.updateRecruitment);

router.delete("/:id", recruitmentFormController.deleteRecruitment);

module.exports = router;
