import "./app3.css"
import $ from "jquery"
const $square = $('#app3 .square')
$square.on('click',()=>{
    $square.toggleClass('active')//addClass的加强版，不只是加上，有就删除，没有就加上
})