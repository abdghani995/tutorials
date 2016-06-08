/*         <grid-screen resource="/api/data.js" title="GridScreen">
              <grid-columns>
                  <grid-column title="Product" field="product"></grid-column>
                  <grid-column title="Description" field="description"></grid-column>
                  <grid-column title="Cost" field="cost"></grid-column>
              </grid-columns>
              <grid with-inline-editor></grid>
          </grid-screen>
*/
var app = angular.module("app",[]);


app.directive("gridScreen",function($http){
    return {
        restrict:'E',
        controller:function($scope){
            //manage columns and editor
            this.setEditor = function(editor){
                
            };
            this.setColumns = function(cols){
                $scope.cols = cols;
            }
        },
        link: function(scope,element,attributes){
          $http.get(attributes.resource)
              .success(function(response){
              scope.rows = response.data;
          });
          console.log('linked gridScreen');
        }
    };
});
app.directive("gridColumns",function(){
    return {
        restrict:'E',
        require:['^gridScreen','gridColumns'],    //access controller of gridScreen
        controller:function(){
          var columns = [];
          this.addColumn = function(col){
            columns.push(col);  
          };
          this.getColumns = function(){
            return columns;    
          };
        },
        link: function(scope,element,attributes,Controllers){
            var gridScreenController = Controllers[0]
            var gridColumnsController = Controllers[1]
            gridScreenController.setColumns(gridColumnsController.getColumns());        
        }
    }
});

app.directive("gridColumn",function(){
    return {
        restrict:'E',
        require:['^gridColumns'],
        link: function(scope.element,attributes,gridColumnsController){
           gridColumnsController.addColumn({
               title:attributes.title,
               field:attributes.field
           });
        }
    }
});

app.directive("grid",function(){
    return {
    restrict:'E',
    templateUrl:"template/as"
    controller: function(){
            
    }
}
});

app.directive("withInlineEditor",function(){
    return{
        restrict:'A',
        link: function(){
      
        }
    }
});


