// import React, { useState, useReducer } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useMutation, useQuery } from '@apollo/client';
import Data from '../../Components/Data'
import Articles from '../../Components/Articles'
import './style.css'
// import { QUERY_TECH } from '../utils/queries';
// import { CREATE_MATCHUP } from '../utils/mutations';

export default function Dashboard() {


    return (
        <> 
            <Data/>,
            <Articles/>
        </>

    )
}