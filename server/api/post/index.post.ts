export default eventHandler(async (event) => {
  const { uri } = await readBody(event)

  try {
    const result = await GqlPostQuery({ uri })
    return result
  } catch (error) {
    console.log(error)
    return {
      code: 5000,
      message: '数据获取失败'
    }
  }
})