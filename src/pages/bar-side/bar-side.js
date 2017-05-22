let params = {
  inputs: {
    h: {
      label: '顶板厚度 h',
      value: ''
    },
    M: {
      label: '弯矩设计值 M (KNm)',
      value: ''
    },
    N: {
      label: '轴力设计值 N (KN)',
      value: ''
    },
    L: {
      label: '结构净高 H',
      value: ''
    }
  },
  selects: {
    C: {
      label: '顶板混凝土等级 C',
      value: '',
      items: [
        'C15', 'C20', 'C25', 'C30', 'C35', 'C40', 'C45', 'C50', 'C55', 'C60', 'C65', 'C70', 'C75', 'C80'
      ]
    },
    G: {
      label: '钢筋种类 G',
      value: '',
      items: [
        '300系列', '335系列', '400系列', '500系列'
      ]
    }
  },
  outputs: {
    'A_s': {
      label: 'A 受压区钢筋面积 As',
      value: ''
    },
    'A_s1': {
      label: 'B 受拉区钢筋面积 As`',
      value: ''
    }
  }
};

import CalculateBase from '../CalculateBase'
import {
  AxisCompressiveStrength,
  SteelbarTensileStrength,
  SteelbarCompressiveStrength,
  ElasticModulus
} from '../CalculateBase'

class BarSide extends CalculateBase {
  constructor (params) {
    super(params);
  }

  getAssistVar(){
    const b = 1000;
    const a_s = 50;
    const rho_min = 0.002;
    let L = this.inputs.L.value;
    let h = this.inputs.h.value;
    let C = this.selects.C.value;
    let M = this.inputs.M.value;
    let N = this.inputs.N.value;
    let G = this.selects.G.value;
    let l_0 = L - 0.6;
    let h_0 = h - a_s;
    let e_0 = M / N * 1000;
    let e_a = Math.max(h / 30, 20);
    let e_i = e_0 + e_a;
    let f_c = AxisCompressiveStrength[C] || 0;
    let f_y = SteelbarTensileStrength[G] || 0;
    let f_y1 = SteelbarCompressiveStrength[G] || 0;
    let E_s = ElasticModulus[G] || 0;
    let A = b * h;
    let zeta_1 = Math.min(0.5 * f_c * A / (N * 1000), 1);
    let zeta_2 = Math.min(1.15 - 0.01 * f_c / (h * 1e-3), 1);
    let eta = 1 + 1 / (1400 * e_i / h) * Math.pow(l_0 / (h * 1e-3), 2) * zeta_1 * zeta_2;

    let e = eta * e_i + h / 2 + a_s;
    let zeta_b = 0.8 / (1 + f_y / (0.0033 * E_s));

    let assist = {
      b,
      rho_min,
      h,
      N,
      a_s,
      h_0,
      e_0,
      e_i,
      eta,
      f_c,
      f_y,
      f_y1,
      e,
      E_s,
      zeta_b
    };

    return assist;
  }

  getOutputA_s (assist) {
    let _ = assist;
    let A_s = _.N * _.e * 1000 - _.f_c * 1000 * _.b * Math.pow(_.h_0, 2) * _.zeta_b * (1 - 0.5 * _.zeta_b);
    A_s = A_s / (_.f_y * (_.h_0 - _.a_s));
    _.A_s = A_s;
    return A_s;
  }

  getOutputA_s1 (assist) {
    let _ = assist;
    let A_s1 = _.N * 1000 * (_.eta * _.e_i - _.h / 2 + _.a_s) / (_.f_y * (_.h_0 - _.a_s));
    _.A_s1 = A_s1;
    return A_s1;
  }

  calculate() {
    let assist = this.getAssistVar();
    let _ = assist;
    if (!(_.eta * _.e_i > 0.3 * _.h_0)) {
      console.warn('不符合大偏心受压计算');
      this.warning('不符合大偏心受压计算');
      return;
    }
    let A_s = this.getOutputA_s(assist);
    let A_s1 = this.getOutputA_s1(assist);
    if (!(_.e_0 < _.zeta_b* _.h_0)) {
      console.warn('需要验算');
      let check = _.rho_min * _.b * _.h;
      if (A_s >= check && A_s1 >= check) {
        console.warn('不符合裂缝计算要求');
        this.warning('不符合裂缝计算要求');
        return;
      }
    }
    this.outputs.A_s.value = A_s;
    this.outputs.A_s1.value = A_s1;
  }
}

export default new BarSide(params)
