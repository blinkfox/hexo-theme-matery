onIsOff = true;//用来控制重复运行的定时器的开关
window.callback = function(res){
if(res.ret === 0){
   window.clearInterval(t2);//如果验证成功就结束定时器
}
if(res.ret === 2){
   onIsOff = true;//如果验证失败就继续运行定时器
}
}

var t2 = window.setInterval(function() {//重复运行的定时器，每一秒执行一次函数
if (onIsOff == true){
        act = document.activeElement.id;//获取当前焦点的id
        if(act=="veditor")//判断评论输入框是否获得焦点
        {
        document.getElementById("TencentCaptcha").click();//触发id为TencentCaptcha的按钮
        onIsOff = false;//触发过程中暂时关闭定时器
        }
}
},1000);