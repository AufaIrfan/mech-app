import testConnection from '../../lib/db';

export default async function handler(req, res) {
  try {
    await testConnection();
    res.status(200).json({ message: 'Database connected' });
  } catch (error) {
    res.status(500).json({ message: 'DB connection failed', error: error.message });
  }
}

