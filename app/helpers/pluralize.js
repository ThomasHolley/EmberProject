import {helper} from '@ember/component/helper';

export default helper(function pluralize(params){
const [count,zero,one,other]=params
  if(count==0){
    return zero;
  }
  if(count==1){
    return one;
  }
  return count+other;
});
