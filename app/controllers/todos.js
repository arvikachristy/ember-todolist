import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
	submitTodo: function(){
        var holder = this.get('model');
		// console.log(holder.title);
        var store = this.store;
        var todos = store.createRecord('todos', {
          id: '29',
          title: holder.title,
          description: holder.description,
          deadline: holder.deadline
        });
        todos.save();
	}
 }
});
