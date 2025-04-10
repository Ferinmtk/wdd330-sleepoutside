const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/users', (req, res) => {
    const { name, address, email } = req.body;
    console.log('Received user data:', { name, address, email });
    res.status(201).json({ message: 'User created successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});