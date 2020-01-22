# @Sweetcom/Colors.

[![Discord](https://img.shields.io/discord/539267338193600532?label=Join&logo=discord)](https://discord.gg/kH9gXA)
[![Build Status](http://ci.sweetcom75.fr/buildStatus/icon?job=colors%2Fmaster)](http://sweetcom75.fr/) 
[![license](https://img.shields.io/badge/licence-sweet-red.svg)](http://sweetcom75.fr/) 
[![npm version](https://img.shields.io/npm/v/@sweetcom/colors?style=flat)](https://www.npmjs.com/package/@sweetcom/colors)

Putting colors in terminal is an interesting idea bit, 
what if the user dosent have a terminal that manage colors or have only 16 or 8 colors when you used a 256 colors logger or some other things ..

you will see text like this in your terminal 
~~~
22m 1.83 KiB {[1m[33m0[39m[22m}[1m[32m [built][39m[22m
~~~

##### This package will allow you to add colors to your terminal application with auto terminal detection and adaptation of colors 
##### You will be able to use 255 colors code in Basics terminals
##### Coloration will have no effect on terminals that dosent manage colors
#### Try it its simple and easy to use


[![demo in terminal](http://sweetcom75.fr/assets/colors.png)](https://www.npmjs.com/package/@sweetcom/colors)

## Installation
~~~
npm install @sweetcom/colors --save
~~~



## How to use it
~~~javascript
const Colors = require('@sweetcom/colors');
console.log(Colors.color("text to log",[1..255])); 
console.log(Colors.bgColor("text to log",[1..255])); 
console.log(Colors.bgColor(Colors.color("text to log",[1..255]))); 
~~~

