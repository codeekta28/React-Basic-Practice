import React, { Component } from "react";
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";
// this file is created to learn more about subcomponents here userInfo is a subcomponent which have Avatar as a sub component 

export class Comment extends Component {
  render() {
    const { author, text, date } = this.props;
    return (
      <div className="comment">
        {/* <div className="userInfo">
          {/* <div className="userAvatar">
            <img src={author.avatarUrl} alt={author.name} />
          </div> */}
          {/* to Simplefy above written code we make a sub component avatar */}
          {/* <Avatar user={author}/>
          <div className="userName">
            <h4>Hello,{author.name}</h4>
          </div> */}
        {/* </div> */} 
        {/* now we will simplyfy whole userInfo section */}
        <UserInfo user={author}/>
        <div className="comment-text">
          <p>{text}</p>
        </div>
        <div className="comment-date">
          <p>{date}</p>
        </div>
      </div>
    );
  }
}

export default Comment;
