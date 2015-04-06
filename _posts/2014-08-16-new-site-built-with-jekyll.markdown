---
layout: post
title:  "new site built with Jekyll"
date:   2014-08-16 17:22:16
categories: general
---
Hey guys,

Welcome to my new site using my new domain.

This page is hosted on the [Github Pages][gitpages], which is not only great because it's free but also because as soon as I push my page to [Github][github], it's automatically published and available to everyone online. By default, it's accessible through'username.github.io' but you can also use [your own domain][gitpages cdom].

In order to simplify the development and to make my website into more of a blog, I'm using a simple site generator called [Jekyll][jekyll]. Give it a try, it's pretty awesome.

Oh and Jekyll also runs [Markdown][markdown] so I can do cool stuff like posting code snippets:

{% highlight javascript %}
var firstNumber = '3';
var secondNumber = '7'
var add = function(a+b){
  var sum = a+b;
  console.log(sum);
}
add(firstNumber, secondNumber);
{% endhighlight %}

[jekyll]:     http://jekyllrb.com
[github]:     https://github.com
[gitpages]:   https://pages.github.com/
[gitpages cdom]:   https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages
[markdown]: http://daringfireball.net/projects/markdown/
