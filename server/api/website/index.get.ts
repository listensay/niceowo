export default eventHandler(async (event) => {
  try {
    const result = await GqlWebsite()
    return result
  } catch (error) {
    console.log(error)
    return {
      code: 5000,
      message: '数据获取失败'
    }
  }
})