webpackJsonp([31],{O7IE:function(t,e){},O9nb:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("BO1k"),a=s.n(i),r=s("bOdI"),o=s.n(r),l=s("uVhg"),n=s("/71Z"),c=s("pwjf"),u={data:function(){var t;return t={moreOption:!1,loading:!1,title:"",isScroll:!1,bookTitle:"",limit:15,curPage:1,total:1,totalPage:1,select:"0",obj:{},author:"",keywords:"",resourceCode:[],codeList:{book:"图书",chapter:"篇章",report:"报告",paper:"论文",article:"文章"},resourceNameList:[],checkType:[],checkTypeNameList:[],selectList:[],showType:!1,popTitle:"",startYear:"",endYear:"",sortType:0,orderBy:"",typePage:1,typeTotal:1,list:[],syzt:[],cplb:[],popList:[],popCurType:"",resourceIds:[],checkAll:!1,checkAllIds:[],isResouceOrder:!1,orderList:[],curSourceId:"",isNewCreate:!1,newOrder:{}},o()(t,"popTitle","加入书单"),o()(t,"popPageSize",30),o()(t,"sortActive",0),o()(t,"isPointBook",[]),o()(t,"publishYearList",[]),o()(t,"resourceTypeCodeList",[]),o()(t,"eleCopyrightList",[]),o()(t,"keywordList",[]),o()(t,"bookBrandList",[]),o()(t,"applyTopicList",[]),o()(t,"applyTopicNameList",[]),o()(t,"bookBrandNameList",[]),o()(t,"bookBrandValueList",[]),o()(t,"cplbNameList",[]),o()(t,"cplbValueList",[]),o()(t,"keywordNameList",[]),o()(t,"keywordValueList",[]),o()(t,"publishYearValueList",[]),o()(t,"publishYearNameList",[]),o()(t,"eleCopyrightNameList",[]),o()(t,"eleCopyrightValueList",[]),o()(t,"isPointBookName",[]),o()(t,"isPointBookValue",[]),o()(t,"classifyIdList",[]),o()(t,"isbn",""),o()(t,"responsibleEditor",""),o()(t,"responsibleDepartment",""),o()(t,"publicationCode",""),o()(t,"resourceTypeList",[]),o()(t,"resourceTypeNameList",[]),o()(t,"resourceTypeValueList",[]),o()(t,"subjectList",[]),o()(t,"subjectName",[]),o()(t,"industryList",[]),o()(t,"industryName",[]),o()(t,"keywdMore",!0),o()(t,"cplbMore",!0),o()(t,"yearMore",!0),o()(t,"rowCell",!0),o()(t,"authorMore",!0),o()(t,"authorList",[]),o()(t,"authorCode",[]),o()(t,"authorNameList",[]),o()(t,"resourceIdStr",""),t},components:{comHead:l.a,backTop:c.a,comfooter:n.a},filters:{publishDateFtt:function(t){return t?(t=t.toString()).split("-")[0]+"年"+t.split("-")[1]+"月":""},returnNum:function(t){return+t+1}},watch:{$route:"init"},methods:{resetOption:function(){this.resetText(),this.searchResult()},resetText:function(){this.bookTitle="",this.author="",this.keywords="",this.startYear="",this.endYear="",this.isbn="",this.responsibleEditor="",this.responsibleDepartment="",this.publicationCode="",this.resourceCode=[],this.applyTopicList=[],this.bookBrandValueList=[],this.cplbValueList=[],this.keywordValueList=[],this.publishYearValueList=[],this.eleCopyrightValueList=[],this.isPointBookValue=[],this.resourceTypeValueList=[],this.resourceNameList=[],this.applyTopicNameList=[],this.bookBrandNameList=[],this.cplbNameList=[],this.keywordNameList=[],this.publishYearNameList=[],this.eleCopyrightNameList=[],this.resourceTypeNameList=[],this.isPointBookName=[],this.subjectList=[],this.subjectName=[],this.industryList=[],this.industryName=[]},clearSelect:function(){this.checkAll=!1,this.resourceIds=[]},sort:function(t){this.sortType=t,this.orderBy=0==t?"":"desc"==this.orderBy?"asc":"desc",this.searchResult()},handleCheckAllChange:function(t){this.checkedCities=t?this.checkAllIds:[],this.resourceIds=1==t?this.checkAllIds:[]},slectedZylx:function(t){var e=this.resourceNameList.findIndex(function(e,s,i){return e.value==t.value});e>-1?this.resourceNameList.splice(e,1):this.resourceNameList.push(t),this.resourceCode=[];var s=!0,i=!1,r=void 0;try{for(var o,l=a()(this.resourceNameList);!(s=(o=l.next()).done);s=!0){var n=o.value;this.resourceCode.push(n.value)}}catch(t){i=!0,r=t}finally{try{!s&&l.return&&l.return()}finally{if(i)throw r}}this.curPage=1,this.searchResult()},slectedAuthor:function(t){var e=this.authorNameList.findIndex(function(e,s,i){return e.value==t.value});e>-1?this.authorNameList.splice(e,1):this.authorNameList.push(t),this.authorCode=[];var s=!0,i=!1,r=void 0;try{for(var o,l=a()(this.authorNameList);!(s=(o=l.next()).done);s=!0){var n=o.value;this.authorCode.push(n.name)}}catch(t){i=!0,r=t}finally{try{!s&&l.return&&l.return()}finally{if(i)throw r}}this.curPage=1,this.searchResult()},slectedBookBrand:function(t){var e=this.bookBrandNameList.findIndex(function(e,s,i){return e.value==t.value});e>-1?this.bookBrandNameList.splice(e,1):this.bookBrandNameList.push(t),this.bookBrandValueList=[];var s=!0,i=!1,r=void 0;try{for(var o,l=a()(this.bookBrandNameList);!(s=(o=l.next()).done);s=!0){var n=o.value;this.bookBrandValueList.push(n.value)}}catch(t){i=!0,r=t}finally{try{!s&&l.return&&l.return()}finally{if(i)throw r}}this.curPage=1,this.searchResult()},slectedZyss:function(t){var e=this.resourceTypeNameList.findIndex(function(e,s,i){return e.value==t.value});e>-1?this.resourceTypeNameList.splice(e,1):this.resourceTypeNameList.push(t),this.resourceTypeValueList=[];var s=!0,i=!1,r=void 0;try{for(var o,l=a()(this.resourceTypeNameList);!(s=(o=l.next()).done);s=!0){var n=o.value;this.resourceTypeValueList.push(n.value)}}catch(t){i=!0,r=t}finally{try{!s&&l.return&&l.return()}finally{if(i)throw r}}this.curPage=1,this.searchResult()},slectedCplb:function(t){var e=this.cplbNameList.findIndex(function(e,s,i){return e.value==t.value});e>-1?this.cplbNameList.splice(e,1):this.cplbNameList.push(t),this.cplbValueList=[];var s=!0,i=!1,r=void 0;try{for(var o,l=a()(this.cplbNameList);!(s=(o=l.next()).done);s=!0){var n=o.value;this.cplbValueList.push(n.value)}}catch(t){i=!0,r=t}finally{try{!s&&l.return&&l.return()}finally{if(i)throw r}}this.curPage=1,this.searchResult()},slectedCbn:function(t){var e=this.publishYearNameList.findIndex(function(e,s,i){return e.value==t.value});e>-1?this.publishYearNameList.splice(e,1):this.publishYearNameList.push(t),this.publishYearValueList=[];var s=!0,i=!1,r=void 0;try{for(var o,l=a()(this.publishYearNameList);!(s=(o=l.next()).done);s=!0){var n=o.value;this.publishYearValueList.push(n.value)}}catch(t){i=!0,r=t}finally{try{!s&&l.return&&l.return()}finally{if(i)throw r}}this.curPage=1,this.searchResult()},slectedDzbq:function(t){var e=this.eleCopyrightNameList.findIndex(function(e,s,i){return e.value==t.value});e>-1?this.eleCopyrightNameList.splice(e,1):this.eleCopyrightNameList.push(t),this.eleCopyrightValueList=[];var s=!0,i=!1,r=void 0;try{for(var o,l=a()(this.eleCopyrightNameList);!(s=(o=l.next()).done);s=!0){var n=o.value;this.eleCopyrightValueList.push(n.value)}}catch(t){i=!0,r=t}finally{try{!s&&l.return&&l.return()}finally{if(i)throw r}}this.curPage=1,this.searchResult()},slectedGjc:function(t){var e=this.keywordNameList.findIndex(function(e,s,i){return e.value==t.value});e>-1?this.keywordNameList.splice(e,1):this.keywordNameList.push(t),this.keywordValueList=[];var s=!0,i=!1,r=void 0;try{for(var o,l=a()(this.keywordNameList);!(s=(o=l.next()).done);s=!0){var n=o.value;this.keywordValueList.push(n.value)}}catch(t){i=!0,r=t}finally{try{!s&&l.return&&l.return()}finally{if(i)throw r}}this.curPage=1,this.searchResult()},getClassifys:function(){var t,e=this;e.$http({method:"get",url:"/admin/api/detailCondition",params:(t={resourceTypeCodeList:e.resourceCode.join(","),applyTopicList:e.applyTopicList.join(","),bookBrandList:e.bookBrandValueList.join(","),productTypeList:e.cplbValueList.join(","),authorList:e.authorCode.join(","),keywordList:e.keywordValueList.join(","),publishYearList:e.publishYearValueList.join(","),electronicCopyrightList:e.eleCopyrightValueList.join(","),typeList:e.resourceTypeValueList.join(","),pointBookList:e.isPointBookValue.join(","),q:e.title,title:e.bookTitle,isbn:e.isbn,responsibleEditor:e.responsibleEditor,responsibleDepartment:e.responsibleDepartment,publicationCode:e.publicationCode,author:e.author},o()(t,"authorList",""),o()(t,"keywords",e.keywords),o()(t,"startTime",e.startYear),o()(t,"endTime",e.endYear),t),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(function(t){0==t.data.code&&(e.cplb=t.data.conditions.productTypeList,e.syzt=t.data.conditions.applyTopicList,e.bookBrandList=t.data.conditions.bookBrandList,e.isPointBook=t.data.conditions.pointBookList,e.publishYearList=t.data.conditions.publishYearList,e.resourceTypeCodeList=t.data.conditions.resourceTypeCodeList,e.eleCopyrightList=t.data.conditions.electronicCopyrightList,e.keywordList=t.data.conditions.keywordList,e.resourceTypeList=t.data.conditions.typeList,e.authorList=t.data.conditions.authorList)})},pagechange:function(t){this.curPage=t,this.searchResult(),console.log(this.resourceIds)},searchResult:function(t){var e=this;e.loading=!0,e.getClassifys(),e.list=null,e.list=[],e.$http({method:"get",url:"/admin/api/detailSearch",params:{page:e.curPage,limit:e.limit,title:e.bookTitle,orderBy:e.orderBy,resourceTypeCodeList:e.resourceCode.join(","),applyTopicList:e.applyTopicList.join(","),bookBrandList:e.bookBrandValueList.join(","),productTypeList:e.cplbValueList.join(","),authorList:e.authorCode.join(","),keywordList:e.keywordValueList.join(","),publishYearList:e.publishYearValueList.join(","),electronicCopyrightList:e.eleCopyrightValueList.join(","),typeList:e.resourceTypeValueList.join(","),pointBookList:e.isPointBookValue.join(","),q:e.title,isbn:e.isbn,responsibleEditor:e.responsibleEditor,responsibleDepartment:e.responsibleDepartment,publicationCode:e.publicationCode,author:e.author,keywords:e.keywords,startTime:e.startYear,endTime:e.endYear,subjectTypeList:e.subjectList.join(","),industryTypeList:e.industryList.join(",")},headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(function(t){if(0==t.data.code){e.list=t.data.page.list;var s=!0,i=!1,r=void 0;try{for(var o,l=a()(e.list);!(s=(o=l.next()).done);s=!0){var n=o.value;n.keyWordCn&&""!=n.keyWordCn&&(n.keyWordCn=n.keyWordCn.split(";")),n.responsibleEditor&&""!=n.responsibleEditor&&(n.responsibleEditor=n.responsibleEditor.split(";")),e.checkAllIds.push(n.id)}}catch(t){i=!0,r=t}finally{try{!s&&l.return&&l.return()}finally{if(i)throw r}}e.total=t.data.page.totalCount,e.totalPage=t.data.page.totalPage}e.loading=!1})},addCollect:function(t){var e=this,s="";if(""!=t)s=t,console.log(arguments[0]);else{if(0==e.resourceIds.length)return void e.$toast("error",3e3,"请先选择要收藏的资源！");s=e.resourceIds.join(",")}e.$http({method:"post",url:"/admin/cms/resourcefavorites/add",params:{resourceIds:s},transformRequest:[function(t){var e="";for(var s in t)e+=encodeURIComponent(s)+"="+encodeURIComponent(t[s])+"&";return e}],headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}).then(function(t){0==t.data.code?e.$toast("success",3e3,"收藏成功！"):e.$toast("error",5e3,t.data.msg)})},getResourceOrderList:function(){var t=this;t.$http({method:"get",url:"/admin/cms/resourcelist/mylist",headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(function(e){0==e.data.code&&(t.orderList=e.data.page.records)})},showResource:function(t){if(this.resourceIdStr="",""!=t)this.resourceIdStr=t;else{if(0==this.resourceIds.length)return void this.$message({showClose:!0,message:"请先选择一条数据！",type:"error"});this.resourceIdStr=this.resourceIds.join(",")}this.isNewCreate=!1,this.isResouceOrder=!0,this.newOrder={},this.curSourceId=""},addResourceOrder:function(){this.isNewCreate?this.createNewOrder():this.addResourceForm()},addResourceForm:function(){var t=this;""!=t.curSourceId?t.$http({method:"post",url:"/admin/cms/resourcelist/addResource",params:{resourceId:t.resourceIdStr,resourceListId:t.curSourceId},transformRequest:[function(t){var e="";for(var s in t)e+=encodeURIComponent(s)+"="+encodeURIComponent(t[s])+"&";return e}],headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){0==e.data.code?(t.$toast("success",5e3,e.data.msg),t.isResouceOrder=!1):t.$toast("error",5e3,e.data.msg),t.isResouceOrder=!1}):this.$message.error("请先选择要加入的资源单！")},createNewOrder:function(){var t=this;t.newOrder.resourceId=t.resourceIds,t.$http({method:"post",url:"/admin/cms/resourcelist/save",data:t.newOrder,headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(function(e){0==e.data.code?(t.isNewCreate=!1,t.isResouceOrder=!1,t.$toast("success",5e3,e.data.msg),setTimeout(function(){t.getResourceOrderList()},300)):t.$toast("error",5e3,e.data.msg)})},routerDataHandle:function(){var t=this.$route.query;this.title=t.title,this.serchText=t.title,this.resetText()},init:function(){this.routerDataHandle(),this.searchResult(),this.getResourceOrderList()}},created:function(){this.init()}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("com-head"),t._v(" "),s("div",{staticClass:"width1200"},[s("div",{staticClass:"type_nav"},[s("router-link",{attrs:{target:"_blank",to:{path:"/home"}}},[t._v("首页")]),t._v(" "),s("router-link",{attrs:{target:"_blank",to:{path:"/index/result"}}},[t._v("资源检索")]),t._v(" "),s("router-link",{attrs:{target:"_blank",to:{path:"/bookLibrary"}}},[t._v("图书库")]),t._v(" "),s("a",{},[t._v("多媒体资源")]),t._v(" "),s("a",{},[t._v("数据图表")]),t._v(" "),s("a",{},[t._v("图片库")]),t._v(" "),s("a",{},[t._v("条目库")]),t._v(" "),s("a",{},[t._v("管理入口")])],1),t._v(" "),s("div",{staticClass:"search_box clear-fix"},[t._m(0),t._v(" "),s("div",{staticClass:"sc_r fl"},[s("div",{staticClass:"clear-fix"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.bookTitle,expression:"bookTitle"}],staticClass:"fl sc_input",attrs:{placeholder:"请输入标题",type:"text"},domProps:{value:t.bookTitle},on:{input:function(e){e.target.composing||(t.bookTitle=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.author,expression:"author"}],staticClass:"fl sc_input",attrs:{placeholder:"请输入作者",type:"text"},domProps:{value:t.author},on:{input:function(e){e.target.composing||(t.author=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.keywords,expression:"keywords"}],staticClass:"fl sc_input",attrs:{placeholder:"请输入关键词",type:"text"},domProps:{value:t.keywords},on:{input:function(e){e.target.composing||(t.keywords=e.target.value)}}}),t._v(" "),s("div",{staticClass:"fl date"},[s("i",{staticClass:"date_icon el-icon-date"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.startYear,expression:"startYear"}],staticClass:"fl sc_input date_input",attrs:{placeholder:"开始时间",type:"text"},domProps:{value:t.startYear},on:{input:function(e){e.target.composing||(t.startYear=e.target.value)}}}),t._v(" "),s("el-date-picker",{staticClass:"date_pick",attrs:{size:"mini","value-format":"yyyy-MM",type:"month",placeholder:"开始时间"},model:{value:t.startYear,callback:function(e){t.startYear=e},expression:"startYear"}})],1),t._v(" "),s("span",{staticClass:"fl line"},[t._v("--")]),t._v(" "),s("div",{staticClass:"fl date"},[s("i",{staticClass:"date_icon el-icon-date"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.endYear,expression:"endYear"}],staticClass:"fl sc_input date_input",attrs:{placeholder:"结束时间",type:"text"},domProps:{value:t.endYear},on:{input:function(e){e.target.composing||(t.endYear=e.target.value)}}}),t._v(" "),s("el-date-picker",{staticClass:"date_pick",attrs:{size:"mini","value-format":"yyyy-MM",type:"month",placeholder:"结束时间"},model:{value:t.endYear,callback:function(e){t.endYear=e},expression:"endYear"}})],1),t._v(" "),s("span",{staticClass:"fl more",on:{click:function(e){t.moreOption=!t.moreOption}}}),t._v(" "),s("a",{staticClass:"fl a_btn",on:{click:t.searchResult}},[t._v("确定")]),t._v(" "),s("a",{staticClass:"fl reset",on:{click:t.resetOption}},[t._v("重置")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.moreOption,expression:"moreOption"}],staticClass:"clear-fix marg6"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.isbn,expression:"isbn"}],staticClass:"fl sc_input",attrs:{placeholder:"请输入ISBN",type:"text"},domProps:{value:t.isbn},on:{input:function(e){e.target.composing||(t.isbn=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.responsibleEditor,expression:"responsibleEditor"}],staticClass:"fl sc_input",attrs:{placeholder:"请输入责任编辑",type:"text"},domProps:{value:t.responsibleEditor},on:{input:function(e){e.target.composing||(t.responsibleEditor=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.responsibleDepartment,expression:"responsibleDepartment"}],staticClass:"fl sc_input",attrs:{placeholder:"请输入责任部门",type:"text"},domProps:{value:t.responsibleDepartment},on:{input:function(e){e.target.composing||(t.responsibleDepartment=e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"row_type clear-fix"},[t._m(1),t._v(" "),s("div",{staticClass:"row_right fl"},[s("div",{staticClass:"clear-fix "},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.resourceNameList.length>0,expression:"resourceNameList.length>0"}],staticClass:"type_msg fl"},[s("span",{staticClass:"lable_name"},[t._v("资源类型：")]),t._v(" "),t._l(t.resourceNameList,function(e){return s("span",{key:e.name,staticClass:"type_name",on:{click:function(s){t.slectedZylx(e)}}},[t._v(t._s(e.name)),s("i",{staticClass:"el-icon-error"})])})],2),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.authorNameList.length>0,expression:"authorNameList.length>0"}],staticClass:"type_msg fl"},[s("span",{staticClass:"lable_name"},[t._v("作者：")]),t._v(" "),t._l(t.authorNameList,function(e){return s("span",{key:e.name,staticClass:"type_name",on:{click:function(s){t.slectedAuthor(e)}}},[t._v(t._s(e.name)),s("i",{staticClass:"el-icon-error"})])})],2),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.resourceTypeNameList.length>0,expression:"resourceTypeNameList.length>0"}],staticClass:"type_msg fl"},[s("span",{staticClass:"lable_name"},[t._v("资源所属：")]),t._v(" "),t._l(t.resourceTypeNameList,function(e){return s("span",{key:e.name,staticClass:"type_name",on:{click:function(s){t.slectedZyss(e)}}},[t._v(t._s(e.name)),s("i",{staticClass:"el-icon-error"})])})],2),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.publishYearNameList.length>0,expression:"publishYearNameList.length>0"}],staticClass:"type_msg fl"},[s("span",{staticClass:"lable_name"},[t._v("出版年：")]),t._v(" "),t._l(t.publishYearNameList,function(e){return s("span",{key:e.name,staticClass:"type_name",on:{click:function(s){t.slectedCbn(e)}}},[t._v(t._s(e.name)),s("i",{staticClass:"el-icon-error"})])})],2),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.keywordNameList.length>0,expression:"keywordNameList.length>0"}],staticClass:"type_msg fl"},[s("span",{staticClass:"lable_name"},[t._v("关键词：")]),t._v(" "),t._l(t.keywordNameList,function(e){return s("span",{key:e.name,staticClass:"type_name",on:{click:function(s){t.slectedGjc(e)}}},[t._v(t._s(e.name)),s("i",{staticClass:"el-icon-error"})])})],2)])])]),t._v(" "),s("div",{staticClass:"type_list clear-fix"},[t._m(2),t._v(" "),s("div",{staticClass:"fl list"},[s("div",{staticClass:"clear-fix"},t._l(t.resourceTypeCodeList,function(e){return s("a",{key:e.name,staticClass:"fl",on:{click:function(s){t.slectedZylx(e)}}},[t._v(t._s(e.name)),s("span",[t._v("("+t._s(e.count)+")")])])}))])]),t._v(" "),s("div",{staticClass:"type_list clear-fix"},[t._m(3),t._v(" "),s("div",{staticClass:"fl list"},[s("div",{staticClass:"clear-fix typeheight",class:{list_hide:t.authorMore}},t._l(t.authorList,function(e){return s("a",{key:e.name,staticClass:"fl",on:{click:function(s){t.slectedAuthor(e)}}},[t._v(t._s(e.name)),s("span",[t._v("("+t._s(e.count)+")")])])}))]),t._v(" "),s("span",{staticClass:"more"},[t.authorMore?s("i",{on:{click:function(e){t.authorMore=!t.authorMore}}}):s("i",{staticClass:"down",on:{click:function(e){t.authorMore=!t.authorMore}}})])]),t._v(" "),s("div",{staticClass:"type_list clear-fix"},[t._m(4),t._v(" "),s("div",{staticClass:"fl list"},[s("div",{staticClass:"clear-fix"},t._l(t.resourceTypeList,function(e){return s("a",{key:e.name,staticClass:"fl",on:{click:function(s){t.slectedZyss(e)}}},[t._v(t._s(e.name)),s("span",[t._v("("+t._s(e.count)+")")])])}))])]),t._v(" "),s("div",{staticClass:"type_list clear-fix"},[t._m(5),t._v(" "),s("div",{staticClass:"fl list"},[s("div",{staticClass:"clear-fix typeheight",class:{list_hide:t.yearMore}},t._l(t.publishYearList,function(e){return s("a",{key:e.name,staticClass:"fl",on:{click:function(s){t.slectedCbn(e)}}},[t._v(t._s(e.name)),s("span",[t._v("("+t._s(e.count)+")")])])}))]),t._v(" "),s("span",{staticClass:"more"},[t.yearMore?s("i",{on:{click:function(e){t.yearMore=!t.yearMore}}}):s("i",{staticClass:"down",on:{click:function(e){t.yearMore=!t.yearMore}}})])]),t._v(" "),s("div",{staticClass:"type_list clear-fix"},[t._m(6),t._v(" "),s("div",{staticClass:"fl list"},[s("div",{staticClass:"clear-fix typeheight",class:{list_hide:t.keywdMore}},t._l(t.keywordList,function(e){return s("a",{key:e.name,staticClass:"fl",on:{click:function(s){t.slectedGjc(e)}}},[t._v(t._s(e.name)),s("span",[t._v("("+t._s(e.count)+")")])])}))]),t._v(" "),s("span",{staticClass:"more"},[t.keywdMore?s("i",{on:{click:function(e){t.keywdMore=!t.keywdMore}}}):s("i",{staticClass:"down",on:{click:function(e){t.keywdMore=!t.keywdMore}}})])]),t._v(" "),s("div",{staticClass:"handle clear-fix"},[s("el-checkbox",{staticClass:"ckall",on:{change:t.handleCheckAllChange},model:{value:t.checkAll,callback:function(e){t.checkAll=e},expression:"checkAll"}}),t._v(" "),s("span",{staticClass:"fl name"},[t._v("批量选择")]),t._v(" "),s("div",{staticClass:"fl name select_num"},[t._v("(已选:"),s("span",[t._v(t._s(t.resourceIds.length))]),t._v("条)")]),t._v(" "),s("a",{staticClass:"fl name",on:{click:t.clearSelect}},[t._v("清除")]),t._v(" "),s("a",{staticClass:"fl name sort",class:{active:0==t.sortType},on:{click:function(e){t.sort(0)}}},[t._v("相关度排序"),s("i")]),t._v(" "),s("a",{staticClass:"fl name pbdate",class:{active:1==t.sortType},on:{click:function(e){t.sort(1)}}},[t._v("出版时间"),s("i")]),t._v(" "),s("a",{staticClass:"fl name hd_btn add_order",on:{click:function(e){t.showResource("")}}},[s("i"),t._v("加入书单")]),t._v(" "),s("a",{staticClass:"fl name hd_btn add_clct",on:{click:function(e){t.addCollect("")}}},[s("i"),t._v("收藏")]),t._v(" "),t._m(7),t._v(" "),s("div",{staticClass:"fr"},[s("a",{staticClass:"fl name hd_btn show_row row",class:{active:!t.rowCell},on:{click:function(e){t.rowCell=!t.rowCell}}},[s("i")]),t._v(" "),s("a",{staticClass:"fl name hd_btn show_cell cell",class:{active:t.rowCell},on:{click:function(e){t.rowCell=!t.rowCell}}},[s("i")]),t._v(" "),s("div",{staticClass:"fl name select_num"},[t._v("找到"),s("span",[t._v(t._s(t.total))]),t._v("条结果")]),t._v(" "),s("span",{staticClass:"fl name "},[t._v("( "+t._s(t.curPage)+"/"+t._s(t.totalPage)+" )")])])],1),t._v(" "),s("div",{staticClass:"result"},[s("el-checkbox-group",{staticStyle:{"font-size":"14px"},model:{value:t.resourceIds,callback:function(e){t.resourceIds=e},expression:"resourceIds"}},[t._l(t.list,function(e){return s("div",{directives:[{name:"show",rawName:"v-show",value:t.rowCell,expression:"rowCell"}],key:e.id,staticClass:"book_msg"},[s("div",{staticClass:"book"},[s("el-checkbox",{staticClass:"ck_one",attrs:{label:e.id}},[s("span",{staticStyle:{display:"none"}},[t._v(t._s(e.id))])]),t._v(" "),s("h5",{staticClass:"full_title"},["book"==e.resourceTypeCode?s("router-link",{staticClass:"fl",attrs:{target:"_blank",to:{path:"/index/bookDetail",query:{id:e.id,type:e.resourceTypeCode}}},domProps:{innerHTML:t._s(e.title)}}):t._e(),t._v(" "),"article"==e.resourceTypeCode?s("router-link",{staticClass:"fl",attrs:{target:"_blank",to:{path:"/index/frontArticleDetail",query:{id:e.id,type:e.resourceTypeCode}}},domProps:{innerHTML:t._s(e.title)}}):t._e()],1),t._v(" "),s("p",{staticClass:"book_abs"},[s("a",{domProps:{innerHTML:t._s(e.content)}})]),t._v(" "),s("div",{staticClass:"clear-fix"},[s("div",{staticClass:"fl include_msg"},[s("div",{staticClass:"fl tipmsg"},[t._v("["+t._s(t.codeList[e.displayResourceType])+"]")]),t._v(" "),t._l(e.authorList,function(i,a){return s("div",{key:i.id,staticClass:"fl tipmsg",class:{zuozhe:a==e.authorList.length-1}},[s("span",{domProps:{innerHTML:t._s(i.name)}})])}),t._v(" "),s("div",{staticClass:"fl tipmsg"},[t._v("\n                                    -"),s("router-link",{staticClass:"source",attrs:{target:"_blank",to:{path:"/index/bookDetail",query:{id:e.bookResourceId,type:"book"}}},domProps:{innerHTML:t._s(e.source)}})],1),t._v(" "),s("div",{staticClass:"fl tipmsg"},[t._v("\n                                    "+t._s(e.wordsNumber)+"字 | "+t._s(e.pageStartNumber)+"页-"+t._s(e.pageEndNumber)+"页\n                                ")])],2),t._v(" "),s("div",{staticClass:"fl  include_type"},[s("span",{staticClass:"fl"},[t._v("类型：")]),t._v(" "),t._l(e.attachmentSuffixList,function(e){return s("span",{key:e,staticClass:"fl"},["pdf"==e?s("i",{staticClass:"fl pdf",attrs:{title:"pdf"}}):t._e(),t._v(" "),"doc"==e?s("i",{staticClass:"fl doc",attrs:{title:"doc"}}):t._e(),t._v(" "),"txt"==e?s("i",{staticClass:"fl txt",attrs:{title:"txt"}}):t._e(),t._v(" "),"xml"==e?s("i",{staticClass:"fl xml",attrs:{title:"xml"}}):t._e(),t._v(" "),"mobi"==e?s("i",{staticClass:"fl mobi",attrs:{title:"mobi"}}):t._e(),t._v(" "),"epub"==e?s("i",{staticClass:"fl epub",attrs:{title:"epub"}}):t._e()])})],2),t._v(" "),s("div",{staticClass:"fl include_hd",on:{click:function(s){t.addCollect(e.id)}}},[s("a",[s("i",{staticClass:"fl"}),s("span",{staticClass:"fl"},[t._v("收藏")])])]),t._v(" "),s("div",{staticClass:"fl include_rd"},["book"==e.resourceTypeCode?s("router-link",{staticClass:"fl hd3",attrs:{target:"_blank",to:{path:"/index/catelogDetail",query:{bookResourceId:e.id}}}},[s("i",{staticClass:"fl"}),s("span",{staticClass:"fl"},[t._v("阅读")])]):t._e(),t._v(" "),"article"==e.resourceTypeCode?s("router-link",{staticClass:"fl hd3",attrs:{target:"_blank",to:{path:"/index/articleDetail",query:{resourceId:e.id}}}},[s("i",{staticClass:"fl"}),s("span",{staticClass:"fl"},[t._v("阅读")])]):t._e()],1)])],1),t._v(" "),s("a",{staticClass:"add_book_order",on:{click:function(s){t.showResource(e.id)}}},[s("i",{staticClass:"fl"}),s("span",{staticClass:"fr"},[t._v("加入书单")])])])}),t._v(" "),t.rowCell?t._e():s("div",{staticClass:"tblist"},[s("table",{staticClass:"book_table"},[s("thead",[s("tr",[s("th",{attrs:{width:"60px"}}),t._v(" "),s("th",{attrs:{width:"270px"}},[t._v("书名")]),t._v(" "),s("th",{attrs:{width:"120px"}},[t._v("资源类型")]),t._v(" "),s("th",{attrs:{width:"120px"}},[t._v("产品类别")]),t._v(" "),s("th",{attrs:{width:"210px"}},[t._v("作者")]),t._v(" "),s("th",{attrs:{width:"120px"}},[t._v("出版日期")]),t._v(" "),s("th",{attrs:{width:"150px"}},[t._v("文件类型")]),t._v(" "),s("th",{attrs:{width:"150px"}},[t._v("操作")])])]),t._v(" "),s("tbody",t._l(t.list,function(e,i){return s("tr",{key:e.id},[s("td",[s("el-checkbox",{staticClass:"ck_one",attrs:{label:e.id}},[s("span",{staticStyle:{display:"none"}},[t._v(t._s(t._f("returnNum")(i)))])]),t._v(" "),s("span",{},[t._v(t._s(t._f("returnNum")(i)))])],1),t._v(" "),s("td",[s("div",{staticClass:"title ofhd"},["book"==e.resourceTypeCode?s("router-link",{staticClass:"fl",attrs:{target:"_blank",to:{path:"/index/bookDetail",query:{id:e.id,type:e.resourceTypeCode}}},domProps:{innerHTML:t._s(e.title)}}):t._e(),t._v(" "),"article"==e.resourceTypeCode?s("router-link",{staticClass:"fl",attrs:{target:"_blank",to:{path:"/index/frontArticleDetail",query:{id:e.id,type:e.resourceTypeCode}}},domProps:{innerHTML:t._s(e.title)}}):t._e()],1)]),t._v(" "),s("td",{staticClass:"ofhd"},[t._v(t._s(t.codeList[e.displayResourceType]))]),t._v(" "),s("td",{staticClass:"ofhd"},[t._v("皮书")]),t._v(" "),s("td",[s("div",{staticClass:"ofhd authlist"},t._l(e.authorList,function(e){return s("a",{key:e.id,domProps:{innerHTML:t._s(e.name)}})}))]),t._v(" "),s("td",[t._v(t._s(t._f("publishDateFtt")(e.publishDate)))]),t._v(" "),s("td",[s("div",{staticClass:"fl  include_type"},t._l(e.attachmentSuffixList,function(e){return s("span",{key:e,staticClass:"fl"},["pdf"==e?s("i",{staticClass:"fl pdf",attrs:{title:"pdf"}}):t._e(),t._v(" "),"doc"==e?s("i",{staticClass:"fl doc",attrs:{title:"doc"}}):t._e(),t._v(" "),"txt"==e?s("i",{staticClass:"fl txt",attrs:{title:"txt"}}):t._e(),t._v(" "),"xml"==e?s("i",{staticClass:"fl xml",attrs:{title:"xml"}}):t._e(),t._v(" "),"mobi"==e?s("i",{staticClass:"fl mobi",attrs:{title:"mobi"}}):t._e(),t._v(" "),"epub"==e?s("i",{staticClass:"fl epub",attrs:{title:"epub"}}):t._e()])}))]),t._v(" "),s("td",[s("div",{staticClass:"tbhd clear-fix"},[s("a",{staticClass:"fl hd1",on:{click:function(s){t.showResource(e.id)}}}),t._v(" "),s("a",{staticClass:"fl hd2",on:{click:function(s){t.addCollect(e.id)}}}),t._v(" "),"book"==e.resourceTypeCode?s("router-link",{staticClass:"fl hd3",attrs:{target:"_blank",to:{path:"/index/catelogDetail",query:{bookResourceId:e.id}}}}):t._e(),t._v(" "),"article"==e.resourceTypeCode?s("router-link",{staticClass:"fl hd3",attrs:{target:"_blank",to:{path:"/index/articleDetail",query:{resourceId:e.id}}}}):t._e()],1)])])}))])])],2)],1),t._v(" "),s("div",{staticClass:"paginations"},[s("el-pagination",{staticClass:"resource_page",attrs:{background:"","prev-text":"上一页","next-text":"下一页","current-page":t.curPage,"page-size":t.limit,layout:"prev, pager, next",total:t.total},on:{"current-change":t.pagechange,"update:currentPage":function(e){t.curPage=e}}})],1)]),t._v(" "),s("el-dialog",{attrs:{title:t.popTitle,visible:t.isResouceOrder,width:"30%"},on:{"update:visible":function(e){t.isResouceOrder=e}}},[s("div",{staticClass:"add",staticStyle:{"margin-top":"-30px"}},[s("p",{staticStyle:{margin:"10px 0"}},[t._v(" 书单名称: "),s("a",{directives:[{name:"show",rawName:"v-show",value:!t.isNewCreate,expression:"!isNewCreate"}],staticClass:"newOrder fr",on:{click:function(e){t.isNewCreate=!0}}},[t._v("新建书单")]),s("a",{directives:[{name:"show",rawName:"v-show",value:t.isNewCreate,expression:"isNewCreate"}],staticClass:"newOrder fr",on:{click:function(e){t.isNewCreate=!1}}},[t._v("取消")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isNewCreate,expression:"!isNewCreate"}]},[s("el-select",{staticStyle:{width:"100%"},attrs:{size:"small",placeholder:"请选择"},model:{value:t.curSourceId,callback:function(e){t.curSourceId=e},expression:"curSourceId"}},t._l(t.orderList,function(t){return s("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isNewCreate,expression:"isNewCreate"}]},[s("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:t.newOrder.name,callback:function(e){t.$set(t.newOrder,"name",e)},expression:"newOrder.name"}}),t._v(" "),s("p",{staticStyle:{margin:"10px 0"}},[t._v("书单说明：")]),t._v(" "),s("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入内容"},model:{value:t.newOrder.abstracts,callback:function(e){t.$set(t.newOrder,"abstracts",e)},expression:"newOrder.abstracts"}})],1)]),t._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("div",{staticStyle:{"text-align":"center"}},[s("a",{staticClass:"aBtn aBtnCancle",on:{click:function(e){t.isResouceOrder=!1}}},[t._v("取 消")]),t._v(" "),s("a",{staticClass:"aBtn",on:{click:t.addResourceOrder}},[t._v("确 定")])])])]),t._v(" "),s("comfooter")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sc_l fl"},[e("i"),e("span",[this._v("结果筛选:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row_left fl"},[e("span",[this._v("已选条件:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"type_title fl"},[e("span",[this._v("资源类型:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"type_title fl"},[e("span",[this._v("作者:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"type_title fl"},[e("span",[this._v("资源所属:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"type_title fl"},[e("span",[this._v("出版年:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"type_title fl"},[e("span",[this._v("关键词:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"fl name hd_btn export"},[e("i"),this._v("导出元数据")])}]};var p=s("VU/8")(u,d,!1,function(t){s("O7IE")},"data-v-94f5093e",null);e.default=p.exports}});