module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard-with-typescript',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },

  settings: {
    react: {
      version: 'detect',
    },
    'import/ignore': ['node_modules/react-native/index\\.js$'],
  },

  plugins: ['react', 'react-native'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    'import/no-unresolved': 0,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/no-floating-promises': 0,
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/require-await': 0,
    '@typescript-eslint/prefer-nullish-coalescing': 0,
    '@typescript-eslint/no-throw-literal': 0,
  },
};
