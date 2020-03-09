// note-class.js
import EmberObject, { computed } from '@ember/object';

export default EmberObject.extend({
  MAX:100,
  content:'Entrez votre texte',
  style:computed('size', function(){
    let size=this.get('size');
    if(size>50){
      return 'positive';
    }
    if(size<40){
      return 'warning'
    }
    if(size<20){
      return 'danger';
    }
    return 'info';
  }),
  info: '',
  size: computed('content', function(){
    return this.get('MAX')-this.get('content').length;
  })
});
