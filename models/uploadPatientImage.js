const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Base upload directory
const baseDir = path.join(__dirname, "../uploads/recruitments");

const ensureDir = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
};

ensureDir(path.join(baseDir, "images"));
ensureDir(path.join(baseDir, "pdfs"));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.mimetype.startsWith("image/")) {
            cb(null, path.join(baseDir, "images"));
        } else if (file.mimetype === "application/pdf") {
            cb(null, path.join(baseDir, "pdfs"));
        } else {
            cb(new Error("Unsupported file type"), false);
        }
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}_${Math.random()
            .toString(36)
            .substring(2)}${path.extname(file.originalname)}`;
        cb(null, uniqueName);
    },
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype.startsWith("image/") ||
        file.mimetype === "application/pdf"
    ) {
        cb(null, true);
    } else {
        cb(new Error("Only images and PDFs are allowed"), false);
    }
};

const uploadRecruitmentFiles = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 10 * 1024 * 1024, // 10MB
    },
});

module.exports = uploadRecruitmentFiles;
