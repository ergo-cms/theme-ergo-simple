/*
This is the erg-simple theme config for ergo cms. See online for more options
*/

module.exports = {
	name: "Ergo Simple Theme",
	url: "https://github.com/ergo-cms/theme-ergo-simple",
	asset_paths: ['styles.css','favicon.ico','images','flaticon'],
	default_fields: {
		image: 'post.jpg',
		author_image: 'avatar.jpg',
		author_url: '/authors.html',
		tags_url: '/tags.html',
		categories_url: '/categories.html',
		feed_url: '/rss.xml',

		// gracefully accept paginate plugin support
		auto_paginate: function(list, params, list_name) { 
			if (!!this.paginate) 
				return this.paginate.call(this, list, params, list_name);
			else
				return list; // do nothing, if paginate not available
			},
	}
};


