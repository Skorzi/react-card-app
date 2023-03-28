export const getCountOfPages = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}