$(document).ready(function() {

	/*实现通知公告滚动效果*/
	// 定义计时器
	var timer;
	// 获取滚动列表
	var $scrollList = $('.notice-list:first');
	// 获取滚动列表项的高度
	var height = $scrollList.find('li:first').height();
	// 设置定时器
	timer = setTimeout(scrollUp,3000);
	// 设置鼠标移入移出事件
	$scrollList.mouseenter(function(ev) {
		clearTimeout(timer);
	}).mouseleave(function(ev) {
		timer = setTimeout(scrollUp,3000);
	})

	function scrollUp() {
		$scrollList.animate({
			marginTop: -height+"px"
		},600,function() {
			$scrollList.css({
				marginTop: 0
			})
			.find('li:first').appendTo($scrollList);
		});
		// 设置定时器，达到持续滚动的效果
		timer = setTimeout(scrollUp,3000);
	}

});