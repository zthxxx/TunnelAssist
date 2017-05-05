import Vue from 'vue'
import CalcViewCompBase from './CalcViewCompBase.vue'

class CalcViewBase {
  constructor (instruction, model, name='') {
    let _params;
    if (name != '') this.name = name;
    if ('inputs' in model && 'outputs' in model) {
      _params = {
        inputs: model.inputs,
        outputs: model.outputs
      };
    }
    this.data = function () {
      let _data = {
        instruction,
        model,
      };
      if (_params) _data.params = _params;
      return _data;
    };
    this.methods = {
      calculate () {
        if ('model' in this && 'getResult' in this.model)
          this.model.getResult();
      }
    };
    this.components = {
      'CalcViewBase' : Vue.extend({
        'name' : this.name,
        'data' : this.data,
        'methods': this.methods,
        mixins: [CalcViewCompBase]
      })
    };
  }
}

export default function (instruction, model, name) {
  return Vue.extend(new CalcViewBase(instruction, model, name))
}
