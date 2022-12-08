const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Item {
    _id: ID
    name: String
    description: String
    image: String   
    owner: User 
    category: Category
    swapDate: String
  }

  type Message {
    _id: ID
    itemRequest: Item
    itemOffer: Item
    sender: User
    receiver: User
    isAgree: Boolean 
    isClosed: Boolean
    replyMessage: String 
  }

  type User {
    _id: ID
    name: String    
    email: String    
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    categories: [Category]
    items(category: ID, name: String): [Item]
    item(_id: ID!): Item

    messages: [Message]
    messageSender(sender: ID): [Message]
    messageReceiver(receiver: ID): [Message]
    me: User    
   
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addMessage(sender: ID, receiver: ID, itemRequest: ID, itemOffer: ID ): Message
    updateMessage(_id: ID, isAgree: Boolean, isClosed: Boolean, replyMessage: String): Message

    addItem(name: String, owner: ID, category: ID, image: String, description: String ): Item
    updateItem(_id: ID, name: String, category: ID, image: String, description: String): Item
    removeItem(_id: ID): Item
    changeItemOwner(_id: ID, owner: ID ): Item   
  
  }


`;

module.exports = typeDefs;
