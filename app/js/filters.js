var gradationListFilters = angular.module('gradationListFilters', []);

gradationListFilters.filter('filterRetired', function(GradationListService){
  return function(collection, retired){
    if (typeof(collection) == "undefined"){ return collection; }
    console.log(retired);
    if (retired == "all"){ return collection; }
    return jQuery(collection).filter(function(index, object){
      if (retired == 'retired'){
        return GradationListService.is_retired_on(object['58on']);
      } else if (retired == 'not_retired'){
        return !GradationListService.is_retired_on(object['58on']);
      } else {
        return false;
      }
    });
  };
});
