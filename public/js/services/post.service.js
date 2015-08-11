'use strict';

app.factory('Post', function(DS, $state) {
	
	return DS.defineResource({
		name: 'posts', 
		relations: {
			belongsTo: {
				users: {
					localKey: 'authorId',
					localField: 'author' 
				} 
			}
		}, 
		// functionality added to the prototype of every
		methods: {
			go: function (){
				$state.go('post', {
					postId: this._id, 
					authorId: this.authorId
				})
			}
		}

	})

}).run(function (Post) {})


