import app from './src/server'
import dotenv from "dotenv";

dotenv.config()

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`);
})