import React, { Component } from "react";
import Comment from "./Comment";

export class SendingComment extends Component {
  render() {
    const todayDate = new Date().toLocaleDateString("en-Us");
    
    return (
      <div className="SendingComment">
        <Comment
          author={{
            avatarUrl:
              "https://scontent.fblr22-1.fna.fbcdn.net/v/t1.6435-9/95845977_2955670657845702_4785680447872958464_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=eER2n0c-DIYAX-M1Jwd&_nc_ht=scontent.fblr22-1.fna&oh=00_AT90NEZmMIHQ3XBPOqJa6SoR48RWISId25wGVMlvRRncFg&oe=621DF00E",
            name: "ekta",
          }}
          text="hope you are enjoying react"
          date={todayDate}
        />
      </div>
    );
  }
}

export default SendingComment;
