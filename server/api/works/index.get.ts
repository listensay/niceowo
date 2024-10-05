export default eventHandler(async (event) => {
  const body = getQuery(event)
  if (!body.first) {
    return {
      code: 5000,
      message: '参数错误'
    }
  }
  if (!body.after) {
    body.after = null
  }

  try {
    const result = await GqlWorks({ first: Number(body.first), after: body.after })
    return result
  } catch (error) {
    console.log(error)
    return {
      code: 5000,
      message: '数据获取失败'
    }
  }
})
