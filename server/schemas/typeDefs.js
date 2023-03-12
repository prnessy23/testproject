const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        savedCompanies: [SavedCompanies]
    }
    
    type Company {
        _id: ID
        cik: Int
        name: String
        ticker: String
        exchange: String
        revenue: String
        revenue1: String
        netIncome: String
        cash: String
        cashFlow: String
        cashFlow1: String
        eps: Float
        eps1: Float
        currentAsset: String
        currentLiabilities: String
        taxesPaid: String
        taxesPaid1: String
    }
    type SavedCompanies {
     _id: ID
     companies: [Company]
    }


    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user(_id: ID!): User
        savedCompanies(_id: ID!): SavedCompanies
        company: [Company]
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        
        saveCompany(cik: Int!): SavedCompanies
        removeCompany(userId: ID!, cik: Int!): User
        
        updateUser(username: String, email: String,password: String): User
        deleteUser(_id: String!) : User
    }
`

module.exports = typeDefs