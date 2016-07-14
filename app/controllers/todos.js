import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
	submitTodo(){
        var holder = this.get("model");
		console.log(holder.title);
	}
 }
});
