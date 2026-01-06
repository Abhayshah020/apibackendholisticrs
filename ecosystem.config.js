module.exports = {
    apps: [
        {
            name: "recruitment-backend",
            script: "src/app.js",
            instances: 1,
            exec_mode: "fork",

            env: {
                NODE_ENV: "production",
                PORT: 5024
            },

            watch: false,
            error_file: "/var/log/pm2/recruitment-error.log",
            out_file: "/var/log/pm2/recruitment-out.log",
            log_date_format: "YYYY-MM-DD HH:mm:ss"
        }
    ]
};
