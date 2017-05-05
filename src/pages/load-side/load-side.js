let params = {
  inputs: {
    H_3: {
      label: '顶板厚度 H3',
      value: ''
    },
    C_3: {
      label: '侧板混凝土等级 C3',
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
      label: '土层二厚度 h4',
      value: ''
    },
    x_3: {
      label: '土层三类型 x3',
      type: String,
      value: ''
    },
    h_6: {
      label: '土层三厚度 h6',
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
  InnerFrictionAngel
} from '../CalculateBase'

class LoadBottom extends CalculateBase {
  constructor (params) {
    super(params);
  }

  getAssistVar(){
    let H_3 = this.getVar('H_3');
    let h_1 = this.getVar('h_1');
    let h_2 = this.getVar('h_2');
    let x_1 = this.getVar('x_1');
    let h_4 = this.getVar('h_4');
    let x_2 = this.getVar('h_2');
    let h_5 = this.getVar('h_5');
    let x_3 = this.getVar('x_1');
    // let h_6 = this.getVar('h_6');
    let h_3 = this.getVar('h_3');
    const r_water = 10;
    let varphi_1 = InnerFrictionAngel[x_1] || 0;
    let varphi_2 = InnerFrictionAngel[x_2] || 0;
    let varphi_3 = InnerFrictionAngel[x_3] || 0;
    let K_a1 = 0.5 - varphi_1 / 2;
    let K_a2 = 0.5 - varphi_2 / 2;
    let K_a3 = 0.5 - varphi_3 / 2;
    let r_3 = 1;
    let r_4 = 1;
    let r_5 = 1;
    let r_6 = 1;
    let q_1 = r_3 * (H_3 + 0.3);
    let q_2 = r_4 * h_1 * K_a1;
    let q_3 = r_4 * h_4 * K_a1;
    let q_4 = r_5 * h_4 * K_a2;
    let q_5 = r_5 * (h_4 + h_5) * K_a2;
    let q_6 = r_6 * (h_4 + h_5) * K_a3;
    let q_7 = r_6 * (h_1 + h_3) * K_a3;
    let q_8 = r_water * (h_1 - h_2);
    let q_9 = r_water * (h_1 - h_2 + h_3);
    let q = q_1 + q_2 + q_3 + q_4 + q_5 + q_6 + q_7 + q_8 + q_9;
    let p_1 = (20 + 4) * K_a2;
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
