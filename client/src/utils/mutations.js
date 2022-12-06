import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {        
        _id
        name
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $name: String!    
    $email: String!
    $password: String!
  ) {
    addUser(
      name: $name      
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_ITEM = gql`
  mutation addItem(
    $name: String, 
    $owner: ID, 
    $category: ID, 
    $image: String, 
    $description: String
    ) {
    addItem(
      name: $names,
      owner: $owner,
      category: $category,
      image: $image,
      description: $description
      ) {
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

export const UPDATE_ITEM = gql`
  mutation updateItem( 
    $_id: ID,
    $name: String,
    $category: ID, 
    $image: String, 
    $description: String
    ) {
      updateItem(
        _id: $_id,
        name: $name,
        category: $category,
        image: $image,
        description: $description
      ){
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

export const REMOVE_ITEM = gql`
  mutation removeItem( $_id: ID ) {
    removeItem( _id: $_id ) 
     {
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

export const CHANGE_ITEM_OWNER = gql`
mutation changeItemOwner( $_id: ID, $owner: ID ) {
  changeItemOwner(_id: $_id, owner: $owner) {
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

export const ADD_MESSAGE = gql`
  mutation addMessage( $sender: ID, $receiver: ID, $itemRequest: ID, $itemOffer: ID) {
    addMessage(sender: $sender, receiver: $receiver, itemRequest: $itemRequest, itemOffer: $itemOffer ) {
      _id
      itemRequest {
        _id
        name
        description
        image
        owner {
          _id
          name
        }
      }
      itemOffer {
        _id
        name
        description
        image
        owner {
          _id
          name
        }
      }
      sender {
        _id
        name
        email        
      }
      receiver {
        _id
        name  
      }
      isAgree
      isClosed
      replyMessage
    }
  }
`;

export const UPDATE_MESSAGE = gql`
mutation updateMessage( $_id: ID, $isAgree: Boolean, $isClosed: Boolean, $replyMessage: String) {
  updateMessage(_id: $_id, isAgree: $isAgree, isClosed: $isClosed, replyMessage: $replyMessage ) {
    _id
      itemRequest {
        _id
        name
        description
        image
        owner {
          _id
          name
        }
      }
      itemOffer {
        _id
        name
        description
        image
        owner {
          _id
          name
        }
      }
      sender {
        _id
        name               
      }
      receiver {
        _id
        name  
      }
      isAgree
      isClosed
      replyMessage
   }
  }
`;

// export const ADD_ORDER = gql`
//   mutation addOrder($products: [ID]!) {
//     addOrder(products: $products) {
//       purchaseDate
//       products {
//         _id
//         name
//         description
//         price
//         quantity
//         category {
//           name
//         }
//       }
//     }
//   }
// `;

// {
//   $firstName: String!
//   $lastName: String!
//   $email: String!
//   $password: String!
// }  = args
//  args.firstName= "john"

