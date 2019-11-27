import React from 'react'
import './Article.scss'


class Card extends React.Component {
    render(){
        return(
            <article className="article">
                <img className="article__img-container" src="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/pyftvif8itjpptgk221k.jpg" alt="Article Cover"></img>
                <h1>How to Decorate for the Holidays When You Don't Want To</h1>
                <p>It’s not enough that we have to do all the holiday shopping, go to all the school concerts and pick up Starbucks gift cards for all the overworked teachers in our lives—we have to turn the house into a red and green winter wonderland, too?</p>
                <span>Lifehacker.com</span>
                <span>2019-11-25</span>
            </article>
        )
    }
}

export default Card