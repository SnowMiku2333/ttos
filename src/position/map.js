async function mapInit() {
  let Amap = await AMapLoader.load({
    key: "bbb043fb3bb2ae038c634e6028b11965", //申请好的Web端开发者 Key，调用 load 时必填
    version: "2.0", //指定要加载的 JS API 的版本，缺省时默认为 1.4.15
  })
  const map = new AMap.Map("container", {
    zoom: 16,
    center: [114.333786, 30.510638]
  });
  return {Amap,map}
}
export default mapInit