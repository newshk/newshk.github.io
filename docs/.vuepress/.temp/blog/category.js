export const categoryMap = {"category":{"/":{"path":"/category/","map":{"經濟":{"path":"/category/%E7%B6%93%E6%BF%9F/","keys":["v-ca9bc284"]},"文化":{"path":"/category/%E6%96%87%E5%8C%96/","keys":["v-f323cf82","v-bb4adcd8","v-be4a340a","v-5dc51ec2","v-0acba414"]},"自然":{"path":"/category/%E8%87%AA%E7%84%B6/","keys":["v-e35c0e96","v-d59ede6e","v-6fd576fd","v-5c7dcd74","v-221c8a1c","v-1640375a","v-c881d530","v-7d5fe9ac"]}}}},"tag":{"/":{"path":"/tag/","map":{}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}