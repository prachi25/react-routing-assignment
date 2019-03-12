import React, { Component } from 'react';
import axios from 'axios';
import './home.css'
class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            console.log(res)
            this.setState({
                posts: res.data.slice(0, 9)
            })
        })
    }
    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="display1" key={post.id} >
                        <div className='post'>
                            <div className='text'>
                                <p className='title1'>{post.title}</p>
                                <p className="body1">{post.body}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        ) : (
                <div>No Post Yet</div>
            )
        return (
            <div>
                {postList}
            </div>
        )
    }
}

export default Home;