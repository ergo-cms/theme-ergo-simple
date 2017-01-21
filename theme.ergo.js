/*
This is a minimal skeleton config for ergo cms. See online for more options
*/

module.exports = {
	name: "Ergo Default Theme",
	//url: "https://github.com/ergo-cms/theme-default",
	asset_paths: ['styles.css','favicon.ico','images','flaticon'],
	default_fields: {
		dynamic_list: function() { // See*** below for description
			var list = this[this.list_type || 'page'].slice(0, this.list_len || 999);

			if (list.length>0){
				if (list[0].first === undefined)
					list[0].first = true;
				if (list[list.length-1].last === undefined)
					list[list.length-1].last = true;
			}
			return list;
		}
	}
};




/**

// LISTS
// This bit of strangess work like this:

1. In the main part of the website, there's page (say posts.tex) that has this in the header:
	layout = list.html
	list_type = post
	list_len = 100

2. At render time, list.html has access to 'list_type' and 'list_len'. 
	This theme then has defined the 'list.html' layout as:
		{{#dynamic_list}} ... {{/dynamic_list}}

3. The system then ends up at the 'dynamic_list' function above, which returns the array given: 
	eg. return this['post'], which comes from elsewhere step 1.


Why? This allows a theme to make theme-centric lists of posts/authors, tags, etc, and 
	frees up the user from worrying about such things, when changing themes
*/