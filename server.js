const express = require('express')
const path = require('path')

const app = express()

//development route *** Comment out or remove upon deployment ***
// app.get('/', (req, res) => {
//   res.send(`${moment().format('LLLL')} - API is running!`)
// })

//Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
