const useFetchPost = () => {
  return {
    async getPostDetail (uri: string) {
      const result = await useRequestPost('/api/post' ,{ uri: uri })
      return result
    },
    async getPostList (first: number, after: string) {
      const result = await useRequestGet('/api/post' ,{ first, after  })
      return result
    }
  }
}

export default useFetchPost
