// Provider to the consumer
import {createContext} from 'react';

const NewsContext = createContext({
    newsList:[],
    selectedList:{}
})

export default NewsContext;