import React,{Component} from 'react'
import {Grid,Cell,ListItem,ListItemContent,List} from 'react-mdl'


class Contact extends Component{
    render()
    {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                   <Cell col={6}>
                       <h1 style={{fontFamily:'Action sans-serif'}}>Paul Hanna</h1>
                       <img
                       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe5ULxSMha8F4gVrq1qiK68UkHt-x_20E8wlxkQTlDbPyTTrfNww"
                       alt="avatar"
                       style={{height:'200px;'}}
                       />
                       <p style={{width:'70%', margin:'auto',paddingTop:'1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                           when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                           It has survived not only five centuries,</p>
                   </Cell>
                   <Cell col={6}>
                      <h1 style={{fontFamily:'Action sans-serif'}}> Contact Us</h1>   
                   <hr/>
                   <div className="contact-list">
                   <List>
                    <ListItem>
                  <ListItemContent style={{fontSize:'25px',fontFamily:'Arial',paddingRight:'5rem'}} >
                      <i className="fa fa-phone-square" aria-hidden="true"/>
                      (123) 456-7890
                      </ListItemContent>
                      </ListItem>
                      <ListItem>
                  <ListItemContent style={{fontSize:'25px',fontFamily:'Arial',paddingRight:'5rem'}} >
                      <i className="fa fa-fax" aria-hidden="true"/>
                      (123) 456-7890
                      </ListItemContent>
                      </ListItem>
                      <ListItem>
                  <ListItemContent style={{fontSize:'25px',fontFamily:'Arial',paddingRight:'5rem'}} >
                      <i className="fa fa-envelope" aria-hidden="true"/>
                      Sidp763@gmail.com
                      </ListItemContent>
                      </ListItem>
                      <ListItem>
                  <ListItemContent style={{fontSize:'25px',fontFamily:'Arial',paddingRight:'5rem'}} >
                      <i className="fa fa-skype" aria-hidden="true"/>
                      MY Skype ID
                      </ListItemContent>
                      </ListItem>
                   </List>
                   </div>
                  
                   </Cell>
                </Grid>
              
            </div>
        )
    }
}
export default Contact