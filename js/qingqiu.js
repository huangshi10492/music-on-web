

function AcopyText() {
  var wyid = document.getElementById('wyso').value;
  layui.use('table', function () {
    var table = layui.table;

    table.render({
      elem: '#test'
      , url: "https://api.mlwei.com/music/api/wy/?key=523077333&type=so&nu=30&id=" + wyid
      , title: 'item'
      , toolbar: "turn"
      , cols: [[
        { field: 'id', title: 'ID', type: "normal", }
        , { field: 'title', title: '曲名', type: "normal" }
        , { field: 'author', title: '歌手', type: "normal" }
        , { field: 'url', title: '地址', type: "normal" }
        , { fixed: 'right', title: '操作', toolbar: '#barDemo', width: 150 }
      ]]
      , response: {
        statusName: "Code",
        statusCode: "OK"//重新规定成功的状态码为 200，table 组件默认为 0
      }
      , parseData: function (res) { //将原始数据解析成 table 组件所规定的数据
        return {
          "Code": res.Code, //解析接口状态
          "data": res.Body //解析数据列表
        };
      }
    });
  });
};
function BcopyText() {
  var qqid = document.getElementById('qqso').value;
  layui.use('table', function () {
    var table = layui.table;

    table.render({
      elem: '#test'
      , url: "https://api.mlwei.com/music/api/?key=523077333&type=so&id=" + qqid
      , title: 'item'
      , toolbar: true
      , cols: [[
        { field: 'mid', title: 'ID', type: "normal", }
        , { field: 'title', title: '曲名', type: "normal" }
        , { field: 'author', title: '歌手', type: "normal" }
        , { field: 'url', title: '地址', type: "normal" }
      ]]
      , response: {
        statusName: "Code",
        statusCode: "OK"//重新规定成功的状态码为 200，table 组件默认为 0
      }
      , parseData: function (res) { //将原始数据解析成 table 组件所规定的数据
        return {
          "Code": res.Code, //解析接口状态
          "data": res.Body //解析数据列表
        };
      }
    });
  });
};
layui.use('table', function () {
  var table = layui.table;
  table.on('tool(test)', function (obj) {
    var id = obj.data.id;
    console.log(id)
    if (obj.event === 'turn in') {
      
      $.ajax({
        type: "GET",
        url: "https://api.mlwei.com/music/api/wy/?key=523077333&cache=1&type=song&id=" + id,
        dataType: 'json',
        success: function (data) {
          ap.list.add(data)
        },
        error: function () {
          console.log(error);

        }
      })
    };
  });
});