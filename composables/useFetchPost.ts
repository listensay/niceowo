const useFetchPost = () => {
  return {
    async getPostDetail (uri: string) {
      const result = await useRequestPost('/api/post' ,{ uri: uri })
      return result
    }
  }
}

export default useFetchPost
