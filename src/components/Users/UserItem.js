import React, { Component } from 'react'

class UserItem extends Component {    

render() {
    // const {  buy_link, author, image_url } = this.props.book;
        return (
            <div>
              {this.props.name}
            </div>
        )
    }
}

export default UserItem;
