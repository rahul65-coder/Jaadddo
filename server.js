const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.use(express.json());

app.post('/api', async (req, res) => {
  try {
    //
    const payload = {
      pageSize: 10,
      pageNo: 1,
      typeId: 1,
      language: 0,
      random: "4a0522c6ecd8410496260e686be2a57c",
      signature: "334B5E70A0C9B8918B0B15E517E2069C",
      timestamp: Math.floor(Date.now() / 1000)
    };

    // API call kare
    const response = await fetch("https://api.bdg88zf.com/api/webapi/GetNoaverageEmerdList", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    res.json(data);

  } catch (e) {
    console.error('API Error:', e);
    res.status(500).json({ error: 'API error' });
  }
});

// Server listen kare
app.listen(process.env.PORT || 3000, () => {
  console.log('Proxy server running!');
});
