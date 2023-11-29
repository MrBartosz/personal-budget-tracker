{
    "env": {
      "es6": true,
      "node": true,
      "jest": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    "parserOptions": {
      "project": "./tsconfig.json"
    },
    "plugins": ["react", "react-hooks", "@typescript-eslint", "prettier"],
  
    "rules": {
      "indent": ["error", 2, { "SwitchCase": 1 }],
      "quotes": ["error", "single", { "avoidEscape": true }],
      "no-empty-function": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
  
      "react/display-name": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": [
        "error",
        {
          "singleQuote": true,
          "printWidth": 120,
          "endOfLine": "auto"
        }
      ]
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    }
  }