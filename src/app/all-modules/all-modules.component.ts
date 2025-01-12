import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-all-modules',
  templateUrl: './all-modules.component.html',
  styleUrls: ['./all-modules.component.css']
})


export class AllModulesComponent implements OnInit {
// theme: string = localStorage.getItem('theme');
// app :any;
// $ :any;
href:string;
  constructor() {

   }
  ngOnInit() {
  // Function to change webpage fonts

 $(".roboto-font").click(function(){
          $("body").addClass("roboto");
          $("body").removeClass("inter");
          $("body").removeClass("monstret");
          $("body").removeClass("poppins");
        });
    $(".poppins-font").click(function(){
          $("body").removeClass("roboto");
          $("body").removeClass("inter");
          $("body").removeClass("monstret");
          $("body").addClass("poppins");
        });
    $(".montserrat-font").click(function(){
          $("body").removeClass("roboto");
          $("body").removeClass("inter");
          $("body").addClass("monstret");
          $("body").removeClass("poppins");
        });

   $(".inter-font").click(function(){
          $("body").removeClass("roboto");
          $("body").addClass("inter");
          $("body").removeClass("monstret");
          $("body").removeClass("poppins");
        });

   $(".font-Default").click(function(){
        $("body").removeClass("roboto");
          $("body").addClass("inter");
          $("body").removeClass("monstret");
          $("body").removeClass("poppins");
   })
    



    /*local storage*/

    var topNavThemeClass = window.localStorage;


$(function() {

    var headerColors = `theme-default black-mode theme-orange theme-blue theme-grey theme-lgrey theme-dblue theme-pink 
    theme-purple theme-solid-pink theme-solid-orange theme-solid-purple theme-solid-blue theme-solid-green
     header-orange header-blue header-grey header-lgrey header-dblue header-pink 
    header-purple theme-dark theme-solid-black`;


    $(document).ready(function () {
        var navColor = localStorage.getItem('navbar-color');
        if (navColor) {
            $('body').removeClass(headerColors).addClass(navColor);
        }
    });
    $('#theme-change span').on('click', function() {
        if ($(this).hasClass("theme-default")) {
            $('body').removeClass(headerColors).addClass('theme-default');
            localStorage.setItem('navbar-color','theme-default');
        }

        if ($(this).hasClass("theme-solid-black")) {
            $('body').removeClass(headerColors).addClass('theme-solid-black');
            localStorage.setItem('navbar-color', 'theme-solid-black');
        }

        if ($(this).hasClass("theme-orange")) {
            $('body').removeClass(headerColors).addClass('theme-orange');
            localStorage.setItem('navbar-color', 'theme-orange');
        }

        if ($(this).hasClass("theme-dark")) {
            $('body').removeClass(headerColors).addClass('theme-dark');
            localStorage.setItem('navbar-color', 'theme-dark');
        }

        if ($(this).hasClass("theme-dark")) {
            $('body').removeClass(headerColors).addClass('theme-dark');
            localStorage.setItem('navbar-color', 'theme-dark');
        }

        if ($(this).hasClass("theme-blue")) {
            $('body').removeClass(headerColors).addClass('theme-blue');
            localStorage.setItem('navbar-color', 'theme-blue');
        }

        if ($(this).hasClass("theme-grey")) {
            $('body').removeClass(headerColors).addClass('theme-grey');
            localStorage.setItem('navbar-color', 'theme-grey');
        }

        if ($(this).hasClass("theme-lgrey")) {
            $('body').removeClass(headerColors).addClass('theme-lgrey');
            localStorage.setItem('navbar-color', 'theme-lgrey');
        }

        if ($(this).hasClass("theme-dblue")) {
            $('body').removeClass(headerColors).addClass('theme-dblue');
            localStorage.setItem('navbar-color', 'theme-dblue');
        }

        if ($(this).hasClass("theme-pink")) {
            $('body').removeClass(headerColors).addClass('theme-pink');
            localStorage.setItem('navbar-color', 'theme-pink');
        }

        if ($(this).hasClass("theme-purple")) {
            $('body').removeClass(headerColors).addClass('theme-purple');
            localStorage.setItem('navbar-color', 'theme-purple');
        }

        if ($(this).hasClass("theme-solid-pink")) {
            $('body').removeClass(headerColors).addClass('theme-solid-pink');
            localStorage.setItem('navbar-color', 'theme-solid-pink');
        }
        if ($(this).hasClass("theme-solid-orange")) {
            $('body').removeClass(headerColors).addClass('theme-solid-orange');
            localStorage.setItem('navbar-color', 'theme-solid-orange');
        }
        if ($(this).hasClass("theme-solid-purple")) {
            $('body').removeClass(headerColors).addClass('theme-solid-purple');
            localStorage.setItem('navbar-color', 'theme-solid-purple');
        }
        if ($(this).hasClass("theme-solid-blue")) {
            $('body').removeClass(headerColors).addClass('theme-solid-blue');
            localStorage.setItem('navbar-color', 'theme-solid-blue');
        }
        
        if ($(this).hasClass("theme-solid-green")) {
            $('body').removeClass(headerColors).addClass('theme-solid-green');
            localStorage.setItem('navbar-color', 'theme-solid-green');
        }
        

    });
    $('#ChangeprimaryDefault').on('click', function(){
     $('body').removeClass(headerColors).addClass('theme-default');
        localStorage.setItem('navbar-color','theme-default');
    });
   
   $('#ChangedarkDefault').on('click', function(){
     $('body').removeClass(headerColors).addClass('theme-default');
        localStorage.setItem('navbar-color','theme-default');
    });

});



    var topNavThemeClass1 = window.localStorage;


$(function() {

    var headerColors1 = `theme-default black-mode header-solid-pink header-solid-orange header-solid-purple header-solid-blue header-solid-green 
    header-gradient-color1  header-gradient-color2 header-gradient-color3 header-gradient-color4 header-gradient-color5 header-gradient-color6
    header-gradient-color7 header-solid-black  `;

    

    $(document).ready(function () {
        var navColor1 = localStorage.getItem('navbar-color1');
        if (navColor1) {
            $('body').removeClass(headerColors1).addClass(navColor1);
        }
    });
    $('#theme-change1 span').on('click', function() {
        if ($(this).hasClass("theme-default")) {
            $('body').removeClass(headerColors1).addClass('theme-default');
            localStorage.setItem('navbar-color1','theme-default');
        }

        if ($(this).hasClass("header-solid-black")) {
            $('body').removeClass(headerColors1).addClass('header-solid-black');
            localStorage.setItem('navbar-color1', 'header-solid-black');
        }

        if ($(this).hasClass("header-solid-pink")) {
            $('body').removeClass(headerColors1).addClass('header-solid-pink');
            localStorage.setItem('navbar-color1', 'header-solid-pink');
        }

        if ($(this).hasClass("header-solid-orange")) {
            $('body').removeClass(headerColors1).addClass('header-solid-orange');
            localStorage.setItem('navbar-color1', 'header-solid-orange');
        }

        if ($(this).hasClass("header-solid-purple")) {
            $('body').removeClass(headerColors1).addClass('header-solid-purple');
            localStorage.setItem('navbar-color1', 'header-solid-purple');
        }

        if ($(this).hasClass("header-solid-blue")) {
            $('body').removeClass(headerColors1).addClass('header-solid-blue');
            localStorage.setItem('navbar-color1', 'header-solid-blue');
        }

        if ($(this).hasClass("header-solid-green")) {
            $('body').removeClass(headerColors1).addClass('header-solid-green');
            localStorage.setItem('navbar-color1', 'header-solid-green');
        }

        if ($(this).hasClass("header-gradient-color1")) {
            $('body').removeClass(headerColors1).addClass('header-gradient-color1');
            localStorage.setItem('navbar-color1', 'header-gradient-color1');
        }
        if ($(this).hasClass("header-gradient-color2")) {
            $('body').removeClass(headerColors1).addClass('header-gradient-color2');
            localStorage.setItem('navbar-color1', 'header-gradient-color2');
        }
        if ($(this).hasClass("header-gradient-color3")) {
            $('body').removeClass(headerColors1).addClass('header-gradient-color3');
            localStorage.setItem('navbar-color1', 'header-gradient-color3');
        }
        if ($(this).hasClass("header-gradient-color4")) {
            $('body').removeClass(headerColors1).addClass('header-gradient-color4');
            localStorage.setItem('navbar-color1', 'header-gradient-color4');
        }
        if ($(this).hasClass("header-gradient-color5")) {
            $('body').removeClass(headerColors1).addClass('header-gradient-color5');
            localStorage.setItem('navbar-color1', 'header-gradient-color5');
        }
        if ($(this).hasClass("header-gradient-color6")) {
            $('body').removeClass(headerColors1).addClass('header-gradient-color6');
            localStorage.setItem('navbar-color1', 'header-gradient-color6');
        }
        if ($(this).hasClass("header-gradient-color7")) {
            $('body').removeClass(headerColors1).addClass('header-gradient-color7');
            localStorage.setItem('navbar-color1', 'header-gradient-color7');
        }
        
        
    });
    $('#ChageheaderDefault').on('click', function(){
     $('body').removeClass(headerColors1).addClass('theme-default');
        localStorage.setItem('navbar-color1','theme-default');
    });

  

});




    var topNavThemeClass2 = window.localStorage;

$(function() {

    var sidebarColors2 = `theme-default black-mode sidebar-solid-pink sidebar-solid-orange sidebar-solid-purple sidebar-solid-blue sidebar-solid-green 
    sidebar-gradient-color1  sidebar-gradient-color2 sidebar-gradient-color3 sidebar-gradient-color4 sidebar-gradient-color5 sidebar-gradient-color6
    sidebar-gradient-color7  sidebar-solid-black`;

    

    $(document).ready(function () {
        var navColor2 = localStorage.getItem('navbar-color2');
        if (navColor2) {
            $('body').removeClass(sidebarColors2).addClass(navColor2);
        }
    });
    $('#theme-change2 span').on('click', function() {
        if ($(this).hasClass("theme-default")) {
            $('body').removeClass(sidebarColors2).addClass('theme-default');
            localStorage.setItem('navbar-color2','theme-default');
        }

        if ($(this).hasClass("sidebar-solid-black")) {
            $('body').removeClass(sidebarColors2).addClass('sidebar-solid-black');
            localStorage.setItem('navbar-color2', 'sidebar-solid-black');
        }

        if ($(this).hasClass("sidebar-solid-pink")) {
            $('body').removeClass(sidebarColors2).addClass('sidebar-solid-pink');
            localStorage.setItem('navbar-color2', 'sidebar-solid-pink');
        }

        if ($(this).hasClass("sidebar-solid-orange")) {
            $('body').removeClass(sidebarColors2).addClass('sidebar-solid-orange');
            localStorage.setItem('navbar-color2', 'sidebar-solid-orange');
        }

        if ($(this).hasClass("sidebar-solid-purple")) {
            $('body').removeClass(sidebarColors2).addClass('sidebar-solid-purple');
            localStorage.setItem('navbar-color2', 'sidebar-solid-purple');
        }

        if ($(this).hasClass("sidebar-solid-blue")) {
            $('body').removeClass(sidebarColors2).addClass('sidebar-solid-blue');
            localStorage.setItem('navbar-color2', 'sidebar-solid-blue');
        }

        if ($(this).hasClass("sidebar-solid-green")) {
            $('body').removeClass(sidebarColors2).addClass('sidebar-solid-green');
            localStorage.setItem('navbar-color2', 'sidebar-solid-green');
        }

        if ($(this).hasClass("sidebar-gradient-color1")) {
            $('body').removeClass(sidebarColors2).addClass('sidebar-gradient-color1');
            localStorage.setItem('navbar-color2', 'sidebar-gradient-color1');
        }
        if ($(this).hasClass("sidebar-gradient-color2")) {
            $('body').removeClass(sidebarColors2).addClass('sidebar-gradient-color2');
            localStorage.setItem('navbar-color2', 'sidebar-gradient-color2');
        }
        if ($(this).hasClass("sidebar-gradient-color3")) {
            $('body').removeClass(sidebarColors2).addClass('sidebar-gradient-color3');
            localStorage.setItem('navbar-color2', 'sidebar-gradient-color3');
        }
        if ($(this).hasClass("sidebar-gradient-color4")) {
            $('body').removeClass(sidebarColors2).addClass('sidebar-gradient-color4');
            localStorage.setItem('navbar-color2', 'sidebar-gradient-color4');
        }
        if ($(this).hasClass("sidebar-gradient-color5")) {
            $('body').removeClass(sidebarColors2).addClass('sidebar-gradient-color5');
            localStorage.setItem('navbar-color2', 'sidebar-gradient-color5');
        }
        if ($(this).hasClass("sidebar-gradient-color6")) {
            $('body').removeClass(sidebarColors2).addClass('sidebar-gradient-color6');
            localStorage.setItem('navbar-color2', 'sidebar-gradient-color6');
        }
        if ($(this).hasClass("sidebar-gradient-color7")) {
            $('body').removeClass(sidebarColors2).addClass('sidebar-gradient-color7');
            localStorage.setItem('navbar-color2', 'sidebar-gradient-color7');
        }
        

        
    });
          // page theme color  
    
          if($('.themecls').length > 0) {
            const toggleSwitch = document.querySelector('.theme-changes span');
            const currentTheme = localStorage.getItem('theme');
            
            var app = document.getElementsByClassName("themecls")[0]as HTMLAnchorElement;
            if (currentTheme) {
                app.href = "assets/css/"+currentTheme+".css";
            }
            function toggleTheme(e:any) {
                app.href = "assets/css/"+e+".css";
                localStorage.setItem('theme', e);
            }
            $('#style').on('click', function(){
                let x ="style";
                app.href = "assets/css/"+x+".css";
                localStorage.setItem('theme',x );
               });
            $('#style-blue').on('click', function(){
                let x ="style-blue";
                app.href = "assets/css/"+x+".css";
                localStorage.setItem('theme',x );
               });
            $('#style-green').on('click', function(){
                let x ="style-green";
                app.href = "assets/css/"+x+".css";
                localStorage.setItem('theme',x );
               });
            $('#style-pink').on('click', function(){
                let x ="style-pink";
                app.href = "assets/css/"+x+".css";
                localStorage.setItem('theme',x );
               });
            $('#style-orange').on('click', function(){
                let x ="style-orange";
                app.href = "assets/css/"+x+".css";
                localStorage.setItem('theme',x );
               });
            $('#style-purple').on('click', function(){
                let x ="style-purple";
                app.href = "assets/css/"+x+".css";
                localStorage.setItem('theme',x );
               });
            $('#style-red').on('click', function(){
                let x ="style-red";
                app.href = "assets/css/"+x+".css";
                localStorage.setItem('theme',x );
               });
            $('#style-gradient-blue').on('click', function(){
                let x ="style-gradient-blue";
                app.href = "assets/css/"+x+".css";
                localStorage.setItem('theme',x );
               });
            $('#style-gradient-green').on('click', function(){
                let x ="style-gradient-green";
                app.href = "assets/css/"+x+".css";
                localStorage.setItem('theme',x );
               });
            $('#style-gradient-maroon').on('click', function(){
                let x ="style-gradient-maroon";
                app.href = "assets/css/"+x+".css";
                localStorage.setItem('theme',x );
               });
            $('#style-gradient-orange').on('click', function(){
                let x ="style-gradient-orange";
                app.href = "assets/css/"+x+".css";
                localStorage.setItem('theme',x );
               });
            $('#style-gradient-pink').on('click', function(){
                let x ="style-gradient-pink";
                app.href = "assets/css/"+x+".css";
                localStorage.setItem('theme',x );
               });

        }
       
    $('#ChagesidebarDefault').on('click', function(){
     $('body').removeClass(sidebarColors2).addClass('theme-default');
        localStorage.setItem('navbar-color2','theme-default');
    });

    

});
  }
 // var app = document.getElementsByClassName("themecls")[0];

//   toggleTheme(e:any){
//     console.log(e);
//     this.app = document.getElementsByClassName("themecls")[0];
//     if(this.theme) {
//         this.app.href = "assets/css/"+this.theme+".css";
//     }
//     this.app.href = "assets/css/"+e+".css";
//     localStorage.setItem('theme', e);
//   }
}
