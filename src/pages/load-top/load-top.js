let params = {
  inputs: {
    h_1: {
      label: '顶板埋深 h1',
      value: ''
    },
    h_2: {
      label: '地下水埋深 h2',
      value: ''
    },
    x_1: {
      label: '土层一类型 x1',
      type: String,
      value: ''
    },
    h_4: {
      label: '土层一厚度 h4',
      value: ''
    },
    x_2: {
      label: '土层二类型 x2',
      type: String,
      value: ''
    },
    h_5: {
      label: '土层二厚度 h5',
      value: ''
    },
    H_2: {
      label: '顶板厚度 H2',
      value: ''
    },
    C_2: {
      label: '顶板混凝土等级 C2',
      value: ''
    }
  },
  outputs: {
    'Q_1': {
      label: '承受能力极限荷载 Q1',
      value: ''
    },
    'Q_2': {
      label: '正常使用极限荷载 Q2',
      value: ''
    }
  }
};

import CalculateBase from '../CalculateBase'
import {
  NaturalDensity
} from '../CalculateBase'

class LoadTop extends CalculateBase {
  constructor (params) {
    super(params);
  }

  getAssistVar(){
    let h_1 = this.inputs.h_1.value;
    let h_2 = this.inputs.h_2.value;
    let x_1 = this.inputs.x_1.value;
    // let h_4 = this.inputs.h_4.value;
    let x_2 = this.inputs.x_2.value;
    // let h_5 = this.inputs.h_5.value;
    let H_2 = this.inputs.H_2.value;
    // let C_2 = this.inputs.C_2.value;
    const r_water = 10;
    const p_1 = 20;
    const p_2 = 4;
    let r_2 = NaturalDensity[x_1] || 0;
    let r_4 = NaturalDensity[x_2] || 0;
    let q_1 = r_2 * (H_2 + 0.3);
    let q_2 = r_4 * h_1;
    let q_3 = r_water * (h_1 - h_2);
    let q = q_1 + q_2 + q_3;
    let p = p_1 + p_2;

    let assist = {
      q,
      p
    };

    return assist;
  }

  getOutputQ_1 (assist) {
    let _ = assist;
    let Q_1 = 1.2 * _.q + 1.4 * _.p;
    return Q_1;
  }

  getOutputQ_2 (assist) {
    let _ = assist;
    let Q_2 = _.q + _.p;
    return Q_2;
  }

  calculate() {
    let assist = this.getAssistVar();
    let Q_1 = this.getOutputQ_1(assist);
    let Q_2 = this.getOutputQ_2(assist);

    this.outputs.Q_1.value = Q_1;
    this.outputs.Q_2.value = Q_2;
  }
}

export default new LoadTop(params)
