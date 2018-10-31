const { join } = require('path')
const webpack = require('webpack')
const MemoryFileSystem = require('memory-fs')

test('loader removes unused CSS rules', done => {
  const compiler = webpack({
    entry: join(__dirname, './fixtures/example.css'),
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: '@ianwalter/callback-loader',
              options: {
                callback: function (content) {
                  expect(content).toMatchSnapshot()
                  done()
                }
              }
            },
            {
              loader: join(__dirname, '../'),
              options: { content: [join(__dirname, 'fixtures/example.html')] }
            }
          ]
        }
      ]
    }
  })
  compiler.outputFileSystem = new MemoryFileSystem()
  compiler.run()
})
