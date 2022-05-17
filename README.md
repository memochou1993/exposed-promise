exposed-promise
===

# Usage

```JS
(async () => {
  const promise = new ExposedPromise(
    (v) => console.log(v),
    (v) => console.log(v),
  );
  setTimeout(() => {
    promise.resolve(true);
  }, 1000);
})();
```
