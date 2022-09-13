module.exports = defineConfig({
    publicPath: process.env.NODE_ENV === 'production'
    ? '/anisongPlaylist/'
    : '/'
})