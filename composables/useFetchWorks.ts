const useFetchWorks = () => {
  return {
    async getWorksList (first: number, after: string) {
      const result = await useRequestGet('/api/works' ,{ first, after  })
      return result
    },
    async getWorksByUri (uri: string) {
      const result = await useRequestPost('/api/works/', { uri })
      return result
    }
  }
}

export default useFetchWorks
