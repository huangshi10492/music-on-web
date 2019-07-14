var ap = [];
var music = new Array();
var ap = new APlayer({
        element: document.getElementById('aplayer'),
        lrcType: 3,//歌词类型 
        volume: 1,//音量，100% 
        mutex: true,//互斥打开，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器 
        fixed: true,//吸底模式，就是本站左下角播放器样式 
        autoplay: open,//自动播放打开，关闭改成 false 
        order: 'list',//顺序播放，随机播放改成random 
});