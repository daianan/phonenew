$(function() {
	$("#editClose").on("tap", function() {
		history.back();
	});
	//文本域高度自适应
	$.fn.autoTextarea = function(options) {
		var defaults = {
			maxHeight: null,
			minHeight: $(this).height()
		};
		var opts = $.extend({}, defaults, options);
		return $(this).each(function() {
			var _this = $(this);
			_this.bind('paste cur keydown keyup focus blur', function() {
				var height, style = this.style;
				style.height = opts.minHeight + 'px';
				if(this.scrollHeight > opts.minHeight) {
					if(opts.maxHeight && this.scrollHeight > opts.maxHeight) {
						height = opts.maxHeight;
						style.overflowY = 'scroll';
					} else {
						height = this.scrollHeight;
						style.overflowY = 'hidden';
					}
					style.height = height + 'px';
				}
			});
		});
	}
	$(function() {
		$('#editTextarea').autoTextarea({
			maxHeight: 300
		});
	});
});