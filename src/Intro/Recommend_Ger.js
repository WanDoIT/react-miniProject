import { Fragment, useState } from "react"
import styled3 from './css/Recommend_Allpicture.module.css';
import Header from "../header/Header";
import Intro from "./Intro";
import Footer from "../footer/Footer";
import Recommend_button from "./Recommend_button";
import Traveler from "./Traveler";

const Recommend_Ger = () => {

    const photo = [
        {id:1, src:'/img_yoo/Germany1.jpg'},
        {id:2, src:'/img_yoo/Germany2.jpg'},
        {id:3, src:'/img_yoo/Germany3.jpg'},
        {id:4, src:'/img_yoo/Germany10.jpg'},
        {id:5, src:'/img_yoo/Germany5.jpg'},
        {id:6, src:'/img_yoo/Germany6.jpg'},
        {id:7, src:'/img_yoo/Germany7.jpg'},
        {id:8, src:'/img_yoo/Germany8.jpg'},
        {id:9, src:'/img_yoo/Germany9.jpg'},
       
    ]

    const [picture, setPicture] = useState(photo);

    const newPicture = picture.map(item =>
                <li className={styled3.pictureList} key={item.id}>
                    <img style={{height:'180px', width: '280px'}} src={item.src}/>
                </li>
                )

    return (
        <Fragment>
            <Header/>
            <Intro/>
            <Recommend_button/>
            <div style={{ marginTop: '45px', display: 'flex', justifyContent: 'center' }}>

                <ul className={styled3.pictureBox}>
                    {newPicture}
                </ul>

            </div>

        <Traveler/>
        <Footer/>
        </Fragment>
    )
}

export default Recommend_Ger;