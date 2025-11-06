import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const compat = new FlatCompat({
  baseDirectory: _dirname,
});

const eslintConfig = {
  ignores: [
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ],
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier', 'plugin:tailwindcss/recommended'],
    plugins: ['prettier', 'tailwindcss'],
    rules: {
      'prettier/prettier': 'error',
      'react/no-unescaped-entities': 'off',
    },
  })
};

export default eslintConfig;
