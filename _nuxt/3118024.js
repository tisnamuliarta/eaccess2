(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{563:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=563},741:function(e,t,n){"use strict";n.r(t);n(56);var o=n(562),r=(n(565),{name:"PermissionList",components:{HotTable:o.a},data:function(){return{settings:{licenseKey:"non-commercial-and-evaluation",startRows:0},detailsRoot:"detailsRoot"}},methods:{addLine:function(){var e=this.$refs.details.hotInstance.countRows();this.$refs.details.hotInstance.alter("insert_row",e+1)},updateTableSettings:function(){var e=this;this.$refs.details.hotInstance.updateSettings({colHeaders:["Permission","Index","Store","Edits","Erase"],currentRowClassName:"currentRow",currentColClassName:"currentCol",startRows:0,manualColumnFreeze:!0,currData:{},rowHeaders:!0,manualColumnResize:!0,manualRowResize:!0,filters:!0,autoRowSize:!1,autoColumnSize:!1,viewportRowRenderingOffset:1e3,viewportColumnRenderingOffset:100,colWidths:80,dropdownMenu:!0,columnSorting:!0,persistentState:!0,width:"100%",stretchH:"all",columns:[{data:"permission",width:150,type:"autocomplete",strict:!1,filter:!1,height:26,wordWrap:!1,source:function(t,n){n(e.$auth.$storage.getLocalStorage("permission_list"))}},{data:"index",width:50,type:"checkbox",checkedTemplate:"Y",uncheckedTemplate:"N"},{data:"store",width:50,type:"checkbox",checkedTemplate:"Y",uncheckedTemplate:"N"},{data:"edits",width:50,type:"checkbox",checkedTemplate:"Y",uncheckedTemplate:"N"},{data:"erase",width:50,type:"checkbox",checkedTemplate:"Y",uncheckedTemplate:"N"}]})},setDataToDetails:function(data){this.updateTableSettings();var e=this;setTimeout((function(){e.$refs.details.hotInstance.loadData(data)}),300)},getAddData:function(){return this.$refs.details.hotInstance.getSourceData()}}}),c=n(51),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("HotTable",{ref:"details",attrs:{root:e.detailsRoot,settings:e.settings}})}),[],!1,null,null,null);t.default=component.exports}}]);