
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
  '300': 270,
  '335': 300,
  '400': 360,
  '500': 435
};

export const SteelbarCompressiveStrength = {
  '300': 270,
  '335': 300,
  '400': 360,
  '500': 410
};

export const ElasticModulus = {
  '300': 2.1,
  '335': 2.0,
  '400': 2.0,
  '500': 2.0,
  '预应力螺纹钢筋': 2.0,
  '消除应力钢丝': 2.05,
  '中强度预应力钢丝': 2.05,
  '钢绞线': 1.95
};



class CalculateBase {
  constructor (params) {
    this.inputs = params.inputs;
    this.outputs = params.outputs;
  }

  filterInputToNumber(){
    for (let key in this.inputs) {
      if ('type' in this.inputs[key] && this.inputs[key].type != Number)
        continue;
      if (!(this.inputs[key].value instanceof Number)) {
        this.inputs[key].value = Number(this.inputs[key].value);
      }
    }
  }

  calculate() {
    // virtual methods
  }

  getResult() {
    this.filterInputToNumber();
    this.calculate();
  }
}

export default CalculateBase
