const { AuthenticationError } = require('apollo-server-express');
const { User, Item, Category, Message } = require('../models');
const { signToken } = require('../utils/auth');
//const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },

    items: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }
      if (name) {
        params.name = {
          $regex: name
        };
      }
      const items = await Item.find(params).populate('category').populate('owner');
      return items;
    },

    item: async (parent, { _id }) => {
      return await Item.findById(_id).populate('category').populate('owner');

    },

    messageSender: async (parent, { _id }) => {
      return await Message.find({sender: _id}).populate('itemRequest').populate('itemOffer').populate('receiver');

    },

    messageReceiver: async (parent, { _id }) => {
      return await Message.find({receiver: _id}).populate('itemRequest').populate('itemOffer').populate('sender');

    },

    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);    

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
     
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      // log in the user and assign him a token
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      // check user.password record against 'password' from login
       const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      // create token when user sign in success
      const token = signToken(user);

      return { token, user };
    },
    
    addItem: async (parent, args) => {
               
        const newItem = await Item.create(args); 
        return newItem;      
    },

    removeItem: async (parent, args) => {
                
      const cutItem = await Item.findByIdAndDelete(args._id); 
      return cutItem;      
    },

    updateItem: async (parent, args) => {              
      
      const editItem = await Item.findByIdAndUpdate({_id: args._id},
        { name: args.name,           
          category: args.category,
          image: args.image, 
          description: args.description
        }); 
      return editItem;      
    },

    changeItemOwner: async (parent, args) => {              
      
      const changeOwner = await Item.findByIdAndUpdate({_id: args._id},
        { owner: args.owner}); 

      return changeOwner;      
    },

    addMessage: async (parent, args) => {
          
      const message = await Message.create(args); 
      return message;      
    },

    updateMessage: async (parent, args) => {
            
      const editMessage = await Message.findByIdAndUpdate({_id: args._id},
        { isAgree: args.isAgree,
          isClosed: args.isClosed,
          replyMessage: args.replyMessage
        }); 

      return editMessage;      
    },    
    // addOrder: async (parent, { products }, context) => {
    //   console.log(context);
    //   if (context.user) {
    //     // create new Order obj contains an arry of products
    //     const order = new Order({ products });

    //     await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

    //     return order;
    //   }

    //   throw new AuthenticationError('Not logged in');
    // },  
  }
};

module.exports = resolvers;
