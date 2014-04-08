var ListView = Parse.View.extend({
	className: 'message-row',

	events:{
		'dblclick': 'expand'
	},

	template: _.template($('#list-template').text()),

	initialize: function(){
		$('.message-stream').prepend(this.el);
		this.render();

		this.on('add', this.collection, this.render);
	},

	render: function(){
		var renderedTemplate = this.template({model: this.model});

		this.$el.html(renderedTemplate);
	},

	expand: function(){
		this.$el.toggleClass('expand');
	}
});