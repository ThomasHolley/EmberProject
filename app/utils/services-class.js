import EmberObject, { computed } from '@ember/object';

export default EmberObject.extend({
  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
countActive:computed('services.@each.active',function(){
  let servicesActifs=this.get('services').filterBy('active',true);
    return servicesActifs.length;

  }),
  sumActive: computed('services.@each.active',function(){
    let servicesActifs=this.get('services').filterBy('active',true);
    let total=0;
    servicesActifs.forEach((service)=>{total+=service.price;});
    return total;

    })
});
