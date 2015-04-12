var gradationListServices = angular.module("gradationListServices", []);

gradationListServices.factory('GradationListService', function(){
  return {
    str_to_date: function (string){
      var parts = string.split('.');
      return new Date(parts[2], parts[1] - 1, parts[0]);
    },

    is_retired_on: function is_retired_on(retirement_date_string, date){
      if (typeof(date) === "undefined"){ date = new Date(); }
      return str_to_date(retirement_date_string) <= date;
    },
  };
});
