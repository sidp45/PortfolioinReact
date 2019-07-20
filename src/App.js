import React ,{Component} from 'react'
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl'
import Main from './Component/main'
import {Link} from 'react-router-dom'

class App extends Component{
  render(){
    return(
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Portfolio website" scroll>
            <Navigation>
                <Link to="/Resume">Resume</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Projects">Projects</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/Resume">Resume</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Projects">Projects</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    )
  }
}

export default App;


