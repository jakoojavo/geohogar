import cors from 'cors';

const corsOptions = {
    origin: 'http://localhost:5174',
    credentials: true,
};

export const corsMiddleware = cors(corsOptions);