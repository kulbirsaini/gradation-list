var gradationListFilters = angular.module('gradationListFilters', []);

gradationListFilters.filter('filterRetired', function(GradationListService){
  return function(collection, retired, retirement_age){
    console.log(retired);
    if (!angular.isArray(collection) || retired == "all" || retirement_age === ""){ return collection; }
    return jQuery(collection).filter(function(index, object){
      if (retired == 'retired'){
        return GradationListService.is_retired_on(object[retirement_age]);
      } else if (retired == 'not_retired'){
        return !GradationListService.is_retired_on(object[retirement_age]);
      } else {
        return false;
      }
    });
  };
});

gradationListFilters.filter('customOrder', function(GradationListService){
  return function(collection, orderKey){
    console.log(orderKey);
    if (!angular.isArray(collection) || orderKey == ""){ return collection; }
    var date_keys = ["dob", "appointment", "55on", "58on", "promotion"];
    var filtered = [];
    angular.forEach(collection, function(item) {
      filtered.push(item);
    });
    if (date_keys.indexOf(orderKey) < 0){
      filtered.sort(GradationListService.string_comparator(orderKey));
    } else {
      filtered.sort(GradationListService.date_comparator(orderKey));
    }
    console.log(filtered);
    return filtered;
  };
});
