module.exports = defineConfig({
  publicPath : process.envNODE_ENV === production
    ? '/anisongPlaylist/'
    : '/'
})