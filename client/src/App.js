import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import {getSales} from './actions/saleList'
import {getCurrentUser} from './actions/users'
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm';
import Logout from './components/Logout';
import SaleList from './components/SaleList'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SaleForm from './components/SaleForm'
import SaleCard from './components/SaleCard'
import EditSale from './components/EditSale'
import EditSaleForm from './components/EditSaleForm'

class App extends React.Component {

  componentDidMount(){
    this.props.getSales()
    this.props.getCurrentUser()
  }

  render(){
    const {sales, userId} = this.props

    return (
      <Switch>
      <>
        <NavBar />
        <Footer />
        <Route exact path="/" />
        <Route exact path="/login" component={LoginForm}/>
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/signup" component={SignupForm} />
        <Route exact path="/sales" component={SaleList} />
        <Route exact path="/newsale" component={SaleForm} />
        <Route exact path="/sales/:id" render={props => {
              const sale = sales.find(sale => sale.id === props.match.params.id)
              if (sale.attributes.user_id === userId){
                return <EditSale sale={sale} {...props}/>
              }else{
                return <SaleCard sale={sale} {...props}/>
              }
            }
          }/>
        <Route exact path="/sales/:id/edit" render={props => {
            if (sales != null){
              const sale = sales.find(sale => sale.id === props.match.params.id)
                if (sale.attributes.user_id === userId){
                  return <EditSaleForm sale={sale} {...props}/>
                }
              }
            }
        }/>
      </>
    </Switch>
    );
  }
}

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.attributes.id : ""
  return {
    sales: state.saleList,
    userId
  }
}

export default withRouter(connect(mapStateToProps, { getSales, getCurrentUser })(App));
