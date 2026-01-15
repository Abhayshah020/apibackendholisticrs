const fs = require("fs");
const path = require("path");
const { Recruitment } = require("../models");

/* -------------------- helpers -------------------- */
const parseNumber = (val) =>
    val !== undefined && val !== null && val !== ""
        ? Number(val)
        : null;

const parseJSON = (val, fallback = []) => {
    try {
        return val ? JSON.parse(val) : fallback;
    } catch {
        return fallback;
    }
};

const getFilePath = (files, field) => {
    const file = files?.[field]?.[0];
    if (!file) return null;

    if (file.mimetype.startsWith("image/")) {
        return `/uploads/recruitments/images/${file.filename}`;
    }

    if (file.mimetype === "application/pdf") {
        return `/uploads/recruitments/pdfs/${file.filename}`;
    }

    return null;
};

/* -------------------- controller -------------------- */
exports.createRecruitment = async (req, res) => {
    try {
        if (req.user?.role !== "admin") {
            return res.status(403).json({ message: "Admin access only" });
        }

        const { body, files = {} } = req;

        const recruitment = await Recruitment.create({
            /* ---------- basic details ---------- */
            project: body.project,
            vacancyLocations: body.vacancyLocations,
            workEnvironment: body.workEnvironment,
            numberOfVacancies: parseNumber(body.numberOfVacancies),
            salary: body.salary,

            /* ---------- referral ---------- */
            referralLink: body.referralLink,
            candidatesReferredFor: body.candidatesReferredFor,
            candidatesInterviewingFor: body.candidatesInterviewingFor,
            referralLinkContact: body.referralLinkContact,
            companies: body.companies,

            /* ---------- cost & visa ---------- */
            totalCostToCandidate: body.totalCostToCandidate,
            refundPolicy: body.refundPolicy,
            visaPackageCost: body.visaPackageCost,
            agentIntroductoryVisaCost: body.agentIntroductoryVisaCost,
            costIncludedInVisa: body.costIncludedInVisa,
            costNotIncludedInVisa: body.costNotIncludedInVisa,
            visaProcessTime: body.visaProcessTime,

            /* ---------- preferences ---------- */
            agePreference: body.agePreference,
            nationalityPreference: body.nationalityPreference,
            genderPreference: body.genderPreference,
            licenceCar: body.licenceCar,
            homeCountryRegistration: body.homeCountryRegistration,

            /* ---------- requirements ---------- */
            qualificationsRequired: body.qualificationsRequired,
            experienceRequired: body.experienceRequired,
            englishIELTS: body.englishIELTS,
            otherLanguage: body.otherLanguage,
            skillAssessmentsRequired: body.skillAssessmentsRequired,
            testing: body.testing,
            documentationVerification: body.documentationVerification,
            documentsRequiredForJobOffer: body.documentsRequiredForJobOffer,

            /* ---------- PR ---------- */
            prOffered: body.prOffered,
            prAdditionalInformation: body.prAdditionalInformation,

            /* ---------- work ---------- */
            workHours: body.workHours,
            inclusionsSummary: body.inclusionsSummary,
            additionalBenefits: body.additionalBenefits,
            additionalDetails: body.additionalDetails,

            /* ---------- tags (JSONB) ---------- */
            countryTags: parseJSON(body.countryTags),
            vacancyTypeTags: parseJSON(body.vacancyTypeTags),

            /* ---------- files ---------- */
            marketingFlyer: getFilePath(files, "marketingFlyer"),
            vacancyFlyer: getFilePath(files, "vacancyFlyer"),
            candidateIdRequirements: getFilePath(files, "candidateIdRequirements"),
            processFlowchart: getFilePath(files, "processFlowchart"),
            frequentlyAskedQuestions: getFilePath(files, "frequentlyAskedQuestions"),
        });

        return res.status(201).json({
            success: true,
            message: "Recruitment created successfully",
            data: recruitment,
        });
    } catch (error) {
        console.error("Create Recruitment Error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to create recruitment",
            error: error.message,
        });
    }
};

exports.getAllRecruitments = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const offset = (page - 1) * limit;

        const records = await Recruitment.findAndCountAll({
            limit: parseInt(limit),
            offset: parseInt(offset),
            order: [["createdAt", "DESC"]],
        });

        res.status(200).json({
            total: records.count,
            page: parseInt(page),
            pageSize: parseInt(limit),
            data: records.rows,
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getRecruitmentById = async (req, res) => {
    try {
        const { id } = req.params;

        const recruitment = await Recruitment.findByPk(id);
        if (!recruitment) {
            return res.status(404).json({ error: "Recruitment not found" });
        }

        res.json(recruitment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateRecruitment = async (req, res) => {
    try {
        if (req.user?.role !== "admin") {
            return res.status(403).json({ message: "Admin access only" });
        }

        const { id } = req.params;
        const { body, files = {} } = req;

        const recruitment = await Recruitment.findByPk(id);
        if (!recruitment) {
            return res.status(404).json({ error: "Recruitment not found" });
        }

        const fileFields = [
            "marketingFlyer",
            "vacancyFlyer",
            "candidateIdRequirements",
            "processFlowchart",
            "frequentlyAskedQuestions",
        ];

        const updatePayload = { ...body };

        /* ---------- CLEAN BODY (VERY IMPORTANT) ---------- */
        fileFields.forEach((field) => delete updatePayload[field]);

        /* ---------- FILE HANDLING ---------- */
        fileFields.forEach((field) => {
            if (files[field]?.[0]) {
                // delete old file
                if (recruitment[field]) {
                    const oldPath = path.join(process.cwd(), recruitment[field]);
                    if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
                }

                updatePayload[field] = `/uploads/recruitments/${files[field][0].filename}`;
            }
        });

        /* ---------- JSONB FIELDS ---------- */
        if (body.countryTags) {
            updatePayload.countryTags = parseJSON(body.countryTags);
        }

        if (body.vacancyTypeTags) {
            updatePayload.vacancyTypeTags = parseJSON(body.vacancyTypeTags);
        }

        await recruitment.update(updatePayload);

        return res.json({
            success: true,
            message: "Recruitment updated successfully",
            data: recruitment,
        });

    } catch (err) {
        console.error("Update Recruitment Error:", err);
        return res.status(500).json({
            success: false,
            message: "Failed to update recruitment",
            error: err.message,
        });
    }
};




exports.deleteRecruitment = async (req, res) => {
    try {
        if (req.user?.role !== "admin") {
            return res.status(403).json({ message: "Admin access only" });
        }

        const { id } = req.params;
        const recruitment = await Recruitment.findByPk(id);

        if (!recruitment) {
            return res.status(404).json({ error: "Recruitment not found" });
        }

        const fileFields = [
            "marketingFlyer",
            "vacancyFlyer",
            "candidateIdRequirements",
            "processFlowchart",
            "frequentlyAskedQuestions",
        ];

        fileFields.forEach((field) => {
            const fileUrl = recruitment[field];
            if (!fileUrl) return;

            // Handles both old & new paths safely
            const absolutePath = path.resolve(process.cwd(), fileUrl);

            if (fs.existsSync(absolutePath)) {
                fs.unlinkSync(absolutePath);
            }
        });

        await recruitment.destroy();

        res.json({ message: "Recruitment deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
