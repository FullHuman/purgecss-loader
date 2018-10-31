# purgecss-loader
> [Purgecss](https://www.purgecss.com) loader for
> [Webpack](https://webpack.js.org)

## Installation

```console
npm install purgecss-loader --save-dev
```

## Usage

Here is an example of how to use the loader in a Webpack configuration with
Vue.js Single File Components:

```js
{
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          {
            loader: 'purgecss-loader',
            options: {
              content: [
                path.join(__dirname, 'src/components/**/*.vue')
              ],
              whitelistPatterns: [
                /alert/
              ]
            }
          }
        ]
      }
    ]
  }
}
```
