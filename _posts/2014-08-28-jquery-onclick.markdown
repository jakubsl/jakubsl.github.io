---
layout: post
title:  "Assigning a jQuery on-click event to an active/inactive state of an element"
date:   2014-08-28 12:44:35
categories: javascript
---
I got into this problem when working on a site today.
You have an html element, lets say a list element and you want to toggle between active and inactive states of the element.

{% highlight html %}
  <ul id='tabs'>
    <li class='inactive'>tab1</li>
    <li class='inactive'>tab2</li>
    <li class='inactive'>tab3</li>
  </ul>
{% endhighlight %}

So I thought that would be quite straight forward, with a simple jQuery on-click event like this:

{% highlight javascript %}
$('#tabs li.inactive').on('click', function(e) {
    $(this).addClass('active').removeClass('inactive');
});

$('#tabs li.active').on('click', function(e) {
    $(this).addClass('inactive').removeClass('active');
});
{% endhighlight %}

What happens though, is that the on-click event is assigned to the particular element and changing the class of the element doesn't change that. From suggestions on the internet I found out that you could unbind that event by using '.off()' but it seemed like an overkill to rebind the on-click event every time the element is clicked.
I found out that this works really well and it might be of use to some of you:

{% highlight javascript %}
$('#tabs').on('click', 'li.inactive', function(e) {
    $(this).addClass('active').removeClass('inactive');
});
$('#tabs').on('click', 'li.active', function(e) {
    $(this).addClass('inactive').removeClass('active');
});
{% endhighlight %}