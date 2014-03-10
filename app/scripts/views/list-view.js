var ListView = Parse.View.extend({
	className: 'message-row',

	events:{
		'dblclick': 'expand'
	},

	template: _.template($('#list-template').text()),

	initialize: function(){
		//$('.message-stream').append().html('');
		$('.message-stream').prepend(this.el);
		this.render();
	},

	render: function(){
		var renderedTemplate = this.template({model: this.model}); //pass in seperate models???

		this.$el.html(renderedTemplate);

	},

	expand: function(){
		this.$el.toggleClass('expand');
	}
});