import { Component } from "react";
import CommentAdd from "../comment-add/comment-add";
import CommentList from "../comment-list/comment-list";

export default class App extends Component{

  /* constructor(props){
    super(props)
    this.state = {
      comments:[
        {username:'Tom',content:'React挺好的'},
        {username:'Jack',content:'React太难了'},
        {username:'Ap',content:'React太香了'}
      ]
    }
  } */
  state = {
    comments:[
      {username:'Tom',content:'React挺好的'},
      {username:'Jack',content:'React太难了'},
      {username:'Ap',content:'React太香了'}
    ]
  }
  addComment=(comment)=>{
    const {comments} = this.state
    comments.unshift(comment)
    this.setState({comments})
  }
  render(){
    const {comments} = this.state
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <CommentAdd addComment={this.addComment}/>
          <CommentList comments={comments}/>
        </div>
      </div>
    )
  }
}