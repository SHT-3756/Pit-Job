import { Component} from 'react';

class Button extends Component {
    constructor(props) {
        super(props)
        if(typeof this.props.onPreviousPage !== 'function' || 
        typeof this.props.onNextPage !== 'function'){
            throw new Error('onPreviousPage , onNextPage 가 props로 전달되지 않았습니다.')
        }
    }
    render() {
        if(){

        }
        return <button></button>
    }
}

export default Button