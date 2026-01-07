const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");

const userManagement = require("./user.routes");
const userAuthentication = require("./auth.routes");
const recruitmentFormRoutes = require("./recruitmentFormRoutes");
const agentReferral = require("./agentReferral.routes");

const app = express();

app.use(express.json({ limit: "10mb" }));

app.use(morgan("dev"));

app.use(cookieParser());

app.use(cors({
    origin: "https://holisticrs.com.au",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // ✅ allow cookies
}));

app.use(express.json());

app.use(
    "/uploads",
    express.static(path.join(process.cwd(), "uploads"), {
        setHeaders: (res, filePath) => {
            if (filePath.endsWith(".pdf")) {
                res.setHeader("Content-Type", "application/pdf");
            }
        },
    })
);

app.use("/api/authentication", userAuthentication);

app.use("/api/users", userManagement);

app.use("/api/recruitment-forms", recruitmentFormRoutes);

app.use("/api/agent-referrals", agentReferral);

module.exports = app;