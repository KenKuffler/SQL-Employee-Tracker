import { Pool } from 'pg';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Log the database configuration for debugging
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);

// Create a connection pool with PostgreSQL using environment variables
const pool = new Pool({
  user: process.env.DB_USER,          // Username from .env
  host: 'localhost',
  database: process.env.DB_NAME,      // Database name from .env
  password: process.env.DB_PASSWORD,  // Password from .env
  port: 5432,                          // Default PostgreSQL port
});

// Export the pool for querying the database
export default pool;