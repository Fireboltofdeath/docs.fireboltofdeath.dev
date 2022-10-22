---
title: Extra
---
Components have a few features we haven't covered yet!

## Predicate
You can add a `predicate` function to a component to determine if the component should be constructed for a provided instance.
```ts
@Component({
    tag: "Example",
    predicate: instance => instance.FindFirstAncestorOfClass("PlayerGui") !== undefined,
})
```