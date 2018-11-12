export default interface Goods {
  // 描述
  desc?: string
  // 分类
  cid?: string
  // 是否上架 0 不上架 1 上架
  display?: number
  // 商品图片
  images?: string
  // 价格
  price?: number
  // 名称
  title?: string
}
