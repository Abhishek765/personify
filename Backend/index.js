const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(require("./router/endpoints"));
app.use(express.json());

// We link out router files here to make our route easy

app.listen(PORT, () => console.log(`Server is listening to ${PORT}`));
