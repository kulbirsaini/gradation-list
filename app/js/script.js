function table_header_map(){
  var tbl_header = {
    'serial' : 'Serial',
    'name' : 'Name',
    'circle' : 'Circle',
    'dob' : 'Date Of Birth',
    'hometown' : 'Hometown',
    'appointment' : 'Appointment Date',
    '55on' : 'Turns 55 On',
    '58on' : 'Turns 58 On',
    'promotion' : 'Promotion Date',
    'recruitment' : 'Recruitment',
    'remark1' : 'Remark 1',
    'remark2' : 'Remark 2'
  };
  return tbl_header;
}

function table_header_keys(){
  return jQuery.map(table_header_map(), function(element,index){ return index; });
}

function table_header_names(){
  return jQuery.map(table_header_map(), function(element,index){ return element; });
}

function str_to_date(string){
  var parts = string.split('.');
  return new Date(parts[2], parts[1] - 1, parts[0]);
}

function is_retired_on(td, date){
  if (typeof(date) === "undefined"){ date = new Date(); }
  return str_to_date(jQuery(td).text()) <= date;
}

function not_retired_on(date){
  if (typeof(date) === "undefined"){ date = new Date(); }
  return jQuery('table tbody tr td:nth-child(8)').filter(function (index){ return !is_retired_on(this, date); });
}

function retired_on(date){
  if (typeof(date) === "undefined"){ date = new Date(); }
  return jQuery('table tbody tr td:nth-child(8)').filter(function (index){ return is_retired_on(this, date); });
}

function table_body_to_json(){
  var tbl_body = $('table tbody tr').get().map(function(row) {
    return $(row).find('td').get().map(function(cell) {
      return $(cell).html();
    });
  });
  return tbl_body;
}

function json2string(){
  var tbl_header = table_header_keys();
  var tbl_body = table_body_to_json();
  var json = [], tmp_object;
  jQuery.each(tbl_body, function(i, array){
    tmp_object = {};
    jQuery.each(array, function(j, value){
      if (j === 0){
        tmp_object[tbl_header[j]] = i + 1;
      } else {
        tmp_object[tbl_header[j]] = value;
      }
    });
    json[i] = tmp_object;
  });
  return JSON.stringify(json);
}
