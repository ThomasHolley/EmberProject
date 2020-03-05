// note-class.js
import EmberObject, { computed } from '@ember/object';

export default EmberObject.extend({
  MAX:100,
  content:'Entrez votre texte',
  style: 'info',
  info: '',
  size: computed('content', function(){
    return this.get('MAX')-this.get('content').length;
  })
});
