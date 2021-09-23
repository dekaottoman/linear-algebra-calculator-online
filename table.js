function generate_cell(row_no,col_no){
    var cell = "<input type='number' value='0' id='C" + (row_no + 1) + (col_no + 1) + "'>";
    return cell;
}

function generate_row(col_count, row_no){
    var row = "<tr>"
    for(var i=0;i<col_count;i++){
        row += "<td>" + generate_cell(row_no,i) + "</td>"
    }
    row += "</tr>";

    return row;
}

function generate_table(row_count,col_count,display_id){
    var table = "<table><tbody>";
    for(var i=0;i<row_count;i++){
        table += generate_row(col_count, i);
    }
    table += "</tbody></table>";
    document.getElementById(display_id).innerHTML = table;
}

function generate_output_row(col_count, row_no){
    var row = "<tr>"
    for(var i=0;i<col_count;i++){
        row += "<td id='OC" + (row_no + 1) + (i + 1) + "'></td>"
    }
    row += "</tr>";
return row;
}

function generate_output_table( row_count,col_count,display_id){
    var table = "<table><tbody>";
    for(var i=0;i<row_count;i++){
        table += generate_output_row(col_count, i);
    }
    table += "</tbody></table>";
    document.getElementById(display_id).innerHTML = table;
}