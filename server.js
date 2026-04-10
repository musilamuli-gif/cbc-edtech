const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

const UPLOADS_DIR = path.join(__dirname, 'uploads');
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR);

// Upload endpoint (admin)
const storage = multer.diskStorage({
  destination: function (_req, _file, cb) { cb(null, UPLOADS_DIR); },
  filename: function (_req, file, cb) { cb(null, Date.now() + '-' + file.originalname); }
});
const upload = multer({ storage });

app.post('/api/upload', upload.single('file'), (req, res) => {
  res.json({ url: '/uploads/' + req.file.filename });
});

app.use('/uploads', express.static(UPLOADS_DIR));

app.get('/', (_req, res) => {
  res.send("CBC EdTech backend running.");
});

const PORT = process.env.PORT || 8787;
app.listen(PORT, () => console.log(`Backend running at http://localhost:${PORT}`));
