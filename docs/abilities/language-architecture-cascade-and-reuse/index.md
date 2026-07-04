# Language Architecture, Cascade, and Reuse

This category contains 12 capability entries. Each entry includes a short explanation, MDN entry, Can I Use entry, and a readable demo.

- [Custom properties](custom-properties.md) - Native variables, design tokens, and cross-component inheritance.
- [Registered custom properties](registered-custom-properties.md) - Make custom properties animatable, type-checkable, and able to define initial values.
- [Cascade layers](cascade-layers.md) - Layer browser resets, frameworks, and component styles to reduce specificity battles.
- [revert-layer](revert-layer.md) - Roll back declarations from the current cascade layer without reverting every origin.
- [@scope](at-scope.md) - Native local scoping and scoped proximity reduce global selector pollution.
- [CSS Nesting](css-nesting.md) - Native nested selectors and nested conditional rules replace part of the preprocessor workflow.
- [Enhanced conditional rules](enhanced-conditional-rules.md) - Detect support for properties, values, selectors, font technologies, and font formats.
- [@when / @else](at-when-at-else.md) - Combine media, supports, and container conditions into native conditional chains.
- [CSS if()](css-if.md) - Write conditions inside property values with media(), supports(), and style().
- [Custom functions](custom-functions.md) - Native parameterized value functions reduce dependency on Sass or build tools.
- [Mixins / @apply](mixins-at-apply.md) - Native reusable declaration blocks with parameters.
- [CSSOM / Typed OM](cssom-typed-om.md) - Manipulate CSS values through structured APIs instead of string concatenation.
