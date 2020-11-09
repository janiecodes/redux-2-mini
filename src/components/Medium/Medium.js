import React, { Component } from 'react';
import Card from './../shared/Card/Card';
import Loading from './../shared/Loading/Loading';
import {requestArticles} from '../../redux/mediumReducer';
//import the reducer function so this component can access it
import {connect} from 'react-redux'
import mediumReducer from '../../redux/mediumReducer';
//this allows us to subscribe to the store

class Medium extends Component {

  //You can get rid of constructors after we change the return in the render to this.props from this.state
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
        <img src="./mediumLogo.png" style={styles.logo} alt="" />
        {this.props.loading ? <Loading /> : <div>{articles}</div>}
      </div>
    )
  }
}

//The mapStateToProps is a function that will take in state (from the redux store) and return an object.
//Whatever is returned from this object will get merged to the props object for this component. Return state parameter.
const mapStateToProps = state => state.medium;
//added .medium to state after combining reducers 
//const mapDispatchToProps = {requestArticles} -- to do it
//export default connect (mapStateToProps, mapDispatchToProps)(Medium);
export default connect(mapStateToProps, {requestArticles})(Medium);
//requestArticles is passed in as a second argument

const styles = {
  logo: { width: '250px' }
}