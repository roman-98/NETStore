const app = require('./app')
const port = process.env.PORT || 7000

app.listen(7000, () => console.log(`Server has been started on ${port}`))