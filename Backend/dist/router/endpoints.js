import express from 'express';
const router = express.Router();
router.get('/', (req, res) => {
    res.json({
        message: 'Welcome to personify 👨‍💻😎'
    });
});
router.get('/hello', (req, res) => {
    res.json({
        message: 'Hello How are you!!!'
    });
});
router.get('/hello/:id', (req, res) => {
    res.json({
        message: `Hello From /hello with id: ${req.params.id}`
    });
});
export default router;
//# sourceMappingURL=endpoints.js.map