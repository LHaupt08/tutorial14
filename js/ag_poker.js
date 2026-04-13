"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 14
   Tutorial Case

   Author: Lukas Haupt
   Date:   4/13/26
   
   Filename: ag_poker.js

*/

window.addEventListener("load", playDrawPoker);

function playDrawPoker() {
   var dealButton = document.getElementById("dealB");
   var drawButton = document.getElementById("drawB");
   var standButton = document.getElementById("standB");
   var resetButton = document.getElementById("resetB");
   var handValueText = document.getElementById("handValue");
   var betSelection = document.getElementById("bet");
   var bankBox = document.getElementById("bank");

   // Enable the Draw and Stand buttons after the deal
   dealButton.addEventListener("click", function() {
      disableObj(dealButton);
      disableObj(betSelection);
      enableObj(drawButton);
      enableObj(standButton);
   });

   drawButton.addEventListener("click", function() {
      enableObj(dealButton);
      enableObj(betSelection);
      disableObj(drawButton);
      disableObj(standButton);
   });

   standButton.addEventListener("click", function() {
      enableObj(dealButton);
      enableObj(betSelection);
      disableObj(drawButton);
      disableObj(standButton);
   });

   // Disable Poker Button
   function disableObj(obj) {
      obj.disabled = true;
      obj.style.opacity = 0.25;
   }

   // Enable Poker Button
   function enableObj(obj) {
      obj.disabled = false;
      obj.style.opacity = 1;
   }
}