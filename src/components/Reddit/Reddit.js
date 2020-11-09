import React, { Component } from 'react';
import Card from './../shared/Card/Card';
import Loading from './../shared/Loading/Loading';

import {requestArticles} from '../../redux/redditReducer';
//import the reducer function so this component can access it
import {connect} from 'react-redux'

class Reddit extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { articles: [], loading: true }
  // }


  //Lifecylce method that fires as soon as 
  componentDidMount(){
    this.props.requestArticles() //same function we have imported from our reducer
  }

  render() {
    const articles = this.props.articles.map((article => <Card key={article.id} article={article} />))
    return (
      <div className='news-container'>
        <img src="./redditLogo.png" alt="" style={styles.logo} />
        {this.props.loading ? <Loading /> : <div>{articles}</div>}
      </div>
    )
  }
}

//The mapStateToProps is a function that will take in state (from the redux store) and return an object.
//Whatever is returned from this object will get merged to the props object for this component. Return state parameter.
const mapStateToProps = state => state.reddit;
//added .medium to state after combining reducers 
//const mapDispatchToProps = {requestArticles} -- to do it
//export default connect (mapStateToProps, mapDispatchToProps)(Medium);
export default connect(mapStateToProps, {requestArticles})(Reddit);
//requestArticles is passed in as a second argument


const styles = {
  logo: {
    width: '250px',
    margin: '50px 0px'
  }
}