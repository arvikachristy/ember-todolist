import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
	submitTodo(){
        var holder = this.get("model");
        holder.id = '1';
		// console.log(holder.title);
        var store = this.store;
        store.createRecord('todos', {
          id: '29',
          title: holder.title,
          description: holder.description,
          deadline: holder.deadline
        });
	}
 }
});
