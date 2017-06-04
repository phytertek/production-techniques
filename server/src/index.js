// import app
import app from './app'

// start server
app.listen(8080, function() {
  const host = this.address().address
  const port = this.address().port
  console.log(`Shard listening on http://${host}:${port}`)
})

process.on('uncaughtException', err => console.error('Uncaught exception:', err))
process.on('unhnadledRejection', error => console.error('Unhandled rejection:', error))
