import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:8888/graphql',
  documents: './src/app/data-access/graphql/**/*.graphql',
  generates: {
    './src/app/data-access/generated/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-apollo-angular',
      ],
      config: {
        namingConvention: {
          transformUnderscore: true,
        },
        typesPrefix: 'Dem',
        maybeValue: 'T | null | undefined',
      },
    },
  },
};
export default config;
