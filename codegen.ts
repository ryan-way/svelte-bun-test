const config = {
    schema: 'https://rickandmortyapi.com/graphql',
    documents: ['src/**/*.svelte'],
    ignoreNoDocuments: true, // for better experience with the watcher
    generates: {
      './src/lib/gql/': {
        preset: 'client',
        plugins: [],
      },
    },
  };
  
  export default config;