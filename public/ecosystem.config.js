module.exports = {
  apps: [
    {
      name: 'Bearune',
      exec_mode: 'cluster',
      instances: 'max',
      script: './server/index.mjs'
    }
  ]
}