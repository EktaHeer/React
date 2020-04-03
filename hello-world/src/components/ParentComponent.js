import React, { Component } from 'react';
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {

constructor(props) {
    super(props)

    this.state = {
         ParentName: 'parent'
    }
    this.greetParent = this.greetParent.bind(this)
}

greetParent(childName){
    alert(`hello, ${this.state.ParentName} from ${childName}`)
}

    render() {
        return (
            <div>
              <ChildComponent greetHandler = {this.greetParent} />

            </div>
        )
    }
}

export default ParentComponent
