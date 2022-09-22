const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./Develop/public"));

app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./develop/db/db.json"))
});

app.post("/api/notes", function(req, res) {
    const notes = JSON.parse(fs.readFileSync("./develop/db/db.json"));
    const newNotes = req.body;
    newNotes.id = uuid.v4();
    fs.writeFileSync("./develop/db/db.json", JSON.stringify(notes))
    res.JSON(notes);
});

app.delete("/api/notes/:id", function(req, res) {
    const notes = JSON.parse(fs.readFileSync("./develop/db/db.json"));
    const delNotes = notes.filter((rmvNote) => rmvNote.id !== req.params.id);
    newNotes.id = uuid.v4();
    fs.writeFileSync("./develop/db/db.json", JSON.stringify(delNotes))
    res.JSON(delnotes);
});

app.get("/", function (req, res) {
    res.sendFile(path.join(_dirname, "./develop/public/index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(_dirname, "./develop/public/notes.html"));
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./develop/public/index.html"));
});

app.listen(PORT, function () {
    console.log("You are deployed on PORT: " + PORT);
});