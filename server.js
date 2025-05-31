const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.use(express.json());

app.post('/api', async (req, res) => {
  try {
    const response = await fetch("https://api.bdg88zf.com/api/webapi/GetNoaverageEmerdList", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: 'API error' });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Proxy server running!');
});