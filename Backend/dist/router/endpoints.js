import express from 'express';
import { chats } from '../data/data.js';
const router = express.Router();
router.get('/', (_req, res) => {
    res.json({
        message: 'Welcome to personify 👨‍💻😎'
    });
});
router.get('/api/chats', (_req, res) => {
    res.send(chats);
});
router.get('/api/chats/:id', (req, res) => {
    const singleChat = chats.find((chat) => chat._id === req.params.id);
    res.send(singleChat);
});
export default router;
//# sourceMappingURL=endpoints.js.map