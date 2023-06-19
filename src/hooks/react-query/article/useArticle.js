import { useQuery } from 'react-query'
import MainApi from '../../../api/MainApi'

const getArticleById = async (articleId) => {
    const { data } = await MainApi.get(`/posts/${articleId}`)
    return data
}

export default function useArticle(articleId) {
    return useQuery(['article', articleId], () => getArticleById(articleId))
}
