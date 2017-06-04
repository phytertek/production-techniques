// our packages
import app from './app'
import logger from './util/logger'

// start server
app.listen(8080, function() {
  const host = this.address().address
  const port = this.address().port
  logger.log(`Experts Server listening on http://${host}:${port}`)
})

process.on('uncaughtException', err => logger.error('Uncaught exception:', err))
process.on('unhnadledRejection', error => logger.error('Unhandled rejection:', error))
