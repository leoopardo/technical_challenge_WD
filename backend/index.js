const express = require("express");
const app = express();

app.use(express.json());

const PhoneRouter = require("./routes/phonesRoutes/phones.routes")
app.use("/phones", PhoneRouter)

app.listen(4000, () => {
    console.log("Server up and running at port:", 4000)
})