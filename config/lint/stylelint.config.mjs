export default {
  extends: ["stylelint-config-standard"],

  ignoreFiles: [
    "node_modules/**"
  ],

  /*
   * Regler från standardkonfigurationen blir varningar
   * om de inte uttryckligen skrivs över nedan.
   */
  defaultSeverity: "warning",

  rules: {
    /*
     * Syntaxnära och potentiellt felaktig CSS ska blockera.
     */
    "color-no-invalid-hex": [
      true,
      {
        severity: "error"
      }
    ],

    "declaration-block-no-duplicate-properties": [
      true,
      {
        severity: "error"
      }
    ],

    "font-family-no-duplicate-names": [
      true,
      {
        severity: "error"
      }
    ],

    "function-calc-no-unspaced-operator": [
      true,
      {
        severity: "error"
      }
    ],

    "selector-pseudo-class-no-unknown": [
      true,
      {
        severity: "error"
      }
    ],

    "selector-pseudo-element-no-unknown": [
      true,
      {
        severity: "error"
      }
    ],

    /*
     * Stil- och ordningsregler får bara varna.
     */
    "declaration-block-single-line-max-declarations": [
      1,
      {
        severity: "warning"
      }
    ],

    "selector-class-pattern": [
      "^[a-z][a-z0-9-]*$",
      {
        severity: "warning"
      }
    ]
  }
};