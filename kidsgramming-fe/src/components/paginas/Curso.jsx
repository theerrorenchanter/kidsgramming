import React from 'react'

import { Link } from 'react-router-dom'
import NavbarHome from '../navegacion/NavbarHome'

const Curso = () => {
  return (
    <div>
      <NavbarHome/>
       <section className="signup m-5">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Agregar curso</h2>
                        <form method="POST" className="register-form" id="createCourse-form">
                            <div className="form-group">
                                <label htmlFor="nameCourse"><i className="fa fa-user"></i></label>
                                <input type="text" name="nameCourse" id="nameCourse" placeholder="Ingrese el nombre del curso"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description"><i className="fa fa-user"></i></label>
                                <input type="text" name="description" id="description" placeholder="Agregue descripción"/>
                            </div>
                            <div className="form-group">
                            <label htmlFor="description"><i className="fa fa-user"></i></label>
                                <input type="text" name="videoLink" id="videoLink" placeholder="Ingrese el link del video"/>
                            </div>
                            <div className="pb-4">
                                <input type="submit" name="add" id="add" className="form-submit" value="Agregar"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Curso