# superSlider API
Iterate through lists with jQuery.

* [Demonstration website](https://thestraded.github.io/superSlider/)

# Installation
 `$bower install superSlider`
# HTML

```HTML
<div class="slider">
  <button class="super-left">Left</button>
  <ul id="my-ul">
    <li> !!WHATEVER YOU WANT LOOPED THROUGH!! </li>
    <li> !!WHATEVER YOU WANT LOOPED THROUGH!! </li>
    <li> !!WHATEVER YOU WANT LOOPED THROUGH!! </li>
  </ul>
  <button class="super-right">Right</button>
</div>
```

# JS

```javascript
$("#slider").superSlider({
  // how many elements you want shown
  display:4, //defaults to 5

  // if you want the items to loop back to the start or top at the end
  overflow:true, //defaults to false
});
```

# CSS
Make user to use your own styling especially if you are using overflow as jquery clears the margins when appended
