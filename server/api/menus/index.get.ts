export default eventHandler(async (event) => {
  try {
    const result = await GqlMenus()
    return result
  } catch (error) {
    return {
      code: 5000,
      message: '数据获取失败'
    }
  }
})