import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tr from './li';
import * as actions from '../actions/cart-actions'
import './index.css';
class Wrap extends Component {
    render() {
        console.log(this.props.cart.cart);
        let data = this.props.cart.cart||[];
        return (
            <div className="wrap">
                <button className='add' onClick={e=>{this.addToCart()}}>添加</button>
                <table>
                    <thead>
                        <tr>
                            <th>商品</th>
                            <th>数量</th>
                            <th>已卖</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getList(data)}
                    </tbody>
                </table>
            </div>
        );
    }
    componentDidMount() {
        this.props.addToCart("bread 7003232g", 222, 90)
    }
    addToCart(){
        let {addToCart} = this.props;
        addToCart&&addToCart("bread 7003232g", 222, 90)
    }
    getList(data){
        return data.map((index, key) => {
                return <Tr key={key}>
                    <td>{index.product}</td>
                    <td>{index.quantity}</td>
                    <td>{index.unitCost}</td>
                    <td>{'删除'}</td>
                </Tr>
            })
        
    }

}
const mapStateToProps = (state) => {
    return {
        cart: state.shoppingCart,
    }
};
//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (...params) => dispatch(actions.addToCart(...params)),
        updateCart: (...params) => dispatch(actions.updateCart(...params)),
        deleteFromCart: (...params) => dispatch(actions.deleteFromCart(...params)),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Wrap);
