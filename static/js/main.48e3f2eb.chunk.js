(this["webpackJsonpdiscord-to-name-react"]=this["webpackJsonpdiscord-to-name-react"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),l=a(3),i=a.n(l),n=(a(12),a(4)),d=a(5),r=a(7),o=a(6),m=(a(13),a.p+"static/media/wall-1.5192d193.jpg"),g=a.p+"static/media/wall-2.3f34c13b.jpg",h=a.p+"static/media/wall-3.dc6be7cc.jpg",j=a(0),b=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,c=new Array(s),l=0;l<s;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={selectedFile:!1,isResultReady:!1,selectedWallIndex:0},e.fileSelectedHandler=function(t){var a=new FileReader,s=document.querySelector("[data-image-selector='selected-image']");t.target.files&&t.target.files[0]&&(a.onload=function(t){s.src=t.target.result,e.setState({selectedFile:!0})},a.readAsDataURL(t.target.files[0]))},e.fileUploadHandler=function(){var t=document.querySelector("[data-image-selector='"+e.state.selectedWallIndex+"']"),a=document.querySelector("[data-image-selector='selected-image']"),s=document.querySelector("[data-image-selector='canvas']"),c=document.querySelector("[data-image-selector='merged-result']"),l=s.getContext("2d"),i=new Image,n=new Image;e.setState({isResultReady:!0}),i.src=t.src,i.onload=function(){s.width=i.width,s.height=i.height,l.globalAlpha=1,l.drawImage(i,0,0),n.src=a.src,n.onload=function(){e.createCombinedImage(l,i,n);var t=s.toDataURL("image/jpeg");c.src=t}}},e.createCombinedImage=function(t,a,s){switch(e.state.selectedWallIndex){case"1":t.drawImage(s,1230,442,954,1348);break;case"2":s.width>s.height?t.drawImage(s,a.width/2-750,550,1500,s.height/s.width*1500):t.drawImage(s,a.width/2-425,350,850,s.height/s.width*850);break;case"3":t.drawImage(s,1789,499,1143,759)}},e.setSelectedWall=function(t){e.setState({selectedWallIndex:t.target.dataset.imageSelector})},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("title",{children:"Create Next App"}),Object(j.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(j.jsxs)("main",{children:[Object(j.jsx)("h1",{className:"title",children:"Welcome to __________!"}),Object(j.jsx)("p",{className:"description",children:"Get started by uploading a photo below, selecting a room, and then clicking combine"}),Object(j.jsxs)("div",{className:"grid",children:[Object(j.jsx)("input",{className:"uploadButton",type:"file",onChange:this.fileSelectedHandler,style:{flexBasis:"100%"}}),Object(j.jsx)("img",{"data-image-selector":"selected-image",className:this.state.selectedFile?"":"hidden",style:{maxHeight:"30rem"},src:"/baldy.jpg"}),Object(j.jsxs)("div",{className:"wall-selector",children:[Object(j.jsx)("img",{"data-image-selector":"1",src:m,style:{height:"100%"},onClick:this.setSelectedWall,className:1==this.state.selectedWallIndex?"image selected":"image"}),Object(j.jsx)("img",{"data-image-selector":"2",src:g,style:{height:"100%"},onClick:this.setSelectedWall,className:2==this.state.selectedWallIndex?"image selected":"image"}),Object(j.jsx)("img",{"data-image-selector":"3",src:h,style:{height:"100%"},onClick:this.setSelectedWall,className:3==this.state.selectedWallIndex?"image selected":"image"})]})]}),Object(j.jsx)("button",{className:"card combineButton",onClick:this.fileUploadHandler,disabled:0==this.state.selectedFile||0==this.state.selectedWallIndex,children:"Combine"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("img",{"data-image-selector":"merged-result",className:this.state.isResultReady?"":"hidden",style:{maxHeight:"500px"}}),Object(j.jsx)("canvas",{"data-image-selector":"canvas",className:"hidden"})]}),Object(j.jsx)("footer",{children:Object(j.jsxs)("p",{style:{textAlign:"center"},children:["Shoot me a message with any feature requests!",Object(j.jsx)("br",{}),"\xa9 Kyle Rohlfing - 2020"]})})]})}}]),a}(s.Component),u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,l=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),l(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),u()}},[[15,1,2]]]);
//# sourceMappingURL=main.48e3f2eb.chunk.js.map