module.exports = {
    apps : [
      {
        name: 'micro-principal',
        script: 'micro-principal/api/index.js',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '2G',
        env: {
          NODE_ENV: 'development'
        },
        env_production: {
          NODE_ENV: 'production'
        }
      },
      {
        name: 'micro-post',
        script: 'micro-post/index.js',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '2G',
        env: {
          NODE_ENV: 'development'
        },
        env_production: {
          NODE_ENV: 'production'
        }
      },
      {
        name: 'micro-database',
        script: 'micro-database/api/index.js',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '2G',
        env: {
          NODE_ENV: 'development'
        },
        env_production: {
          NODE_ENV: 'production'
        }
			},
			{
        name: 'micro-cache',
        script: 'micro-cache/api/index.js',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '2G',
        env: {
          NODE_ENV: 'development'
        },
        env_production: {
          NODE_ENV: 'production'
        }
      }
    ],
  };