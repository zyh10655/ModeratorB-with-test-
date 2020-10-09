const Note = require('../models/note')

const initialNotes = [
  {
    content: 'Backend test',
    accept: false
  },
  {
    content: 'Moonlight is beautiful',
    accept: true
  }
]

const nonExistingId = async () => {
  const note = new Note({ content: 'willremovethissoon' })
  await note.save()
  await note.remove()

  return note._id.toString()
}

const notesInDb = async () => {
  const notes = await Note.find({})
  return notes.map(note => note.toJSON())
}

module.exports = {
  initialNotes, nonExistingId, notesInDb
}