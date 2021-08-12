import React from "react";
import style from './Education.module.css'

class Education extends React.Component{
    render(){
        return (
                <section>
                    <h2 className={style.title}>Education</h2>
                    <p>Facility name: {this.props.university}</p>
                    <p>Graduaction year: {this.props.lastWorkYear}</p>
                </section>
        );
    };
};

export default Education;