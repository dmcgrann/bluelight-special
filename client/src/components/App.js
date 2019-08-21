import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import {getSales} from '../actions/saleList'
import {getCurrentUser} from '../actions/users'
import SignupForm from '../components/users/SignupForm'
import LoginForm from '../components/users/LoginForm';
import Logout from '../components/users/Logout';
import SaleList from '../components/sales/SaleList'
import NavBar from '../components/common/NavBar'
import Footer from '../components/common/Footer'
import Home from '../components/common/Home'
import SaleCard from '../components/sales/SaleCard'
import EditSaleCard from '../components/sales/EditSaleCard'
import EditSaleFormContainer from '../components/sales/EditSaleFormContainer'
import NewSaleFormContainer from '../components/sales/NewSaleFormContainer'
import MapContainer from '../components/maps/MapContainer'

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
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={LoginForm}/>
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/signup" component={SignupForm} />
        <Route exact path="/sales" component={SaleList}/>
        <Route exact path="/map" component={MapContainer}/>
        <Route exact path="/sales/new" component={NewSaleFormContainer} />
        <Route exact path="/sales/:id" render={props => {
              const sale = sales.find(sale => sale.id === props.match.params.id)
              if (sale === undefined){
                return null
                }
              if (sale.attributes.user_id === userId){
                return <EditSaleCard sale={sale} {...props}/>
              }else{
                return <SaleCard sale={sale} {...props}/>
              }
            }
          }/>
        <Route exact path="/sales/:id/edit" render={props => {
            if (sales != null){
              const sale = sales.find(sale => sale.id === props.match.params.id)
                if (sale === undefined){
                  return <SaleList/>
                }else if (sale.attributes.user_id === userId){
                  return <EditSaleFormContainer sale={sale} {...props}/>
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
