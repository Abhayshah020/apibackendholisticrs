require('dotenv').config(); 
const sequelize = require('./config/database');
const User = require('./models/User');

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected');

        const admin = await User.create({
            name: 'Guest User',           // Change this
            email: 'guest@holisticrs.com.au',   // Change this
            password: 'Guest@12345',        // Will be hashed automatically
            role: 'employee',
            status: 'active',
            permissions: {}
        });

        console.log('Guest user created:', admin.toJSON());
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
