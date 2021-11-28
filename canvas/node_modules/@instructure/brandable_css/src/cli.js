const program = require('commander')
const { checkAll, startWatcher } = require('./main')
const { onError } = require('./utils')

program
  .version(require('../package').version)
  .option('--watch', 'watch for changes')

program.parse(process.argv)

checkAll().catch(onError)
if (program.watch) {
  startWatcher()
}
