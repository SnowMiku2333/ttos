function mapInit(){
  window._AMapSecurityConfig = {
    securityJsCode: 'eef2407d44010877df0e892ce8ccee36',
  }
  window.onLoad = function () {
    var map = new AMap.Map('container');
  }
  var url = 'https://webapi.amap.com/maps?v=1.4.15&key=bbb043fb3bb2ae038c634e6028b11965&callback=onLoad';
  var jsapi = document.createElement('script');
  jsapi.charset = 'utf-8';
  jsapi.src = url;
  document.head.appendChild(jsapi);
}
export default mapInit