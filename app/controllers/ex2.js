import Controller from '@ember/controller';
import {get,set} from '@ember/object';

export default Controller.extend({
  actions:{
    toogleActive(s){
      set(s, 'active',!get(s,'active'));
    }
  }
});
