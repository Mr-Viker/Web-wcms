$(document).ready(function() {

    // 取消li.dropdown点击出现下拉菜单handler并设置鼠标移入class为dropdown的li时出现下拉菜单
    changeDropdown();


    function changeDropdown() {
        // 取消li.dropdown点击出现下拉菜单handler
        $(document).off("click.bs.dropdown.data-api");
        // 获取li.dropdown
        let $dropdownLi = $("li.dropdown");
        // 设置鼠标移入class为dropdown的li时出现下拉菜单
        $dropdownLi.mouseenter(function(ev) {
            $(this).addClass("open");
        }).mouseleave(function(ev) {
            $(this).removeClass("open");
        });
    }

});