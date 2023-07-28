import React, { Component } from 'react'
import NewsTitle from './NewsTitle'


export default class News extends Component {
    
        
    constructor(){
        super()
           
        this.state={
            articles : [],
            
            page:1
        }
        // document.title = `${this.props.category}`
        
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=88d4f2cd7a79452ba44888f793160154&page=1&pageSize=${this.props.pageSize}`

        let data =await fetch(url)
        let parseData =await data.json()
        
        this.setState({articles:parseData.articles})
    }





    HandlePrevclick=async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=88d4f2cd7a79452ba44888f793160154&page=${this.state.page-1}&pageSize=${this.props.pageSize}`

        let data =await fetch(url)
        let parseData =await data.json()
        
        
        this.setState({
            page:this.state.page-1,
            articles:parseData.articles
        })}





    HandleNextClick=async()=>{
       
        
        
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=88d4f2cd7a79452ba44888f793160154&page=${this.state.page+1}&pageSize=${this.props.pageSize}`

        let data =await fetch(url)
        let parseData =await data.json()
       
        
        this.setState({
            page:this.state.page+1,
            articles:parseData.articles
        })
    }


    render() {
        return (
            <div className='container my-3'>
                <div className="container text-center">
                <h1 style={{marginTop:"100px"}}><u>TK-Top Headlines</u> :{this.props.category}</h1>
                </div>
                <hr/>
                
                
                <div className="container my-5 ">
                    
                    <div className="row  ">
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-4 my-3" key={element.url}>
                        <NewsTitle title={element.title?element.title:""} discription={element.description?element.description:""} url={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                        </div>
                    })}
                        
                        
                        
                    </div>
                    
                </div>
                
                <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page<=1} type="button" className="btn btn-primary " onClick={this.HandlePrevclick}> &larr; Previus</button>
                        <button  type="button" className="btn btn-primary" onClick={this.HandleNextClick}> Next &rarr;</button>
                    </div>
            </div>
            
        )
    }
}
