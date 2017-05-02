
export const AxisCompressiveStrength = {
  15 : 7.2,
  20 : 9.6,
  25 : 11.9,
  30 : 14.3,
  35 : 16.7,
  40 : 19.1,
  45 : 21.1,
  50 : 23.1,
  55 : 25.3,
  60 : 27.5,
  65 : 29.7,
  70 : 31.8,
  75 : 33.8,
  80 : 35.9
};


export const SteelbarTensileStrength = {
  '300' : 270,
  '335' : 300,
  '400' : 360,
  '500' : 435
};

export const SteelbarCompressiveStrength = {
  '300' : 270,
  '335' : 300,
  '400' : 360,
  '500' : 410
};

export const ElasticModulus = {
  '300' : 2.1,
  '335' : 2.0,
  '400' : 2.0,
  '500' : 2.0,
  '预应力螺纹钢筋' : 2.0,
  '消除应力钢丝' : 2.05,
  '中强度预应力钢丝' : 2.05,
  '刚绞线' : 1.95
};



class CalculateBase {
  constructor (params) {
    this.inputs = params.inputs;
    this.outputs = params.outputs;
  };
  filterInput(){
    for (let key in this.inputs) {
      if (!(this.inputs[key].value instanceof Number)) {
        this.inputs[key].value = Number(this.inputs[key].value);
      }
    }
  };
  calculate() {
    // virtual methods
  };
  getResult() {
    this.filterInput();
    this.calculate();
  };

}

export default CalculateBase;
