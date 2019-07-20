import React,{Component} from 'react'
import{Grid,Cell} from 'react-mdl'


class Landingpage extends Component{
    render()
    {
        return(
            <div style={{width:'100%', margin :'auto'}}>
              <Grid className="landing-grid">
                  <Cell col={12}>
                      <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png"
                      alt="avatar"
                      className="avatar-img"
                      />
                   <div className="banner-text">
                       <h1>Full Stack Web Developer</h1>
                       <hr/>
                       <p>HTML/CSS | Bootstrap | Javascript |React | React-Native |NodeJs |Express |MongoDB</p>
                   
                 <div className="social-links">
                     <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                     <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                     </a>
                     <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                     <i class="fa fa-github" aria-hidden="true"></i>
                     </a>
                     <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                     <i class="fa fa-free-code-camp" aria-hidden="true"></i>
                     </a>
                     <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                     <i class="fa fa-youtube" aria-hidden="true"></i>
                     </a>
                    </div>   
                 </div>
                  </Cell>
              </Grid> 
            </div>
        )
    }
}
export default Landingpage