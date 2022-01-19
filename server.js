const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db/db");

app.use(express.json());

app.use(cors());

const signUpRouter = require("./routers/routes/auth/signUp");
const loginRouter = require("./routers/routes/auth/login");
const userRouter = require("./routers/routes/user");
const categoriesRouter = require("./routers/routes/categories");
const eventsRouter = require("./routers/routes/events");
const events_sourcesRouter = require("./routers/routes/events_sources");

app.use("/signUp", signUpRouter);
app.use("/login", loginRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/event", eventsRouter);
app.use("/api/events_sources", events_sourcesRouter);
app.use("/api/update-profile", userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
