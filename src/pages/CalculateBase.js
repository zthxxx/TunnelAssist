
export const AxisCompressiveStrength = {
  'C15': 7.2,
  'C20': 9.6,
  'C25': 11.9,
  'C30': 14.3,
  'C35': 16.7,
  'C40': 19.1,
  'C45': 21.1,
  'C50': 23.1,
  'C55': 25.3,
  'C60': 27.5,
  'C65': 29.7,
  'C70': 31.8,
  'C75': 33.8,
  'C80': 35.9
};


export const SteelbarTensileStrength = {
  '300系列': 270,
  '335系列': 300,
  '400系列': 360,
  '500系列': 435
};

export const SteelbarCompressiveStrength = {
  '300系列': 270,
  '335系列': 300,
  '400系列': 360,
  '500系列': 410
};

export const ElasticModulus = {
  '300系列': 2.1,
  '335系列': 2.0,
  '400系列': 2.0,
  '500系列': 2.0
};

export const NaturalDensity = {
  '杂填土': 16,
  '粉土': 18,
  '细砂': 19,
  '圆砾土': 19.5,
  '粉质粘土': 20,
  '卵石土': 20,
  '基岩': 22
};

export const InnerFrictionAngel = {
  '杂填土': 20,
  '粉土': 21,
  '细砂': 22,
  '圆砾土': 25,
  '粉质粘土': 23,
  '卵石土': 27,
  '基岩': 35
};

import {warnbus} from './CalcViewBase'

class CalculateBase {
  constructor (params) {
    this.inputs = params.inputs;
    this.selects = params.selects;
    this.outputs = params.outputs;
  }

  filterInputToNumber (){
    for (let key in this.inputs) {
      if ('type' in this.inputs[key] && this.inputs[key].type != Number)
        continue;
      if (!(this.inputs[key].value instanceof Number)) {
        this.inputs[key].value = Number(this.inputs[key].value);
      }
    }
  }
  getVar (name) {
    if (name in this.inputs) return this.inputs[name].value;
  }

  calculate () {
    // virtual methods
  }

  warning (message) {
    warnbus.$emit('warn', message);
  }

  getResult () {
    this.filterInputToNumber();
    this.calculate();
  }
}

export default CalculateBase
