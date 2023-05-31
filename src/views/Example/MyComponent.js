import React from 'react';
/**
 * JSX --> return one block
 * <React.Fragment> or <> thay the <div>
 */
class MyComponent extends React.Component {
    state = { name: 'Mr Duong', age: '30' };
    txtChange = (event) => {
        this.setState({ name: event.target.value });
    }
    render() {
        return (
            <>
                <div className='first'>
                    {console.log('My name is ' + this.state.name)}
                    <input type='text' value={this.state.name} onChange={(event) => this.txtChange(event)} />
                    Hello my name is {this.state.name}
                </div>
                <div className='second'>
                    Hello my name is {this.state.age}. I am from the Vietnamese
                </div>
            </>
        );
    }
}
export default MyComponent;