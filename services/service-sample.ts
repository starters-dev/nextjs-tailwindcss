export class ExampleService implements IService {
  private inited = false;

  init = async () => {
    if (!this.inited) {
      // your code ...

      this.inited = true;
    }
  };
}
