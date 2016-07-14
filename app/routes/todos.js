import Ember from 'ember';

let tasks = [{
	id: '10',
	title: 'Get a  corgi',
	description: 'at the pet store',
	deadline: '12/09/2016'
},{
	id: '22',
	title: 'Water the plant',
	description: 'go back to the apartment',
	deadline: '23/06/2016'
}, {
	id: '32',
	title: 'Laundry day',
	description: 'don\'t foget before sunday!',
	deadline: '13/07/2016'
}];

export default Ember.Route.extend({
	model(){
		// return this.get('store').findAll('todos');
		var self = this;
		var store = this.store;
		tasks.forEach(function(task){
	    	store.createRecord('todos', task);	    	
		});
		return tasks;
	}

});
