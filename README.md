# superSlider API
Iterate through lists with jQuery.

# HTML

```HTML
<div id="slider">
  <button class="super-left"></button>
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <button class="super-right"></button>
</div>
```

# JS

```javascript
$("#slider").superSlider({
  // how many elements you want shown
  display:4, //defaults to 5

  // NOT WORKING AT THE MOMENT
  // whether you want to loop back to the beginning or stop at the end
  overflow:true, //defaults to false
});
```
