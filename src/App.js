import React, { Component } from 'react';

// import './Assets/homepage.css';
//compenents
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';

import Program_template_home from './components/pages/program_template/program_template_home';
import Program_template_form from './components/pages/program_template/program_template_create';
import Program_template_form_delete from './components/pages/program_template/program_template_delete';

import Teacher_template_home from './components/pages/teacher_template/teacher_template_home';
import Teacher_template_form from './components/pages/teacher_template/teacher_template_create';
import Teacher_template_form_delete from './components/pages/teacher_template/teacher_template_delete';

import Class_template_home from './components/pages/class_template/class_template_home';
import Class_template_form from './components/pages/class_template/class_template_create';
import Class_template_form_delete from './components/pages/class_template/class_template_delete';

import Live_class_template_home from './components/pages/live_class_template/live_class_template_home';
import Live_class_template_form from './components/pages/live_class_template/live_class_template_create';
import Live_class_template_form_delete from './components/pages/live_class_template/live_class_template_delete';

import Live_program_template_home from './components/pages/live_program_template/live_program_template_home';
import Live_program_template_form from './components/pages/live_program_template/live_program_template_create';
import Live_program_template_form_delete from './components/pages/live_program_template/live_program_template_delete';


class App extends Component {
  render() {
    return (


      <div className="App">

        <Live_class_template_form />

      </div>


    );
  }
}

export default App;
