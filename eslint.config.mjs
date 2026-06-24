import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default [
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs['jsx-a11y-strict'],
  
  {
    rules: {
      'astro/prefer-class-list-directive': 'error',
      'astro/no-unused-css-selector': 'error',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' }
      ],
      'eqeqeq': ['error', 'always'],
      'prefer-const': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-template': 'error',
      'curly': ['error', 'all']
    }
  }
];