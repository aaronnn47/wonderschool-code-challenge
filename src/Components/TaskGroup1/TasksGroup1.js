import React, {Component} from 'react'
import './TasksGroup1.css'
import Completed from '../../Images/Completed.svg'
import Incomplete from '../../Images/Incomplete.svg'
import locked from '../../Images/Locked.svg'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {updateGroup1} from '../../Redux/reducer'


class Tasks extends Component{
    constructor(){
        super()

        this.state = {
            taskdata: [
            { 
              id: 1,
              group: "Purchases",
              task: "Go to the bank",
              dependencyIds: [],
              completedAt: null,
            },
            {
              id: 2,
              group: "Purchases",
              task: "Buy hammer",
              dependencyIds: [1],
              completedAt: null,
            },
            {
              id: 3,
              group: "Purchases",
              task: "Buy wood",
              dependencyIds: [1],
              completedAt: null,
            },
            {
              id: 4,
              group: "Purchases",
              task: "Buy nails",
              dependencyIds: [1],
              completedAt: null,
            },
            {
              id: 5,
              group: "Purchases",
              task: "Buy paint",
              dependencyIds: [1],
              completedAt: null,
            }
          ]
        }
    }
    render(){
        let tasks = this.state.taskdata.map(ele =>{
            return (
                <div className='group-container'>

                <h5>{ele.task}</h5>

                <div className='locked'>
                <img src={locked} alt='locked'/>
                Locked
                </div>

                <div className='incomplete'>
                <img src={Incomplete} alt='incomplete'/>
                Incomplete
                </div>

                <div className='complete'>
                <img src={Incomplete} alt='completed'
                onClick={() => this.props.updateGroup1()}
                />
                Complete
                </div>

                </div>
            )
        })

        return(
            <div className='task-main'>
            <div className='header'>
            <h1> Tasks Group 1</h1>
            </div>

            {tasks}

            <Link to = '/' >Back to home</Link> 
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        count: state.group1TaskCount
    }
}

export default connect(mapStateToProps,{updateGroup1})(Tasks)
