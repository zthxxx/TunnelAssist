
let params = {
  inputs: {
    num_a : {
      label: "示例一 a",
      value: 0
    },
    num_b : {
      label: "示例一 b",
      value: 0
    },
    num_c : {
      label: "示例asd一 c",
      value: 0
    }
  },
  outputs: {
    num_outPlus : {
      label: "之和 outPlus",
      value: 0
    },
    num_outMulti : {
      label: "之积 outMulti",
      value: 0
    }
  }
};

import CalculateBase from '../CalculateBase'

class BarTop extends CalculateBase {
  getPlus() {
    let a =this.inputs.num_a.value;
    let b = this.inputs.num_b.value;
    let c = this.inputs.num_c.value;
    return a + b + c;
  };
  getMulti() {
    let a =this.inputs.num_a.value;
    let b = this.inputs.num_b.value;
    let c= this.inputs.num_c.value;
    return a * b * c;
  }
  calculate() {
    this.outputs.num_outPlus.value = this.getPlus();
    this.outputs.num_outMulti.value = this.getMulti();
  }

}

export default new BarTop(params)
