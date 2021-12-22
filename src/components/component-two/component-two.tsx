import { Component, Fragment, h, Host, State } from '@stencil/core';

@Component({
  tag: 'component-two',
  styleUrl: 'component-two.css',
  shadow: true,
})
export class ComponentTwo {
  @State() showComponentOne: any;
  method: any;
  template: string = '';

  template_three = (<button onClick={() => alert()}>Template three here</button>);

  constructor() {
    this.fetchComp(2);
  }

  componentWillRender() {}

  fetchComp(type) {
    let this_ = this;
    switch (type) {
      case 0:
        import('./template').then(module => {
          this.showComponentOne = module.template_one;
        });
        break;
      case 1:
        import('./template-two').then(module => {
          this.showComponentOne = module.template_two;
        });
        break;
      case 2:
        import('./template-three').then(module => {
          this.showComponentOne = this.template_three;
          console.log(this.showComponentOne);
          this.showComponentOne = <button onClick={() => alert()}>Template three here</button>;
          console.log(this.showComponentOne);
        });

        break;
      default:
        break;
    }
  }

  clicked() {
    alert();
  }

  methodHere() {}

  render() {
    // const template_three = () => {
    //   return <button onClick={() => alert()}>Template three here</button>;
    // };
    return this.showComponentOne ? this.showComponentOne : <div></div>;
    //return true && <my-component></my-component>;
  }
}
