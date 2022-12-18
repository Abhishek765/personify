import express from 'express';
import router from './router/endpoints.js';
const app = express();
const PORT = process.env.PORT || 3001;
app.use(router);
app.use(express.json());
// We link out router files here to make our route easy
app.listen(PORT, () => console.log(`Server is listening to ${PORT}`));
//# sourceMappingURL=server.js.map