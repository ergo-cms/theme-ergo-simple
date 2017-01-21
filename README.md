# Ergo Simple Theme

This theme is automatically shipped with the [default skeleton for ergo-cms](https://github.com/ergo-cms/ergo-skel). If you haven't downloaded a skeleton yet, then you probably want to start there, instead. Otherwise, read on.

## Notes

This theme, apart from using Disqus, does not use any javascript. This was done to ensure that designers and website authors can easily get a clear picture of how things fit together. It also results in an extremely fast loading website, as there are minimal dependencies in the web pages.

This theme provides the following layout files, which are commonly available for most standard 'blog' style installations:

* homepage.html. Use this layout by making sure the following line is in the header area of your home page (typically @/index.tex@):

bc. layout = homepage.html

* page.html. This is the 'default' page for all pages that aren't part of a blog. They are your standard pages (like, about.html, etc).
* post.html. This is the page that is used in blog posts. It has features such an author, date and provides a Disqus comments area.
* list.html. This page is used for building pages that have 'lists of things', such as a list of blog posts. The [default ergo skeleton package](https://ergo-cms/ergo-skel) uses this page in @/blog/index.tex@, by setting the following fields in it's header area:

bc. layout = list.html
list_type = blog

There are two partial files that are included, that may be overridden easily:

* footer_text.html. This controls the text that appears in the footer area.
* menu.tex. This controls the menus in the top navigation area.


## The easy installation

```
ergo theme install ergo-simple
```

This will download and install the theme into the _themes folder and set it is as the current one. You can then rebuild your site with (a 'clean' is always recommended when switching themes):

```
ergo build --clean
```

## The long winded installation

If you prefer to do things manually to install a theme, then follow these instructions.

Download and extract this theme into your `_themes` folder as 'ergo_simple' and then edit your `config.ergo.js` file and change the setting theme to:

```
	theme = 'ergo-simple',
```

Note that you may choose whatever folder name you like.

Then, rebuild your website using:

```
ergo build --clean
```


### Credits

Social icons downloaded from Fonticon. See [fonticon/credits.html](fonticon/credits.html) for full credit information.
