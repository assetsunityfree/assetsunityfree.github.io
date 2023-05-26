let SHEET_ID = '197XpGtSPCduPMmm0RXqEaphwrjJ6E3RxPSLVKJM5aIs'
let SHEET_TITLE = 'Unity';

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE); // + '&range=' + SHEET_RANGE);

let data = []

fetch(FULL_URL)
.then(res => res.text())
.then(rep => {
    let sheet = JSON.parse(rep.substr(47).slice(0,-2));
    console.log("json: " + "%j" + rep);
    let length = sheet.table.rows.length;
    for(let i = 0;i<length;i++){
        if (sheet.table.rows[i].c[1].v==null
            || sheet.table.rows[i].c[2].v==null
            || sheet.table.rows[i].c[3].v==null
            || sheet.table.rows[i].c[4].v==null
            || sheet.table.rows[i].c[5].v==null)
            continue;
        data.push({ name: sheet.table.rows[i].c[1].v, 
                    version: sheet.table.rows[i].c[2].v, 
                    link1: sheet.table.rows[i].c[3].v, 
                    link2: sheet.table.rows[i].c[4].v.concat(sheet.table.rows[i].c[5].v)})
    }
    renderTable(data);
    })

let renderTable = function (arr) {
    $('#table_body').html('');
    let html = "";
    arr.map((item, index) => {
        html += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td><a href="${item.link1}" target="_blank">${item.name}</a></td>
            <td>${item.version}</td>
            <td><a href="${item.link2}" target="_blank"button class="btn btn-info">Dowload</button></td>
        </tr>
        `
    })
    $('#table_body').append(html);
}

let searchByName = function (arr, name) {
    let item = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name.toLowerCase().includes(name.toLowerCase())) {
            item.push(arr[i])
        }
    }
    return item
}

function search() {
    if(event.key === 'Enter') {
        onSearchClick();       
    }
}

function onSearchClick(){
    let textSearch = $("#textSearch").val();
    let item = searchByName(data, textSearch);
    if (textSearch == "") {
        renderTable(data);
    } else {
        renderTable(item);
    }
}

$("#search").on("click", function () {
    onSearchClick();
});


$("#groupTelegram").on("click", function () {
    window.open("https://t.me/+xRAlp3bWebUyMzQ1", "_blank");
});
