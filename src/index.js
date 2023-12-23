import app from './app.js'
import { DBconnect } from './db.js'

DBconnect()
app.listen(3000)

console.log('Server on port', 3000)