import React, { Component } from 'react';
// // this component is created to understand default props

export class DefaultProps extends Component {
    static defaultProps={
        candidateName:"ekta",
        married:true,
        languages:["react","js","css","bootstrap","html"]
    }
  render() {
      const{candidateName,married,languages}=this.props
      
       const mrgStatus=married?"married":"single"
       const languageList=languages.map(language=><b>{language} , </b>)
       
    return <div>
        {candidateName} is {mrgStatus} and know {languageList}
    </div>;
  }
}

export default DefaultProps;
