import React from 'react'
export default class Lifecycle extends React.Component {

    constructor(props) {
        super(props); 
        console.log('Inside constructor');
        this.state={
            count: 0,
            someDate: this.props.data
        }
        this.increment = this.increment.bind(this);
        this.timeout = 0;
    }
    increment() {
        this.setState({
            count: this.state.count+1
        })
    } 
    // gDS -> dM (fetch -> then) -> ren(gDS) !!Ambiguity
    // gDS -> ren(gDS) -> dM (fetch -> then) -> gDS -> ren(gDS) -> dU -> gDS -> ren -> dU
    static getDerivedStateFromProps() {
        console.log('Inside getDerivedStateFromProps');
        return null;
    }
    // Side effect, Init
    componentDidMount() {
        // Only run once
        console.log('Component Mount completed');
        // fetch('/dashboard/metrics').then(() => this.setState)
        this.timeout = setTimeout(() => {
            this.setState({
                count: 0
            })
        },10000)
    }
    // Side effect, Dynamic
    componentDidUpdate() {
        // Everytime component gets updates
        console.log('Component Update completed');

        // All changes
    }
    componentWillUnmount() {
        console.log('Component Will unmount');
        clearTimeout(this.timeout)
        
    }
    render() {
        console.log('Component Rendered');
        return (
            <div>
                Rendered {this.state.count} Data:{this.state.someDate}
                <button onClick={this.increment}>+1</button>

            </div>
        )
    }
}