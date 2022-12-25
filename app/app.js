const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
require("./db/connection")


const userRoutes = require("./routes/user.routes")

app.use("/api/users/", userRoutes)


app.all("*", (req, res) => {
    res.status(404).send({
        apisStatus: false,
        message: "Invalid URL",
        data: {}
    })
})

module.exports = app