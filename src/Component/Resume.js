import React,{Component} from 'react'
import {Grid,Cell} from 'react-mdl'
import Education from './Education'
import Experiences from './Experience'


class Resume extends Component{
    render()
    {
        return(
            <div>
                <Grid >
                <Cell col={4}>
                       <div style={{textAlign:'center'}}>
                       <img
                       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe5ULxSMha8F4gVrq1qiK68UkHt-x_20E8wlxkQTlDbPyTTrfNww"
                       alt="avatar"
                       style={{height:'200px;'}}
                       />
                           </div>
                           <h2 style={{paddingTop:'2em'}}>Paul Hanna</h2>
                           <h4 style={{color:'grey'}}>Programer</h4>
                           <p style={{width:'70%', margin:'auto',paddingTop:'1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                           when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                           It has survived not only five centuries,</p>
                           <hr style={{borderTop:'3px solid #833fb2' ,with:'50%'}}/>
                           <h5>Address</h5>
                           <p>1 Hacker Way Melo Park, 9542</p>
                           <h5>Phone</h5>
                           <p>(123) 456-7890</p>
                           <h5>Email</h5>
                           <p>sidp763@gmail.com</p>
                           
                   </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                        startYear={2012}
                        endYear={2014}
                        schoolName="Lovely Professional University"
                        schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                           It has survived not only five centuries,"
                        />
                        <hr  style={{borderTop:'3px solid #e22947'}}/>
                        <h2>Experiences</h2>
                        <Experiences
                         startYear={2015}
                         endYear={2016}
                         jobName="Computer Science"
                         jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                           It has survived not only five centuries,"
                        />
                        <hr  style={{borderTop:'3px solid #e22947'}}/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume