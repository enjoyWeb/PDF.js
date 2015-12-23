(function(){
	touch.on(document, "DOMContentLoaded", function(){

		var initialScale = 0.3,
			initialPdf = 0,
			currentScale;
		touch.on('#viewerContainer', 'pinchend', function(ev){
			currentScale = currentScale - 0.3;
			currentScale = initialScale + currentScale;
			currentScale = currentScale > 1 ? 1 : currentScale;
			currentScale = currentScale < 0.3 ? 0.3 : currentScale;
			PDFViewerApplication.pdfViewer.currentScaleValue = currentScale;
		});
		touch.on('#viewerContainer', 'pinchend', function(ev){
			initialScale = currentScale;
		});
		touch.on('#viewerContainer', 'doubletap', function(ev){
			if(initialPdf == 0){
				//PDFViewerApplication.zoomIn();
				PDFViewerApplication.pdfViewer.currentScaleValue = 1;
				initialPdf = 1;
			} else {
				//PDFViewerApplication.zoomOut();
				PDFViewerApplication.pdfViewer.currentScaleValue = 0.3;
				initialPdf = 0;
			}
		});

	});
})();
