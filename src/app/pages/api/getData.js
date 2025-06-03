import pool from '../../lib/db';

export default async function handler(req, res){
    try{
        const result = await pool.query('SELECT * FROM repairs')
        res.status(200).json(result.rows);
    }catch (error) {
        console.error('Error executing query', error);
        res.status(500).json({error: 'Internal server error'});
    }
}