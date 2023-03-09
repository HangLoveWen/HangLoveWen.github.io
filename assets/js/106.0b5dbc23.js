(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{503:function(e,t,v){"use strict";v.r(t);var r=v(2),_=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("1.核心思路")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("把文件的实际存放路径，作为每个资源的请求url地址。\n")])])]),t("p",[t("img",{attrs:{src:"https://s1.imagehub.cc/images/2023/02/01/ae2bda6a37a358fbe4ff23f056dcb47f.png",alt:"ae2bda6a37a358fbe4ff23f056dcb47f.png"}})]),e._v(" "),t("p",[e._v("2.实现步骤")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("1.导入需要的模块\n\n2.创建基本的web服务器\n\n3.将资源的请求url映射为地址的存放路径\n\n4.读取文件并相应给客户端。\n")])])]),t("p",[e._v("3.结果")]),e._v(" "),t("p",[t("code",[e._v("const fs=require('fs')")])]),e._v(" "),t("p",[t("code",[e._v("const path=require('path')")])]),e._v(" "),t("p",[t("code",[e._v("const http=require('http')")])]),e._v(" "),t("p",[t("code",[e._v("const server=http.createServer()")])]),e._v(" "),t("p",[t("code",[e._v("server.on('request',(req,res)=>{")])]),e._v(" "),t("p",[t("code",[e._v("const url=req.url")])]),e._v(" "),t("p",[t("code",[e._v("const content='<h1>404 Not Found</h1>'")])]),e._v(" "),t("p",[t("code",[e._v('let fpath=""')])]),e._v(" "),t("p",[t("code",[e._v("if(url=='/1.txt'||url=='/2.txt'){")])]),e._v(" "),t("p",[t("code",[e._v("fpath=path.join(__dirname,url)")])]),e._v(" "),t("p",[t("code",[e._v("}else if(url=='/'){")])]),e._v(" "),t("p",[t("code",[e._v("fpath=path.join(__dirname,'/1.txt')")])]),e._v(" "),t("p",[t("code",[e._v("}")])]),e._v(" "),t("p",[t("code",[e._v("if(url=='/1.txt'||url=='/'){")])]),e._v(" "),t("p",[t("code",[e._v("fs.readFile(fpath,'utf-8',(err,datastr)=>{{")])]),e._v(" "),t("p",[t("code",[e._v("if(err){")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("`return res.end(content)`\n")])])]),t("p",[t("code",[e._v("}else{")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("`res.end(datastr)`\n")])])]),t("p",[t("code",[e._v("}")])]),e._v(" "),t("p",[t("code",[e._v("}})")])]),e._v(" "),t("p",[t("code",[e._v("}else if(url=='/2.txt'){")])]),e._v(" "),t("p",[t("code",[e._v("fs.readFile(fpath,'utf-8',(err,datastr)=>{{")])]),e._v(" "),t("p",[t("code",[e._v("if(err){")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("`return res.end(content)`\n")])])]),t("p",[t("code",[e._v("}else{")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("`res.end(datastr)`\n")])])]),t("p",[t("code",[e._v("}")])]),e._v(" "),t("p",[t("code",[e._v("}})")])]),e._v(" "),t("p",[t("code",[e._v("}else{")])]),e._v(" "),t("p",[t("code",[e._v("res.end(content)")])]),e._v(" "),t("p",[t("code",[e._v("}")])]),e._v(" "),t("p",[t("code",[e._v("})")])]),e._v(" "),t("p",[t("code",[e._v("server.listen(80,()=>{")])]),e._v(" "),t("p",[t("code",[e._v("console.log('http server running at the http://127.0.0.1')")])]),e._v(" "),t("p",[t("code",[e._v("})")])])])}),[],!1,null,null,null);t.default=_.exports}}]);