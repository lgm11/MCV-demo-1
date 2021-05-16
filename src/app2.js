import "./app2.css"
import $ from 'jquery'

const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')

$tabBar.on('click','li',e => {//监听tabbar子元素li的点击事件
    const $li = $(e.currentTarget)
    const index = $li.index()//找出点击的是第几个
    $tabContent.children()//然后tabcontent对应的第几个加上active类，其他的兄弟删除active类。然后在css判断是否有active来控制样式。这就叫做样式也行为分离
        .eq(index).addClass('active')
        .siblings().removeClass('active')
    $tabBar.children()
        .eq(index).addClass('active')
        .siblings().removeClass('active')
})

$tabBar.children().eq(0).trigger('click')//默认点击第一个儿子，这是添加默认事件