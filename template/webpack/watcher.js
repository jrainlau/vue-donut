console.log('Watching dirs...');
const { resolve } = require('path')
const chokidar = require('chokidar')
const fs = require('fs')
const routeList = []

const watcher = chokidar.watch(resolve(__dirname, '../src/view/pages'), {
  ignored: /(^|[\/\\])\../
})

watcher
  .on('addDir', (path) => {
    let routeName = path.split('/').pop()
    if (routeName !== 'pages' && routeName !== 'index') {
      routeList.push(`'${routeName}'`)
      fs.writeFileSync(resolve(__dirname, '../src/route-list.js'), `module.exports = [${routeList}]`)
    }
  })
  .on('unlinkDir', (path) => {
    let routeName = path.split('/').pop()
    const itemIndex = routeList.findIndex((val) => {
      return val === `'${routeName}'`
    })
    routeList.splice(itemIndex, 1)
    fs.writeFileSync(resolve(__dirname, '../src/route-list.js'), `module.exports = [${routeList}]`)
  })

module.exports = watcher
