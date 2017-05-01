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

export default CalculateBase
