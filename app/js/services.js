var gradationListServices = angular.module("gradationListServices", []);

gradationListServices.factory('GradationListService', function(){
  return {
    str_to_date: function (string){
      var parts = string.split('.');
      return new Date(parts[2], parts[1] - 1, parts[0]);
    },

    date_comparator: function (key){
      return function(a, b){
        var aValue = str_to_date(a[key]);
        var bValue = str_to_date(b[key]);
        return ((aValue < bValue) ? -1 : ((aValue > bValue) ? 1 : 0));
      };
    },

    string_comparator: function(key){
      return function(a, b){
        var aValue = a[key].toLowerCase();
        var bValue = b[key].toLowerCase();
        return ((aValue < bValue) ? -1 : ((aValue > bValue) ? 1 : 0));
      };
    },

    is_retired_on: function is_retired_on(retirement_date_string, date){
      if (typeof(date) === "undefined"){ date = new Date(); }
      return str_to_date(retirement_date_string) <= date;
    },
  };
});
