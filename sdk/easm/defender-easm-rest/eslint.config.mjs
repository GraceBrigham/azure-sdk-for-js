import azsdkEslint from "@azure/eslint-plugin-azure-sdk";

export default azsdkEslint.config([
  {
    rules: {
      "tsdoc/syntax": "warn",
    },
  },
]);
