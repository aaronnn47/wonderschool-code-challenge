import React, {Component} from 'react'
import './TaskGroup2.css'
import Completed from '../../Images/Completed.svg'
import Incomplete from '../../Images/Incomplete.svg'
import locked from '../../Images/Locked.svg'
import {Link} from 'react-router-dom'
import {updateGroup2} from '../../Redux/reducer'
import {connect} from 'react-redux'

class Task2 extends Component{
    constructor(){
        super()

        this.state={
            taskdata : [
                {
                    id: 6,
                    group: "Build Airplane",
                    task: "Hammer nails into wood",
                    dependencyIds: [2, 3, 4],
                    completedAt: null,
                  },
                  {
                    id: 7,
                    group: "Build Airplane",
                    task: "Paint wings",
                    dependencyIds: [5, 6],
                    completedAt: null,
                  },
                  {
                    id: 8,
                    group: "Build Airplane",
                    task: "Have a snack",
                    dependencyIds: [],
                    completedAt: null,
                  }
            ],

            completed: false,
        }
    }

    render(){

        let tasks = this.state.taskdata.map(ele =>{
            return(
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
                onClick={()=>this.props.updateGroup2()}
                />
                Complete
                </div>
                </div>
            )
        })
        return(
            <div className='task-main'>

            <div className='header'>
            <h1>Task Group 2</h1>
            </div>

            {tasks}
            
            <Link to='/'>Back To Home</Link>
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        count: state.group2TaskCount
    }
}

export default connect(mapStateToProps,{updateGroup2})(Task2)