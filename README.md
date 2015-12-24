#PDF.js文件阅读
    PDF.js适用于在HTML5编写的网页上实现在线阅读PDF文档功能。无需任何本地支持，而且对浏览器的兼容性也是比较好，要求只有一个：浏览器支持HTML5就好了！（不过对于低版本的IE，就只能节哀了）
####官方地址：http://mozilla.github.io/pdf.js/

##兼容性
* ie9+

##样例：

###1、使用步骤
* 引入样式文件（pdf.css，locale.properties）
```javascript
<link rel="stylesheet" href="web/pdf.css"/>
<link rel="resource" type="application/l10n" href="web/locale/locale.properties"/>
```
* 引入js文件（touch.min.js，compatibility.js，l10n.js，pdf.js，debugger.js，viewer.js,api.js）
```javascript
<script type="text/javascript" src="web/touch.min.js"></script>//触摸组件
<script type="text/javascript" src="web/compatibility.js"></script>//兼容性文件
<script type="text/javascript" src="web/l10n.js"></script>//页面标签识别
<script type="text/javascript" src="build/pdf.js"></script>//PDF主要js文件
<script type="text/javascript" src="web/debugger.js"></script>//debugger调试入口
<script type="text/javascript" src="web/viewer.js"></script>//PDF配置入口
<script type="text/javascript" src="web/api.js"></script>//触摸放大缩小入口
```
* 在页面上添加代码
```javascript
<body tabindex="1" class="loadingInProgress">
<!-- 外部容器 -->
<div id="outerContainer">
    <!-- 侧栏展开缩略图 -->
    <div id="sidebarContainer">
        ......
    </div>
    <!-- 主要容器 -->
    <div id="mainContainer">
        ......
    </div>
    <!-- 弹出框 -->
    <div id="overlayContainer" class="hidden">
        ......
    </div>
</div>
</body>
```

###2、demo
* [PDF文件阅读demo](http://192.168.14.97:8080/acc/plugin/PDF)

##配置和API
###1、PDF配置入口（viewer.js文件）
```javascript
var DEFAULT_URL = 'pdf/IT.pdf';//PDF文档文件读取
var DEFAULT_SCALE_DELTA = 1.1;//默认文档缩放倍数
var MIN_SCALE = 0.25;//最小缩小倍数
var MAX_SCALE = 10.0;//最大放大倍数
```

###2、touch配置入口（api.js文件）
```javascript
touch.on(document, "DOMContentLoaded", function(){
	var initialScale = 0.3,//初始化容器缩放倍数
		initialPdf = 0,//初始化PDF缩放倍数
		currentScale;//目前容器缩放倍数
	touch.on('#viewerContainer', 'doubletap', function(ev){//双击事件
		if(initialPdf == 0){//放大
			PDFViewerApplication.pdfViewer.currentScaleValue = 1;
			initialPdf = 1;
		} else {//缩小
			PDFViewerApplication.pdfViewer.currentScaleValue = 0.3;
			initialPdf = 0;
		}
	});
});
```

###3、API
* [PDF.js的API详细参数地址](http://mozilla.github.io/pdf.js/api/)
* [touch.js的API详细参数地址](http://cloudajs.org/docs/step4_API_Documentation#h2_7)






