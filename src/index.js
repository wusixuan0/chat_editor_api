import express from 'express';
import aiRoutes from './routes/aiRoutes.js';

const app = express();
const port = process.env.PORT || 3000;
import cors from "cors";

app.use(cors());
app.use(express.json());

app.use('/api/ai', aiRoutes);

app.listen(port, "0.0.0.0", () => {
  console.log(`Server listening at http://localhost:${port}`);
});
