import React, { Component } from 'react'
import './addInfo.css'
class AddInfo extends Component {
    state = {
        name: null,
        birth: null,
        about: null,
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addInfo(this.state)
        this.setState({
            name: '',
            birth: '',
            about: ''
        })
    }
    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        return (
            <div className='container'>
                <div className='layout'>
                    <form onSubmit={this.handleSubmit} >
                        <div className='layout1'>
                            <input type="text" id='name' placeholder='Name' value={this.state.name} onChange={this.handleChange} />
                        </div>
                        <div className='layout1'>
                            <input type="text" id='birth' placeholder='Birthday' value={this.state.birth} onChange={this.handleChange} />
                        </div>
                        <div className='layout1'>
                            <textarea type="text" id='about' placeholder='say something' value={this.state.about} className='form-control' rows='4' onChange={this.handleChange} />
                        </div>
                        <button className='btn btn-primary' data-toggle='tooltip' data-placement='right' title='Click Here To Submit'>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default AddInfo;