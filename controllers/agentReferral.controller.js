const { AgentReferral } = require('../models');
const { Op } = require('sequelize');

/**
 * CREATE
 */
const getFilePath = (files, field) =>
    files?.[field]?.[0]
        ? `/uploads/recruitments/${files[field][0].filename}`
        : null;


exports.createAgentReferral = async (req, res) => {
    try {
        console.log("BODY:", req.body)
        console.log("FILES:", req.files)

        const resumePath = getFilePath(req.files, "resume")
        const passportPath = getFilePath(req.files, "passport")

        if (!resumePath || !passportPath) {
            return res.status(400).json({
                success: false,
                message: "Resume and Passport are required",
            })
        }

        const referral = await AgentReferral.create({
            ...req.body,
            resumePath,
            passportPath,
        })

        res.status(201).json({
            success: true,
            data: referral,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        })
    }
}

/**
 * READ (LIST with pagination & search)
 */
exports.getAgentReferrals = async (req, res) => {
    try {
        const {
            page = 1,
            limit = 10,
            search = '',
            status
        } = req.query;

        const offset = (page - 1) * limit;

        const where = {};

        if (search) {
            where[Op.or] = [
                { firstName: { [Op.iLike]: `%${search}%` } },
                { surname: { [Op.iLike]: `%${search}%` } },
                { email: { [Op.iLike]: `%${search}%` } },
                { passportNumber: { [Op.iLike]: `%${search}%` } }
            ];
        }

        if (status) {
            where.status = status;
        }

        const { rows, count } = await AgentReferral.findAndCountAll({
            where,
            limit: Number(limit),
            offset,
            order: [['createdAt', 'DESC']]
        });

        return res.json({
            success: true,
            data: rows,
            pagination: {
                total: count,
                page: Number(page),
                limit: Number(limit),
                totalPages: Math.ceil(count / limit)
            }
        });
    } catch (error) {
        console.log("🚀 ~ error:", error)
        return res.status(500).json({
            success: false,
            message: 'Failed to fetch agent referrals',
            error: error.message
        });
    }
};

/**
 * READ (SINGLE)
 */
exports.getAgentReferralById = async (req, res) => {
    try {
        const referral = await AgentReferral.findByPk(req.params.id);

        if (!referral) {
            return res.status(404).json({
                success: false,
                message: 'Agent referral not found'
            });
        }

        return res.json({
            success: true,
            data: referral
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Failed to fetch agent referral',
            error: error.message
        });
    }
};

/**
 * UPDATE
 */
exports.updateAgentReferral = async (req, res) => {
    try {
        const referral = await AgentReferral.findByPk(req.params.id);

        if (!referral) {
            return res.status(404).json({
                success: false,
                message: 'Agent referral not found'
            });
        }

        await referral.update(req.body);

        return res.json({
            success: true,
            message: 'Agent referral updated successfully',
            data: referral
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Failed to update agent referral',
            error: error.message
        });
    }
};

/**
 * DELETE
 */
exports.deleteAgentReferral = async (req, res) => {
    try {
        const referral = await AgentReferral.findByPk(req.params.id);

        if (!referral) {
            return res.status(404).json({
                success: false,
                message: 'Agent referral not found'
            });
        }

        await referral.destroy();

        return res.json({
            success: true,
            message: 'Agent referral deleted successfully'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Failed to delete agent referral',
            error: error.message
        });
    }
};
