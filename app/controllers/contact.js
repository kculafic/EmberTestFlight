import Ember from 'ember';

export default Ember.Controller.extend({
  subjectLine: '',

  // isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  // isDisabled: Ember.computed.not('isValid'),

  actions: {

    saveMessage() {
      alert(`Saving of the following email address is in progress: ${this.get('subjectLine')}`);
      this.set('responseMessage', `Thank you! We've just saved your message: ${this.get('subjectLine')}`);
      this.set('subjectLine', '');
    }
  }
});
