$(function(){
	var footerNavs=$("#footerNav li a");
	footerNavs.eq(1).addClass('footerNavSel').siblings('li').removeClass('footerNavSel');
});