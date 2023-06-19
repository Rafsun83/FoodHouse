import { useQuery } from 'react-query'
import MainApi from '../../../api/MainApi'

const getArticleList = async () => {
    const { data } = await MainApi.get('/posts')
    return data
}

export default function useArticles() {
    return useQuery('articles', getArticleList)
}
