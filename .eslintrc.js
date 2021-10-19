module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'prettier',
    'import',
    'jsx-a11y'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'import/extensions': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'import/no-unresolved': 'error',
    'no-use-before-define': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react/display-name': 'off',
    'import/no-named-as-default': 'off',
    'react/prop-types': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    '@typescript-eslint/no-explicit-any': 0,
    'import/no-unresolved': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-use-before-define': 'off',
    'prefer-const': 'off',
    '@typescript-eslint/no-use-before-define': ['off'],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'object', 'index']
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before'
          }
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'jest.setup.ts',
          '**/*.test.tsx',
          '**/*.spec.tsx',
          '**/*.test.ts',
          '**/*.spec.ts'
        ]
      }
    ]
  },
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
}
