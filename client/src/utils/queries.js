import { gql } from '@apollo/client';

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_ITEMS = gql`
  query getItems($category: ID) {
    items(category: $category) {
      _id
      name
      description
      image
      owner {
        _id
        name
        email
      }      
      category {
        _id
        name
      }
    }
  }
`;

export const QUERY_ALL_ITEMS = gql`
  {
    items {
      _id
      name
      description
      image
      owner {
        _id
        name
        email
      }      
      category {
        _id
        name
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      name
      email    
    }
  }
`;

export const QUERY_MESSAGES = gql`
  {
    messages {
      _id
      sender {
        name
        _id
      }
      receiver {
        name
        _id
      }
      itemRequest {
        _id
        name
        image
        description
        category {
          name
        }      
      }
      itemOffer {
        _id
        name
        image
        description
        category {
          name
        }
      }
      isClosed
      isAgree
    }
  }
`;


export const QUERY_SENDER_MESSAGE = gql`
  query getSenders($sender: ID) {
    messageSender(sender: $sender) {
      _id
      itemRequest {
        _id
        name
        description
        image
      }
      itemOffer {
        _id
        name
        description
        image
      }
      sender {
        name
        email
      }
      receiver {
        _id
        name
        email
      }
      isAgree
      isClosed
      replyMessage          
    }
  }
`;

export const QUERY_RECEIVER_MESSAGE = gql`
  query MessageReceiver($receiver: ID) {
    messageReceiver(receiver: $receiver) {
      _id
      sender {
        _id
        name
      }
      receiver {
        _id
        name
      }
      itemRequest {
        _id
        name
        image
      }
      itemOffer {
        _id
        name
        image
        description
      }
      isClosed
      isAgree
    }
  }
`;







