# Default theme for ergo-cms

This theme is automatically shipped with the [default skeleton for ergo-cms](https://github.com/ergo-cms/ergo-skel). If you haven't downloaded a skeleton yet, then you probably want to start there, instead. Otherwise, read on.

## The easy installation

```
ergo theme install default
```

This will download and install the default theme into the _themes folder and set it is as the current theme. You can then rebuild your site with (a 'clean' is recommended when switching themes):

```
ergo build --clean
```

## The long winded installation

If you prefer to do things manually to install a theme, then follow these instructions.

Download and extract this theme into your `_themes` folder as 'default' and then edit your `config.ergo.js` file and change the setting theme to:

```
	theme = 'default'
```

Then you can rebuild your website using:

```
ergo build --clean
```


### Credits

Social icons downloaded from Fonticon. See [fonticon/credits.html](fonticon/credits.html) for full credit information.
