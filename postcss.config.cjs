module.exports = ({ env }) => ({
  plugins: [
    require('postcss-custom-properties')(),
    require('postcss-nested')()
  ]
})