export class MyClass {
  private static _instance: MyClass;

  static get instance(): MyClass {
    return this._instance ? this._instance : (this._instance = new MyClass());
  }
}
