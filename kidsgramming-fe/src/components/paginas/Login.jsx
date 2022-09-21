import React from 'react'

import loginimg from '../../../public/login-img.jpeg'
import {Link} from 'react-router-dom'
import NavbarHome from '../navegacion/NavbarHome'

const Login = () => {
    return (
    <div>
      <NavbarHome/>
        <section className="sign-in m-5 ">
            <div className="container">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure>
                            <img id="imglogin"src={loginimg}></img>
                        </figure>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Login</h2>
                        <form method="POST" className="register-form" id="login-form">
                            <div className="form-group">
                                <label htmlFor="name"><i className="fa fa-user-circle-o"></i></label>
                                <input type="text" name="name" id="name" placeholder="Ingrese el nombre de usuario"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="pass"><i className="fa fa-lock"></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Ingrese la contraseña"/>
                            </div>
                            <div className="form-group">
                                <Link to="/registro" className="signup-image-link">¿No tienes una cuenta? Registrate</Link>
                            </div>
                            <div className="pb-4">
                                <input type="submit" name="signin" id="signin" className="form-submit" value="Login"/>
                            </div>
                        </form>
                    
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Login