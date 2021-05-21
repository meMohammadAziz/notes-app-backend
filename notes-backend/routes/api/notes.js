import pkg from "express";

const { Router } = pkg;

const router = Router();

import Note from "../../models/Note.js";

router.get("/", (req, res) => {
  Note.find().then((notes) => res.json(notes));
});

router.post("/", (req, res) => {
  const newNote = new Note({
    title: req.body.title,
    details: req.body.details,
    category: req.body.category,
    id: req.body.id,
  });

  newNote.save().then((task) => res.json(task));
});

export default router;
