// Importing necessary dependencies and modules
const { AuthenticationError } = require('apollo-server-express');
const { Company, User, SavedCompanies } = require('../models');
const { signToken } = require('../utils/auth');

// Defining resolvers for GraphQL queries and mutations
const resolvers = {
  Query: {
    // Returns the current user's information if they're logged in
    user: async (parent, args, context) => {
      if (context.user) {
        // Find user by their ID and populate their saved companies with company details
        const user = await User.findById(context.user._id).populate({
          path: 'SavedCompanies.companies',
          populate: 'company'
        });
        return user;
      }

      // Throw an authentication error if user is not logged in
      // throw new AuthenticationError('Not logged in');
    },
    // Returns a specific saved company from a user's list of saved companies
    savedCompanies: async (parent, { _id }, context) => {
      if (context.company) {
        // Find user by their ID and populate their saved companies with company details
        const user = await User.findById(context.user._id).populate({
          path: 'savedCompanies.companies',
          populate: 'company'
        });
        return user.savedCompanies.id(_id);
      }
    },
     // Returns all companies
     company: async () => {
      return await Company.find();
    },
  },
  Mutation: {
    // Creates a new user
    createUser: async (parent, args) => {
      // Create new user
      const user = await User.create(args);
      // Sign token for the user
      const token = signToken(user);

      return { token, user };
    },
    // Processes user login request
    login: async (parent, { email, password }) => {
      // Find user by their email
      const user = await User.findOne({ email });

      // Throw an authentication error if user doesn't exist
      if (!user) {
        throw new AuthenticationError('No profile with this email found!');
      }

      // Check if password is correct
      const correctPw = await User.isCorrectPassword(password);
  
      // Throw an authentication error if password is incorrect
      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      // Sign token for the user
      const token = signToken(user);
      return { token, user };
    },
    // Adds a company to a user's list of saved companies
    saveCompany: async (parent, { company }, context ) => {
      // Find user by their ID and update their saved companies with new company
      console.log(context)
      if (context.user) {
        const savedCompanies = new SavedCompanies({ company });

        await User.findByIdAndUpdate(context.user._id, { $push: { companies:savedCompanies  } });

        return savedCompanies;
      }

      // throw new AuthenticationError('Not logged in');
    },

  
    // Removes a company from a user's list of saved companies
    removeCompany: async (parent, { _id, cik }) => {
      // Find user by their ID and update their saved companies by removing the specified company
      const user = await User.findOneAndUpdate(
        { _id },
        { $pull: {cik: cik} },
        { new: true }
      );
      return user;
    },
    updateUser: {
      resolve: async (parent, { username, email, password, savedCompanies }, context) => {
        if (context.user) {
          // Find user by their ID and update their information
          const user = await User.findByIdAndUpdate(
            context.user._id,
            { username, email, password },
            { new: true }
          );
    
          // Update user's saved companies, if provided
          if (savedCompanies && savedCompanies.length) {
            // Map saved company IDs to array of SavedCompanies objects
            const savedCompaniesArray = savedCompanies.map(companyId => {
              return new SavedCompanies({ company: companyId });
            });
    
            // Replace user's existing saved companies with new array of SavedCompanies
            user.savedCompanies = savedCompaniesArray;
    
            // Save updated user to database
            await user.save();
          }
    
          // Sign token for the updated user
          const token = signToken(user);
          return { token, user };
        }
    
        // throw new AuthenticationError('Not logged in');
      }
    }
  }
}
// Export the resolvers
module.exports = resolvers;
