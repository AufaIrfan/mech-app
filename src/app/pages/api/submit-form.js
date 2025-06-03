// pages/api/submit-form.js
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email } = req.body;

    // Here you would handle database storage or send an email
    console.log('Received data:', { name, email });

    res.status(200).json({ message: 'Form submitted successfully!' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
