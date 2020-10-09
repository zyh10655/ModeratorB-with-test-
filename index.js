const app = require('./app')
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')

const server = http.createServer(app)

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})
// const express = require('express')
// const app = require()
// const http = require('http')
// const config = require('./utils/config')
// const logger = require('./utils/logger')

// const server = http.createServer(app)
// server.listen(config.PORT,()=>{
//   logger.info ('Server running on port ${config.PORT}')
// })

// require('dotenv').config()
// const Note = require('./models/note')

// const cors = require('cors')

// app.use(cors())
// app.use(express.json())
// app.use(express.static('build'))

// app.get('/api/notes', (request, response) => {
//   Note.find({}).then(notes => {
//     response.json(notes.map(note => note.toJSON()))
//   })
// })

// app.post('/api/notes', (request, response) => {
//   const body = request.body

//   if (body.content === undefined) {
//     return response.status(400).json({ error: 'content missing' })
//   }

//   const note = new Note({
//     content: body.content,
//     accept: body.accept|| false,
//     date: new Date()
//   })

//   note.save().then(savedNote => {
//     response.json(savedNote.toJSON())
//   })
// })

// app.get('/api/notes/:id', (request, response, next) => {
//   Note.findById(request.params.id)
//     .then(note => {
//       if (note) {
//         response.json(note.toJSON())
//       } else {
//         response.status(404).end()
//       }
//     })
//     .catch(error => next(error))
// })

// app.delete('/api/notes/:id', (request, response, next) => {
//   Note.findByIdAndRemove(request.params.id)
//     .then(result => {
//       response.status(204).end()
//     })
//     .catch(error => next(error))
// })

// app.put('/api/notes/:id', (request, response, next) => {
//   const body = request.body

//   const note = {
//     content: body.content,
//     accept: body.accept,
//   }

//   Note.findByIdAndUpdate(request.params.id, note, { new: true })
//     .then(updatedNote => {
//       response.json(updatedNote.toJSON())
//     })
//     .catch(error => next(error))
// })

// const unknownEndpoint = (request, response) => {
//   response.status(404).send({ error: 'unknown endpoint' })
// }

// app.use(unknownEndpoint)

// const errorHandler = (error, request, response, next) => {
//   console.error(error.message)

//   if (error.name === 'CastError' && error.kind == 'ObjectId') {
//     return response.status(400).send({ error: 'malformatted id' })
//   } 

//   next(error)
// }

// app.use(errorHandler)

// const PORT = process.env.PORT 

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })