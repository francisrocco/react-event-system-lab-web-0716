import React from 'react';

export default class EyesOnMe extends React.Component {
  constructor() {
    super();

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onFocus() {
    console.log('Good!');
  }

  onBlur() {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return(
      <div>
        <button onFocus={this.onFucus} onBlur={this.onBlur} />
      <div>
    )
  }
}
