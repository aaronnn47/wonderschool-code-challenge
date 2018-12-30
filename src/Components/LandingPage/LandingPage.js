import React, {Component} from 'react'
import './LandingPage.css'
import Group from '../../Images/Group.svg'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
class LandingPage extends Component{
    render(){
        return(
            <div className='main'>
            
            <div className='container'>
            <h1 className='title'>Things To Do</h1>

            <div className='task-group-1'>
            <div className='task-div'>
            <img src={Group} alt='group'/>
            <Link to='/tasks'>Task Group 1</Link>
            </div>
            {this.props.count1} tasks completed out of 5
            </div>
            
            <div className='task-group-2'>
            <div className='task-div'> 
            <img src={Group} alt='group'/>
            <Link to='tasks2'>Task Group 2</Link>
            </div>
            {this.props.count2} tasks completed out of 3
            </div>

            </div>

            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        count1 : state.group1TaskCount,
        count2 : state.group2TaskCount
    }
}

export default connect(mapStateToProps)(LandingPage)