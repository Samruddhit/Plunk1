// Code goes here

var app=angular.module('Report',[]);
  var message;
  app.controller("mytrl",function($scope){
    
  $scope.message="Hello Angular";
   
   
 var employee={
    firstName:"Samruddhi",
    lastName:"Thakur",
    gender:"Female",
    pic:"https://pbs.twimg.com/profile_images/1131400826/Star_400x400.jpg",
    like:0,
    save:true
    };
  $scope.employee=employee;
  
  $scope.greeting=function(employee){
   employee.like++;
   if (employee.save==true)
        this.employee.like===employee.like;
    
  };
  
  var countries=[
    {name:'UK', 
    cities:[
      {name:'London'}, 
      {name:'Paris'} ,
      {name:'Denmark'}
            ]
      
    },
  { name:'USA' ,cities:[{name:'Newark'},{name:'NYC'},{name:'Jesey City'}]},
   {name:'INDIA' ,cities:[{name:'Mumbai'},{name:'Delhi'},{name:'Banglore'}]}
  ];
    $scope.countries=countries;
    
  });
  
  app.controller("click",function($scope){
    
    var c=0;
    var count= function(c){
      
      c=c+1;
      this.c=c;
      return c;
    };
   
    
    
    
    
    
    
    
  });
  
  
  
