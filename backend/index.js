const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000"}))

const PhoneRouter = require("./routes/phonesRoutes/phones.routes")
app.use("/phones", PhoneRouter)

app.listen(4000, () => {
    console.log("Server up and running at port:", 4000)
})