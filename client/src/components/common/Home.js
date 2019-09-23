import React from 'react'
import { Link } from 'react-router-dom'
import background from '../../background.jpg'

const Home = () => {

    return (

      <div className="background">
        <img className="background-image" src={background} alt="main logo" />

        <p>
        Welcome to the BlueLight Special App! This application is intended to help neighborhoods
        organize community garagesale events. Communities could also choose to use the application
        as a place to share information about anything from art fairs and craft shows to
        restaurant weeks and other similar events.
        </p>

        <p>
        The list of sales is available to anyone who visits the site. An interactive map is
        available to account holders. An account is also required if you would like to add
        information about an upcoming sale.
        </p>

        <p>
        Creating an account is free and easy. Our site is completely secure,
        and we promise not share your information with anyone. <Link to={'/signup'}>Create your account today!</Link>
        </p>

        <p>
        Please contact admin [at] bluelight-special.com with any questions or comments.
        </p>

      </div>

    );
}

export default Home
