function AcopyText() {
    var wyid = document.getElementById('wyso').value;
    $.ajax({
        type: "GET",
        url: "https://api.mlwei.com/music/api/wy/?key=523077333&type=so&id=" + wyid,
        dataType: 'json',
        success: function (data) {
            var i;
            var html = "";//用一个变量来存储json中的数据
            for (i = 0; i < data.Body.length; i++) { //用for循环遍历数组将数据存入html变量中
                html += `<tr>
                        <td>${data.Body[i].title}</td>
                        <td>${data.Body[i].author}</td>
                        <td>${data.Body[i].url}</td>
                        <td>${data.Body[i].id}</td>
                        </tr>`;
            }
            document.getElementById("box").innerHTML = html;
        },
        error: function () {
            document.getElementById("box").innerHTML = "no";
        }
    });
};
function BcopyText() {
    var qqid = document.getElementById('qqso').value;
    $.ajax({
        type: "GET",
        url: "https://api.mlwei.com/music/api/?key=523077333&type=so&id=" + qqid,
        dataType: 'json',
        success: function (data) {
            var i;
            var html = "";//用一个变量来存储json中的数据
            for (i = 0; i < data.Body.length; i++) { //用for循环遍历数组将数据存入html变量中
                html += `<tr>
                            <td>${data.Body[i].title}</td>
                            <td>${data.Body[i].author}</td>
                            <td>${data.Body[i].url}</td>
                            <td>${data.Body[i].mid}</td>
                            </tr>`;
            }
            document.getElementById("box").innerHTML = html;
        },
        error: function () {
            document.getElementById("box").innerHTML = "no";
        }
    });
};