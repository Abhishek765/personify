import express from 'express';
import { chats } from '../data/data.js';
const router = express.Router();
router.get('/', (req, res) => {
    res.json({
        message: 'Welcome to personify 👨‍💻😎'
    });
});
router.get('/api/chats', (req, res) => {
    res.send(chats);
});
router.get('/api/chats/:id', (req, res) => {
    res.json({
        message: `Hello From /hello with id: ${req.params.id}`
    });
});
export default router;
//# sourceMappingURL=endpoints.js.map