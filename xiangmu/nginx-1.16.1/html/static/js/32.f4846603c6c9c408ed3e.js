webpackJsonp([32],{Sfl8:function(e,t){},jLor:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("BO1k"),s=r.n(a),o=r("T8Lg"),i={data:function(){return{loading:!1,list:[],curPage:1,limit:14,total:1,selectedData:[],resourceIds:[],isResouceOrder:!1,orderList:[],curSourceId:"",isNewCreate:!1,newOrder:{},popTitle:"加入书单"}},components:{headerTop:r("NCg7").a,loadingTip:o.a},methods:{handleSelection:function(e){var t=!0,r=!1,a=void 0;try{for(var o,i=s()(e);!(t=(o=i.next()).done);t=!0){var n=o.value;this.selectedData.push(n.id),this.resourceIds.push(n.resourceId)}}catch(e){r=!0,a=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw a}}},removeCollect:function(){var e=this;0!=e.selectedData.length&&e.$http({method:"post",url:"/admin/cms/resourcefavorites/remove",params:{ids:e.selectedData.join(",")},transformRequest:[function(e){var t="";for(var r in e)t+=encodeURIComponent(r)+"="+encodeURIComponent(e[r])+"&";return t}],headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}).then(function(t){0==t.data.code?(e.$toast("success",3e3,"取消收藏成功！"),e.getMyCollects()):e.$toast("error",5e3,t.data.msg)})},lookDetail:function(e){var t=void 0;t="book"==e.resourceTypeCode?this.$router.resolve({path:"/index/bookDetail",query:{id:e.id,type:e.resourceTypeCode}}):this.$router.resolve({path:"/index/frontArticleDetail",query:{id:e.id,type:e.resourceTypeCode}}),window.open(t.href,"_blank")},pageChange:function(e){this.curPage=e,this.getMyCollects()},getMyCollects:function(){var e=this;e.loading=!0,e.$http({method:"get",url:"/admin/cms/resourcefavorites/page",params:{current:e.curPage,size:e.limit},headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(function(t){if(0==t.data.code){e.list=t.data.page.list,e.total=t.data.page.totalPage;var r=!0,a=!1,o=void 0;try{for(var i,n=s()(e.list);!(r=(i=n.next()).done);r=!0){var c=i.value;c.resultVo.title&&(c.resultVo.title=c.resultVo.title.replace(/<(?!img).*?>/g,""))}}catch(e){a=!0,o=e}finally{try{!r&&n.return&&n.return()}finally{if(a)throw o}}}e.loading=!1})},showOrderPop:function(){0!=this.resourceIds.length?(this.isNewCreate=!1,this.isResouceOrder=!0,this.newOrder={},this.curSourceId=""):this.$message({showClose:!0,message:"请先选择一条数据！",type:"error"})},getResourceOrderList:function(){var e=this;e.$http({method:"get",url:"/admin/cms/resourcelist/mylist",headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(function(t){0==t.data.code&&(e.orderList=t.data.page.records)})},addorCreate:function(){this.isNewCreate?this.createNewOrder():this.addResourceOrder()},createNewOrder:function(){var e=this;e.newOrder.resourceId=e.resourceIds,e.$http({method:"post",url:"/admin/cms/resourcelist/save",data:e.newOrder,headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(function(t){0==t.data.code?(e.isNewCreate=!1,e.isResouceOrder=!1,e.$toast("success",5e3,t.data.msg),setTimeout(function(){e.getResourceOrderList()},300)):e.$toast("error",5e3,t.data.msg)})},addResourceOrder:function(){var e=this;""!=e.curSourceId?e.$http({method:"post",url:"/admin/cms/resourcelist/addResource",params:{resourceId:e.resourceIds.join(","),resourceListId:e.curSourceId},transformRequest:[function(e){var t="";for(var r in e)t+=encodeURIComponent(r)+"="+encodeURIComponent(e[r])+"&";return t}],headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){0==t.data.code?(e.$toast("success",5e3,t.data.msg),e.isResouceOrder=!1):e.$toast("error",5e3,t.data.msg),e.isResouceOrder=!1}):this.$message.error("请先选择要加入的资源单！")}},created:function(){this.getMyCollects(),this.getResourceOrderList()}},n={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("header-top"),e._v(" "),r("div",{staticClass:"collect"},[r("div",{staticStyle:{padding:"10px 0"}},[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),e._v(" "),r("el-breadcrumb-item",[e._v("我的收藏")])],1)],1),e._v(" "),e._m(0),e._v(" "),r("div",{staticClass:"btnList"},[r("a",{staticClass:"abtn",on:{click:e.showOrderPop}},[e._v("加入书单")]),r("a",{staticClass:"abtn",on:{click:e.removeCollect}},[e._v("取消收藏")])]),e._v(" "),r("loading-tip",{attrs:{"show-load":e.loading}}),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}]},[r("el-table",{ref:"multipleTable",staticClass:"tableWt",staticStyle:{width:"100%"},attrs:{data:e.list,"tooltip-effect":"dark",border:""},on:{"selection-change":e.handleSelection}},[r("el-table-column",{attrs:{type:"selection",width:"40"}}),e._v(" "),r("el-table-column",{attrs:{prop:"resultVo.title",label:"标题"}}),e._v(" "),r("el-table-column",{attrs:{label:"作者",width:"360"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.resultVo.authorList,function(t){return r("span",{key:t.id,staticClass:"author"},[e._v(e._s(t.name))])})}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"resultVo.type",label:"类型",width:"70"}}),e._v(" "),r("el-table-column",{attrs:{label:"操作",width:"70"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("a",{staticStyle:{color:"#409EFF"},on:{click:function(r){e.lookDetail(t.row.resultVo)}}},[e._v("查看")])]}}])})],1),e._v(" "),r("div",{staticClass:"fr paginations"},[r("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","current-page":e.curPage,"page-size":e.limit,total:e.total},on:{"current-change":e.pageChange,"update:currentPage":function(t){e.curPage=t}}})],1)],1)],1),e._v(" "),r("el-dialog",{attrs:{title:e.popTitle,visible:e.isResouceOrder,width:"30%"},on:{"update:visible":function(t){e.isResouceOrder=t}}},[r("div",{staticClass:"add",staticStyle:{"margin-top":"-30px"}},[r("p",{staticStyle:{margin:"15px 0"}},[e._v(" 书单名称: "),r("a",{directives:[{name:"show",rawName:"v-show",value:!e.isNewCreate,expression:"!isNewCreate"}],staticClass:"newOrder fr",on:{click:function(t){e.isNewCreate=!0}}},[e._v("新建书单")]),r("a",{directives:[{name:"show",rawName:"v-show",value:e.isNewCreate,expression:"isNewCreate"}],staticClass:"newOrder fr",on:{click:function(t){e.isNewCreate=!1}}},[e._v("取消")])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.isNewCreate,expression:"!isNewCreate"}]},[r("el-select",{staticStyle:{width:"100%"},attrs:{size:"mini",placeholder:"请选择"},model:{value:e.curSourceId,callback:function(t){e.curSourceId=t},expression:"curSourceId"}},e._l(e.orderList,function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.isNewCreate,expression:"isNewCreate"}]},[r("el-input",{attrs:{size:"mini",placeholder:"请输入内容"},model:{value:e.newOrder.name,callback:function(t){e.$set(e.newOrder,"name",t)},expression:"newOrder.name"}}),e._v(" "),r("p",{staticStyle:{margin:"10px 0"}},[e._v("书单说明：")]),e._v(" "),r("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入内容"},model:{value:e.newOrder.abstracts,callback:function(t){e.$set(e.newOrder,"abstracts",t)},expression:"newOrder.abstracts"}})],1)]),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("div",{staticStyle:{"text-align":"center"}},[r("a",{staticClass:"aBtn aBtnCancle",on:{click:function(t){e.isResouceOrder=!1}}},[e._v("取 消")]),e._v(" "),r("a",{staticClass:"aBtn",on:{click:e.addorCreate}},[e._v("确 定")])])])])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("span",[this._v("我的收藏")])])}]};var c=r("VU/8")(i,n,!1,function(e){r("Sfl8")},"data-v-920555d6",null);t.default=c.exports}});