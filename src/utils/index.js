class Util {
  constructor() {}

  /*
   * @description çæéæºid
   */
  createRandomId() {
    return `${Math.random() * 10}-${new Date().getTime()}-${Math.random() * 10}`
  }
}

export default new Util()
