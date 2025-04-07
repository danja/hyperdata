# CSS Tips

### Allow user control of element size

```css
img {
  resize: both;
}
```

Works (as class or whatever) on anything with an `overflow` != `visible`.

https://developer.mozilla.org/en-US/docs/Web/CSS/resize

- Hover shadow
- Non-Javascript interactive elements (button checked etc, list select, open drawer)

- responsive, less code with min()
- https://developer.mozilla.org/en-US/docs/Web/CSS/min
- https://developer.mozilla.org/en-US/docs/Web/CSS/max
- https://developer.mozilla.org/en-US/docs/Web/CSS/clamp

- select :not() CSS pseudo-class
- https://developer.mozilla.org/en-US/docs/Web/CSS/:not
- https://developer.mozilla.org/en-US/docs/Web/CSS/:has
  Glass morphism

  - text gradients background-clip
  - https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip

- dropdown focus improvement

  - https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within

- auto heading numbering

- card swiper improvement - snap

- https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type
- https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align

\- from [These CSS PRO Tips & Tricks Will Blow Your Mind!](https://www.youtube.com/watch?v=PL3Odw-k8W4) _(comparatively accurate clickbait title)_

```html
<select>
  <option value="light">Light</option>
  <option value="dark">Dark</option>
</select>
```

```css
body:has(option value="dark"]):checked) {
  --background: black;
  --textcolor: white;
}
```
