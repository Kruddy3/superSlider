# superSlider API
Iterate through lists with jQuery.

# HTML

```html
<div id="slider">
  <button class="super-left"></button>
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <button class="super-left"></button>
</div>
```

# JS

```javascript
$("#slider").superSlider({
  show: 5, //defaults to 5
  onExit:"class-on-remove", //defaults to slider-remove
  onEnter:"class-on-enter", //defaults to slider-enter
  listContainer:"ul" //defaults to ul
});
```
