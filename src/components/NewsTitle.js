import React, { Component } from 'react'


export class NewsTitle extends Component {


    render() {
        let{title,discription,url,newsurl,author,date,source}=this.props
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={!url?"https://i.ndtvimg.com/i/2017-07/hot-air-balloon-650_650x400_81499257578.jpg":url} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5><h5>Example heading <span class="badge rounded-pill bg-success">{source}</span></h5>
                        <p className="card-text">{discription}...</p>
                        <p className='card-text'><small className='text-muted'>By  {author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsurl} className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsTitle
