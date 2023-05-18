// let data = [
//     { Name: "facebook", version: "1.0", link: "https://www.facebook.com/" },
//     { Name: "google", version: "2.0", link: "https://www.google.com/" },
//     { Name: "youtube1", version: "1.0", link: "https://www.youtube.com/" },
// ]

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
        if (sheet.table.rows[i].c[1]==null
            || sheet.table.rows[i].c[2]==null
            || sheet.table.rows[i].c[3]==null
            || sheet.table.rows[i].c[4]==null
            || sheet.table.rows[i].c[5]==null)
            continue;
        data.push({ name: sheet.table.rows[i].c[1].v, 
                    version: sheet.table.rows[i].c[2].v, 
                    link1: sheet.table.rows[i].c[3].v, 
                    link2: sheet.table.rows[i].c[5].v })
    }
    renderTable(data);

    //console.log("tables: " + json.tables);
    // let player_Name_title = document.getElementById('player_Name_title');
    // let player_Shoe_title = document.getElementById('player_Shoe_title');
    // let player_Name = document.getElementById('player_Name');
    // let player_Shoe = document.getElementById('player_Shoe');
    // let length = data.table.rows.length;


    // player_Name_title.innerHTML = data.table.rows[0].c[0].v;
    // player_Shoe_title.innerHTML = data.table.rows[0].c[1].v;
    // let selectOptionPlayer = document.createElement('select');
    // player_Name.append(selectOptionPlayer);

    // for(let i = 1;i<length;i++){

    //     let NewBoxPlayer = document.createElement('option');
    //     NewBoxPlayer.id = ("box"+i);
    //     NewBoxPlayer.className = "Some_Style";
    //     selectOptionPlayer.append(NewBoxPlayer);
    //     NewBoxPlayer.innerHTML = data.table.rows[i].c[0].v;

    //     let NewBoxShoe = document.createElement('div');
    //     let space = document.createElement('hr');
    //     let space2 = document.createElement('hr');
    //     NewBoxShoe.id = ("box"+i);
    //     NewBoxShoe.className = "Some_Style";
    //     player_Shoe.append(NewBoxShoe);
    //     player_Shoe.append(space);
    //     player_Shoe.append(space2);
    //     NewBoxShoe.innerHTML = data.table.rows[i].c[1].v; 

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
            <td><button class="btn btn-info">Dowload</button></td>
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

$("#search").on("click", function () {
    let textSearch = $("#textSearch").val();
    let item = searchByName(data, textSearch);
    if (textSearch == "") {
        renderTable(data);
    } else {
        renderTable(item);
    }
});


