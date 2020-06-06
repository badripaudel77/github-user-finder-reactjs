import React, { Component } from 'react'
import UserItem from './UserItem'

 class Users extends Component {
     state = {
         books : [ 
                    { 
                        title : "Unlimited Power",
                        buy_link : "https://www.amazon.com/s?k=9781416586371&i=stripbooks&linkCode=qs",
                        author : "Anthony Robins", 
                        image_url :  "https://m.media-amazon.com/images/I/51tP+MNLRQL._AC_UY218_.jpg"
                    },
                    {
                        title : "चिना हराएको मान्छे [China Harayeko Manchhe]",
                        buy_link : "https://www.amazon.com/gp/product/9937866642/ref=x_gr_w_bb_sout?ie=UTF8&tag=x_gr_w_bb_sout-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=9937866642&SubscriptionId=1MGPYB6YW3HWK55XCGG2", 
                        author : " Haribansha Acharya",
                        image_url : "https://images-na.ssl-images-amazon.com/images/I/41Dj6R3FrNL._SX326_BO1,204,203,200_.jpg"
                    }
            ]
     };

    render() {
        return (
            <div>
                { 
                        this.state.books.map( book => {
                        //  <UserItem title = {book.title} image_url = {book.image_url} 
                        //       buy_link= { book.buy_link} author={book.author} />
                        // <UserItem book = {book} />
                        <UserItem name="Badri Paudel" />
                        console.log(book) //its fine here.
                    })
                }
            </div>
        )
    }
}

export default Users
