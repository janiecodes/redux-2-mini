import React, { Component } from 'react';
import Card from './../shared/Card/Card';
import Loading from './../shared/Loading/Loading';
import {requestArticles} from '../../redux/hackerNewsReducer';
//import the reducer function so this component can access it
import {connect} from 'react-redux'
//this allows us to subscribe to the store

class HackerNews extends Component {

  //You could technically delete all of the information below
  //BC our return uses this.props now instead of this.state
  // constructor(props) {
  //   super(props);
  //   this.state = { articles: [], loading: true }
  // }

  //Lifecylce method that fires as soon as 
  componentDidMount(){
    this.props.requestArticles() //same function we have imported from our reducer
  }

  render() {
    //changed this.state.articles to this.props.articles
    //changed this.state.loading to this.props.loading
    const articles = this.props.articles.map((article => <Card key={article.id} article={article} />))
    return (
      <div className='news-container'>
        <img style={styles.logo} src="./hackerNews.jpeg" alt="" />
        {this.props.loading ? <Loading /> : <div>{articles}</div>}
      </div>
    )
  }
}

//The mapStateToProps is a function that will take in state (from the redux store) and return an object.
//Whatever is returned from this object will get merged to the props object for this component. Return state parameter.
const mapStateToProps = state => state.hackerNews;
//added .hackerNews to state after combining reducers 
export default connect(mapStateToProps, {requestArticles})(HackerNews);
//requestArticles is passed in as a second argument


const styles = {
  logo: {
    width: '250px',
    margin: '50px 0px'
  }
}