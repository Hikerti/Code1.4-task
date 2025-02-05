export const getPostCount = (postCount, limit) => {
    const total = Math.ceil(postCount / limit)
    return total
}