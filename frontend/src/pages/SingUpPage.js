import React from "react";
import SingUp from "../components/SingUp";

import authActions from "../redux/actions/authAction"
import { connect } from "react-redux"

class SingInPage extends React.Component {

  componentDidMount() {
    window.scrollTo(0,0)
  }

  
  render() {
    console.log(this.props);
    const handleSubmit = async (values) => {
      const error = await this.props.newUser(values)
      console.log(error)
    }
    
    const responseGoogle = (res) => {
      
      console.log(res)

      let google = {
        firstName: res.profileObj.givenName,
        lastName: res.profileObj.familyName,
        email: res.profileObj.email,
        password: res.profileObj.googleId,
        photoURL: res.profileObj.imageUrl,
        country: "Not found",
        googleUser: true
      };
      
      handleSubmit(google)  
    
    }

    return (
      <>
          <SingUp submit={handleSubmit}  responseGoogle={responseGoogle}/>
      </>
    );
  }
}

const mapDispatchToProps = {
  newUser: authActions.newUser
}

export default connect(null, mapDispatchToProps)(SingInPage);
