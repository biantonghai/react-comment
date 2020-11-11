import { Component } from "react";
import PropTypes from 'prop-types'

export default class CommentAdd extends Component {
  static propTypes = {
    addComment: PropTypes.func.isRequired,
  };
  state = {
    username: "",
    content: "",
  };
  submitHandler = () => {
    const comment = this.state
    this.props.addComment(comment)
    this.setState({
      username:'',
      content:''
    })
  };
  usernameChangeHandler = (event) => {
    const username = event.target.value;
    this.setState({ username });
  };
  contentChangeHandler = (event) => {
    const content = event.target.value;
    this.setState({ content });
  };
  render() {
    const { username, content } = this.state;
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input
              type="text"
              className="form-control"
              placeholder="用户名"
              value={username}
              onChange={this.usernameChangeHandler}
            />
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea
              className="form-control"
              rows="6"
              placeholder="评论内容"
              value={content}
              onChange={this.contentChangeHandler}
            ></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button
                type="button"
                className="btn btn-default pull-right"
                onClick={this.submitHandler}
              >
                提交
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
