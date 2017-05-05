let params = {
  inputs: {
    H_1: {
      label: '顶板厚度 H1',
      value: ''
    },
    C_1: {
      label: '底板混凝土等级 C1',
      value: ''
    },
    x_1: {
      label: '土层类型 x',
      type: String,
      value: ''
    },
    h_1: {
      label: '顶板埋深 h1',
      value: ''
    },
    h_2: {
      label: '地下水埋深 h2',
      value: ''
    },
    h_3: {
      label: '结构净高 h3',
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

class LoadBottom extends CalculateBase {
  constructor (params) {
    super(params);
  }

  getAssistVar(){
    let H_1 = this.inputs.H_1.value;
    // let C_1 = this.inputs.C_1.value;
    let x_1 = this.inputs.x_1.value;
    let h_1 = this.inputs.h_1.value;
    let h_2 = this.inputs.h_2.value;
    let h_3 = this.inputs.h_3.value;
    const r_water = 10;
    const p_1 = 20;
    let r_1 = NaturalDensity[x_1] || 0;
    let q_1 = r_1 * (H_1 + 0.3);
    let q_2 = r_water * (h_1 + h_2 + h_3);
    let q = q_1 + q_2;
    let p = p_1;

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

export default new LoadBottom(params)
