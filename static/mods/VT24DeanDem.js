
//Coded by Ohas or _ohas on Discord. Writting by falterinarc and TheNorthEast
//Credits for the various systems in the code go as follows
//Decstar for the music system
//Nina for the tooltips system
//Onkel Danny for the ending system/the music ending systm
//A Big thanks to Astro and Jets for there modding guides and modding platform/tool respectivly
// We hearby realse this mod under Non-Commercial LGPL
//Oh yeah and credits to Chat GPT for being a super good way to bugfix code
//Anyother modder is free to use any of the custom functions, associated with soundtrack changing and name changeing.
(function(e,t,n,r,i){function s(e,t,n,r){r=r instanceof Array?r:[];var i={};for(var s=0;s<r.length;s++){i[r[s]]=true}var o=function(e){this.element=e};o.prototype=n;e.fn[t]=function(){var n=arguments;var r=this;this.each(function(){var s=e(this);var u=s.data("plugin-"+t);if(!u){u=new o(s);s.data("plugin-"+t,u);if(u._init){u._init.apply(u,n)}}else if(typeof n[0]=="string"&&n[0].charAt(0)!="_"&&typeof u[n[0]]=="function"){var a=Array.prototype.slice.call(n,1);var f=u[n[0]].apply(u,a);if(n[0]in i){r=f}}});return r}}var o=370,u=215,a=10;var f={stateStyles:{fill:"#333",stroke:"#666","stroke-width":1,"stroke-linejoin":"round",scale:[1,1]},stateHoverStyles:{fill:"#33c",stroke:"#000",scale:[1.1,1.1]},stateHoverAnimation:500,stateSpecificStyles:{},stateSpecificHoverStyles:{},click:null,mouseover:null,mouseout:null,clickState:{},mouseoverState:{},mouseoutState:{},showLabels:true,labelWidth:20,labelHeight:15,labelGap:6,labelRadius:3,labelBackingStyles:{fill:"#333",stroke:"#666","stroke-width":1,"stroke-linejoin":"round",scale:[1,1]},labelBackingHoverStyles:{fill:"#33c",stroke:"#000"},stateSpecificLabelBackingStyles:{},stateSpecificLabelBackingHoverStyles:{},labelTextStyles:{fill:"#fff",stroke:"none","font-weight":300,"stroke-width":0,"font-size":"10px"},labelTextHoverStyles:{},stateSpecificLabelTextStyles:{},stateSpecificLabelTextHoverStyles:{}};var l={_init:function(t){this.options={};e.extend(this.options,f,t);var n=this.element.width();var i=this.element.height();var s=this.element.width()/o;var l=this.element.height()/u;this.scale=Math.min(s,l);this.labelAreaWidth=Math.ceil(a/this.scale);var c=o+Math.max(0,this.labelAreaWidth-a);this.paper=r(this.element.get(0),c,u);this.paper.setSize(n,i);this.paper.setViewBox(-323, -89, 92, 989, false);this.stateHitAreas={};this.stateShapes={};this.topShape=null;this._initCreateStates();this.labelShapes={};this.labelTexts={};this.labelHitAreas={};if(this.options.showLabels){this._initCreateLabels()}},_initCreateStates:function(){var t=this.options.stateStyles;var n=this.paper;var r={Windsor:"M 316.53 368.69 316.79 374.59 321.53 376.78 322.07 379.38 320.91 381.84 336.32 387.65 337.07 386.51 363.55 396.67 400.03 412.05 399.73 412.53 413.77 416.44 430.37 421.64 464.3 435.2 460.52 437.87 456.99 444.03 454.24 445.04 446.62 450.48 440.5 457.9 439.1 461.72 438.89 465.99 439.63 467.72 438.96 471.74 436.88 475.36 436.58 480.58 433.51 482.12 431.67 489.87 433.32 492.54 432.28 495.15 427.84 499.21 421.9 502.03 420.19 504.13 419.57 507.44 420.15 515.53 417.94 519.93 416.64 520.23 415.55 525.1 416.12 526.97 419.05 529.68 420.04 532.07 419.84 536.7 417.07 541.94 417.6 546.76 416.32 551.18 414.26 567.41 411.89 570.07 411.18 572.78 411.84 577.58 417.56 580.27 415 583.48 412.62 588.39 416.42 594.89 414.85 598.24 413.28 605.38 409.79 612.16 406.32 613.89 405.37 618.85 406.69 622.75 377.29 621.75 344.89 625.82 342.55 626.34 324.37 620.34 308.39 614.6 308.38 599.5 295.97 599.04 296.98 582.28 299.59 582.09 300.22 572.69 307.95 572.91 307.97 571.21 324.07 580.77 323.11 574.46 329.24 558.6 333.31 543.62 332.89 540.8 320.94 537.06 321.52 532.64 316.24 531.56 318.34 514.37 321.03 497.96 324.46 499.25 331.47 484.15 339.28 465.46 308.92 454.18 313.01 445.74 309.14 443.86 318.41 423.8 316.08 419.45 316.3 417.32 314.89 415.03 306.39 411.53 304.43 414.96 295.48 411.31 295.36 404.89 273.79 415.92 270.55 401.73 268.7 402.69 268.76 396.09 275.54 398.94 294.91 389.32 295.45 402.8 297.69 403.65 310.13 377.18 311.73 377.78 316.53 368.69 Z", Essex:"M 538.38 3.99 570.99 2.58 589.67 2.41 609.96 1.75 622.15 1.67 645.89 1 642.48 3.19 641.98 4.99 639.73 5.43 636.09 3.01 631.04 5.26 628.25 7.85 627.67 10.41 630.72 15.95 633.31 18.42 633.07 23.74 633.67 31.36 636.42 34.06 638.56 37.58 634.15 43.12 633.03 46.04 629.23 51.43 626.47 52.62 626.01 55.9 624.08 59.31 625.31 62.26 623.77 63.78 622.47 67.6 619.72 68.55 619.11 71.42 620.96 73.13 619.89 76.45 620.36 78.05 618.31 81.08 615.15 81.83 614.53 84.36 610.43 88.26 609.24 91.08 605.48 92.45 607.19 95.82 606.97 100.6 613.89 109.5 615.07 111.69 614.14 113.5 615.1 116.26 614.66 118.42 617.14 119.54 617.31 125.27 619.06 127.66 623.04 127.13 624.32 131 622.99 132.6 625.79 134.86 624.74 138.53 625.51 142.45 623.85 145.44 625.63 147.72 629 148.79 629.69 150.43 627.39 153.05 626.72 155.9 624.33 157.74 621.71 158.35 617.19 157.35 615.1 159.08 614.88 161.54 620.59 166.08 620.6 169.17 618.53 172.12 615.72 172.73 618.62 177.4 620.14 178.81 615.59 182.58 614.59 185.08 609.97 185.28 608.34 189.01 606.11 187.98 603.26 189.06 603.66 194.14 601.4 194.19 599.68 200.85 598.76 202.14 594.82 203.38 595.66 205.33 589.17 210.58 586.08 212.09 580.58 212.19 579.18 215 575.72 213.29 573.5 213.25 570.11 215.64 567.09 215.51 564.2 217.93 564.84 220.51 561.22 221.94 560.79 227 561.79 230.51 560.2 232.05 555.48 233.9 531.37 201.55 538.82 196.76 550.34 182.2 537.17 164.31 553.59 142.26 536.6 129.86 554.61 105.5 529.07 87.21 520.2 81.07 531.4 66.23 533.71 63.68 544.04 49.02 533.5 41.17 538.38 3.99 Z", Washington:"M 276.34 299.15 290.89 258.58 288.15 257.71 299.48 227.69 306.61 230.56 308.29 230.47 314.23 220.2 304.89 214.99 313.69 198.15 323.49 201.35 334.87 207.55 351.24 216.92 364.78 190.58 365.53 188.7 391.42 208.01 393.63 202.73 397.99 195.04 406.25 179.43 458.82 207.58 460.51 212.3 447.33 237.05 435.67 251.57 435.74 260.81 422.7 284.64 410.07 278.77 404.03 310.81 400.98 309.23 374.83 298.93 373.76 301.76 368.09 299.85 357.38 325.06 356.03 324.54 343.81 351.16 328.89 345.26 302.17 334.42 290.07 329.78 285.07 330.37 283.86 322.41 281.36 301.23 280.89 298.68 276.34 299.15 Z", Windham:"M 308.39 614.6 324.37 620.34 342.55 626.34 344.89 625.82 377.29 621.75 406.69 622.75 404.98 627.62 405.7 633.29 402.49 636.87 404.16 640.44 401.92 643.96 402.18 649.87 400.82 652.86 402.07 655.52 404.9 656.61 404.38 658.56 406.93 662.23 406.45 665.62 404.36 668.78 406.37 673.73 403.82 679.05 399.06 683.91 398.16 685.56 399.98 689.73 399.28 693.96 400.8 697.88 403.98 700.21 402.93 703.49 400.06 703.87 398.68 707.53 399.63 709.85 396.51 713.63 394.5 712.96 391.71 715.16 385.1 716.72 381.58 719.58 380.97 721.34 383 724.82 382.88 728.76 383.61 732.27 382.07 734.68 381.75 739.43 379.38 742.41 376.27 743.95 375.4 750.22 375.91 752.63 375.14 755.07 377.36 758.9 378.33 766.41 379.65 771.85 385.1 776.79 387.54 780.53 387.67 782.38 385.52 784.44 386.45 786.13 392.09 783.12 395.99 788.26 396.73 792.37 399.83 796.79 400.47 799 359.92 797.46 310.4 795.47 279.32 794.44 280.37 765.12 280.18 762.87 281.37 733.17 281.27 728.89 259.68 727.68 261.16 695.27 261.8 695.31 261.61 677.36 263.18 662.19 275.32 662.68 288.12 663.74 295.79 664.02 297.48 632.24 300.16 632.39 301.14 612.19 308.39 614.6 Z", Bennington:"M 197.78 593.52 219.65 594.79 238.98 596.49 250.63 596.52 265.7 597.33 264.46 602.3 268.65 602.38 268.83 597.64 295.97 599.04 308.38 599.5 308.39 614.6 301.14 612.19 300.16 632.39 297.48 632.24 295.79 664.02 288.12 663.74 275.32 662.68 263.18 662.19 261.61 677.36 261.8 695.31 261.16 695.27 259.68 727.68 281.27 728.89 281.37 733.17 280.18 762.87 280.37 765.12 279.32 794.44 190.38 791.41 186.83 771.92 188.71 767.77 187.88 765.58 188.36 760.73 190.08 760.98 191.02 738.76 191.5 723.75 193.01 690.49 194.27 669.5 196.45 622.97 197.11 612.75 197.78 593.52 Z", Grand:"M 178.77 13.02 178.36 10.68 181.29 2.52 204.5 2.29 214.22 2.06 211.98 11.05 210.72 12.68 207.94 18.68 202.46 20.51 200.43 22.29 201.81 28.46 199.04 33.09 198.13 36.31 199.16 37.51 198.64 41.21 195.24 52.83 193.21 54.36 188.94 52.05 188.96 50.34 190.94 46.08 190.42 40.49 188.38 39.42 188.37 35.7 189.47 32.68 188.5 27.35 190.22 22.41 190.69 18.06 188.72 12.36 181.89 11.77 178.77 13.02 Z M 198.6 54.17 197.81 47.54 199.5 43.29 201.33 42.7 205.54 34.38 206.67 34.14 208.26 37.77 208.58 46.88 205.4 47.94 203.55 50.37 203.93 53.52 202.32 55.23 201.88 57.92 198.26 66.1 196.61 68.99 194.59 69.77 193.88 78.22 194.27 82.73 192.42 86.67 190.62 84.84 189.22 87.51 185.91 87.85 185.01 86.16 185.47 82.89 187.48 79.95 188.18 76.59 187.63 70.22 188.7 67.76 191.09 69.4 192.66 65.21 195.6 65.54 197.08 64.1 197.68 61.09 195.44 59.47 196.23 54.85 198.6 54.17 Z M 206.55 67.63 207.37 64.73 211.19 59.99 212.6 60.87 213.18 63.63 210.47 63.65 207.62 69.07 206.55 67.63 Z M 199.78 92.38 202.61 96.53 201.84 100.75 195.21 103.3 194.88 108.25 193.25 113.32 193.55 114.87 190.93 119.79 186.47 122.05 186.41 126.44 187.97 128.28 191.98 128.06 193.21 127.16 194.56 121.69 196.22 123.66 197.19 128.38 199.41 131.65 199.01 134.78 197.08 136.18 196.31 141.55 192.13 141.76 190.69 146.05 188 145.98 187.36 143.41 185.42 141.04 185 138.4 178.28 137.19 178.85 132.38 178.47 118.27 177.9 111.32 183.55 95.74 185.04 96.02 187.86 92.65 190.73 94.51 193.44 93.88 194.46 87.83 198 87.69 199.78 92.38 Z M 181.33 65.27 179.87 66.01 176.74 64.26 177.04 61.62 175.17 59.6 176.15 57.76 177.4 48.25 180.57 38.94 187.05 40.63 187.6 43.42 184.64 51.52 185.84 54.44 183.47 57.2 184.43 58.39 182.16 61.66 181.33 65.27 Z", Orleans:"M 376.49 4.5 381.78 4.64 394.51 4.29 402.46 4.41 414.23 5.07 427.27 5.39 436.79 6 446.49 5.85 473.78 5.05 487.99 5.19 507.72 4.67 526.54 4.01 538.38 3.99 533.5 41.17 544.04 49.02 533.71 63.68 531.4 66.23 520.2 81.07 529.07 87.21 514.23 107.65 511.3 111.92 485.62 94.3 491.96 116.82 477.84 110.12 476.86 112.44 463.89 138.18 462.74 140.75 448.94 166.65 439.06 161.46 423.07 153.37 421.24 152.2 421.93 149.01 394.1 134.83 410.33 103.87 389.6 93.55 370.18 83.69 381.56 65.17 379.57 33.16 380.78 33.12 376.49 4.5 Z", Lamoille:"M 370.18 83.69 389.6 93.55 410.33 103.87 394.1 134.83 421.93 149.01 421.24 152.2 407.66 177.15 406.25 179.43 397.99 195.04 393.63 202.73 391.42 208.01 365.53 188.7 364.78 190.58 351.24 216.92 334.87 207.55 323.49 201.35 313.69 198.15 305.35 195.54 314.06 179.21 307.31 175.65 312.54 165.12 308.29 163.72 300.51 153.57 287.76 135.58 284.32 134.86 283.47 130.5 289.52 130.31 292.3 127.09 302.61 107.81 316.89 115 320.4 96.49 321.64 96.73 323.1 89.13 325.6 89.61 326.48 84.95 328.78 85.35 328.53 80.41 332.95 75.56 361.62 76.88 360.84 78.47 365.51 81.54 366.38 80.41 370.18 83.69 Z", Addison:"M 276.34 299.15 280.89 298.68 281.36 301.23 283.86 322.41 285.07 330.37 290.07 329.78 302.17 334.42 328.89 345.26 325.89 351.39 316.53 368.69 311.73 377.78 310.13 377.18 297.69 403.65 295.45 402.8 294.91 389.32 275.54 398.94 268.76 396.09 268.7 402.69 270.55 401.73 273.79 415.92 259.27 423.22 256.9 410.22 256.12 408.62 224.27 409.93 224.41 410.85 208.41 411.55 211.39 436.13 173.51 440.3 176.48 437.18 176.73 432.79 174.92 430.45 174.11 426.47 171.04 425.3 168.45 420.29 165.17 416.3 167.93 411.82 169.9 412.13 170.87 408.38 169.73 403.91 171.2 400.8 171.13 396.86 169.52 394.56 169.39 388.64 164.64 386.51 164.86 380.04 162.72 379.26 162.39 377.07 163.83 374.21 162.48 372.11 162.06 364.94 161.43 363.03 163.74 360.39 162.68 356.16 164.33 352.56 165.15 348.61 162.72 345 158.32 342.36 157.53 337.79 160.51 332.17 159.72 329.01 164.51 322.77 167.01 321.3 166.53 317.79 167.43 314.48 171.55 308.98 174.04 297.6 176.23 293.2 171.2 290.87 171.67 287.33 174.87 284.88 176.28 281.41 179.33 279.01 184.41 278.8 185.98 275.37 185.21 271.85 187.59 270.43 194.12 270.63 194.94 275.06 196.8 275.09 195.39 271.14 198.68 271.15 197.92 268.79 194.72 266.89 196.73 264.17 215.27 262.07 226.46 260.14 246.92 256.33 247.06 257.69 260.47 255.88 259.54 249.48 270.66 252.58 273.15 274.76 276.34 299.15 Z", Franklin:"M 376.49 4.5 380.78 33.12 379.57 33.16 381.56 65.17 370.18 83.69 366.38 80.41 365.51 81.54 360.84 78.47 361.62 76.88 332.95 75.56 328.53 80.41 328.78 85.35 326.48 84.95 325.6 89.61 323.1 89.13 321.64 96.73 320.4 96.49 316.89 115 302.61 107.81 292.3 127.09 289.52 130.31 283.47 130.5 284.32 134.86 255.92 128.45 239.48 119.43 214.06 106 217.01 97.24 220.27 93.3 220.84 91.26 224.96 89.3 225.41 87.12 230.39 80.59 231.83 74.77 227.96 72.83 225.79 77.57 222.85 78.62 222.11 82.77 219.5 82.22 219 80.32 220.75 75.88 222.72 75.65 223.67 73.2 220.55 70.57 218.74 70.34 219.66 64.52 221.07 51.42 222.62 48.72 224.55 42.88 224.63 39.48 225.94 34.76 225.05 32.12 221.25 29.75 218.13 29 215.85 29.56 214.3 32.91 210.87 30.99 209.6 28.2 211.16 21.95 213.92 16.39 217.14 15.5 219.35 13.17 220.87 9.69 225.37 10.34 226.09 6.91 225.73 4.19 229.69 3.21 233.11 4.88 230.29 7.79 230.4 13.87 232.84 15.22 234.88 14.33 238.3 15.53 244.12 10.15 243.4 2.52 245.15 1.72 262.51 1.76 274.07 2.14 304.34 1.4 321.24 1.74 346.59 1.95 367.59 2.76 376.49 4.5 Z M 213.06 85.92 214.97 84.07 217.38 84.95 213.74 87.54 213.06 85.92 Z", Caledonia:"M 406.25 179.43 407.66 177.15 421.24 152.2 423.07 153.37 439.06 161.46 448.94 166.65 462.74 140.75 463.89 138.18 476.86 112.44 477.84 110.12 491.96 116.82 485.62 94.3 511.3 111.92 514.23 107.65 529.07 87.21 554.61 105.5 536.6 129.86 553.59 142.26 537.17 164.31 550.34 182.2 538.82 196.76 531.37 201.55 555.48 233.9 551.78 236.32 546.82 237.83 539.33 234.1 535.55 234.47 532.65 237.61 524.14 238.02 519.64 237.72 518.31 239.92 513.97 242.43 510.22 243.8 507.67 243.05 506.8 250 505.11 252.28 500.28 255.69 497.91 260.9 500.39 261.66 500.11 265.91 503.12 272.3 501.72 276.65 502 279.14 500.26 282.13 500.14 285.57 498.63 289.29 500.83 292.88 501.97 296.89 504.36 300.65 472.41 288.65 471.49 288.41 438.68 291.85 422.7 284.64 435.74 260.81 435.67 251.57 447.33 237.05 460.51 212.3 458.82 207.58 406.25 179.43 Z", Rutland:"M 173.51 440.3 211.39 436.13 208.41 411.55 224.41 410.85 224.27 409.93 256.12 408.62 256.9 410.22 259.27 423.22 273.79 415.92 295.36 404.89 295.48 411.31 304.43 414.96 306.39 411.53 314.89 415.03 316.3 417.32 316.08 419.45 318.41 423.8 309.14 443.86 313.01 445.74 308.92 454.18 339.28 465.46 331.47 484.15 324.46 499.25 321.03 497.96 318.34 514.37 316.24 531.56 321.52 532.64 320.94 537.06 332.89 540.8 333.31 543.62 329.24 558.6 323.11 574.46 324.07 580.77 307.97 571.21 307.95 572.91 300.22 572.69 299.59 582.09 296.98 582.28 295.97 599.04 268.83 597.64 268.65 602.38 264.46 602.3 265.7 597.33 250.63 596.52 238.98 596.49 219.65 594.79 197.78 593.52 198.45 573.85 199.83 539.23 200.4 519.97 201.64 516.79 199.62 513.81 200.03 510.18 197.53 506.3 194.83 503.83 192.21 503.01 190.92 501.25 188.73 501.49 189.14 493.13 187.13 490.23 186.72 485.5 182.81 484.43 176.57 484.81 175.18 486.04 172.41 485.12 169.52 487.17 167.95 489.41 168.85 491.72 165.27 496.82 165.75 502.31 162.19 504.86 154.52 499.23 154.11 496.95 156.37 492.62 155.87 489.37 157.28 485.56 154.9 481.67 155.29 478.83 157.26 477.01 160.05 469.53 161.66 461.31 163.79 459.21 165.82 455 170.13 451.89 171.01 443.89 173.51 440.3 Z", Orange:"M 316.53 368.69 325.89 351.39 328.89 345.26 343.81 351.16 356.03 324.54 357.38 325.06 368.09 299.85 373.76 301.76 374.83 298.93 400.98 309.23 404.03 310.81 410.07 278.77 422.7 284.64 438.68 291.85 471.49 288.41 472.41 288.65 504.36 300.65 504.82 307.42 506.96 309.68 506.09 311.72 502.23 313.61 501.55 316.92 502.26 320.16 504.59 321.49 505.35 319.36 507.66 320.61 507.31 323.46 504.3 325.41 507.1 326.95 502.28 328.65 503.19 331.33 501.1 335.06 498.51 335.18 499.03 338.27 495.84 340.29 496.74 343.91 494.08 348.01 492.12 347.06 491.05 350.12 489.01 351.57 489.56 353.96 486.2 357.37 487.42 360.02 486.81 366.47 489.22 365.92 490.77 370.27 489.43 372.54 486.3 373.73 486.02 382.05 484.58 384.35 477.7 389.72 475.12 394.93 472.87 395.14 472.12 397.41 473.56 401.09 469.8 402.35 468.53 405.63 469.82 409.46 470 413.32 468.42 417.06 469.53 420.81 469.38 423.53 466.81 427.85 464.18 430.56 464.3 435.2 430.37 421.64 413.77 416.44 399.73 412.53 400.03 412.05 363.55 396.67 337.07 386.51 336.32 387.65 320.91 381.84 322.07 379.38 321.53 376.78 316.79 374.59 316.53 368.69 Z", Chittenden:"M 284.32 134.86 287.76 135.58 300.51 153.57 308.29 163.72 312.54 165.12 307.31 175.65 314.06 179.21 305.35 195.54 313.69 198.15 304.89 214.99 314.23 220.2 308.29 230.47 306.61 230.56 299.48 227.69 288.15 257.71 290.89 258.58 276.34 299.15 273.15 274.76 270.66 252.58 259.54 249.48 260.47 255.88 247.06 257.69 246.92 256.33 226.46 260.14 215.27 262.07 196.73 264.17 197.44 261.52 193.95 258.87 190.33 262.19 188.62 260.79 194.23 254.8 192.1 251.75 188.54 252.95 189.5 247.28 192.77 240 194.44 237.92 193.43 234.1 196.21 232.44 198.14 228.41 197.05 226.64 197.6 223.6 196.3 222.18 195.05 217.32 198.46 213.99 200.85 210.71 203.58 211.06 205.54 215.14 208.74 213.97 210.38 207.21 209.79 201.18 206.99 200.5 207.25 196.73 209.89 194.38 209.4 188.41 208.24 185.53 204.27 183.45 203.05 180.66 196.09 178.31 198.04 175.13 197.03 169.98 195.44 167.07 188.88 162.8 191.07 160.84 192.34 162.61 195.57 161.09 196.87 162.81 200.26 162.65 203.8 161.55 205.65 159.93 205.06 156.74 207.84 156.96 207.59 161.87 211.59 164.26 213.75 163.77 217.34 160.96 219.54 152.93 217.13 152.19 211.79 154.31 209.1 153.37 208.18 144.63 203.39 140.17 206.29 138.72 206.99 135.83 212.56 133.55 213.42 131.89 212.28 127.89 213.18 119.62 212.6 116.69 214.06 106 239.48 119.43 255.92 128.45 284.32 134.86 Z"};var i={};for(var s in r){i={};if(this.options.stateSpecificStyles[s]){e.extend(i,t,this.options.stateSpecificStyles[s])}else{i=t}this.stateShapes[s]=n.path(r[s]).attr(i);this.topShape=this.stateShapes[s];this.stateHitAreas[s]=n.path(r[s]).attr({fill:"#000","stroke-width":0,opacity:0,cursor:"pointer"});this.stateHitAreas[s].node.dataState=s}this._onClickProxy=e.proxy(this,"_onClick");this._onMouseOverProxy=e.proxy(this,"_onMouseOver"),this._onMouseOutProxy=e.proxy(this,"_onMouseOut");for(var s in this.stateHitAreas){this.stateHitAreas[s].toFront();e(this.stateHitAreas[s].node).bind("mouseout",this._onMouseOutProxy);e(this.stateHitAreas[s].node).bind("click",this._onClickProxy);e(this.stateHitAreas[s].node).bind("mouseover",this._onMouseOverProxy)}},_initCreateLabels:function(){var t=this.paper;var n=[];var r=860;var i=220;var s=this.options.labelWidth;var o=this.options.labelHeight;var u=this.options.labelGap;var a=this.options.labelRadius;var f=s/this.scale;var l=o/this.scale;var c=(s+u)/this.scale;var h=(o+u)/this.scale*.5;var p=a/this.scale;var d=this.options.labelBackingStyles;var v=this.options.labelTextStyles;var m={};for(var g=0,y,b,w;g<n.length;++g){w=n[g];y=(g+1)%2*c+r;b=g*h+i;m={};if(this.options.stateSpecificLabelBackingStyles[w]){e.extend(m,d,this.options.stateSpecificLabelBackingStyles[w])}else{m=d}this.labelShapes[w]=t.rect(y,b,f,l,p).attr(m);m={};if(this.options.stateSpecificLabelTextStyles[w]){e.extend(m,v,this.options.stateSpecificLabelTextStyles[w])}else{e.extend(m,v)}if(m["font-size"]){m["font-size"]=parseInt(m["font-size"])/this.scale+"px"}this.labelTexts[w]=t.text(y+f/2,b+l/2,w).attr(m);this.labelHitAreas[w]=t.rect(y,b,f,l,p).attr({fill:"#000","stroke-width":0,opacity:0,cursor:"pointer"});this.labelHitAreas[w].node.dataState=w}for(var w in this.labelHitAreas){this.labelHitAreas[w].toFront();e(this.labelHitAreas[w].node).bind("mouseout",this._onMouseOutProxy);e(this.labelHitAreas[w].node).bind("click",this._onClickProxy);e(this.labelHitAreas[w].node).bind("mouseover",this._onMouseOverProxy)}},_getStateFromEvent:function(e){var t=e.target&&e.target.dataState||e.dataState;return this._getState(t)},_getState:function(e){var t=this.stateShapes[e];var n=this.stateHitAreas[e];var r=this.labelShapes[e];var i=this.labelTexts[e];var s=this.labelHitAreas[e];return{shape:t,hitArea:n,name:e,labelBacking:r,labelText:i,labelHitArea:s}},_onMouseOut:function(e){var t=this._getStateFromEvent(e);if(!t.hitArea){return}return!this._triggerEvent("mouseout",e,t)},_defaultMouseOutAction:function(t){var n={};if(this.options.stateSpecificStyles[t.name]){e.extend(n,this.options.stateStyles,this.options.stateSpecificStyles[t.name])}else{n=this.options.stateStyles}t.shape.animate(n,this.options.stateHoverAnimation);if(t.labelBacking){var n={};if(this.options.stateSpecificLabelBackingStyles[t.name]){e.extend(n,this.options.labelBackingStyles,this.options.stateSpecificLabelBackingStyles[t.name])}else{n=this.options.labelBackingStyles}t.labelBacking.animate(n,this.options.stateHoverAnimation)}},_onClick:function(e){var t=this._getStateFromEvent(e);if(!t.hitArea){return}return!this._triggerEvent("click",e,t)},_onMouseOver:function(e){var t=this._getStateFromEvent(e);if(!t.hitArea){return}return!this._triggerEvent("mouseover",e,t)},_defaultMouseOverAction:function(t){this.bringShapeToFront(t.shape);this.paper.safari();var n={};if(this.options.stateSpecificHoverStyles[t.name]){e.extend(n,this.options.stateHoverStyles,this.options.stateSpecificHoverStyles[t.name])}else{n=this.options.stateHoverStyles}t.shape.animate(n,this.options.stateHoverAnimation);if(t.labelBacking){var n={};if(this.options.stateSpecificLabelBackingHoverStyles[t.name]){e.extend(n,this.options.labelBackingHoverStyles,this.options.stateSpecificLabelBackingHoverStyles[t.name])}else{n=this.options.labelBackingHoverStyles}t.labelBacking.animate(n,this.options.stateHoverAnimation)}},_triggerEvent:function(t,n,r){var i=r.name;var s=false;var o=e.Event("usmap"+t+i);o.originalEvent=n;if(this.options[t+"State"][i]){s=this.options[t+"State"][i](o,r)===false}if(o.isPropagationStopped()){this.element.trigger(o,[r]);s=s||o.isDefaultPrevented()}if(!o.isPropagationStopped()){var u=e.Event("usmap"+t);u.originalEvent=n;if(this.options[t]){s=this.options[t](u,r)===false||s}if(!u.isPropagationStopped()){this.element.trigger(u,[r]);s=s||u.isDefaultPrevented()}}if(!s){switch(t){case"mouseover":this._defaultMouseOverAction(r);break;case"mouseout":this._defaultMouseOutAction(r);break}}return!s},trigger:function(e,t,n){t=t.replace("usmap","");e=e.toUpperCase();var r=this._getState(e);this._triggerEvent(t,n,r)},bringShapeToFront:function(e){if(this.topShape){e.insertAfter(this.topShape)}this.topShape=e}};var c=[];s(e,"usmap",l,c)})(jQuery,document,window,Raphael)
updateCandidateName(201, "Esther", "Charlestin");
updateCandidateName(203, "", "Write In");
updateCandidateName(202, "Poa", "Mutino");
var soundtracks = {
    0: {
      name: "Vermont",
      tracklist: [
        {
          "name": "The Divided Sky - Phish",
          "url": "https://audio.jukehost.co.uk/rfe4G8dLKLMIkEOA7YtxmjnjcEEzwXgp"
        },
        {
          "name": "Vermont - These Green Mountains",
          "url": "https://audio.jukehost.co.uk/pkxTtLz4unBykxGyGJC5ytUcT9SFobKC"
        },
        {
          "name": "Hail! Vermont - Rick Pickren",
          "url": "https://audio.jukehost.co.uk/XWdphfTiFJzfoFPmXinT3KPWcEEb5g1u"
        },
        {
          "name": "Ballad of the Green Mountaineer - Jim Knable",
          "url": "https://audio.jukehost.co.uk/yQ5IgLOiOQZoHHOEV6howjH5PKX6qfUU"
        },
        {
          "name": "Stick Season - Noah Kahan",
          "url": "https://audio.jukehost.co.uk/X6GEoAcnwHBtbPsRBEMw2rzBGxz3yYEl"
        },
  
     ]
     },
     1: {
      name: "Scott",
      tracklist: [
        {
          "name": "The Ballad Of Thunder Road",
          "url": "https://audio.jukehost.co.uk/M1kxCOmO2tk2QJryLo7ZtFWWYAVLxuq1"
        },
        {
          "name": "My Way (2008 Remastered)",
          "url": "https://audio.jukehost.co.uk/H1W8RTABK3nbTtNiM6m8xtCF30GIEjKE"
        },
        {
          "name": "Tom Petty- I Won't Back Down",
          "url": "https://audio.jukehost.co.uk/ORwMHT58OhGeqxGQEEpIKL3cEounWUiv"
        },
        {
          "name": "Reelin' In The Years",
          "url": "https://audio.jukehost.co.uk/8sAOgl3V3ymHztloSqcagSnowWVvHEUn"
        },
        {
          "name": "Governor Phil Scott, We Are Never Ever Ever Getting Back Together Low Lily",
          "url": "https://audio.jukehost.co.uk/iqe2zJqAItOZ7BpxAoEo745piO0GbaEE"
        },
     ]
     },
     2: {
      name: "Dean",
      tracklist: [
        {
          "name": "All Along the Watchtower - Bob Dylan",
          "url": "https://audio.jukehost.co.uk/EGyGLRIvhz5IR9Hgd2f9yBMEZs4ARw30"
        },
        {
          "name": "Culture War - Arcade Fire",
          "url": "https://audio.jukehost.co.uk/RhtuRlzsvBxm4eLoUPiAysQT1FfnIdM3"
        },
        {
          "name": "Mr. November - The National",
          "url": "https://audio.jukehost.co.uk/NvZjEsU0zzF38iKXJEC2nLlyh4eLXMQ7"
        },
        {
          "name": "Dirty Harry - Gorillaz",
          "url": "https://audio.jukehost.co.uk/g309kEETfxUYJHuKvmLGgkK2Wq31U4MD"
        },
        {
          "name": "Howard Dean Yell Remix - Unknown",
          "url": "https://audio.jukehost.co.uk/9P6eqKrSp2KhP7PKoYaANFhTMPMH6aqv"
        },
     ]
     },
           
  }
setSoundtrack("Dean");
campaignTrail_temp.questions_json = [
    {
        "model": "campaign_trail.question",
        "pk": 1042,
        "fields": {
            "priority": 1,
            "description": "Your constant presence on Twitter has included inflammatory accusations against Congresswoman-Elect Becca Balint, frugal use of the block feature and regular controversy. Just weeks ago, Twitter was acquired by Elon Musk. Musk promises sweeping changes ostensibly in support of “free speech”, but you know this will only allow the Right free range to spread disinformation. Is this the end of your time on Twitter?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1044,
        "fields": {
            "priority": 2,
            "description": "It is November 2023. In Burlington, the state’s largest city and your home, the campaign for mayor is underway. Joan Shannon is the leading Democratic candidate, with Karen Paul and C. D. Mattison also in the running for the nomination while State Representative Emma Mulvaney-Stanak is the sole Progressive running. As one of the party’s most respected statesmen, your voice is well attended, what do you have to say?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1043,
        "fields": {
            "priority": 2,
            "description": "The state of play in Montpelier is highly concerning. A looming crisis over education taxes paralyzes the Capitol while relations between the Governor and the legislature have never been more tense. Even worse, your pet issue of healthcare has gone almost totally undiscussed. Is it time to raise your voice on happenings in Vermont?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1045,
        "fields": {
            "priority": 3,
            "description": "It’s no secret that you and Senator Bernie Sanders aren’t the best of friends. Despite Senator Sanders’ support for your campaign in 2004, in 2016 you were among the few officeholders in Vermont to support Hillary Clinton for President, and were a vocal, emphatic supporter at that. Since then, relations with Senator Sanders have been frosty at best. What will you do to mend fences with Vermont’s progressive icon?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1046,
        "fields": {
            "priority": 4,
            "description": "In the aftermath of the October 7th terrorist attack, Israel has launched an uncompromising war in Gaza. As civilian casualties mount and horrifying images of homes and families destroyed by Israeli bombs arrive in the United States, so too has the anti-war protest movement. You’ve been vocal in your criticisms of the Israeli government before, even calling Israel an apartheid state, do you want to use this moment to raise your voice again?\n\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1051,
        "fields": {
            "priority": 5,
            "description": "Rumors of your exploration of a bid for Governor have circulated in the media. Numerous outlets have asked you for a clarification on these rumors, and party leaders and onlookers alike are very curious for what information you will release at this stage.",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1055,
        "fields": {
            "priority": 6,
            "description": "While you’ve been working to get your coalition together, your team has been conducting some internal polling. Frankly, the numbers aren’t there to beat Phil Scott right now. With his approval rating continuing to defy political reality, your numbers people believe the only way you’ll have a shot in this election is to bring him down to earth with negative campaigning. This is highly taboo in Vermont politics and could easily backfire. Should you go ahead with this?\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 105589,
        "fields": {
            "priority": 6,
            "description": "Test",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1060,
        "fields": {
            "priority": 7,
            "description": "The time has come, the time to launch. Reminiscent of your 2004 campaign launch, a large crowd amasses on Burlington’s Church Street to hear from you. All that’s left is what message you want to lean into as you start your campaign for Governor. What are you gonna give them as Dean for Governor begins?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1068,
        "fields": {
            "priority": 7,
            "description": "Since you gave the green light on using negative campaigning to give your campaign a chance, you’re going to be faced with the tough decision of what avenue of attack to use against the Governor. There are multiple of these which should theoretically give Vermont Democrats pause, however past challengers found themselves repeating these talking points to no avail. Maybe they’ll be more successful coming from you?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1069,
        "fields": {
            "priority": 7,
            "description": "With only token opposition in the primary, there is some time in the summer for fundraising and organization, as well as other ventures. Across the pond, the United Kingdom general election is underway, with the Conservative Party likely to lose after 14 years in power. You’ve always been an enthusiastic backer of the Liberal Democrats, including even speaking at their party conference. Leader Ed Davey has extended an invitation for you to join him on <I>The Campaign Trail.</I> Will you take it?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1063,
        "fields": {
            "priority": 7,
            "description": "Unlike most states, Vermont elects its Lieutenant Governor separately, there is no unified ticket. Incumbent Lt. Governor David Zuckerman is in a competitive fight with Thomas Renner. As the gubernatorial presumptive nominee, you have a lot of weight here, do you want to use it?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1066,
        "fields": {
            "priority": -7,
            "description": "You are now the Democratic nominee for Governor, after winning the primary in a walk. There’s a question on the minds of Vermonters. You have been retired from active politics for 15 years. Why are you running? What exactly is the Howard Dean message to Vermont?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 106656,
        "fields": {
            "priority": -7,
            "description": "test",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1073,
        "fields": {
            "priority": -3,
            "description": "The education financing crisis hangs like a Sword of Damocles over Vermont and this election. The average Vermonter will see their property taxes go up by an unacceptable 14%, with more on the way. Scott is using this issue to injure legislative Democrats, and you too. How will you address this challenge?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 3232,
        "fields": {
            "priority": -2,
            "description": "test",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 1076,
        "fields": {
            "priority": -1,
            "description": "The historic floods that battered Vermont in summer 2023 and again this summer are no coincidence. Scientists know that human-caused global warming is having a terrible effect on the ecology and living conditions, Vermont is no exception. How will you address this challenge with voters?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 20983,
        "fields": {
            "priority": 0,
            "description": "The universal consensus is that the high cost of housing is the biggest challenge facing the state of Vermont. It prevents young people from staying in the state and stops people from taking job offers in the state, not to mention the squeeze on existing renters. How will you tackle this?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 21018,
        "fields": {
            "priority": 0,
            "description": "The Scott campaign has not been idle while you have lobbed attacks against them. They have sought to brand you a profligate spender and tax-riser, one that average Vermonters can’t afford. Your team is worried this impression could set in. How are you going to fight back?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 21022,
        "fields": {
            "priority": 0,
            "description": "It’s yet another day on <I>The Campaign Trail</I>, as the election grows nearer and nearer. Meeting voters remains essential even in the age of social media, especially in Vermont. Where do you want to head to today?\n",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 21167,
        "fields": {
            "priority": 0,
            "description": "Phil Scott sits across from you, shuffling awkwardly, visibly uncomfortable. Your toothy smile demonstrates your excitement as Paul Heintz prepares to begin the VTDigger debate. How will you approach your first debate with Governor Scott?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 21168,
        "fields": {
            "priority": 0,
            "description": "With the election weeks away, your staff brings you some concerning numbers in your latest team meeting in your Burlington office. Your attacks on Governor Scott aren’t sinking in enough, his approval remains strong, he is just too well-regarded. They say you need to go harder, more negative, leave nothing to chance. Will you do it?",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 18179,
        "fields": {
            "priority": 0,
            "description": "Test",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 181671,
        "fields": {
            "priority": 0,
            "description": "Test",
            "likelihood": 1
        }
    },
    {
        "model": "campaign_trail.question",
        "pk": 18234,
        "fields": {
            "priority": 0,
            "description": "Test",
            "likelihood": 1
        }
    },
   
]

campaignTrail_temp.answers_json = [
    {
        "model": "campaign_trail.answer",
        "pk": 5139,
        "fields": {
            "question": 1042,
            "description": "Look, I go off the handle sometimes, I have a big mouth. It hurt me badly back in 2004 from the Confederate flag comments to the “Dean Scream”. I’m sincerely sorry to anyone I’ve offended and I recognize how fired up social media gets me. There’s never been a better time than now to deactivate my account"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5140,
        "fields": {
            "question": 1042,
            "description": "People know who I am. I’ve never been afraid to say the hard truths in politics. For years I’ve called out bullshit from the right on Twitter. If anyone thinks I’m going to back down and let right-wing trolls run rampant on Musk’s Twitter they’ve got another thing coming. I’m going to stay an active and engaged user of social media, neofascists be damned."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5141,
        "fields": {
            "question": 1042,
            "description": "Campaigns are run on social media these days. If I want to be remotely relevant in the political arena, I need to get my message out there. That doesn’t mean I can’t make some changes though. Let’s pare down on the attacks and start publicizing the work I’m doing to support the Vermont Democratic Party."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5142,
        "fields": {
            "question": 1042,
            "description": "I think taking a break to cool off is a good idea. Once I want to step back into the political arena I can slowly get more active again, but for now, the best course of action is to let all of this blow over."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5143,
        "fields": {
            "question": 1043,
            "description": "The state of affairs in Montpelier is frankly pathetic. Back in the 1990s, we did things a whole lot better. It wouldn’t hurt to remind people of this, in op-eds in the like, could turn heads.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5144,
        "fields": {
            "question": 1043,
            "description": "Brian Cina is trying to put a Universal Healthcare Caucus together, someone has to keep that torch burning. I’d be happy to show up to the meetings, virtually of course. \n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5145,
        "fields": {
            "question": 1043,
            "description": "When legislative leaders criticize the Governor, hardly anybody listens. When I do it I think it’ll be different. Time to turn the heat up on this administration.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5147,
        "fields": {
            "question": 1044,
            "description": "Joan Shannon looks to be the favorite to win the nomination and throwing my weight behind her will help to restore my image as a heavyweight within the party. Her positions are a little more conservative than what Burlington is used to, but that might be just what we need to deflect from any attacks from Scott on municipal issues."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5148,
        "fields": {
            "question": 1044,
            "description": "I’ve worked with Karen Paul for a very long time, she’s extremely intelligent and has been a very effective leader of the City Council. I’m proud to support her bid for Mayor of Burlington. \n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5149,
        "fields": {
            "question": 1044,
            "description": "Let’s face it, Mayor Weinberger’s management of the city has been a mess. It’s time we move on with a bold policy shift. The Progressive Party and I have in the past been opponents but Rep. Mulvaney-Stanak is impressive and has distanced herself from toxic ideas like defunding the police. I’ll get behind her.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5150,
        "fields": {
            "question": 1044,
            "description": "C.D. Mattison is an interesting candidate, she’s a talented professional who more than anyone else represents a break from the politics of the Burlington status quo. Time to shake things up."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5151,
        "fields": {
            "question": 1045,
            "description": "Bernie and myself have barely spoken in the last decade. What’s he going to do? Endorse Phil Scott? Not worth my time.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5152,
        "fields": {
            "question": 1045,
            "description": "My differences with Bernie are well-known, but in this election they can be our opportunity. These swing voters, the homeowners, they may vote for him but they wouldn’t want him controlling their property tax. I’m going to take a page from my political protégé Molly Gray and pitch myself as more of a Pat Leahy/Peter Welch Democrat.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5155,
        "fields": {
            "question": 1046,
            "description": "Let’s get those kids fired up, just like I did with Iraq back in the day. There’s an encampment at the University of Vermont. No to Apartheid! Ceasefire now!\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5156,
        "fields": {
            "question": 1046,
            "description": "Look, no one has been more opposed to Netanyahu than myself. But let’s be real here, the Governor of Vermont has nothing to do with this conflict and bringing it up will come across as unserious. Let’s keep the focus on local issues.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5157,
        "fields": {
            "question": 1046,
            "description": "The situation in Gaza is horrifying, I support the immediate return of all hostages and a permanent cease-fire. We must do more for the equal rights and dignity of all people, Israelis and Palestinians.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5170,
        "fields": {
            "question": 1051,
            "description": "I’m on vacation, don’t bother me.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5171,
        "fields": {
            "question": 1051,
            "description": "Yes, I’m considering a campaign for Governor, Phil Scott is a good man but the conditions of dysfunction and inertia in Montpelier are unacceptable, and I think I can change that. I’ll say more when I return from vacation.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5172,
        "fields": {
            "question": 1051,
            "description": "Our country is under assault from Donald Trump and his dangerous MAGA Republicans. I want to do my part to stop them.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5173,
        "fields": {
            "question": 1052,
            "description": "So it goes…\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5176,
        "fields": {
            "question": 1053,
            "description": "So it goes…"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5184,
        "fields": {
            "question": 1055,
            "description": "Phil Scott is a good man, but Vermonters deserve better from their government and if we have to point that out pretty directly, that’s an acceptable price to pay. Let’s pull the trigger and get this campaign going.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5185,
        "fields": {
            "question": 1055,
            "description": "For Christsakes, this country is staring down the barrel of a horrifying campaign already, the last thing we want to do is compound this. Phil Scott is the least of our worries, I’m sorry guys but this isn’t it.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5189,
        "fields": {
            "question": 1057,
            "description": "So it goes… "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 1891,
        "fields": {
            "question": 1057,
            "description": "Fuck off. They don’t want me? I’ve worked for this party for decades, I was the DNC Chairman. Fine, I don’t want them."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5196,
        "fields": {
            "question": 1059,
            "description": "Lovely."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5200,
        "fields": {
            "question": 1060,
            "description": "Montpelier isn’t working for Vermont. We need change, and we need it now. Only I can beat Phil Scott and get Montpelier moving again, and I’m ready and rearing to go!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5201,
        "fields": {
            "question": 1060,
            "description": "I’m not messing around, it’s time to launch a broadside into Phil Scott. He has stood in the door of progress for 8 years, I’ll rattle off a list of his most unpopular vetoes and demand better!\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5202,
        "fields": {
            "question": 1060,
            "description": "Healthcare, healthcare, healthcare. Vermont used to lead the nation on this issue, but for 8 years Phil Scott has ignored it. No more!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5212,
        "fields": {
            "question": 1063,
            "description": "Not at all typical practice for the gubernatorial candidate to intervene in primaries. My personal thoughts aside, I’m not getting involved. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5213,
        "fields": {
            "question": 1063,
            "description": "One day he’s a Progressive, next day he’s a Democrat. Zuckerman likes to have it both ways, I’d rather work with Thomas, he’s bright, and young, and we need generational turnover. I won’t campaign for him but he can advertise he has my support."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5214,
        "fields": {
            "question": 1063,
            "description": "Party loyalty isn’t just a one way street. David Zuckerman is the incumbent, like him or not, he’s the incumbent. Will I endorse? No, of course not."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5215,
        "fields": {
            "question": 1063,
            "description": "David Zuckerman says what he believes, whether you agree with him or not. I have a lot of respect for that. I won’t campaign but I’ll release a statement in support of him.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5220,
        "fields": {
            "question": 1065,
            "description": "So it goes…"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5224,
        "fields": {
            "question": 1066,
            "description": "When I was Governor, politics worked. I signed budgets, the legislature and I got along, we passed major reforms for education and healthcare. We need that back again. That’s why I decided to run.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5225,
        "fields": {
            "question": 1066,
            "description": "Single-issue campaigns are risky, but I really think this is worthwhile. Healthcare has been neglected for 8 years under Phil Scott, on day one I’ll resurrect the fight for universal healthcare in our state.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5226,
        "fields": {
            "question": 1066,
            "description": "Phil Scott talks a big game on taxes, but it’s under him we found ourselves in this education tax crisis. He doesn’t have solutions, I’ve got a plan to reduce taxes and fund our schools, he only has a credit card."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5227,
        "fields": {
            "question": 1067,
            "description": "…\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5231,
        "fields": {
            "question": 1068,
            "description": "Let’s call Joe Trippi, he’s working at the Lincoln Project now and get them to cook up something for us. They’ve made some of the hardest hitting ads against fake moderate Republicans in recent years, they can do the same for us here. \n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5232,
        "fields": {
            "question": 1068,
            "description": "We’re going to be making every voter in the state aware of Phil’s egregious vetoes, from paid family leave to raising the minimum wage. We can beat him on the issues.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5233,
        "fields": {
            "question": 1068,
            "description": "Phil Scott has the same party affiliation as Donald Trump. It’s not complicated, we have to press, press, press the letter R until he squeals. \n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5234,
        "fields": {
            "question": 1068,
            "description": "I think most Vermonters agree that Montpelier is too dysfunctional. There’s a sense that nothing gets done and I think Phil Scott has a role to play. He’s not a problem solver, he’s a problem causer. \n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5235,
        "fields": {
            "question": 1069,
            "description": "That sounds awesome! Polls look like the Liberal Democrats are set to make an epic comeback. I want in!\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5236,
        "fields": {
            "question": 1069,
            "description": "Tell Ed I’m sending my best, but we’ve got a lot of work to do to win this election. I don't have time for a British vacation.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5242,
        "fields": {
            "question": 1071,
            "description": "…"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5246,
        "fields": {
            "question": 1072,
            "description": "…\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5250,
        "fields": {
            "question": 1073,
            "description": "This is a losing issue for us. We have to keep the conversation on other issues as much as we can, such as healthcare and general dysfunction.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5251,
        "fields": {
            "question": 1073,
            "description": "Governor Scott’s solution for education finance, as signified by the appointment of Zoie Saunders, is to privatize as much as possible. If you support public education, Phil Scott is not an option for you."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5252,
        "fields": {
            "question": 1073,
            "description": "The Governor did not introduce any education finance reform proposals during the last legislative biennium, only saying we should just put it on the state credit card. This is because of the dysfunction he’s let prevail.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5253,
        "fields": {
            "question": 1074,
            "description": "…"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5256,
        "fields": {
            "question": 1075,
            "description": "Go big or go home! There’s nothing bigger than Barack Obama, who remains the most popular Democrat in the country. Let’s bring him to the Green Mountains.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 8695,
        "fields": {
            "question": 18547,
            "description": "Go big or go home! There’s nothing bigger than Barack Obama, who remains the most popular Democrat in the country. Let’s bring him to the Green Mountains.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5257,
        "fields": {
            "question": 1075,
            "description": "LGBTQ+ voters are a huge constituency in Vermont and we have to make sure they resist Phil’s attempts to woo their votes. Let’s host a big event for LGBTQ+ history month and get Becca Balint, Maura Healey and Chasten Buttigieg up here. I want to make it clear Vermont will always be a safe haven for the queer community when I’m Governor."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 8696,
        "fields": {
            "question": 18547,
            "description": "LGBTQ+ voters are a huge constituency in Vermont and we have to make sure they resist Phil’s attempts to woo their votes. Let’s host a big event for LGBTQ+ history month and get Becca Balint, Maura Healey and Chasten Buttigieg up here. I want to make it clear Vermont will always be a safe haven for the queer community when I’m Governor."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5258,
        "fields": {
            "question": 1076,
            "description": "Legislative Democrats have crafted some strong policies regarding clean and efficient energy right here in Vermont, Governor Scott has unfortunately stood in the way of these proposals.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5259,
        "fields": {
            "question": 1076,
            "description": "Unfortunately, there’s not much we as a state can do regarding global carbon emissions. The focus of our work has to be on resiliency; how we can protect Vermonters from the changing climate.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5260,
        "fields": {
            "question": 1076,
            "description": "You know, we used to have nearly 100% clean power in Vermont, when Vermont Yankee was open and functioning. I’d have a good look at bringing back nuclear power in our state."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 5261,
        "fields": {
            "question": 1076,
            "description": "Governor Scott has too often put narrow industry interests over the well-being of the state as a whole, just look at his veto of honey bee protections and bans on harmful chemicals. As Governor I’ll make our precious natural environment a priority again.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20845,
        "fields": {
            "question": 1051,
            "description": "The issue is Phil Scott. Phil Scott has been the worst Governor we’ve ever had in this state. He is Mr. Obstruction, and I intend to end it.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20934,
        "fields": {
            "question": 1066,
            "description": "Governance by veto must end. I make an appeal to all Vermonters that we can have more from our government, I have plans for healthcare, tax relief, and better schools. We can have that or more of the same. \n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20980,
        "fields": {
            "question": 1073,
            "description": "It’s time for some straight talk. This is, while unfortunate, just part of the education funding system we have. If voters want less taxes they should approve smaller school budgets."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20984,
        "fields": {
            "question": 1075,
            "description": "I’ve admired Elizabeth Warren and her keen analysis of our financial system for some time. I’d love to have her join us."
        }
    },
    
    {
        "model": "campaign_trail.answer",
        "pk": 8697,
        "fields": {
            "question": 18547,
            "description": "I’ve admired Elizabeth Warren and her keen analysis of our financial system for some time. I’d love to have her join us."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 20989,
        "fields": {
            "question": 1075,
            "description": "Vice President Harris is no doubt too busy to make a stop in Vermont, but what about Governor Walz? He is a really lovely guy. He’d make a great addition to our campaign."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 8698,
        "fields": {
            "question": 18547,
            "description": "Vice President Harris is no doubt too busy to make a stop in Vermont, but what about Governor Walz? He is a really lovely guy. He’d make a great addition to our campaign."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21009,
        "fields": {
            "question": 20983,
            "description": "Firstly I want to commend the good work of legislative Democrats, who achieved landmark Act 250 reform this session. I’d build upon that work to make building in our downtowns easier."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21012,
        "fields": {
            "question": 20983,
            "description": "I think Governor Scott has erred in this respect, he’s behaved like a developer, I would see things more like a real estate agent. We need to make homeownership an achievable dream for all.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21019,
        "fields": {
            "question": 21018,
            "description": "You know when I was Governor, some folks would complain we already have a Republican Governor, we’ve got Dean. My record of fiscal discipline and balanced budgets speaks for itself."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21020,
        "fields": {
            "question": 21018,
            "description": "This instinctive fear of spending is the kind of attitude that has got us into this mess. It’s the same attitude that made the Governor shovel Vermont seniors onto shoddy Medicare Advantage plans. It’s the attitude of decline and I’ll stop it.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21021,
        "fields": {
            "question": 21018,
            "description": "Under what administration are we seeing a 14% property tax rise? When I’m Governor I’ll introduce comprehensive education financing reform, which this Governor has not.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21030,
        "fields": {
            "question": 21022,
            "description": "Let’s play it safe. There’s a lot of otherwise loyal Democrats in Chittenden county who have voted for Phil Scott many times. Let’s hit Winooski with native Mike Pieciak to shore up that end."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21031,
        "fields": {
            "question": 21022,
            "description": "Lately it seems sometimes like Democrats have basically decided that the Northeast Kingdom is just not worth it anymore. People in rural and remote communities should be voting Democratic. Let’s head for the north."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21032,
        "fields": {
            "question": 21022,
            "description": "The base of our party remains in Southern Vermont. The Connecticut River Valley always delivers strong margins for us, let’s head there."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21048,
        "fields": {
            "question": 1043,
            "description": "My interest in returning to the political arena has certainly piqued, but this is better served by talking to potential allies and donors behind the scenes, not running my mouth."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21052,
        "fields": {
            "question": 1045,
            "description": "Despite our past differences, I think Senator Sanders is a dedicated advocate for Vermont, I think it would be smart to reach out, just getting on speaking terms again. \n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21053,
        "fields": {
            "question": 1045,
            "description": "I think the last 8 years have proven Bernie right about a lot of things. I’ve been flipping through his latest book It’s Okay to be Angry About Capitalism, and he’s correctly diagnosed a lot about what’s wrong in this country. I’d love to do an event with him, and cooperate on different issues."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21057,
        "fields": {
            "question": 1046,
            "description": "My criticisms of Israel are well-established, and I stand by them, but the abject brutality of the October 7th attacks cannot be stated enough. These calls for a “ceasefire” by multiple Vermont towns are missing the bigger picture. Hamas must be crushed for peace to prevail. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21082,
        "fields": {
            "question": 1060,
            "description": "Vermont needs a positive vision for its future. I’ll restart the fight for universal healthcare, paid family leave, and reform of education funding. Vermont deserves better!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21134,
        "fields": {
            "question": 20983,
            "description": "There was a strong tripartisan proposal early in the session for ambitious permitting reform, I’d seek to revive that bill. Governor Scott tried, but with my relationship with the legislature I can get it done.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21135,
        "fields": {
            "question": 20983,
            "description": "I would start by focusing on the needs of renters. Under Governor Scott strong progressive policies like just-cause eviction and rent control have languished, but I’d push for them."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21145,
        "fields": {
            "question": 21018,
            "description": "I actually have plans to reduce the tax burden substantially on all Vermonters. Governor Scott has made big promises on this but with my relationships I’ll deliver for taxpayers"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21164,
        "fields": {
            "question": 21022,
            "description": "Rutland is the site of some competitive state legislative races, and is incredibly vote-rich and competitive between myself and the Governor. No other place I’d rather go."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21171,
        "fields": {
            "question": 21167,
            "description": "Phil Scott is a good guy, he led our state during COVID-19 with wisdom and statesmanship. But he is woefully unprepared to deal with the social problems of our state, we need new politics, we need change."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21174,
        "fields": {
            "question": 21167,
            "description": "Vetoes, vetoes, vetoes! I am going to raise every veto he’s issued and make him defend them."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21180,
        "fields": {
            "question": 21167,
            "description": "Governor Scott has waged a campaign of misinformation about property taxes to cover up his mismanagement of healthcare and his destruction of state government. It has to stop."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21189,
        "fields": {
            "question": 21167,
            "description": "I have a plan for progressive healthcare reform, for education finance reform, and for upgrading our rural infrastructure. Phil Scott has had 8 years to address these problems and he hasn’t.\n\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21196,
        "fields": {
            "question": 21168,
            "description": "Dysfunction is the key to this whole thing. Inertia and gridlock with Scott, progress and prosperity with Dean.\n"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21199,
        "fields": {
            "question": 21168,
            "description": "This is Vermont. We don’t have these sorts of campaigns. There has to be a limit, let’s stick the course with the attacks we’ve got now and win this election."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21202,
        "fields": {
            "question": 21168,
            "description": "Sure let’s do it, we’re so close to winning this thing. I say bank on partisanship. Phil Scott is a Republican, he’s in the same party as Trump, end of story."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21203,
        "fields": {
            "question": 21168,
            "description": "I want to haunt Phil Scott over the Saunders appointment. That was a massive unforced error, we can’t let it stand. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21210,
        "fields": {
            "question": 21169,
            "description": "Donald Trump is a fascist thug, a criminal, and the biggest threat to freedom since Adolf Hitler. He must be stopped. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21214,
        "fields": {
            "question": 21169,
            "description": "There’s been talk of a joint press Conference with Governor Scott to denounce encroaching authoritarianism in our country, I think that’s a great idea."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21215,
        "fields": {
            "question": 21169,
            "description": "I want to do all I can to defeat Trump and Trumpism, but the best thing I can do is win this race. This election is about Vermont and I don’t want to lose focus."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21216,
        "fields": {
            "question": 21169,
            "description": "Our brave little state is not free from the influence of Trump and his ilk. The Republican candidate for U.S. Senate spoke at the RNC, Republican state legislators are calling for an insurrection. Phil Scott is a nice man, but he can’t, or won’t, stop them, I will."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21233,
        "fields": {
            "question": 21232,
            "description": "Donald Trump is a fascist thug, a criminal, and the biggest threat to freedom since Adolf Hitler. He must be stopped. "
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21237,
        "fields": {
            "question": 21232,
            "description": "There’s been talk of a joint press Conference with Governor Scott to denounce encroaching authoritarianism in our country, I think that’s a great idea."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21247,
        "fields": {
            "question": 21232,
            "description": "I want to do all I can to defeat Trump and Trumpism, but the best thing I can do is win this race. This election is about Vermont and I don’t want to lose focus."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21250,
        "fields": {
            "question": 21232,
            "description": "Our brave little state is not free from the influence of Trump and his ilk. The Republican candidate for U.S. Senate spoke at the RNC, Republican state legislators are calling for an insurrection. Phil Scott is a nice man, but he can’t, or won’t, stop them, I will."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21253,
        "fields": {
            "question": 21170,
            "description": "Goddamnit! Well, I guess there’s not much I can change, just got to run my campaign the best I can. I just need something to take the edge off, I think my friends at Tilray sent me a care package a while back. I don’t usually partake but this might be what I need right now before I blow a gasket."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 212531,
        "fields": {
            "question": 211701,
            "description": "Goddamnit! Well, I guess there’s not much I can change, just got to run my campaign the best I can. I just need something to take the edge off, I think my friends at Tilray sent me a care package a while back. I don’t usually partake but this might be what I need right now before I blow a gasket."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21257,
        "fields": {
            "question": 21170,
            "description": "Motherfuckers! That damn fool Harrison is riding the Democratic Party on a way trip to hell. It wasn’t like this when I was in charge- we were winning- 50 state strategy - anyway, I’m going to get a handle on what’s happening RIGHT NOW. I’m calling every contact I have to figure out what the hell is going on. I don’t care if it takes all night, there’s got to be some kind of fucking strategy!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 212571,
        "fields": {
            "question": 211701,
            "description": "Motherfuckers! That damn fool Harrison is riding the Democratic Party on a way trip to hell. It wasn’t like this when I was in charge- we were winning- 50 state strategy - anyway, I’m going to get a handle on what’s happening RIGHT NOW. I’m calling every contact I have to figure out what the hell is going on. I don’t care if it takes all night, there’s got to be some kind of fucking strategy!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21260,
        "fields": {
            "question": 21170,
            "description": "Fucking christ. Is this it!? The country’s going to willingly hand itself over to fascism? I can’t even think about Vermont right now, if this happens, everything I’ve done my whole career won’t matter for shit. I just… I need some fresh air. I need to… think."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 212601,
        "fields": {
            "question": 211701,
            "description": "Fucking christ. Is this it!? The country’s going to willingly hand itself over to fascism? I can’t even think about Vermont right now, if this happens, everything I’ve done my whole career won’t matter for shit. I just… I need some fresh air. I need to… think."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21263,
        "fields": {
            "question": 21170,
            "description": "This is fucking amateur hour. Don’t they realize the stakes??? I’m gonna give them a piece of my mind, let other people know how I’m feeling, and I’m pissed."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 212631,
        "fields": {
            "question": 211701,
            "description": "This is fucking amateur hour. Don’t they realize the stakes??? I’m gonna give them a piece of my mind, let other people know how I’m feeling, and I’m pissed."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21266,
        "fields": {
            "question": 21265,
            "description": "Goddamnit! Well, I guess there’s not much I can change, just got to run my campaign the best I can. I just need something to take the edge off, I think my friends at Tilray sent me a care package a while back. I don’t usually partake but this might be what I need right now before I blow a gasket."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21270,
        "fields": {
            "question": 21265,
            "description": "Motherfuckers! That damn fool Harrison is riding the Democratic Party on a way trip to hell. It wasn’t like this when I was in charge- we were winning- 50 state strategy - anyway, I’m going to get a handle on what’s happening RIGHT NOW. I’m calling every contact I have to figure out what the hell is going on. I don’t care if it takes all night, there’s got to be some kind of fucking strategy!"
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21273,
        "fields": {
            "question": 21265,
            "description": "Fucking christ. Is this it!? The country’s going to willingly hand itself over to fascism? I can’t even think about Vermont right now, if this happens, everything I’ve done my whole career won’t matter for shit. I just… I need some fresh air. I need to… think."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21276,
        "fields": {
            "question": 21265,
            "description": "This is fucking amateur hour. Don’t they realize the stakes??? I’m gonna give them a piece of my mind, let other people know how I’m feeling, and I’m pissed."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21279,
        "fields": {
            "question": 21209,
            "description": "We’ve done everything we can, now it’s up to the voters."
        }
    },
    {
        "model": "campaign_trail.answer",
        "pk": 21285,
        "fields": {
            "question": 21284,
            "description": "We’ve done everything we can, now it’s up to the voters."
        }
    }
]
campaignTrail_temp.states_json = [
    {
        "model": "campaign_trail.state",
        "pk": 20681,
        "fields": {
            "name": "Windsor",
            "abbr": "Windsor",
            "electoral_votes": 1,
            "popular_votes": 33844,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        },
        "d": "M 316.53 368.69 316.79 374.59 321.53 376.78 322.07 379.38 320.91 381.84 336.32 387.65 337.07 386.51 363.55 396.67 400.03 412.05 399.73 412.53 413.77 416.44 430.37 421.64 464.3 435.2 460.52 437.87 456.99 444.03 454.24 445.04 446.62 450.48 440.5 457.9 439.1 461.72 438.89 465.99 439.63 467.72 438.96 471.74 436.88 475.36 436.58 480.58 433.51 482.12 431.67 489.87 433.32 492.54 432.28 495.15 427.84 499.21 421.9 502.03 420.19 504.13 419.57 507.44 420.15 515.53 417.94 519.93 416.64 520.23 415.55 525.1 416.12 526.97 419.05 529.68 420.04 532.07 419.84 536.7 417.07 541.94 417.6 546.76 416.32 551.18 414.26 567.41 411.89 570.07 411.18 572.78 411.84 577.58 417.56 580.27 415 583.48 412.62 588.39 416.42 594.89 414.85 598.24 413.28 605.38 409.79 612.16 406.32 613.89 405.37 618.85 406.69 622.75 377.29 621.75 344.89 625.82 342.55 626.34 324.37 620.34 308.39 614.6 308.38 599.5 295.97 599.04 296.98 582.28 299.59 582.09 300.22 572.69 307.95 572.91 307.97 571.21 324.07 580.77 323.11 574.46 329.24 558.6 333.31 543.62 332.89 540.8 320.94 537.06 321.52 532.64 316.24 531.56 318.34 514.37 321.03 497.96 324.46 499.25 331.47 484.15 339.28 465.46 308.92 454.18 313.01 445.74 309.14 443.86 318.41 423.8 316.08 419.45 316.3 417.32 314.89 415.03 306.39 411.53 304.43 414.96 295.48 411.31 295.36 404.89 273.79 415.92 270.55 401.73 268.7 402.69 268.76 396.09 275.54 398.94 294.91 389.32 295.45 402.8 297.69 403.65 310.13 377.18 311.73 377.78 316.53 368.69 Z"
    },
    {
        "model": "campaign_trail.state",
        "pk": 20691,
        "fields": {
            "name": "Essex",
            "abbr": "Essex",
            "electoral_votes": 1,
            "popular_votes": 3181,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        },
        "d": "M 538.38 3.99 570.99 2.58 589.67 2.41 609.96 1.75 622.15 1.67 645.89 1 642.48 3.19 641.98 4.99 639.73 5.43 636.09 3.01 631.04 5.26 628.25 7.85 627.67 10.41 630.72 15.95 633.31 18.42 633.07 23.74 633.67 31.36 636.42 34.06 638.56 37.58 634.15 43.12 633.03 46.04 629.23 51.43 626.47 52.62 626.01 55.9 624.08 59.31 625.31 62.26 623.77 63.78 622.47 67.6 619.72 68.55 619.11 71.42 620.96 73.13 619.89 76.45 620.36 78.05 618.31 81.08 615.15 81.83 614.53 84.36 610.43 88.26 609.24 91.08 605.48 92.45 607.19 95.82 606.97 100.6 613.89 109.5 615.07 111.69 614.14 113.5 615.1 116.26 614.66 118.42 617.14 119.54 617.31 125.27 619.06 127.66 623.04 127.13 624.32 131 622.99 132.6 625.79 134.86 624.74 138.53 625.51 142.45 623.85 145.44 625.63 147.72 629 148.79 629.69 150.43 627.39 153.05 626.72 155.9 624.33 157.74 621.71 158.35 617.19 157.35 615.1 159.08 614.88 161.54 620.59 166.08 620.6 169.17 618.53 172.12 615.72 172.73 618.62 177.4 620.14 178.81 615.59 182.58 614.59 185.08 609.97 185.28 608.34 189.01 606.11 187.98 603.26 189.06 603.66 194.14 601.4 194.19 599.68 200.85 598.76 202.14 594.82 203.38 595.66 205.33 589.17 210.58 586.08 212.09 580.58 212.19 579.18 215 575.72 213.29 573.5 213.25 570.11 215.64 567.09 215.51 564.2 217.93 564.84 220.51 561.22 221.94 560.79 227 561.79 230.51 560.2 232.05 555.48 233.9 531.37 201.55 538.82 196.76 550.34 182.2 537.17 164.31 553.59 142.26 536.6 129.86 554.61 105.5 529.07 87.21 520.2 81.07 531.4 66.23 533.71 63.68 544.04 49.02 533.5 41.17 538.38 3.99 Z"
    },
    {
        "model": "campaign_trail.state",
        "pk": 20701,
        "fields": {
            "name": "Washington",
            "abbr": "Washington",
            "electoral_votes": 1,
            "popular_votes": 35016,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        },
        "d": "M 276.34 299.15 290.89 258.58 288.15 257.71 299.48 227.69 306.61 230.56 308.29 230.47 314.23 220.2 304.89 214.99 313.69 198.15 323.49 201.35 334.87 207.55 351.24 216.92 364.78 190.58 365.53 188.7 391.42 208.01 393.63 202.73 397.99 195.04 406.25 179.43 458.82 207.58 460.51 212.3 447.33 237.05 435.67 251.57 435.74 260.81 422.7 284.64 410.07 278.77 404.03 310.81 400.98 309.23 374.83 298.93 373.76 301.76 368.09 299.85 357.38 325.06 356.03 324.54 343.81 351.16 328.89 345.26 302.17 334.42 290.07 329.78 285.07 330.37 283.86 322.41 281.36 301.23 280.89 298.68 276.34 299.15 Z"
    },
    {
        "model": "campaign_trail.state",
        "pk": 20711,
        "fields": {
            "name": "Windham",
            "abbr": "Windham",
            "electoral_votes": 1,
            "popular_votes": 25499,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        },
        "d": "M 308.39 614.6 324.37 620.34 342.55 626.34 344.89 625.82 377.29 621.75 406.69 622.75 404.98 627.62 405.7 633.29 402.49 636.87 404.16 640.44 401.92 643.96 402.18 649.87 400.82 652.86 402.07 655.52 404.9 656.61 404.38 658.56 406.93 662.23 406.45 665.62 404.36 668.78 406.37 673.73 403.82 679.05 399.06 683.91 398.16 685.56 399.98 689.73 399.28 693.96 400.8 697.88 403.98 700.21 402.93 703.49 400.06 703.87 398.68 707.53 399.63 709.85 396.51 713.63 394.5 712.96 391.71 715.16 385.1 716.72 381.58 719.58 380.97 721.34 383 724.82 382.88 728.76 383.61 732.27 382.07 734.68 381.75 739.43 379.38 742.41 376.27 743.95 375.4 750.22 375.91 752.63 375.14 755.07 377.36 758.9 378.33 766.41 379.65 771.85 385.1 776.79 387.54 780.53 387.67 782.38 385.52 784.44 386.45 786.13 392.09 783.12 395.99 788.26 396.73 792.37 399.83 796.79 400.47 799 359.92 797.46 310.4 795.47 279.32 794.44 280.37 765.12 280.18 762.87 281.37 733.17 281.27 728.89 259.68 727.68 261.16 695.27 261.8 695.31 261.61 677.36 263.18 662.19 275.32 662.68 288.12 663.74 295.79 664.02 297.48 632.24 300.16 632.39 301.14 612.19 308.39 614.6 Z"
    },
    {
        "model": "campaign_trail.state",
        "pk": 20721,
        "fields": {
            "name": "Bennington",
            "abbr": "Bennington",
            "electoral_votes": 1,
            "popular_votes": 20007,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        },
        "d": "M 197.78 593.52 219.65 594.79 238.98 596.49 250.63 596.52 265.7 597.33 264.46 602.3 268.65 602.38 268.83 597.64 295.97 599.04 308.38 599.5 308.39 614.6 301.14 612.19 300.16 632.39 297.48 632.24 295.79 664.02 288.12 663.74 275.32 662.68 263.18 662.19 261.61 677.36 261.8 695.31 261.16 695.27 259.68 727.68 281.27 728.89 281.37 733.17 280.18 762.87 280.37 765.12 279.32 794.44 190.38 791.41 186.83 771.92 188.71 767.77 187.88 765.58 188.36 760.73 190.08 760.98 191.02 738.76 191.5 723.75 193.01 690.49 194.27 669.5 196.45 622.97 197.11 612.75 197.78 593.52 Z"
    },
    {
        "model": "campaign_trail.state",
        "pk": 20731,
        "fields": {
            "name": "Grand Isle",
            "abbr": "Grand",
            "electoral_votes": 1,
            "popular_votes": 4824,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        },
        "d": "M 178.77 13.02 178.36 10.68 181.29 2.52 204.5 2.29 214.22 2.06 211.98 11.05 210.72 12.68 207.94 18.68 202.46 20.51 200.43 22.29 201.81 28.46 199.04 33.09 198.13 36.31 199.16 37.51 198.64 41.21 195.24 52.83 193.21 54.36 188.94 52.05 188.96 50.34 190.94 46.08 190.42 40.49 188.38 39.42 188.37 35.7 189.47 32.68 188.5 27.35 190.22 22.41 190.69 18.06 188.72 12.36 181.89 11.77 178.77 13.02 Z M 198.6 54.17 197.81 47.54 199.5 43.29 201.33 42.7 205.54 34.38 206.67 34.14 208.26 37.77 208.58 46.88 205.4 47.94 203.55 50.37 203.93 53.52 202.32 55.23 201.88 57.92 198.26 66.1 196.61 68.99 194.59 69.77 193.88 78.22 194.27 82.73 192.42 86.67 190.62 84.84 189.22 87.51 185.91 87.85 185.01 86.16 185.47 82.89 187.48 79.95 188.18 76.59 187.63 70.22 188.7 67.76 191.09 69.4 192.66 65.21 195.6 65.54 197.08 64.1 197.68 61.09 195.44 59.47 196.23 54.85 198.6 54.17 Z M 206.55 67.63 207.37 64.73 211.19 59.99 212.6 60.87 213.18 63.63 210.47 63.65 207.62 69.07 206.55 67.63 Z M 199.78 92.38 202.61 96.53 201.84 100.75 195.21 103.3 194.88 108.25 193.25 113.32 193.55 114.87 190.93 119.79 186.47 122.05 186.41 126.44 187.97 128.28 191.98 128.06 193.21 127.16 194.56 121.69 196.22 123.66 197.19 128.38 199.41 131.65 199.01 134.78 197.08 136.18 196.31 141.55 192.13 141.76 190.69 146.05 188 145.98 187.36 143.41 185.42 141.04 185 138.4 178.28 137.19 178.85 132.38 178.47 118.27 177.9 111.32 183.55 95.74 185.04 96.02 187.86 92.65 190.73 94.51 193.44 93.88 194.46 87.83 198 87.69 199.78 92.38 Z M 181.33 65.27 179.87 66.01 176.74 64.26 177.04 61.62 175.17 59.6 176.15 57.76 177.4 48.25 180.57 38.94 187.05 40.63 187.6 43.42 184.64 51.52 185.84 54.44 183.47 57.2 184.43 58.39 182.16 61.66 181.33 65.27 Z"
    },
    {
        "model": "campaign_trail.state",
        "pk": 20741,
        "fields": {
            "name": "Orleans",
            "abbr": "Orleans",
            "electoral_votes": 1,
            "popular_votes": 13851,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        },
        "d": "M 376.49 4.5 381.78 4.64 394.51 4.29 402.46 4.41 414.23 5.07 427.27 5.39 436.79 6 446.49 5.85 473.78 5.05 487.99 5.19 507.72 4.67 526.54 4.01 538.38 3.99 533.5 41.17 544.04 49.02 533.71 63.68 531.4 66.23 520.2 81.07 529.07 87.21 514.23 107.65 511.3 111.92 485.62 94.3 491.96 116.82 477.84 110.12 476.86 112.44 463.89 138.18 462.74 140.75 448.94 166.65 439.06 161.46 423.07 153.37 421.24 152.2 421.93 149.01 394.1 134.83 410.33 103.87 389.6 93.55 370.18 83.69 381.56 65.17 379.57 33.16 380.78 33.12 376.49 4.5 Z"
    },
    {
        "model": "campaign_trail.state",
        "pk": 20751,
        "fields": {
            "name": "Lamoille",
            "abbr": "Lamoille",
            "electoral_votes": 1,
            "popular_votes": 14816,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        },
        "d": "M 370.18 83.69 389.6 93.55 410.33 103.87 394.1 134.83 421.93 149.01 421.24 152.2 407.66 177.15 406.25 179.43 397.99 195.04 393.63 202.73 391.42 208.01 365.53 188.7 364.78 190.58 351.24 216.92 334.87 207.55 323.49 201.35 313.69 198.15 305.35 195.54 314.06 179.21 307.31 175.65 312.54 165.12 308.29 163.72 300.51 153.57 287.76 135.58 284.32 134.86 283.47 130.5 289.52 130.31 292.3 127.09 302.61 107.81 316.89 115 320.4 96.49 321.64 96.73 323.1 89.13 325.6 89.61 326.48 84.95 328.78 85.35 328.53 80.41 332.95 75.56 361.62 76.88 360.84 78.47 365.51 81.54 366.38 80.41 370.18 83.69 Z"
    },
    {
        "model": "campaign_trail.state",
        "pk": 20761,
        "fields": {
            "name": "Addison",
            "abbr": "Addison",
            "electoral_votes": 1,
            "popular_votes": 21089,
            "poll_closing_time": 110,
            "winner_take_all_flg": 1,
            "election": 20
        },
        "d": "M 276.34 299.15 280.89 298.68 281.36 301.23 283.86 322.41 285.07 330.37 290.07 329.78 302.17 334.42 328.89 345.26 325.89 351.39 316.53 368.69 311.73 377.78 310.13 377.18 297.69 403.65 295.45 402.8 294.91 389.32 275.54 398.94 268.76 396.09 268.7 402.69 270.55 401.73 273.79 415.92 259.27 423.22 256.9 410.22 256.12 408.62 224.27 409.93 224.41 410.85 208.41 411.55 211.39 436.13 173.51 440.3 176.48 437.18 176.73 432.79 174.92 430.45 174.11 426.47 171.04 425.3 168.45 420.29 165.17 416.3 167.93 411.82 169.9 412.13 170.87 408.38 169.73 403.91 171.2 400.8 171.13 396.86 169.52 394.56 169.39 388.64 164.64 386.51 164.86 380.04 162.72 379.26 162.39 377.07 163.83 374.21 162.48 372.11 162.06 364.94 161.43 363.03 163.74 360.39 162.68 356.16 164.33 352.56 165.15 348.61 162.72 345 158.32 342.36 157.53 337.79 160.51 332.17 159.72 329.01 164.51 322.77 167.01 321.3 166.53 317.79 167.43 314.48 171.55 308.98 174.04 297.6 176.23 293.2 171.2 290.87 171.67 287.33 174.87 284.88 176.28 281.41 179.33 279.01 184.41 278.8 185.98 275.37 185.21 271.85 187.59 270.43 194.12 270.63 194.94 275.06 196.8 275.09 195.39 271.14 198.68 271.15 197.92 268.79 194.72 266.89 196.73 264.17 215.27 262.07 226.46 260.14 246.92 256.33 247.06 257.69 260.47 255.88 259.54 249.48 270.66 252.58 273.15 274.76 276.34 299.15 Z"
    },
    {
        "model": "campaign_trail.state",
        "pk": 20771,
        "fields": {
            "name": "Franklin",
            "abbr": "Franklin",
            "electoral_votes": 1,
            "popular_votes": 25649,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        },
        "d": "M 376.49 4.5 380.78 33.12 379.57 33.16 381.56 65.17 370.18 83.69 366.38 80.41 365.51 81.54 360.84 78.47 361.62 76.88 332.95 75.56 328.53 80.41 328.78 85.35 326.48 84.95 325.6 89.61 323.1 89.13 321.64 96.73 320.4 96.49 316.89 115 302.61 107.81 292.3 127.09 289.52 130.31 283.47 130.5 284.32 134.86 255.92 128.45 239.48 119.43 214.06 106 217.01 97.24 220.27 93.3 220.84 91.26 224.96 89.3 225.41 87.12 230.39 80.59 231.83 74.77 227.96 72.83 225.79 77.57 222.85 78.62 222.11 82.77 219.5 82.22 219 80.32 220.75 75.88 222.72 75.65 223.67 73.2 220.55 70.57 218.74 70.34 219.66 64.52 221.07 51.42 222.62 48.72 224.55 42.88 224.63 39.48 225.94 34.76 225.05 32.12 221.25 29.75 218.13 29 215.85 29.56 214.3 32.91 210.87 30.99 209.6 28.2 211.16 21.95 213.92 16.39 217.14 15.5 219.35 13.17 220.87 9.69 225.37 10.34 226.09 6.91 225.73 4.19 229.69 3.21 233.11 4.88 230.29 7.79 230.4 13.87 232.84 15.22 234.88 14.33 238.3 15.53 244.12 10.15 243.4 2.52 245.15 1.72 262.51 1.76 274.07 2.14 304.34 1.4 321.24 1.74 346.59 1.95 367.59 2.76 376.49 4.5 Z M 213.06 85.92 214.97 84.07 217.38 84.95 213.74 87.54 213.06 85.92 Z"
    },
    {
        "model": "campaign_trail.state",
        "pk": 20781,
        "fields": {
            "name": "Caledonia",
            "abbr": "Caledonia",
            "electoral_votes": 1,
            "popular_votes": 15973,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        },
        "d": "M 406.25 179.43 407.66 177.15 421.24 152.2 423.07 153.37 439.06 161.46 448.94 166.65 462.74 140.75 463.89 138.18 476.86 112.44 477.84 110.12 491.96 116.82 485.62 94.3 511.3 111.92 514.23 107.65 529.07 87.21 554.61 105.5 536.6 129.86 553.59 142.26 537.17 164.31 550.34 182.2 538.82 196.76 531.37 201.55 555.48 233.9 551.78 236.32 546.82 237.83 539.33 234.1 535.55 234.47 532.65 237.61 524.14 238.02 519.64 237.72 518.31 239.92 513.97 242.43 510.22 243.8 507.67 243.05 506.8 250 505.11 252.28 500.28 255.69 497.91 260.9 500.39 261.66 500.11 265.91 503.12 272.3 501.72 276.65 502 279.14 500.26 282.13 500.14 285.57 498.63 289.29 500.83 292.88 501.97 296.89 504.36 300.65 472.41 288.65 471.49 288.41 438.68 291.85 422.7 284.64 435.74 260.81 435.67 251.57 447.33 237.05 460.51 212.3 458.82 207.58 406.25 179.43 Z"
    },
    {
        "model": "campaign_trail.state",
        "pk": 20791,
        "fields": {
            "name": "Rutland",
            "abbr": "Rutland",
            "electoral_votes": 1,
            "popular_votes": 33530,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        },
        "d": "M 173.51 440.3 211.39 436.13 208.41 411.55 224.41 410.85 224.27 409.93 256.12 408.62 256.9 410.22 259.27 423.22 273.79 415.92 295.36 404.89 295.48 411.31 304.43 414.96 306.39 411.53 314.89 415.03 316.3 417.32 316.08 419.45 318.41 423.8 309.14 443.86 313.01 445.74 308.92 454.18 339.28 465.46 331.47 484.15 324.46 499.25 321.03 497.96 318.34 514.37 316.24 531.56 321.52 532.64 320.94 537.06 332.89 540.8 333.31 543.62 329.24 558.6 323.11 574.46 324.07 580.77 307.97 571.21 307.95 572.91 300.22 572.69 299.59 582.09 296.98 582.28 295.97 599.04 268.83 597.64 268.65 602.38 264.46 602.3 265.7 597.33 250.63 596.52 238.98 596.49 219.65 594.79 197.78 593.52 198.45 573.85 199.83 539.23 200.4 519.97 201.64 516.79 199.62 513.81 200.03 510.18 197.53 506.3 194.83 503.83 192.21 503.01 190.92 501.25 188.73 501.49 189.14 493.13 187.13 490.23 186.72 485.5 182.81 484.43 176.57 484.81 175.18 486.04 172.41 485.12 169.52 487.17 167.95 489.41 168.85 491.72 165.27 496.82 165.75 502.31 162.19 504.86 154.52 499.23 154.11 496.95 156.37 492.62 155.87 489.37 157.28 485.56 154.9 481.67 155.29 478.83 157.26 477.01 160.05 469.53 161.66 461.31 163.79 459.21 165.82 455 170.13 451.89 171.01 443.89 173.51 440.3 Z"
    },
    {
        "model": "campaign_trail.state",
        "pk": 20801,
        "fields": {
            "name": "Orange",
            "abbr": "Orange",
            "electoral_votes": 1,
            "popular_votes": 16999,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        },
        "d": "M 316.53 368.69 325.89 351.39 328.89 345.26 343.81 351.16 356.03 324.54 357.38 325.06 368.09 299.85 373.76 301.76 374.83 298.93 400.98 309.23 404.03 310.81 410.07 278.77 422.7 284.64 438.68 291.85 471.49 288.41 472.41 288.65 504.36 300.65 504.82 307.42 506.96 309.68 506.09 311.72 502.23 313.61 501.55 316.92 502.26 320.16 504.59 321.49 505.35 319.36 507.66 320.61 507.31 323.46 504.3 325.41 507.1 326.95 502.28 328.65 503.19 331.33 501.1 335.06 498.51 335.18 499.03 338.27 495.84 340.29 496.74 343.91 494.08 348.01 492.12 347.06 491.05 350.12 489.01 351.57 489.56 353.96 486.2 357.37 487.42 360.02 486.81 366.47 489.22 365.92 490.77 370.27 489.43 372.54 486.3 373.73 486.02 382.05 484.58 384.35 477.7 389.72 475.12 394.93 472.87 395.14 472.12 397.41 473.56 401.09 469.8 402.35 468.53 405.63 469.82 409.46 470 413.32 468.42 417.06 469.53 420.81 469.38 423.53 466.81 427.85 464.18 430.56 464.3 435.2 430.37 421.64 413.77 416.44 399.73 412.53 400.03 412.05 363.55 396.67 337.07 386.51 336.32 387.65 320.91 381.84 322.07 379.38 321.53 376.78 316.79 374.59 316.53 368.69 Z"
    },
    {
        "model": "campaign_trail.state",
        "pk": 20811,
        "fields": {
            "name": "Chittenden",
            "abbr": "Chittenden",
            "electoral_votes": 1,
            "popular_votes": 97615,
            "poll_closing_time": 120,
            "winner_take_all_flg": 1,
            "election": 20
        },
        "d": "M 284.32 134.86 287.76 135.58 300.51 153.57 308.29 163.72 312.54 165.12 307.31 175.65 314.06 179.21 305.35 195.54 313.69 198.15 304.89 214.99 314.23 220.2 308.29 230.47 306.61 230.56 299.48 227.69 288.15 257.71 290.89 258.58 276.34 299.15 273.15 274.76 270.66 252.58 259.54 249.48 260.47 255.88 247.06 257.69 246.92 256.33 226.46 260.14 215.27 262.07 196.73 264.17 197.44 261.52 193.95 258.87 190.33 262.19 188.62 260.79 194.23 254.8 192.1 251.75 188.54 252.95 189.5 247.28 192.77 240 194.44 237.92 193.43 234.1 196.21 232.44 198.14 228.41 197.05 226.64 197.6 223.6 196.3 222.18 195.05 217.32 198.46 213.99 200.85 210.71 203.58 211.06 205.54 215.14 208.74 213.97 210.38 207.21 209.79 201.18 206.99 200.5 207.25 196.73 209.89 194.38 209.4 188.41 208.24 185.53 204.27 183.45 203.05 180.66 196.09 178.31 198.04 175.13 197.03 169.98 195.44 167.07 188.88 162.8 191.07 160.84 192.34 162.61 195.57 161.09 196.87 162.81 200.26 162.65 203.8 161.55 205.65 159.93 205.06 156.74 207.84 156.96 207.59 161.87 211.59 164.26 213.75 163.77 217.34 160.96 219.54 152.93 217.13 152.19 211.79 154.31 209.1 153.37 208.18 144.63 203.39 140.17 206.29 138.72 206.99 135.83 212.56 133.55 213.42 131.89 212.28 127.89 213.18 119.62 212.6 116.69 214.06 106 239.48 119.43 255.92 128.45 284.32 134.86 Z"
    }
]

campaignTrail_temp.issues_json = [
    {
        "model": "campaign_trail.issue",
        "pk": 100,
        "fields": {
            "name": "Taxes",
            "description": "",
            "stance_1": "New Hampshire",
            "stance_desc_1": "",
            "stance_2": "No New Taxes",
            "stance_desc_2": "",
            "stance_3": "No New Taxes",
            "stance_desc_3": "",
            "stance_4": "Pragmatic",
            "stance_desc_4": "",
            "stance_5": "Pragmatic",
            "stance_desc_5": "",
            "stance_6": "Tax the Rich",
            "stance_desc_6": "",
            "stance_7": "Soak ‘em Dry",
            "stance_desc_7": "",
            "election": 20
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 101,
        "fields": {
            "name": "Phil Scott Approval",
            "description": "",
            "stance_1": "King Phil",
            "stance_desc_1": "",
            "stance_2": "Beloved ",
            "stance_desc_2": "",
            "stance_3": "Beloved ",
            "stance_desc_3": "",
            "stance_4": "Popular",
            "stance_desc_4": "",
            "stance_5": "Liked ",
            "stance_desc_5": "",
            "stance_6": "Liked ",
            "stance_desc_6": "",
            "stance_7": "Middling",
            "stance_desc_7": "",
            "election": 20
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 102,
        "fields": {
            "name": "Culture",
            "description": "",
            "stance_1": "Take Back Vermont",
            "stance_desc_1": "",
            "stance_2": "Conservative",
            "stance_desc_2": "",
            "stance_3": "Conservative",
            "stance_desc_3": "",
            "stance_4": "Moderate",
            "stance_desc_4": "",
            "stance_5": "Liberal",
            "stance_desc_5": "",
            "stance_6": "Liberal",
            "stance_desc_6": "",
            "stance_7": "Wokiste",
            "stance_desc_7": "",
            "election": 20
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 103,
        "fields": {
            "name": "Moderation",
            "description": "",
            "stance_1": "Very Important",
            "stance_desc_1": "",
            "stance_2": "Valued",
            "stance_desc_2": "",
            "stance_3": "Valued",
            "stance_desc_3": "",
            "stance_4": "Apathetic",
            "stance_desc_4": "",
            "stance_5": "Apathetic",
            "stance_desc_5": "",
            "stance_6": "Partisan",
            "stance_desc_6": "",
            "stance_7": "Radicals!",
            "stance_desc_7": "",
            "election": 20
        }
    },
    {
        "model": "campaign_trail.issue",
        "pk": 104,
        "fields": {
            "name": "Urban/Rural ",
            "description": "",
            "stance_1": "Chittendenworld",
            "stance_desc_1": "",
            "stance_2": "Mixed",
            "stance_desc_2": "",
            "stance_3": "Mixed",
            "stance_desc_3": "",
            "stance_4": "Small Towns",
            "stance_desc_4": "",
            "stance_5": "Small Towns",
            "stance_desc_5": "",
            "stance_6": "Rural",
            "stance_desc_6": "",
            "stance_7": "Remote",
            "stance_desc_7": "",
            "election": 20
        }
    }
]

campaignTrail_temp.state_issue_score_json = [
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20686,
        "fields": {
            "state": 20681,
            "issue": "100",
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20687,
        "fields": {
            "state": 20681,
            "issue": "101",
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20688,
        "fields": {
            "state": 20681,
            "issue": "102",
            "state_issue_score": 0.5,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20689,
        "fields": {
            "state": 20681,
            "issue": "103",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20690,
        "fields": {
            "state": 20681,
            "issue": "104",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20696,
        "fields": {
            "state": 20691,
            "issue": "100",
            "state_issue_score": -1,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20697,
        "fields": {
            "state": 20691,
            "issue": "101",
            "state_issue_score": -1,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20698,
        "fields": {
            "state": 20691,
            "issue": "102",
            "state_issue_score": -1,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20699,
        "fields": {
            "state": 20691,
            "issue": "103",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20700,
        "fields": {
            "state": 20691,
            "issue": "104",
            "state_issue_score": 1,
            "weight": 0.00003
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20706,
        "fields": {
            "state": 20701,
            "issue": "100",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20707,
        "fields": {
            "state": 20701,
            "issue": "101",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20708,
        "fields": {
            "state": 20701,
            "issue": "102",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20709,
        "fields": {
            "state": 20701,
            "issue": "103",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20710,
        "fields": {
            "state": 20701,
            "issue": "104",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20716,
        "fields": {
            "state": 20711,
            "issue": "100",
            "state_issue_score": 1,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20717,
        "fields": {
            "state": 20711,
            "issue": "101",
            "state_issue_score": 1,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20718,
        "fields": {
            "state": 20711,
            "issue": "102",
            "state_issue_score": 1,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20719,
        "fields": {
            "state": 20711,
            "issue": "103",
            "state_issue_score": 1,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20720,
        "fields": {
            "state": 20711,
            "issue": "104",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20726,
        "fields": {
            "state": 20721,
            "issue": "100",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20727,
        "fields": {
            "state": 20721,
            "issue": "101",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20728,
        "fields": {
            "state": 20721,
            "issue": "102",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20729,
        "fields": {
            "state": 20721,
            "issue": "103",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20730,
        "fields": {
            "state": 20721,
            "issue": "104",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20736,
        "fields": {
            "state": 20731,
            "issue": "100",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20737,
        "fields": {
            "state": 20731,
            "issue": "101",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20738,
        "fields": {
            "state": 20731,
            "issue": "102",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20739,
        "fields": {
            "state": 20731,
            "issue": "103",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20740,
        "fields": {
            "state": 20731,
            "issue": "104",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20746,
        "fields": {
            "state": 20741,
            "issue": "100",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20747,
        "fields": {
            "state": 20741,
            "issue": "101",
            "state_issue_score": -1,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20748,
        "fields": {
            "state": 20741,
            "issue": "102",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20749,
        "fields": {
            "state": 20741,
            "issue": "103",
            "state_issue_score": -0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20750,
        "fields": {
            "state": 20741,
            "issue": "104",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20756,
        "fields": {
            "state": 20751,
            "issue": "100",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20757,
        "fields": {
            "state": 20751,
            "issue": "101",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20758,
        "fields": {
            "state": 20751,
            "issue": "102",
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20759,
        "fields": {
            "state": 20751,
            "issue": "103",
            "state_issue_score": -0.7,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20760,
        "fields": {
            "state": 20751,
            "issue": "104",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20766,
        "fields": {
            "state": 20761,
            "issue": "100",//Taxes
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20767,
        "fields": {
            "state": 20761,
            "issue": "101", //Aproval
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20768,
        "fields": {
            "state": 20761,
            "issue": "102", //Culture
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20769,
        "fields": {
            "state": 20761,
            "issue": "103",
            "state_issue_score": -0.7,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20770,
        "fields": {
            "state": 20761,
            "issue": "104",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20776,
        "fields": {
            "state": 20771,
            "issue": "100",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20777,
        "fields": {
            "state": 20771,
            "issue": "101",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20778,
        "fields": {
            "state": 20771,
            "issue": "102",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20779,
        "fields": {
            "state": 20771,
            "issue": "103",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20780,
        "fields": {
            "state": 20771,
            "issue": "104",
            "state_issue_score": -0.3,
            "weight": 0.4
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20786,
        "fields": {
            "state": 20781,
            "issue": "100",
            "state_issue_score": -1,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20787,
        "fields": {
            "state": 20781,
            "issue": "101",
            "state_issue_score": -1,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20788,
        "fields": {
            "state": 20781,
            "issue": "102",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20789,
        "fields": {
            "state": 20781,
            "issue": "103",
            "state_issue_score": -0.7,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20790,
        "fields": {
            "state": 20781,
            "issue": "104",
            "state_issue_score": 0.4,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20796,
        "fields": {
            "state": 20791,
            "issue": "100",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20797,
        "fields": {
            "state": 20791,
            "issue": "101",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20798,
        "fields": {
            "state": 20791,
            "issue": "102",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20799,
        "fields": {
            "state": 20791,
            "issue": "103",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20800,
        "fields": {
            "state": 20791,
            "issue": "104",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20806,
        "fields": {
            "state": 20801,
            "issue": "100",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20807,
        "fields": {
            "state": 20801,
            "issue": "101",
            "state_issue_score": -0.7,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20808,
        "fields": {
            "state": 20801,
            "issue": "102",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20809,
        "fields": {
            "state": 20801,
            "issue": "103",
            "state_issue_score": -0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20810,
        "fields": {
            "state": 20801,
            "issue": "104",
            "state_issue_score": 0.7,
            "weight": 0.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20816,
        "fields": {
            "state": 20811,
            "issue": "100",
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20817,
        "fields": {
            "state": 20811,
            "issue": "101",
            "state_issue_score": 0,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20818,
        "fields": {
            "state": 20811,
            "issue": "102",
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20819,
        "fields": {
            "state": 20811,
            "issue": "103",
            "state_issue_score": 0.6,
            "weight": 1.5
        }
    },
    {
        "model": "campaign_trail.state_issue_score",
        "pk": 20820,
        "fields": {
            "state": 20811,
            "issue": "104",
            "state_issue_score": -1,
            "weight": 1.5
        }
    }
]
campaignTrail_temp.candidate_state_multiplier_json = [
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20682,
        "fields": {
            "candidate": 200,
            "state": 20681,
            "state_multiplier": 0.4
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20683,
        "fields": {
            "candidate": 202,
            "state": 20681,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20684,
        "fields": {
            "candidate": 201,
            "state": 20681,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20685,
        "fields": {
            "candidate": 203,
            "state": 20681,
            "state_multiplier": 0.003
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20692,
        "fields": {
            "candidate": 200,
            "state": 20691,
            "state_multiplier": 1.08
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20693,
        "fields": {
            "candidate": 202,
            "state": 20691,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20694,
        "fields": {
            "candidate": 201,
            "state": 20691,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20695,
        "fields": {
            "candidate": 203,
            "state": 20691,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20702,
        "fields": {
            "candidate": 200,
            "state": 20701,
            "state_multiplier": 0.58
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20703,
        "fields": {
            "candidate": 202,
            "state": 20701,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20704,
        "fields": {
            "candidate": 201,
            "state": 20701,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20705,
        "fields": {
            "candidate": 203,
            "state": 20701,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20712,
        "fields": {
            "candidate": 200,
            "state": 20711,
            "state_multiplier": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20714,
        "fields": {
            "candidate": 201,
            "state": 20711,
            "state_multiplier": 0.26
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 2323552,
        "fields": {
            "candidate": 203,
            "state": 20711,
            "state_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20722,
        "fields": {
            "candidate": 200,
            "state": 20721,
            "state_multiplier": 0.7
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20723,
        "fields": {
            "candidate": 202,
            "state": 20721,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20724,
        "fields": {
            "candidate": 201,
            "state": 20721,
            "state_multiplier": 0.3
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20725,
        "fields": {
            "candidate": 203,
            "state": 20721,
            "state_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20732,
        "fields": {
            "candidate": 200,
            "state": 20731,
            "state_multiplier": 0.6
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20733,
        "fields": {
            "candidate": 202,
            "state": 20731,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20734,
        "fields": {
            "candidate": 201,
            "state": 20731,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20735,
        "fields": {
            "candidate": 203,
            "state": 20731,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20742,
        "fields": {
            "candidate": 200,
            "state": 20741,
            "state_multiplier": 0.7 
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20743,
        "fields": {
            "candidate": 202,
            "state": 20741,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20744,
        "fields": {
            "candidate": 201,
            "state": 20741,
            "state_multiplier": 0.2  
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20745,
        "fields": {
            "candidate": 203,
            "state": 20741,
            "state_multiplier": 0.2    
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20752,
        "fields": {
            "candidate": 200,
            "state": 20751,
            "state_multiplier": 0.8
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20753,
        "fields": {
            "candidate": 202,
            "state": 20751,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20754,
        "fields": {
            "candidate": 201,
            "state": 20751,
            "state_multiplier": 0.26
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20755,
        "fields": {
            "candidate": 203,
            "state": 20751,
            "state_multiplier": 0.009
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20762,
        "fields": {
            "candidate": 200,
            "state": 20761,
            "state_multiplier": 0.95123
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20763,
        "fields": {
            "candidate": 202,
            "state": 20761,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20764,
        "fields": {
            "candidate": 201,
            "state": 20761,
            "state_multiplier": 0.5
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20765,
        "fields": {
            "candidate": 203,
            "state": 20761,
            "state_multiplier": 0.009
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20772,
        "fields": {
            "candidate": 200,
            "state": 20771,
            "state_multiplier": 0.8
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20773,
        "fields": {
            "candidate": 202,
            "state": 20771,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20774,
        "fields": {
            "candidate": 201,
            "state": 20771,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20775,
        "fields": {
            "candidate": 203,
            "state": 20771,
            "state_multiplier": 0.008
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20782,
        "fields": {
            "candidate": 200,
            "state": 20781,
            "state_multiplier": 0.45
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20783,
        "fields": {
            "candidate": 202,
            "state": 20781,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20784,
        "fields": {
            "candidate": 201,
            "state": 20781,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20785,
        "fields": {
            "candidate": 203,
            "state": 20781,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20792,
        "fields": {
            "candidate": 200,
            "state": 20791,
            "state_multiplier": 0.49
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20793,
        "fields": {
            "candidate": 202,
            "state": 20791,
            "state_multiplier": 0.0005
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20794,
        "fields": {
            "candidate": 201,
            "state": 20791,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20795,
        "fields": {
            "candidate": 203,
            "state": 20791,
            "state_multiplier": 0.009
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20802,
        "fields": {
            "candidate": 200,
            "state": 20801,
            "state_multiplier": 0.67
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20803,
        "fields": {
            "candidate": 202,
            "state": 20801,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20804,
        "fields": {
            "candidate": 201,
            "state": 20801,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20805,
        "fields": {
            "candidate": 203,
            "state": 20801,
            "state_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20812,
        "fields": {
            "candidate": 200,
            "state": 20811,
            "state_multiplier": 0.8
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20813,
        "fields": {
            "candidate": 203,
            "state": 20811,
            "state_multiplier": 0.004
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20814,
        "fields": {
            "candidate": 201,
            "state": 20811,
            "state_multiplier": 0.42
        }
    },
    {
        "model": "campaign_trail.candidate_state_multiplier",
        "pk": 20815,
        "fields": {
            "candidate": 202,
            "state": 20811,
            "state_multiplier": 0.005
        }
    }
]

campaignTrail_temp.answer_score_global_json = [
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3100,
        "fields": {
            "answer": 5246,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 310023,
        "fields": {
            "answer": 5259,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3104,
        "fields": {
            "answer": 5250,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.08
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3105,
        "fields": {
            "answer": 5251,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3106,
        "fields": {
            "answer": 5252,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3131,
        "fields": {
            "answer": 5143,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3133,
        "fields": {
            "answer": 5150,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3146,
        "fields": {
            "answer": 5189,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.08
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3116,
        "fields": {
            "answer": 1891,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.34
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3153,
        "fields": {
            "answer": 5201,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3164,
        "fields": {
            "answer": 5256,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3134,
        "fields": {
            "answer": 8695,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3181,
        "fields": {
            "answer": 5147,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3286,
        "fields": {
            "answer": 5142,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3307,
        "fields": {
            "answer": 5215,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3319,
        "fields": {
            "answer": 5224,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3324,
        "fields": {
            "answer": 5233,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 3327,
        "fields": {
            "answer": 5236,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.0005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20821,
        "fields": {
            "answer": 5139,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20822,
        "fields": {
            "answer": 5140,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20823,
        "fields": {
            "answer": 5141,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.002
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20839,
        "fields": {
            "answer": 5155,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20844,
        "fields": {
            "answer": 5172,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20903,
        "fields": {
            "answer": 5232,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20905,
        "fields": {
            "answer": 5234,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20907,
        "fields": {
            "answer": 5235,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20931,
        "fields": {
            "answer": 5225,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20982,
        "fields": {
            "answer": 20980,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.08
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 20999,
        "fields": {
            "answer": 5260,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21014,
        "fields": {
            "answer": 21012,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21024,
        "fields": {
            "answer": 21019,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21025,
        "fields": {
            "answer": 21019,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 211234,
        "fields": {
            "answer": 21019,
            "candidate": 201,
            "affected_candidate": 203,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21027,
        "fields": {
            "answer": 21020,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21029,
        "fields": {
            "answer": 21021,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.015
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21041,
        "fields": {
            "answer": 5147,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21042,
        "fields": {
            "answer": 5148,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21043,
        "fields": {
            "answer": 5149,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 210430,
        "fields": {
            "answer": 5149,
            "candidate": 201,
            "affected_candidate": 203,
            "global_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21044,
        "fields": {
            "answer": 5145,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.005
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21050,
        "fields": {
            "answer": 5152,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21051,
        "fields": {
            "answer": 5152,
            "candidate": 201,
            "affected_candidate": 203,
            "global_multiplier": 0.003
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21056,
        "fields": {
            "answer": 5157,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21059,
        "fields": {
            "answer": 21057,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21060,
        "fields": {
            "answer": 5170,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21061,
        "fields": {
            "answer": 5171,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21066,
        "fields": {
            "answer": 5184,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": -0.25
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21067,
        "fields": {
            "answer": 5184,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21116,
        "fields": {
            "answer": 5184,
            "candidate": 201,
            "affected_candidate": 203,
            "global_multiplier": 33
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 211160,
        "fields": {
            "answer": 21053,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21073,
        "fields": {
            "answer": 5185,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21074,
        "fields": {
            "answer": 5220,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21075,
        "fields": {
            "answer": 5196,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 2111,
        "fields": {
            "answer": 5196,
            "candidate": 201,
            "affected_candidate": 203,
            "global_multiplier": -5
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21076,
        "fields": {
            "answer": 5176,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 251817,
        "fields": {
            "answer": 21238,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21388,
        "fields": {
            "answer": 5176,
            "candidate": 201,
            "affected_candidate": 203,
            "global_multiplier": 21
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21077,
        "fields": {
            "answer": 5200,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21081,
        "fields": {
            "answer": 5202,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21084,
        "fields": {
            "answer": 21082,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21090,
        "fields": {
            "answer": 5214,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21091,
        "fields": {
            "answer": 5214,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21092,
        "fields": {
            "answer": 5215,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21102,
        "fields": {
            "answer": 20934,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.025
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21103,
        "fields": {
            "answer": 5242,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.20
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21104,
        "fields": {
            "answer": 5253,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.001
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21124,
        "fields": {
            "answer": 5260,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21127,
        "fields": {
            "answer": 5261,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21137,
        "fields": {
            "answer": 21134,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21139,
        "fields": {
            "answer": 21135,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21173,
        "fields": {
            "answer": 21171,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": 0.08
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21176,
        "fields": {
            "answer": 21174,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21182,
        "fields": {
            "answer": 21180,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21191,
        "fields": {
            "answer": 21189,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21198,
        "fields": {
            "answer": 21196,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21201,
        "fields": {
            "answer": 21199,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21208,
        "fields": {
            "answer": 21203,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.08
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21227,
        "fields": {
            "answer": 21214,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21229,
        "fields": {
            "answer": 21215,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21231,
        "fields": {
            "answer": 21216,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21239,
        "fields": {
            "answer": 21237,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -.12
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21249,
        "fields": {
            "answer": 21247,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21252,
        "fields": {
            "answer": 21250,
            "candidate": 201,
            "affected_candidate": 200,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21259,
        "fields": {
            "answer": 21257,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 212591,
        "fields": {
            "answer": 212571,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21262,
        "fields": {
            "answer": 21260,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 212621,
        "fields": {
            "answer": 212601,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21272,
        "fields": {
            "answer": 21270,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21275,
        "fields": {
            "answer": 21273,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_global",
        "pk": 21278,
        "fields": {
            "answer": 21276,
            "candidate": 201,
            "affected_candidate": 201,
            "global_multiplier": -0.05
        }
    },
]

campaignTrail_temp.answer_score_state_json = [
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20885,
        "fields": {
            "answer": 5176,
            "state": 20811,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.4
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 208850,
        "fields": {
            "answer": 5185,
            "state": 20811,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.08
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 8216,
        "fields": {
            "answer": 5250,
            "state": 20771,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 82345,
        "fields": {
            "answer": 5250,
            "state": 20791,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 82645,
        "fields": {
            "answer": 5250,
            "state": 20801,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 20886,
        "fields": {
            "answer": 5176,
            "state": 20811,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.46
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21015,
        "fields": {
            "answer": 21012,
            "state": 20811,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21045,
        "fields": {
            "answer": 5145,
            "state": 20771,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21046,
        "fields": {
            "answer": 5145,
            "state": 20741,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21047,
        "fields": {
            "answer": 5145,
            "state": 20691,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21062,
        "fields": {
            "answer": 20845,
            "state": 20771,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21063,
        "fields": {
            "answer": 20845,
            "state": 20741,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21064,
        "fields": {
            "answer": 20845,
            "state": 20691,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21065,
        "fields": {
            "answer": 20845,
            "state": 20791,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21068,
        "fields": {
            "answer": 5184,
            "state": 20811,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.12
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21069,
        "fields": {
            "answer": 5184,
            "state": 20681,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.13
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21070,
        "fields": {
            "answer": 5184,
            "state": 20711,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.33
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21071,
        "fields": {
            "answer": 5184,
            "state": 20701,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.18
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21072,
        "fields": {
            "answer": 5184,
            "state": 20801,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.08
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 213271,
        "fields": {
            "answer": 5184,
            "state": 20751,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.23
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21572,
        "fields": {
            "answer": 5184,
            "state": 20721,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.08
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21078,
        "fields": {
            "answer": 5201,
            "state": 20811,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": 0.4
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21079,
        "fields": {
            "answer": 5201,
            "state": 20681,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21080,
        "fields": {
            "answer": 5201,
            "state": 20711,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": 0.6
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 211873,
        "fields": {
            "answer": 5201,
            "state": 20801,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 2118743,
        "fields": {
            "answer": 5201,
            "state": 20791,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 232273,
        "fields": {
            "answer": 5201,
            "state": 20771,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21086,
        "fields": {
            "answer": 5213,
            "state": 20781,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21087,
        "fields": {
            "answer": 5213,
            "state": 20811,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21088,
        "fields": {
            "answer": 5213,
            "state": 20711,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21094,
        "fields": {
            "answer": 5215,
            "state": 20761,
            "candidate": 201,
            "affected_candidate": 200,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21095,
        "fields": {
            "answer": 5215,
            "state": 20721,
            "candidate": 201,
            "affected_candidate": 200,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21096,
        "fields": {
            "answer": 5225,
            "state": 20691,
            "candidate": 201,
            "affected_candidate": 200,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21097,
        "fields": {
            "answer": 5225,
            "state": 20791,
            "candidate": 201,
            "affected_candidate": 200,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21098,
        "fields": {
            "answer": 5225,
            "state": 20771,
            "candidate": 201,
            "affected_candidate": 200,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21099,
        "fields": {
            "answer": 5226,
            "state": 20691,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21100,
        "fields": {
            "answer": 5226,
            "state": 20791,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21101,
        "fields": {
            "answer": 5226,
            "state": 20771,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21105,
        "fields": {
            "answer": 5251,
            "state": 20711,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.08
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21106,
        "fields": {
            "answer": 5251,
            "state": 20811,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21107,
        "fields": {
            "answer": 5251,
            "state": 20681,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21108,
        "fields": {
            "answer": 20980,
            "state": 20741,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21109,
        "fields": {
            "answer": 20980,
            "state": 20691,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21110,
        "fields": {
            "answer": 20980,
            "state": 20771,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21111,
        "fields": {
            "answer": 20980,
            "state": 20791,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21112,
        "fields": {
            "answer": 20980,
            "state": 20781,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21114,
        "fields": {
            "answer": 5256,
            "state": 20811,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21116,
        "fields": {
            "answer": 5257,
            "state": 20811,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 211160,
        "fields": {
            "answer": 8696,
            "state": 20811,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21117,
        "fields": {
            "answer": 20984,
            "state": 20811,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 211170,
        "fields": {
            "answer": 8697,
            "state": 20811,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21118,
        "fields": {
            "answer": 20989,
            "state": 20711,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 211180,
        "fields": {
            "answer": 20989,
            "state": 20721,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 211180,
        "fields": {
            "answer": 8698,
            "state": 20711,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 2111800,
        "fields": {
            "answer": 8698,
            "state": 20721,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21119,
        "fields": {
            "answer": 5258,
            "state": 20811,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21121,
        "fields": {
            "answer": 5258,
            "state": 20781,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21122,
        "fields": {
            "answer": 5258,
            "state": 20801,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.08
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21123,
        "fields": {
            "answer": 5258,
            "state": 20691,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.08
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21125,
        "fields": {
            "answer": 5260,
            "state": 20811,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21126,
        "fields": {
            "answer": 5260,
            "state": 20711,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21128,
        "fields": {
            "answer": 21009,
            "state": 20711,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21129,
        "fields": {
            "answer": 21009,
            "state": 20681,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21130,
        "fields": {
            "answer": 21009,
            "state": 20781,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21131,
        "fields": {
            "answer": 21009,
            "state": 20781,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21132,
        "fields": {
            "answer": 21009,
            "state": 20791,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21133,
        "fields": {
            "answer": 21009,
            "state": 20691,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21140,
        "fields": {
            "answer": 21135,
            "state": 20811,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21141,
        "fields": {
            "answer": 21020,
            "state": 20691,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21142,
        "fields": {
            "answer": 21020,
            "state": 20741,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21143,
        "fields": {
            "answer": 21020,
            "state": 20771,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21144,
        "fields": {
            "answer": 21020,
            "state": 20791,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21152,
        "fields": {
            "answer": 21145,
            "state": 20681,
            "candidate": 201,
            "affected_candidate": 200,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21153,
        "fields": {
            "answer": 21145,
            "state": 20681,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21154,
        "fields": {
            "answer": 21145,
            "state": 20711,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21155,
        "fields": {
            "answer": 21145,
            "state": 20811,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21156,
        "fields": {
            "answer": 21145,
            "state": 20691,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21157,
        "fields": {
            "answer": 21145,
            "state": 20771,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21158,
        "fields": {
            "answer": 21145,
            "state": 20791,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21159,
        "fields": {
            "answer": 21030,
            "state": 20811,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21160,
        "fields": {
            "answer": 21031,
            "state": 20691,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21161,
        "fields": {
            "answer": 21031,
            "state": 20741,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21162,
        "fields": {
            "answer": 21031,
            "state": 20781,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.1
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21163,
        "fields": {
            "answer": 21032,
            "state": 20711,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.08
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21166,
        "fields": {
            "answer": 21164,
            "state": 20791,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21177,
        "fields": {
            "answer": 21174,
            "state": 20681,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21178,
        "fields": {
            "answer": 21174,
            "state": 20711,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21179,
        "fields": {
            "answer": 21174,
            "state": 20811,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21183,
        "fields": {
            "answer": 21180,
            "state": 20791,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21184,
        "fields": {
            "answer": 21180,
            "state": 20761,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21185,
        "fields": {
            "answer": 21180,
            "state": 20701,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21186,
        "fields": {
            "answer": 21180,
            "state": 20751,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21187,
        "fields": {
            "answer": 21180,
            "state": 20771,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21188,
        "fields": {
            "answer": 21180,
            "state": 20741,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21192,
        "fields": {
            "answer": 21189,
            "state": 20771,
            "candidate": 201,
            "affected_candidate": 200,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21193,
        "fields": {
            "answer": 21189,
            "state": 20741,
            "candidate": 201,
            "affected_candidate": 200,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21194,
        "fields": {
            "answer": 21189,
            "state": 20691,
            "candidate": 201,
            "affected_candidate": 200,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21195,
        "fields": {
            "answer": 21189,
            "state": 20791,
            "candidate": 201,
            "affected_candidate": 200,
            "state_multiplier": 0.05
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21205,
        "fields": {
            "answer": 21202,
            "state": 20681,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.08
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21206,
        "fields": {
            "answer": 21202,
            "state": 20811,
            "candidate": 201,
            "affected_candidate": 200,
            "state_multiplier": -0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21212,
        "fields": {
            "answer": 21210,
            "state": 20811,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21213,
        "fields": {
            "answer": 21210,
            "state": 20711,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21218,
        "fields": {
            "answer": 21214,
            "state": 20791,
            "candidate": 201,
            "affected_candidate": 200,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21219,
        "fields": {
            "answer": 21214,
            "state": 20741,
            "candidate": 201,
            "affected_candidate": 200,
            "state_multiplier": -0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21220,
        "fields": {
            "answer": 21214,
            "state": 20741,
            "candidate": 201,
            "affected_candidate": 200,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21221,
        "fields": {
            "answer": 21214,
            "state": 20791,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21222,
        "fields": {
            "answer": 21214,
            "state": 20681,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.04
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21224,
        "fields": {
            "answer": 21214,
            "state": 20711,
            "candidate": 201,
            "affected_candidate": 200,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21225,
        "fields": {
            "answer": 21214,
            "state": 20811,
            "candidate": 201,
            "affected_candidate": 200,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21235,
        "fields": {
            "answer": 21233,
            "state": 20811,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21236,
        "fields": {
            "answer": 21233,
            "state": 20711,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.02
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21240,
        "fields": {
            "answer": 21237,
            "state": 20791,
            "candidate": 201,
            "affected_candidate": 200,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21241,
        "fields": {
            "answer": 21237,
            "state": 20741,
            "candidate": 201,
            "affected_candidate": 200,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21242,
        "fields": {
            "answer": 21237,
            "state": 20741,
            "candidate": 201,
            "affected_candidate": 200,
            "state_multiplier": 0
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21245,
        "fields": {
            "answer": 21237,
            "state": 20711,
            "candidate": 201,
            "affected_candidate": 200,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21246,
        "fields": {
            "answer": 21237,
            "state": 20811,
            "candidate": 201,
            "affected_candidate": 200,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21256,
        "fields": {
            "answer": 21253,
            "state": 20811,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 212561,
        "fields": {
            "answer": 212531,
            "state": 20811,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21269,
        "fields": {
            "answer": 21266,
            "state": 20811,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21281,
        "fields": {
            "answer": 21279,
            "state": 20701,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21282,
        "fields": {
            "answer": 21279,
            "state": 20761,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21283,
        "fields": {
            "answer": 21279,
            "state": 20791,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21287,
        "fields": {
            "answer": 21285,
            "state": 20701,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": -0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21290,
        "fields": {
            "answer": 5200,
            "state": 20811,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.06
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21293,
        "fields": {
            "answer": 5200,
            "state": 20701,
            "candidate": 201,
            "affected_candidate": 201,
            "state_multiplier": 0.01
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21296,
        "fields": {
            "answer": 5201,
            "state": 20701,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": 0.2
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21297,
        "fields": {
            "answer": 5201,
            "state": 20801,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": 0.03
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21299,
        "fields": {
            "answer": 5202,
            "state": 20811,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": 0.4
        }
    },
    {
        "model": "campaign_trail.answer_score_state",
        "pk": 21306,
        "fields": {
            "answer": 21082,
            "state": 20811,
            "candidate": 202,
            "affected_candidate": 201,
            "state_multiplier": 0.008
        }
    },
]
campaignTrail_temp.answer_feedback_json = [
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2620,
        "fields": {
            "answer": 5139,
            "candidate": 201,
            "answer_feedback": "No more will your unbridled thoughts be unleashed into the Twitterverse. Oh well, perhaps for the best…"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2621,
        "fields": {
            "answer": 5140,
            "candidate": 201,
            "answer_feedback": "You’ve never been one to retreat from a fight. Controversy is soon stirred, as you label Vivek Ramaswamy a “creepy tech bro Nazi” and Viktor Orban an “overweight slob disguised as a statesman.” And that’s just the start…"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2622,
        "fields": {
            "answer": 5141,
            "candidate": 201,
            "answer_feedback": "Your social media presence soon gets a slick remodel. Controversial tweets are deleted, the tone changes, and your off-the-cuff remarks are replaced by carefully curated promotion of your work with the Democratic Party."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2623,
        "fields": {
            "answer": 5142,
            "candidate": 201,
            "answer_feedback": "Your disappearance from Twitter is noted, as your presence is reduced to the occasional retweet. Your fans await your return. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2624,
        "fields": {
            "answer": 5143,
            "candidate": 201,
            "answer_feedback": "Turn heads it does, the chattering class is abound with discussion on your recent commentaries on Vermont politics. Is Howard Dean making a comeback?"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2625,
        "fields": {
            "answer": 5144,
            "candidate": 201,
            "answer_feedback": "The activities of the Universal Healthcare Caucus and your participation therein go unmentioned, but Rep. Cina appreciates your support, and you’ve gained a friend in the Progressive Party. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2626,
        "fields": {
            "answer": 5145,
            "candidate": 201,
            "answer_feedback": "\nA series of statements to the press are issued over the course of the legislative session criticizing the Governor’s conduct and advocating the position of legislative Democrats. This only heightens the tensions in Montpelier but it certainly puts you in the news.\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2628,
        "fields": {
            "answer": 5147,
            "candidate": 201,
            "answer_feedback": "Shannon cleans up in the Democratic caucus. You appear beside her during her victory speech and make frequent appearances in her campaign advertising. All seems to be going well until she is defeated by Rep. Stanak by 4 points in the general election. Tying yourself so closely to this shock failure has weakened your credibility, especially among Progressives."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2629,
        "fields": {
            "answer": 5148,
            "candidate": 201,
            "answer_feedback": "Paul appreciates your dutiful support, but despite your backing she’s unable to force a second round in the caucus against Joan Shannon. You’ll quietly support Shannon in the general, but your role in this campaign is over."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2630,
        "fields": {
            "answer": 5149,
            "candidate": 201,
            "answer_feedback": "Betrayal! Stanak is surprised but pleased to receive your support, especially considering the past relationship between you and the Progressive Party. In the end she defeats Democratic nominee Joan Shannon by a shocking 8 point margin. The Democratic Party, especially in Burlington, is incensed, major donors bitterly tell you to lose their number."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2631,
        "fields": {
            "answer": 5150,
            "candidate": 201,
            "answer_feedback": "C.D. Mattison is surprised but thrilled when you offer her your support. Senator Baruth follows you into her camp as well, causing a snowball effect that leads to Karen Paul dropping out without endorsing. Ultimately Shannon wins the caucus comfortably, but you’ve definitely moved your weight around. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2632,
        "fields": {
            "answer": 5151,
            "candidate": 201,
            "answer_feedback": "You’re right, he won’t. But this mutual petulance doesn’t help you with anything either. If you’re serious about putting together a winning coalition it wouldn’t hurt to show a little more tact with the state’s most popular political figure."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2633,
        "fields": {
            "answer": 5152,
            "candidate": 201,
            "answer_feedback": "If you will remember, Molly lost. Badly. While you’ve never been the progressive firebrand some mistook you for in 2004, eschewing the popular Senator leaves voters confused and exacerbates your divide with him."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2636,
        "fields": {
            "answer": 5155,
            "candidate": 201,
            "answer_feedback": "Did you think this would go well or something? Everybody is puzzled by the elder statesman former Governor pulling up to a student encampment, most of all the students. In an undignified affair, your calls for a cease-fire receive tepid applause, a student in a beanie asks you to condemn “Zionists.” "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2637,
        "fields": {
            "answer": 5156,
            "candidate": 201,
            "answer_feedback": "No harm, no foul, nobody was clamoring for your view anyway. \n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2638,
        "fields": {
            "answer": 5157,
            "candidate": 201,
            "answer_feedback": "A thoughtful view that is shared by the majority of Vermonters and is in line with your previous statements."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2651,
        "fields": {
            "answer": 5170,
            "candidate": 201,
            "answer_feedback": "Howard Dean looked disgusting--nipples protruding--in his blue shirt while on vacation. Very very disrespectful."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2652,
        "fields": {
            "answer": 5171,
            "candidate": 201,
            "answer_feedback": "Perfect, the media hangs on your every word, Phil Scott sweats for the first time in years, and party leaders are positively giddy."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2653,
        "fields": {
            "answer": 5172,
            "candidate": 201,
            "answer_feedback": "This seems harsh, you’re running against Phil Scott not Greg Abbott. Do you intend to bring the national war to Vermont?"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2654,
        "fields": {
            "answer": 5173,
            "candidate": 201,
            "answer_feedback": "It would have been nice for an enthusiastically united center-left, but this will do.\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2657,
        "fields": {
            "answer": 5176,
            "candidate": 201,
            "answer_feedback": "A left-wing protest option will be a serious challenge, but hopefully you can contain the damage."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2665,
        "fields": {
            "answer": 5184,
            "candidate": 201,
            "answer_feedback": "There we go. The signatures have been collected, the endorsements lined up, the donors primed, all that’s left is for you to file. You click your ballpoint pen and start on the official forms.\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2666,
        "fields": {
            "answer": 5185,
            "candidate": 201,
            "answer_feedback": "When you announce a press conference in Waterbury people flock to see you, some carrying old Dean 2004 signs, ready for your return. They will be disappointed to hear you bow out, citing a desire to avoid a negative race. What could have been a legendary campaign is now merely a few months of idle chatter. Shortly after, Miro Weinberger announces his campaign, headed for near-certain defeat in November. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2669,
        "fields": {
            "answer": 5189,
            "candidate": 201,
            "answer_feedback": "It is difficult to imagine defeating Phil Scott with a portion of your own party behind him."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 26611,
        "fields": {
            "answer": 1891,
            "candidate": 201,
            "answer_feedback": "There’s no way to describe this other than a historic betrayal. You’ve irretrievably lost a portion of your supporters to Scott, and burned every remaining bridge with Vermont Democratic Party insiders. You will still walk to the nomination, but winning the election is another matter."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2674,
        "fields": {
            "answer": 5196,
            "candidate": 201,
            "answer_feedback": "Time to win, Governor.\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2678,
        "fields": {
            "answer": 5200,
            "candidate": 201,
            "answer_feedback": "Lifted by a mix of nostalgia and excitement, the crowd is ecstatic. Platitudes of change might not cut the mustard later, but for now they are all you need. Dean for Governor!"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2679,
        "fields": {
            "answer": 5201,
            "candidate": 201,
            "answer_feedback": "Bam! Democratic Party staffers are ecstatic as you speak the criticisms they have shouted to nobody for years to a massive crowd. Thousands of voters flip from Scott to Dean overnight. Dean for Governor!"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2684,
        "fields": {
            "answer": 5227,
            "candidate": 201,
            "answer_feedback": "Hold on Howard, you deleted Twitter!"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2688,
        "fields": {
            "answer": 5242,
            "candidate": 201,
            "answer_feedback": "(Quote Tweeting Trump Assassination video) “False flag? Seems convenient…”"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2692,
        "fields": {
            "answer": 5246,
            "candidate": 201,
            "answer_feedback": "“We’re gonna go to Bennington, and Rutland, and Essex, and St. Albans, and Barre, and together, we’re gonna take back the Fifth Floor! Yeah! Join me at Howarddeanforvermont.com” "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2696,
        "fields": {
            "answer": 5250,
            "candidate": 201,
            "answer_feedback": "Try as you might, you can’t deflect on this. Avoiding this issue will hurt you. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2697,
        "fields": {
            "answer": 5251,
            "candidate": 201,
            "answer_feedback": "This searing attack avoids the issue entirely and shifts the discussion back to the disastrous Saunders appointment. Well done Howard."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2698,
        "fields": {
            "answer": 5252,
            "candidate": 201,
            "answer_feedback": "A strong response that lets you claim the mantle of fiscal responsibility and good government. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2699,
        "fields": {
            "answer": 5253,
            "candidate": 201,
            "answer_feedback": "“J.D. Vance is an overrated semi-fascist creep, terrible book!” "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2702,
        "fields": {
            "answer": 5256,
            "candidate": 201,
            "answer_feedback": "Yes We Can! Massive, record-breaking, crowds gather in Burlington to hear from the 44th President, as he hails you as a champion for the little guy. After all, it was your grassroots strategy as DNC Chair that won him the presidency. You smile exuberantly."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 32456,
        "fields": {
            "answer": 8695,
            "candidate": 201,
            "answer_feedback": "Unconvinced of the credibility of your campaign, President Obama passes on a visit to Vermont. You find yourself at a diner with Kathy Hochul instead, incredibly bored."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2703,
        "fields": {
            "answer": 5257,
            "candidate": 201,
            "answer_feedback": "Chasten is quick to accept, returning the favor for your endorsement of his husband for DNC Chair in 2017. He helps organize the star-studded, block party style event in Burlington which draws queer voters from all over the state. Privately, you and him discuss Pete’s plans for 2028…"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 27030,
        "fields": {
            "answer": 8696,
            "candidate": 201,
            "answer_feedback": "Chasten is quick to accept, returning the favor for your endorsement of his husband for DNC Chair in 2017. He helps organize the star-studded, block party style event in Burlington which draws queer voters from all over the state. Privately, you and him discuss Pete’s plans for 2028…"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2707,
        "fields": {
            "answer": 5212,
            "candidate": 201,
            "answer_feedback": "More or less what people expected. Zuckerman wins the primary decisively. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2708,
        "fields": {
            "answer": 5215,
            "candidate": 201,
            "answer_feedback": "Zuckerman is surprised but welcomes your support, while many in the VTDP seethe. They seethe more when Zuckerman wins decisively."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2711,
        "fields": {
            "answer": 5220,
            "candidate": 201,
            "answer_feedback": "Money is the fuel that keeps campaigns running, this will be a challenge. \n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2714,
        "fields": {
            "answer": 5224,
            "candidate": 201,
            "answer_feedback": "An appeal to base nostalgia might have been more effective at the start of the campaign, but voters want solutions on pressing issues. The irony that you had the record for vetoes before Phil Scott broke it is not totally lost on voters either"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2715,
        "fields": {
            "answer": 5225,
            "candidate": 201,
            "answer_feedback": "While true, a monolithic focus on healthcare misses the mood. Voters are more focused on education taxes right now."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2716,
        "fields": {
            "answer": 5226,
            "candidate": 201,
            "answer_feedback": "Taking the bull by the horns I see? Turning the tables on property taxes is something David Zuckerman has been doing as well. I see what you’re doing and I like it"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2717,
        "fields": {
            "answer": 5233,
            "candidate": 201,
            "answer_feedback": "Scott shrugs off these attacks and mentions his vote for Joe Biden in 2020, and people believe him. He says he’s disappointed in you, that you know better, and you soon pull the talking points comparing him to McConnell from your stump speech."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2718,
        "fields": {
            "answer": 5235,
            "candidate": 201,
            "answer_feedback": "Howard Dean and Ed Davey paddleboarding together, riding roller coasters, and playing tennis. The trip is a quaint spectacle for the media (in Britain and Vermont) and they eat it all up. The Liberal Democrats win a record 72 seats as the Conservatives are wiped out. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 2719,
        "fields": {
            "answer": 5236,
            "candidate": 201,
            "answer_feedback": "The merits of an international trip are dubious, time is spent instead meeting with donors and hiring staff. The Liberal Democrats win a record 72 seats without your help. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20846,
        "fields": {
            "answer": 20845,
            "candidate": 201,
            "answer_feedback": "Really Howard, the worst we’ve ever had? Come off it. That’s a load of crap."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20900,
        "fields": {
            "answer": 5202,
            "candidate": 201,
            "answer_feedback": "The monolithic focus on healthcare sets the tone for the campaign ahead, and certainly sets your opponents off balance. Dean for Governor!"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20902,
        "fields": {
            "answer": 5232,
            "candidate": 201,
            "answer_feedback": "When David Zuckerman and Brenda Siegel shouted this from the rooftops, nobody cared. When you do it, people listen. These attacks land strongly."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20904,
        "fields": {
            "answer": 5234,
            "candidate": 201,
            "answer_feedback": "Vermonters do agree with you, but they also just like Phil Scott, it’s hard to point the finger of blame here. The effectiveness is limited. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20926,
        "fields": {
            "answer": 5213,
            "candidate": 201,
            "answer_feedback": "Renner’s camp is thrilled by your support, and Zuckerman chafes over the obvious bias against him in the VTDP. Zuckerman does ultimately triumph, but it’s closer than expected."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20929,
        "fields": {
            "answer": 5214,
            "candidate": 201,
            "answer_feedback": "Your silence is expected, but people can’t help but notice how you seem to share volunteers and seem so buddy-buddy at parades. Zuckerman wins with ease."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20935,
        "fields": {
            "answer": 20934,
            "candidate": 201,
            "answer_feedback": "This is a broad, but specific message that has wide appeal. The irony that you set the record for vetoes before Phil Scott broke it is not lost, but this message is strong. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20981,
        "fields": {
            "answer": 20980,
            "candidate": 201,
            "answer_feedback": "Blaming voters for tax increases, while not without some truth, is the dumbest possible response. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20985,
        "fields": {
            "answer": 20984,
            "candidate": 201,
            "answer_feedback": "Warren showers praise upon the intricacies of Dr. Dynasaur to an engaged crowd in South Burlington, the selfie line afterwards is long."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 209850,
        "fields": {
            "answer": 8697,
            "candidate": 201,
            "answer_feedback": "Warren showers praise upon the intricacies of Dr. Dynasaur to an engaged crowd in South Burlington, the selfie line afterwards is long."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20990,
        "fields": {
            "answer": 20989,
            "candidate": 201,
            "answer_feedback": "Governor Walz agrees to make a brief stop while in nearby New Hampshire. The event feels rushed, but nonetheless there is a healthy crowd and Walz is at ease."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 209900,
        "fields": {
            "answer": 8698,
            "candidate": 201,
            "answer_feedback": "Governor Walz agrees to make a brief stop while in nearby New Hampshire. The event feels rushed, but nonetheless there is a healthy crowd and Walz is at ease."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20992,
        "fields": {
            "answer": 5258,
            "candidate": 201,
            "answer_feedback": "Speaker Krowinski especially appreciates this defense of her initiatives, but keep in mind the Renewable Energy Standard and Global Warming Solutions Act are toxic in rural Vermont. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20995,
        "fields": {
            "answer": 5259,
            "candidate": 201,
            "answer_feedback": "This is Governor Scott’s position, and a common one, for better or worse."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 20996,
        "fields": {
            "answer": 5260,
            "candidate": 201,
            "answer_feedback": "This position, while increasingly considered, remains a strong minority and is especially unpopular with many an ex-hippie in Vermont. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21000,
        "fields": {
            "answer": 5261,
            "candidate": 201,
            "answer_feedback": "These are vetoes that Phil really has a hard time defending to the public, a good line of attack. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21010,
        "fields": {
            "answer": 21009,
            "candidate": 201,
            "answer_feedback": "Standing behind legislative Democrats is cheered by the party, but keep in mind that H. 687 is unpopular in rural Vermont."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21013,
        "fields": {
            "answer": 21012,
            "candidate": 201,
            "answer_feedback": "This position might be popular in certain Burlington neighborhoods, but rank NIMBYism is a losing proposition."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21023,
        "fields": {
            "answer": 21019,
            "candidate": 201,
            "answer_feedback": "This answer, while one sure to rankle the left, is an effective response to these attacks."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21026,
        "fields": {
            "answer": 21020,
            "candidate": 201,
            "answer_feedback": "\nThe Scott team rejoices at you seemingly embracing their attack line, but they did not expect a strong and sudden backlash against their Medicare Advantage advocacy.\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21028,
        "fields": {
            "answer": 21021,
            "candidate": 201,
            "answer_feedback": "\nMost Vermonters blame the property tax rise on the supermajority, but this is an effective counter. One that David Zuckerman is also using.\n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21033,
        "fields": {
            "answer": 21030,
            "candidate": 201,
            "answer_feedback": "True enough, with Pieciak at your side and your own reputation, Winooski seems ready to flip from red to blue with enthusiasm."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21036,
        "fields": {
            "answer": 21031,
            "candidate": 201,
            "answer_feedback": "While the three counties of the Northeast Kingdom are sparsely populated, these communities have indeed been trending towards the Republicans. Local Democrats appreciate your visit. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21039,
        "fields": {
            "answer": 21032,
            "candidate": 201,
            "answer_feedback": "Brattleboro especially is a hub for Vermont liberalism. The reception you receive suggests you could win big. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21049,
        "fields": {
            "answer": 21048,
            "candidate": 201,
            "answer_feedback": "A rare moment where you’ve chosen not to speak it seems. Donors are contacted, polls are run, and potential staffers are vetted. The wheels begin to turn… "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21054,
        "fields": {
            "answer": 21052,
            "candidate": 201,
            "answer_feedback": "You’re able to secure a phone call with the Senator, which is about 4 minutes long and incredibly awkward. Yay? I guess."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21055,
        "fields": {
            "answer": 21053,
            "candidate": 201,
            "answer_feedback": "Bernie is a bit surprised, but nonetheless goes ahead with a book event with you in Burlington, where you smile and nod as Sanders slams capitalist greed and perversion"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21058,
        "fields": {
            "answer": 21057,
            "candidate": 201,
            "answer_feedback": "Prominent Jewish Vermonters and Democrats privately thank you for your support for Israel, while many others are infuriated by your apparent cruel apathy for the suffering of the Palestinian people."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21083,
        "fields": {
            "answer": 21082,
            "candidate": 201,
            "answer_feedback": "The crowd is encouraged by your energy and optimism, and their applause mounts and mounts. Dean for Governor!"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21085,
        "fields": {
            "answer": 5231,
            "candidate": 201,
            "answer_feedback": "When you call Joe, he wishes you luck but candidly informs you that there is practically zero interest with the organization to help take down one of the last meaningfully anti-Trump Republican elected officials. You ask him to join the campaign as a consultant, but he declines, “bigger fish to fry right now.” You’re left in the dust."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21136,
        "fields": {
            "answer": 21134,
            "candidate": 201,
            "answer_feedback": "This is a precise and effective attack that brings applause from all corners of the state, just remember that there is little appetite from legislative leaders to reconsider Act 250 reform. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21138,
        "fields": {
            "answer": 21135,
            "candidate": 201,
            "answer_feedback": "This is a surprisingly left-wing answer that brings cheers from Progs but eyerolls from most everyone else. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21146,
        "fields": {
            "answer": 21145,
            "candidate": 201,
            "answer_feedback": "Not only does this contradict the position of your party, it makes your proposals for new programs fiscally preposterous, which Scott points out at every occasion."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21165,
        "fields": {
            "answer": 21164,
            "candidate": 201,
            "answer_feedback": "Rutvegas is indeed on the frontlines, and the heckling you receive from a few MAGA-hatted folks indicates as much, but you also meet many a past Scott voter ready to try something new. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21172,
        "fields": {
            "answer": 21171,
            "candidate": 201,
            "answer_feedback": "Phil Scott’s common man charm shines through as he jokes that Vermonters won’t have to worry about him being on the ballot 20 years after he is Governor. He accepts your compliments and everyone agrees it was a bit silly for you to try and be the candidate of generational change. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21175,
        "fields": {
            "answer": 21174,
            "candidate": 201,
            "answer_feedback": "Phil Scott buckles under the pressure of his record. His explanations are increasingly convoluted, relying on a fiscally conservative logic that he is hesitant to fully reveal. With your charismatic personality, everyone agrees you got the better of him."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21181,
        "fields": {
            "answer": 21180,
            "candidate": 201,
            "answer_feedback": "Scott is left unprepared for this strong line of attack. As he tries to get in some hits about your negative campaigning being bad for Vermont, you can see the disappointment in his eyes."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21190,
        "fields": {
            "answer": 21189,
            "candidate": 201,
            "answer_feedback": "Scott counters that your proposals will require tax increases to finance but your easy charisma lets you claim a strong debate victory."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21197,
        "fields": {
            "answer": 21196,
            "candidate": 201,
            "answer_feedback": "You press the attack on government dysfunction with a few new TV and radio spots. It’s unclear whether this will make any difference."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21200,
        "fields": {
            "answer": 21199,
            "candidate": 201,
            "answer_feedback": "Very noble Governor, but will this be enough?"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21204,
        "fields": {
            "answer": 21202,
            "candidate": 201,
            "answer_feedback": "Your team draws up new TV ads comparing Phil Scott to the 2024 GOP Platform, even invoking Project 2025. Phil Scott responds to the new ads by invoking his pro-choice record, invoking civility, invoking the children, he can’t believe what’s happening to Vermont. Was it worth it Howard? "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21207,
        "fields": {
            "answer": 21203,
            "candidate": 201,
            "answer_feedback": "Right on! The NEA funds some powerful new advertisements attacking Scott for this disaster of an appointment. A strong closing message."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21211,
        "fields": {
            "answer": 21210,
            "candidate": 201,
            "answer_feedback": "Your stump speeches get angrier, filled with a passionate righteousness. Eager crowds hang on your every word as you furiously indict Trump for his many sins. Local issues go unmentioned. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21217,
        "fields": {
            "answer": 21214,
            "candidate": 201,
            "answer_feedback": "Governor Scott softly smiles as you shake hands in South Burlington, his measured delivery cautioning against extremism and racism, and urging civility is classic Phil Scott. He awkwardly shuffles behind you as you deliver a rollicking denunciation of Trump and his campaign containing references to Weimar Germany."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21228,
        "fields": {
            "answer": 21215,
            "candidate": 201,
            "answer_feedback": "\nIn your speeches, you are the most dedicated Vermont policy wonk, citing statistics from memory with ease. Your volunteers report fear and angst at the doorsteps, people are scared, very scared. \n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21230,
        "fields": {
            "answer": 21216,
            "candidate": 201,
            "answer_feedback": "\nCrazy Howard is back! While your accusations have plenty of merit, pearl-clutching Vermonters consider it a step too far when you implicate the Governor, and Phil Scott’s genuine disappointment in his statement to the press makes you wince."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21234,
        "fields": {
            "answer": 21233,
            "candidate": 201,
            "answer_feedback": "Your stump speeches get angrier, filled with a passionate righteousness. Eager crowds hang on your every word as you furiously indict Trump for his many sins. Local issues go unmentioned. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21238,
        "fields": {
            "answer": 21237,
            "candidate": 201,
            "answer_feedback": " Phil Scott personally calls you to ask you if you have any shame. You just accused him of supporting a fascist takeover of the United States. You want to be friends now? No thanks Howard. You pull the ads. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21248,
        "fields": {
            "answer": 21247,
            "candidate": 201,
            "answer_feedback": "In your speeches, you are the most dedicated Vermont policy wonk, citing statistics from memory with ease. Your volunteers report fear and angst at the doorsteps, people are scared, very scared. \n"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21251,
        "fields": {
            "answer": 21250,
            "candidate": 201,
            "answer_feedback": "\nCrazy Howard is back! While your accusations have plenty of merit, pearl-clutching Vermonters consider it a step too far when you implicate the Governor, and Phil Scott’s genuine disappointment in his statement to the press makes you wince."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21254,
        "fields": {
            "answer": 21253,
            "candidate": 201,
            "answer_feedback": "At a campaign event with Lt. Governor David Zuckerman the next day, a reporter makes note of your “red eyes” on (so-called) X. The replies deride the two of you as “Cheech & Chong”. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 212541,
        "fields": {
            "answer": 212531,
            "candidate": 201,
            "answer_feedback": "At a campaign event with Lt. Governor David Zuckerman the next day, a reporter makes note of your “red eyes” on (so-called) X. The replies deride the two of you as “Cheech & Chong”. "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21258,
        "fields": {
            "answer": 21257,
            "candidate": 201,
            "answer_feedback": "It takes all night. Your old friends tell you they share your concerns. To your dismay though, none of them reveal any secret ace in the hole. As you talk with Trippi, you ask him “How can you let this happen!?” “We’re trying Howard.” he replies, before politely ending the call. You look outside your window to see dawn breaking through the trees. You sigh."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 212581,
        "fields": {
            "answer": 212571,
            "candidate": 201,
            "answer_feedback": "It takes all night. Your old friends tell you they share your concerns. To your dismay though, none of them reveal any secret ace in the hole. As you talk with Trippi, you ask him “How can you let this happen!?” “We’re trying Howard.” he replies, before politely ending the call. You look outside your window to see dawn breaking through the trees. You sigh."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21261,
        "fields": {
            "answer": 21260,
            "candidate": 201,
            "answer_feedback": "As you step outside to take a stroll around your South End neighborhood, you try to cheer yourself up at the sight of kids enjoying the holiday. Unfortunately your thoughts dwell on the impending fate of the country and your unresolved concerns about how you could be running the campaign better, how you could have beaten W. back in the day and prevented all of this. In the closing days, you seem a bit distant from the voters and have a little shakiness in your voice, but you press on."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 212611,
        "fields": {
            "answer": 212601,
            "candidate": 201,
            "answer_feedback": "As you step outside to take a stroll around your South End neighborhood, you try to cheer yourself up at the sight of kids enjoying the holiday. Unfortunately your thoughts dwell on the impending fate of the country and your unresolved concerns about how you could be running the campaign better, how you could have beaten W. back in the day and prevented all of this. In the closing days, you seem a bit distant from the voters and have a little shakiness in your voice, but you press on."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21264,
        "fields": {
            "answer": 21263,
            "candidate": 201,
            "answer_feedback": "Howard, you deleted Twitter remember?"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 212641,
        "fields": {
            "answer": 212631,
            "candidate": 201,
            "answer_feedback": "You can’t just tweet anything you want Howard"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21267,
        "fields": {
            "answer": 21266,
            "candidate": 201,
            "answer_feedback": "At a campaign event with Lt. Governor David Zuckerman the next day, a reporter makes note of your “red eyes” on (so-called) X. The replies deride the two of you as “Cheech & Chong”."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21271,
        "fields": {
            "answer": 21270,
            "candidate": 201,
            "answer_feedback": "It takes all night. Your old friends tell you they share your concerns. To your dismay though, none of them reveal any secret ace in the hole. As you talk with Trippi, you ask him “How can you let this happen!?” “We’re trying Howard.” he replies, before politely ending the call. You look outside your window to see dawn breaking through the trees. You sigh."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21274,
        "fields": {
            "answer": 21273,
            "candidate": 201,
            "answer_feedback": "As you step outside to take a stroll around your South End neighborhood, you try to cheer yourself up at the sight of kids enjoying the holiday. Unfortunately your thoughts dwell on the impending fate of the country and your unresolved concerns about how you could be running the campaign better, how you could have beaten W. back in the day and prevented all of this. In the closing days, you seem a bit distant from the voters and have a little shakiness in your voice, but you press on."
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21277,
        "fields": {
            "answer": 21276,
            "candidate": 201,
            "answer_feedback": "“Is Trump really going to win this election? We can't let this happen! What the hell is going on! Kamala needs to wake up now!” and tweeted! "
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21280,
        "fields": {
            "answer": 21279,
            "candidate": 201,
            "answer_feedback": "By chance you run into Phil Scott at a honk and wave with his team on Main Street. You exchange smiles and shake hands. “Good luck Howard, but not too much luck!"
        }
    },
    {
        "model": "campaign_trail.answer_feedback",
        "pk": 21286,
        "fields": {
            "answer": 21285,
            "candidate": 201,
            "answer_feedback": "By chance you run into Phil Scott at a honk and wave with his team on Main Street. There’s an unmistakable air of tension. When you finally say hello he shakes your hand tersely and says, “this is Vermont Howard, we’re supposed to be better.”"
        }
    }
]
// Function to set the music player to a specific soundtrack
function getTooltips(str) {
    let matches = [];

    tooltipList.forEach((tooltip, index) => {
        // Adjust the regex to match searchString potentially surrounded by “ and followed by optional punctuation
       let regex = new RegExp(`(?<=\\b|\\s|^|“)${tooltip.searchString}(?=[.,;!?]?\\b|\\s|”|$)`, 'g');


        let match;
        while ((match = regex.exec(str)) !== null) {
            matches.push({
                start: match.index + (match[0].startsWith('“') ? 1 : 0), // Adjust for potential starting “
                end: match.index + match[0].length - (match[0].endsWith('”') ? 1 : 0) - (match[2] ? 1 : 0), 
                tooltipIndex: index
            });
        }
    });

    // Sort by starting position; if two start at the same position, longer match comes first
    matches.sort((a, b) => a.start - b.start || b.end - b.start - (a.end - a.start));

    // Filter out overlaps
    for (let i = 0; i < matches.length - 1; ) {
        if (matches[i + 1].start < matches[i].end) {
            matches.splice(i + 1, 1); // Remove the next match since it overlaps
        } else {
            i++; // Move to next match
        }
    }

    return matches;
}
function applyTooltips(str) {
    const matches = getTooltips(str);
    let result = '';
    let lastIndex = 0;

    matches.forEach(match => {
        const tooltip = tooltipList[match.tooltipIndex];
        result += str.slice(lastIndex, match.start);
        result += `<span class='mytooltip'>${tooltip.searchString}<span class='mytooltiptext'>${tooltip.explanationText}</span></span>`;
        lastIndex = match.end;
    });

    result += str.slice(lastIndex); // Add the remainder of the original string
    return result;
}

function applyTooltipsToObject(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            obj[key] = applyTooltips(obj[key]);
        } else if (typeof obj[key] === 'object') {
            applyTooltipsToObject(obj[key]); // Recursive call
        }
    }
}
applyTooltipsToObject(campaignTrail_temp.questions_json);
applyTooltipsToObject(campaignTrail_temp.answers_json);
applyTooltipsToObject(campaignTrail_temp.answer_feedback_json);
// Function to set the music player to a specific soundtrack
function newMusicPlayer() {
    trackSel = document.createElement("div");
    trackSel.id = "trackSelParent"
    let z = `<br><br><br><br><br><br><br><br><br><br><div id='trackSel' style="text-align:left;border-style:solid;border-width:3px;overflow-y: scroll;overflow-x: hidden;height:200px; width:400px;background-color:#999999;float:right;">`
    z += `<b><select id='selectSoundtrack'><option value='`+soundtracks[e.selectedSoundtrack].name+`'>`+soundtracks[e.selectedSoundtrack].name+"</option>"
    for (i in soundtracks) {
      if (soundtracks[e.selectedSoundtrack] != soundtracks[i]) {
        z += `<option value='`+soundtracks[i].name+`'>`+soundtracks[i].name+`</option>`
      }
    }
    z += `</select></b><br><br>`
    // <label><input type="radio" name="option" value="option1">Option 1</label><br>
    for (i in soundtracks[e.selectedSoundtrack].tracklist) {
      let a = soundtracks[e.selectedSoundtrack].tracklist[i]
      let b = `<label><input class="trackSelector" type="radio" name="trackSelector" value="`+i+`">`+a.name+`</label><br>`
      z += b
    }
    z += "</div><br><br>"
    trackSel.innerHTML = z
  
    // select correct song
  
    musicBox.appendChild(trackSel);
    Array.from(document.getElementById("trackSel").children).filter(f=>{
      return f.tagName == "LABEL"
    }).map(f=>f.children[0])[0].checked = true
  
    // set soundtrack changer
  
    soundtrackSelector = document.getElementById("selectSoundtrack")
    soundtrackSelector.onchange = function() {
      for (i in soundtracks) {
        if (soundtracks[i].name == soundtrackSelector.value) {
          e.selectedSoundtrack = i
          break
        }
      }
      document.getElementById("trackSelParent").remove()
      newMusicPlayer()
    }
  
    var matches = document.querySelectorAll('.trackSelector');
  
    for (match in matches) {
      matches[match].onchange = function() {
        audio = $("#campaigntrailmusic")[0];
        audio.src = soundtracks[e.selectedSoundtrack].tracklist[this.value].url
        audio.currentTime = 0
      }
    }
  
    musicBox.children[2].loop = false
    musicBox.children[2].src = soundtracks[e.selectedSoundtrack].tracklist[0].url
  
    musicBox.children[2].onended = function() {
      console.log("next track")
      let selected = Number(document.querySelector('input[name="trackSelector"]:checked').value);
      let newSel = clamp(selected+1, soundtracks[e.selectedSoundtrack].tracklist.length-1, 0)
      let buttons = Array.from(document.getElementById("trackSel").children).filter(f=>{
        return f.tagName == "LABEL"
      }).map(f=>f.children[0])
      //let selectedIndex = buttons.map(f=>f.children[0]).map(f=>f.checked)
      buttons[newSel].click()
    }
  
    for (w = 0; w < 7; w++) {
      document.getElementById("trackSelParent").appendChild(document.createElement("br"))
    }
    
    generateTime();
  }
function setSoundtrack(soundtrackName) {
    // Find the soundtrack index by name
    let soundtrackIndex = null;
    for (let i in soundtracks) {
        if (soundtracks[i].name === soundtrackName) {
            soundtrackIndex = i;
            break;
        }
    }

    // If the soundtrack is found, update the music player
    if (soundtrackIndex !== null) {
        e.selectedSoundtrack = soundtrackIndex;

        // Remove the current track selection UI
        document.getElementById("trackSelParent").remove();

        // Recreate the music player UI with the new soundtrack
        newMusicPlayer();

        // Select the first track of the new soundtrack
        var audio = document.getElementById("campaigntrailmusic");
        audio.src = soundtracks[soundtrackIndex].tracklist[0].url;
        audio.currentTime = 0;
        audio.play();
    } else {
        console.error("Soundtrack not found: " + soundtrackName);
    }
}

function updateCandidateName(candidateId, newFirstName, newLastName) {
    for (var i = 0; i < e.candidate_json.length; i++) {
        var candidate = e.candidate_json[i];
        if (candidate.pk === candidateId) {
            candidate.fields.first_name = newFirstName;
            candidate.fields.last_name = newLastName;
            break; // Exit the loop once the candidate is found and updated
        }
    }
}
function updateAdvisorImage(electionId, newImageUrl) {
    // Find the correct election entry
    let election = e.election_json.find(election => election.pk === electionId);
    
    if (election) {
        // Update the advisor image URL
        election.fields.advisor_url = newImageUrl;
        console.log(`Advisor image updated for election ${electionId}`);
    } else {
        console.log(`Election with ID ${electionId} not found`);
    }
}





campaignTrail_temp.candidate_image_url = "https://i.imgur.com/ILGK42n.png";
campaignTrail_temp.running_mate_image_url = "https://i.imgur.com/ii8RqSl.jpeg"
campaignTrail_temp.candidate_last_name = "";
campaignTrail_temp.running_mate_last_name = "";

const customStyling = document.createElement("style");
  customStyling.innerHTML = `
  #campaign_sign {
      background-image: url("https://i.imgur.com/CQaWRGc.png");
      background-size: cover;
      border-color: #c9c9c9;    
      border-width: .01em;
      margin: 0 auto;
      background-position: center;
      width: 100%; 
      height: 90px; 
      margin-left: -0.07em;
    }
    `;


var Dem_Donors = 0; // The Big Men mad at Deans antics

var Progs = 0; // Did you yell at Pat
    


document.head.appendChild(customStyling);

campaignTrail_temp.cyoa = true
cyoAdventure = function (a){
ans = campaignTrail_temp.player_answers[campaignTrail_temp.player_answers.length - 1]
if (ans == 5184) {
updateCandidateName(201, "Howard", "Dean");
}
if (ans == 5185) { 
campaignTrail_temp.question_number=24
updateCandidateName(201, "Miro", "Weinberger");
}
//Dean Dem v Prog

if (ans == 5147) {
Dem_Donors += 2;
Progs -= 2;
}

if (ans == 5148) {
Dem_Donors += 1;
}

if (ans == 5149) {
Dem_Donors -= 3;
Progs += 2;
}

if (ans == 5150) {
Dem_Donors -= 1;
Progs += 1;
}

if (ans == 5144) {
Progs += 1;
}

if (ans == 21048) {
Dem_Donors += 1;  
}

if (ans == 5152) {
Dem_Donors += 1;
Progs -= 1;  
}

if (ans == 21052) {
Progs += 1;  
}

if (ans == 2105) {
Dem_Donors -= 1;
Progs += 1;
}

if (ans == 5155) {
Dem_Donors -= 1;
Progs += 1;
}

if (ans == 21057) {
Dem_Donors += 1;
Progs -= 1;
}

if (ans == 1891) {
campaignTrail_temp.candidate_json[2]["fields"].color_hex = "#a52a2a";
updateAdvisorImage(20, "https://i.imgur.com/j7e89JI.png");
window.setTimeout(e.vpSwitcher, 20)
campaignTrail_temp.running_mate_json = campaignTrail_temp.running_mate_json.filter(f => !(f.fields.candidate === 201 && f.fields.running_mate === 1004));
campaignTrail_temp.running_mate_json.push({
    "model":"campaign_trail.running_mate",
    "pk": 6,
    "fields" : {
        "candidate": 201,
        "running_mate": 1005
     }
 }
)
}
//Direct Question Replacement for Question eight
if (Dem_Donors == -1 && Progs >= 0) {
campaignTrail_temp.questions_json[7] =  {
"model": "campaign_trail.question",
        "pk": 1065,
        "fields": {
            "priority": 7,
            "description": "In light of your surprising pivot to the left, you have been left with few allies in the Democratic Party elite, and raising big dollars will be a serious challenge. The Progressive Party has, however, given you a full-throated endorsement. But will it be enough?",
            "likelihood": 1
        }
    


    }

}
if (Dem_Donors >= 0 && Progs == -1) {
campaignTrail_temp.questions_json[7] =  {
 "model": "campaign_trail.question",
        "pk": 1052,
        "fields": {
            "priority": 6,
            "description": "It seems your historic tensions with the Progressive Party have been too great to overcome, and they have withheld from you their endorsement. Nevertheless, you can count upon the strong support of the VTDP and their deep-pocketed donors.\n\n\n",
            "likelihood": 1
        }

    }

}
if (Dem_Donors >= 0 && Progs >= 0) {
campaignTrail_temp.questions_json[7] =  {
"model": "campaign_trail.question",
        "pk": 1059,
        "fields": {
            "priority": 7,
            "description": "Congratulations! As the campaign gets underway, it’s clear you’ve managed to secure the support of your traditional allies in the Democratic Party and reconciled with the Progressive Party, both deep pocketed donors and left-wing activists. The left of center is united going into November.\n",
            "likelihood": 1
        }
}
}

if (Dem_Donors <= -2 && Progs >= 0) {
campaignTrail_temp.questions_json[7] =  {
"model": "campaign_trail.question",
        "pk": 1057,
        "fields": {
            "priority": 7,
            "description": "In light of your shock rebranding of yourself as an ardent leftist, you have been blacklisted by the Democratic donor establishment despite the best efforts of Jim Dandeneau to patch things up, they will take Phil Scott over anything that smells like the Progs. The Progressive Party’s enthusiastic support hardly makes up for it.",
            "likelihood": 1
        }
    
}
}

if (Dem_Donors >= 0 && Progs <= -2) {
campaignTrail_temp.questions_json[7] =  {
"model": "campaign_trail.question",
    "pk": 1053,
    "fields": {
        "priority": 7,
        "description": "In light of your enthusiastic support for the right of the VDP, your historic rivalry, and your lack of outreach to the left, the Progressive Party has decided not to endorse your campaign for Governor, instead opting to support a write-in campaign for Zoraya Hightower. On the other hand, the Democratic Party leadership and their powerful donor allies have promised enthusiastic support for the length of your campaign.",
        "likelihood": 1
    }

}
}
//Polling Based Cyoa
let pop_vote = e.current_results[0];
let playerPolling = pop_vote[1].pvp;
if (playerPolling<0.43 ) { 
console.log("Candidate 201 polling is 0.43 or less");
    campaignTrail_temp.questions_json[15] = {
        "model": "campaign_trail.question",
        "pk": 18547,
        "fields": {
            "priority": -2,
            "description": "Your candidacy has brought national attention to the gubernatorial race, and your connections as a party insider and former DNC Chair have made invitations to national Democrats a real possibility. Which national figure will you call upon to join you on <I>The Campaign Trail</I> in Vermont?",
            "likelihood": 1
        }
    }
}
if (playerPolling>0.43 ) { 
    console.log("Candidate 201 polling is 0.43 or more");
        campaignTrail_temp.questions_json[15] = {
            "model": "campaign_trail.question",
                "pk": 1075,
                "fields": {
                    "priority": -2,
                    "description": "Your candidacy has brought national attention to the gubernatorial race, and your connections as a party insider and former DNC Chair have made invitations to national Democrats a real possibility. Which national figure will you call upon to join you on <I>The Campaign Trail</I> in Vermont?",
                    "likelihood": 1
                }
            
        }
    }


// Coffe/Twitter cyoa
if (ans == 5139) {
campaignTrail_temp.questions_json[13] =  {
    "model": "campaign_trail.question",
        "pk": 1067,
        "fields": {
            "priority": -6,
            "description": "You’re drinking your morning coffee and scrolling through your phone to read the latest news. It fills you with emotion, not just rage, but snark. You log onto Twitter, and before long you’re typing…\n",
            "likelihood": 1
        }
    }
}
if (ans == 5140) {
campaignTrail_temp.questions_json[13] =  {
        "model": "campaign_trail.question",
            "pk": 1071,
            "fields": {
                "priority": -5,
                "description": "You’re drinking your morning coffee and scrolling through your phone to read the latest news. It fills you with emotion, not just rage, but snark. You log onto Twitter, and before long you’re typing…\n",
                "likelihood": 1
            }
        }
}
if (ans == 5141) {
campaignTrail_temp.questions_json[13] =  {
        "model": "campaign_trail.question",
            "pk": 1072,
            "fields": {
                "priority": -4,
                "description": "You’re drinking your morning coffee and scrolling through your phone to read the latest news. It fills you with emotion, not just rage, but snark. You log onto Twitter, and before long you’re typing…",
                "likelihood": 1
            }
        },
campaignTrail_temp.questions_json[23] = {
            "model": "campaign_trail.question",
                    "pk": 211701,
                    "fields": {
                        "priority": 0,
                        "description": "It’s Halloween. After greeting some trick-or treaters at your Burlington home, you flip on the television and switch the channel to MSNBC. Instant horror floods your body. A new batch of NYT/Siena swing state polls show Harris trailing by 3-4 points across the board, a big decline from the results within the margin of error earlier this month. You can’t believe what’s happening to this country. If you don’t do something quick, you feel like you might have a panic attack.",
                        "likelihood": 1
                    }
                }
    
}
if (ans == 5142) {
campaignTrail_temp.questions_json[13] =  {
    "model": "campaign_trail.question",
        "pk": 1074,
        "fields": {
            "priority": -3,
            "description": "You’re drinking your morning coffee and scrolling through your phone to read the latest news. It fills you with emotion, not just rage, but snark. You log onto Twitter, and before long you’re typing…\n",
            "likelihood": 1
        }
    }
}

if (ans == 21202) {
console.log("ans == 21202")
campaignTrail_temp.questions_json[22] = {
"model": "campaign_trail.question",
        "pk": 21232,
        "fields": {
            "priority": 0,
            "description": "As the campaign approaches its close, most people's attention is diverted towards the presidential election, and away from local politics. The national scene is a nightmare, with a national mood that resembles an upcoming apocalypse. The debates are a shitshow, Trump seemingly openly promises to end democracy at his rallies, Biden’s campaign prematurely ends and Harris takes up the Democratic mantle. War rages in Europe and the Middle East. Do you have anything to say on this?",
            "likelihood": 1
        }
    }

}
if (ans == 21196 || ans == 21199 || ans == 21203) {
 console.log("ans did not == 21202")
campaignTrail_temp.questions_json[22] = {
"model": "campaign_trail.question",
        "pk": 21169,
        "fields": {
            "priority": 0,
            "description": "As the campaign approaches its close, most people's attention is diverted towards the presidential election, and away from local politics. The national scene is a nightmare, with a national mood that resembles an upcoming apocalypse. The debates are a shitshow, Trump seemingly openly promises to end democracy at his rallies, Biden’s campaign prematurely ends and Harris takes up the Democratic mantle. War rages in Europe and the Middle East. Do you have anything to say on this?",
            "likelihood": 1
        }
}
}



if (ans == 5140 || ans == 5142) {
campaignTrail_temp.questions_json[23] = {
"model": "campaign_trail.question",
        "pk": 21265,
        "fields": {
            "priority": 0,
            "description": "It’s Halloween. After greeting some trick-or treaters at your Burlington home, you flip on the television and switch the channel to MSNBC. Instant horror floods your body. A new batch of NYT/Siena swing state polls show Harris trailing by 3-4 points across the board, a big decline from the results within the margin of error earlier this month. You can’t believe what’s happening to this country. If you don’t do something quick, you feel like you might have a panic attack.",
            "likelihood": 1
        }
    
}
}

if (ans ==  5139) {
campaignTrail_temp.questions_json[23] = {
"model": "campaign_trail.question",
        "pk": 21170,
        "fields": {
            "priority": 0,
            "description": "It’s Halloween. After greeting some trick-or treaters at your Burlington home, you flip on the television and switch the channel to MSNBC. Instant horror floods your body. A new batch of NYT/Siena swing state polls show Harris trailing by 3-4 points across the board, a big decline from the results within the margin of error earlier this month. You can’t believe what’s happening to this country. If you don’t do something quick, you feel like you might have a panic attack.",
            "likelihood": 1
        }
    }
}
if (ans == 21196 || ans == 21199 || ans == 21203) {
campaignTrail_temp.questions_json[24] = {
    "model": "campaign_trail.question",
    "pk": 21209,
    "fields": {
        "priority": 0,
        "description": "It’s finally election day. Vermonters, and indeed the entire nation will head to the polls. After casting your ballot with your wife Judy, you, filled with optimism for Vermont but burdened by the stresses of national politics, head to Barre, in Washington county, for one last chance to meet with voters, before heading back to Burlington for your election night event.",
        "likelihood": 1
    }
}
}

if (ans == 21202) {
campaignTrail_temp.questions_json[24] = {
    "model": "campaign_trail.question",
    "pk": 21284,
    "fields": {
        "priority": 0,
        "description": "It’s finally election day. Vermonters, and indeed the entire nation will head to the polls. After casting your ballot with your wife Judy, you, filled with optimism for Vermont but burdened by the stresses of national politics, head to Barre, in Washington county, for one last chance to meet with voters, before heading back to Burlington for your election night event.",
        "likelihood": 1
    }
}
}
//Achievements



}



var changeGameDisp = (hide) => {
    disp = "";
    if (hide) {
      disp = "none";
    }
    Array.from(gameWindow.children).forEach(f=>{
        if(!f.classList.contains("game_header") && (f.id != "main_content_area" || !$("#campaign_sign")[0])) 
            f.style.display = disp
    });
};

e.vpSwitcher = () => {
    let potential_running_mate_pks = e.running_mate_json.filter(f=>f.fields.candidate == e.candidate_id).map(f=>f.fields.running_mate);
    let pot_run_mat = potential_running_mate_pks.map(f=>e.candidate_json.find(_f=>_f.pk===f));
    let running_mate_options = ``;
    pot_run_mat.forEach(f=> {
        running_mate_options += `<option value="${f.pk}">${f.fields.first_name} ${f.fields.last_name}</option>\n`
    });
  
    let vp_html = `
        <div id="running_mate_form">
            <form name="running mate">
                <p></p>
                <h3>Please select your running mate:</h3> 
                <select name="running_mate_id" id="running_mate_id">
                    ${running_mate_options}
                </select>
                <p></p>
            </form>
        </div>
        <div class="person_description_window" id="running_mate_description_window">
            <div class="person_image" id="running_mate_image"> <img src="${pot_run_mat[0].fields.image_url}" width="210" height="250"> </div>
            <div class="person_summary" id="running_mate_summary">
                <ul>
                    <li>Name: ${pot_run_mat[0].fields.first_name} ${pot_run_mat[0].fields.last_name}</li>
                    <li>Party: ${pot_run_mat[0].fields.party}</li>
                    <li>Home State: ${pot_run_mat[0].fields.state}</li>
                </ul>
                ${pot_run_mat[0].fields.description_as_running_mate}
            </div>
        </div>
        <p> <button class="person_button" id="running_mate_id_button">Continue</button> </p>
    `
  
    let vp_screen = document.createElement("div");
    vp_screen.classList.add("inner_window_w_desc");
    vp_screen.id = "inner_window_4";
    vp_screen.innerHTML = vp_html;
  
    changeGameDisp(true);
  
    gameWindow.appendChild(vp_screen);
  
    // now we make the stuff do stuff!
  
    $("#running_mate_id").change((_e)=>{
        _e.preventDefault()
  
        let value = Number($("#running_mate_id").val());
        let i = potential_running_mate_pks.findIndex(f=>f === value);
  
        let screen_html = `
            <div class="person_image" id="running_mate_image"> <img src="${pot_run_mat[i].fields.image_url}" width="210" height="250"> </div>
            <div class="person_summary" id="running_mate_summary">
                <ul>
                    <li>Name: ${pot_run_mat[i].fields.first_name} ${pot_run_mat[i].fields.last_name}</li>
                    <li>Party: ${pot_run_mat[i].fields.party}</li>
                    <li>Home State: ${pot_run_mat[i].fields.state}</li>
                </ul>
                ${pot_run_mat[i].fields.description_as_running_mate}
            </div>
        `
  
        $("#running_mate_description_window").html(screen_html);
  
    });
    // VP selected!
  
    $("#running_mate_id_button").click((_e)=>{
        _e.preventDefault();
  
        let value = Number($("#running_mate_id").val());
        let i = potential_running_mate_pks.findIndex(f=>f === value);
  
        e.running_mate_last_name = pot_run_mat[i].fields.last_name;
        e.running_mate_last_name = ""
        e.running_mate_image_url = pot_run_mat[i].fields.image_url;
        e.selected_running_mate = pot_run_mat[i];
  
        if ($("#campaign_sign")[0]) {
            $("#campaign_sign").html(`<p>${e.candidate_last_name}</p><p>${e.running_mate_last_name}</p>`);
            $("#running_mate_pic").attr("src", e.running_mate_image_url)
        }
         $("#inner_window_4").remove();
        changeGameDisp(false);
    })
}

campaignTrail_temp.jet_data = [{
    "mapping_enabled": true,
    "mapping_data": {
        "mapSvg": "",
        "x": "92",
        "y": "989",
        "dx": "-323",
        "dy": "-89"
    },
    "nicknames": {
        "200": "Scott",
        "201": "Dean",
        "202": "Cheislstein",
        "203": "Write in"
    }
}
]

//ENDINGS


// Campaign Trail configuration
campaignTrail_temp.multiple_endings = true;
construct = (a = 1) => {
	
    e.page = e.page + a < e.pages.length ? e.page + a : 0
    let html = e.header;
    html += e.pages[e.page] + "<br>";
    if (e.page > 0) {
    
    html += `<button onclick='endingConstructor(a = -1)'>Back</button>`
    }
    if (e.page < e.pages.length - 1) {
    
    html += `<button onclick='endingConstructor(a = 1)'>Next</button>`
    }
    
    for (i in e.executable) {
    if (e.executable[i][0] == e.page) {
        e.executable[i][1]();
        
    }
    }
    
    if (e.image == true)
    setTimeout(()=>{
      candImg = $(".person_image")[0]
      if (candImg) {
        candImg.remove()
        console.log("TRYING");
        $("#final_results_description")[0].style = `
          text-align:right;
          width: 10%;
          height:10%;
          display: block;
          margin-left: auto;
          margin-right: auto;
          overflow: auto;
          color: #000000
        `
         console.log("RESULTS UPDATED");
      }
    }, 10)
    else if (e.image)
    setTimeout(()=>{
      candImg = $(".person_image")[0];
      if (candImg) {
        candImg.src = e.image;
        console.log("TRYING");
        $("#final_results_description")[0].style = `
          text-align:right;
          width: 50%;
          height:50%;
          display: block;
          margin-left: auto;
          margin-right: auto;
          overflow: auto;
          color: #000000
        `
         console.log("RESULTS UPDATED");
      }		
    }, 10)
    
    return html;
    }
    
    endingConstructor = (a = 1) => {
    $("#final_results_description")[0].innerHTML = construct(a);
    }
    
  // ENDINGS -- this is slightly more reliable than the ending code method




  e.multiple_endings = true;

//This is the only part of the notes that is actually me Onkel Danny - this shit is all chatgpt. Chatgpt is a useful tool. We also used chatgpt for the writing. Halligan Elysium would also like to credit Chatgpt
  function autoHalveVolumeOnce() {
    // Function to halve the volume
    const halveVolume = (element) => {
        element.volume = element.volume / 5;

        // Add a one-time event listener to prevent volume increase beyond half
        element.addEventListener('volumechange', function preventVolumeIncrease() {
            if (element.volume > 0.5) {
                element.volume = 0.5;
            }
        });
    };

    // Apply the function to all current audio and video elements
    document.querySelectorAll('audio, video').forEach((element) => {
        if (!element.dataset.volumeHalved) {
            halveVolume(element);
            element.dataset.volumeHalved = true; // Mark the element as processed
        }
    });

    // Observer to detect new media elements added to the DOM
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if ((node.tagName === 'AUDIO' || node.tagName === 'VIDEO') && !node.dataset.volumeHalved) {
                    halveVolume(node);
                    node.dataset.volumeHalved = true; // Mark the element as processed
                }
            });
        });
    });

    // Configure the observer to watch for additions of child elements
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}


  e.header = "<h1> something went wonjg</h1>";
  e.pages = ["<p>huh.</p>"];
  e.page = 0;

  endingPicker = (out, totv, aa, quickstats) => {
    e.final_overall_results.sort((a, b) => b.popular_votes - a.popular_votes);
    //out = "win", "loss", or "tie" for your candidate
    //totv = total votes in entire election
    //aa = all final overall results data
    //quickstat = relevant data on candidate performance (format: your candidate's electoral vote count, your candidate's popular vote share, your candidate's raw vote total)

    /*
    e.header = "<h2></h2>"
    e.pages = ["<p></p>",
              "<p></p>"]
    */
    e.pages = []
    e.header = "";
    e.executable = []

    if (aa[0].candidate == 201 && campaignTrail_temp.candidate_json[2]["fields"].last_name == "Dean" && campaignTrail_temp.candidate_json[2]["fields"].color_hex == "#0000ff") { // Normal Dean Win
    e.pages.push(`<p>Polls in Vermont close early. So by 8, when you’ve made it to the VDP Election Event in Burlington, results are already trickling in. At first it’s too early to see anything, of course you’re overperforming Siegel by leaps and bounds, but everyone expected that. The only certainty it seems, is that it will be a close one. Other candidates have no such difficulties. Sanders, Zuckerman, and Balint deliver their victory speeches to great applause in the main hall while you and your staff over-analyze returns from small towns with 200 votes. But you’re not even looking at that, you’re checking the initial results from Pennsylvania. That race too, will be close.<br><br>But with time, there’s a change. You take the lead, and you hold the lead. With every return the window for Governor Scott to win the day grows smaller and smaller. Eventually, it’s all over. When the AP calls the race, there’s a great cheer from the hall, and within your private room, it’s all hugs and shaking hands.</p>
                <p>You will indeed return to the high office you first entered upon the death of Governor Snelling in 1991. You will have the opportunity to craft major reforms on healthcare, education, and more, and shape the future of the state you love. You have the opportunity to serve as a transitional figure to the next generation of Democratic leaders, you may even get to pick those leaders. Your exuberant victory speech that declares “change begins now!” sends the crowd into a frenzy. Governor Scott’s call to you is gracious, you even sense a hint of relief in his voice.</p>
                <p>You can hardly sleep that night, despite the victory, thinking only of the presidential race, which is too close to call. Despite your worries, you will soon be called to the service of Vermont, and win or lose you know you will do your best to make them proud.</p>
                `)
                e.pages.push 
                (`<h2><b>Last Week Tonight with John Oliver Season 13, Episode 18 “Medicaid Part 2”</b></h2>
                <p>Aired August 9, 2026</p> 
                <p>Oliver: So to get back to our main subject, in the absence of federal action, what is the solution for states to fix their healthcare systems? Obviously it would be great if every state expanded medicaid right now, but considering we’ve been waiting for 16 years on some of them, the outlook is not great. But on a deeper level than that, states can take action right now to move their healthcare systems into the future. In fact the man with the answers might be Howard Dean. 
                <p>[laughter]</p> 
                <p>Yes that’s right, this man. Now, to my younger viewers, if you’re confused at why everyone’s laughing, just let me show you this clip from the 2004 presidential campaign.</p>
                <p>[Dean Scream thirty-second clip]</p>
                <p><i>[laughter]</i></p>
                <p>Yes, that's right. This was what was considered disqualifying to be president back then. Now to those of you who do remember who he is, hearing Howard Dean has the answer to state-level healthcare solutions is a bit like hearing Star Wars Kid has the answer to the opioid epidemic.</p>
                <p><i>[laughter. Oliver looks to insert.]</i></p>
                <p>I hadn’t even heard of you since you made one embarrassing mistake 20 years ago and suddenly you’re telling me you know how to solve one of our nation’s complex issues!? 
                <p>[laughter]</p> 
                <p>But, it’s true. Dean recently returned to his old office of Vermont Governor where he did this:</p>
                <p>“Today Governor Dean signed S. 24 into law funding the creation of an expansive new statewide healthcare program, reviving Act 48, an act to establish universal health care, this time with more direct and precise aims to provide low or no cost healthcare to poor and middle class residents, funded by a new payroll tax.”</p>
                <p>That’s right. The state just did that. It’s a thing they can do! applause I know! And just think, Vermont could be a model for the rest of the nation. Which I don’t think is a statement that’s ever been made outside of an L.L Bean marketing strategy meeting. laughter So to that Howard Dean I say [imitates Dean scream several times to laughter and applause]</p>
                </div>`)
                e.pages.push(`<h2><b><p style="text-align: center">CNN - Vermont Governor Molly Gray announces bid for Democratic Presidential Nomination</p></b></h2>
                <p>Governor Molly Gray (D-Vermont) has released a brief statement announcing her intention to pursue the Democratic nomination for President, and has set up a website for that purpose. In her statement, the Governor announced a launch event to be held in Burlington, Vermont on the 18th of March to officially launch the campaign. Gray was elected Governor of Vermont in 2028 after previously serving as Lieutenant Governor from 2021-2023.</p>
                <p>The Governor is the 12th Democrat to join the rapidly-growing field teeing up to take on President Hawley next year. The field already includes such names as Former Maryland Governor Wes Moore, Former Kentucky Governor Andy Beshear, Former Pennsylvania Governor Josh Shapiro, U.S. Senator for New York Alexandria Ocasio-Cortez, Former Virginia Governor Abigail Spanberger, and actor Dwayne Johnson.</p>
                <p>Initial public polling puts Governor Gray at 2%.</p>`)
                autoHalveVolumeOnce(setMusic("https://audio.jukehost.co.uk/eWmKx8JKArUvRMTbaQ2w6VJd7lVOb4iy"));
    //e.image = ""
    e.executable.push([0, (() => {e.image = e.image = 'https://i.imgur.com/e42thiM.png'})])
    e.executable.push([1, (() => {e.image = e.image = 'https://i.imgur.com/4kQSSES.jpeg'})])
    e.executable.push([2, (() => {e.image = e.image = 'https://i.imgur.com/ZgkvVsJ.png'})])
    } else if(quickstats[1] > 44 && campaignTrail_temp.candidate_json[2]["fields"].last_name == "Dean" && campaignTrail_temp.candidate_json[2]["fields"].color_hex == "#0000ff") { // close loss
    e.pages.push(`
                <p>Polls in Vermont close early. So by 8, when you’ve made it to the VDP Election Event in Burlington, results are already trickling in. At first it’s too early to see anything, of course you’re overperforming Siegel by leaps and bounds, but everyone expected that. The only certainty it seems, is that it will be a close one. Other candidates have no such difficulties. Sanders, Zuckerman, and Balint deliver their victory speeches to great applause in the main hall while you and your staff over-analyze returns from small towns with 200 votes. But you’re not even looking at that, you’re checking the initial results from Pennsylvania. That race too, will be close.</p>
                <p>Hours later, it’s still unclear what will happen in the race for Vermont Governor. You and Phil have exchanged leads for hours. As midnight approaches, the event space clears out, and you trail Phil Scott by a few points with 90% of the vote in. As you prepare to head home, you chat with Molly Gray, discussing her children, her plans for the future, and so on. You make nods to your plans as well, and you know they aren’t on the Fifth Floor. The race is called shortly after midnight. When you make it home, you’re very disappointed, but heartened by the fact that the Democratic supermajority was able to stand.</p>
                <p>When you call Governor Scott, he’s gracious and polite, and you share a brief chat. You wish you weren’t ending your career this way, but at least you gave it your all. Still, your mind dwells on the presidential race, which is razor-thin. You’re unable to sleep that night. But there is one thing keeping you calm, you know that Vermont is a good state with good people, and with a Governor like Phil Scott, surely it will remain the brave little state you love, and not become the victim of encroaching tyranny or cynical politics. When the sun rises in the morning, your faith in the future, in the next generation, feels renewed.</p>
                `)
                e.pages.push 
                (`<h2><b><p style="text-align: center">VTDigger - Jason Gibbs, Chief of Staff to Governor, to resign</p></b></h2>
                <p>Jason Gibbs, who has served as Chief of Staff to Governor Phil Scott since 2017, has resigned from his position effective immediately, citing a “respectful difference of perspective” with Governor Scott, while wishing the Governor and his team “whom I respect immensely” the best going forward.</p>
                <p>Jason Gibbs has been known for his combative personality, prodigious intelligence, small government ideas, and willingness to directly and sharply respond to critics of the Governor, many in Montpelier have cited the “abrasive” Chief of Staff’s attitude as one of the reasons for rocky relations between the Governor and the legislature. </p>
                <p>Governor Scott wished Gibbs the best, thanking him for 8 years of “diligent and thoughtful” service. </p>
                <p>Sources in Montpelier indicated that the Governor and his Chief of Staff had a strong difference of opinion over strategy entering the new legislative biennium, considering having seen the Governor nearly defeated in 2024 and the Democratic legislative supermajority still intact.</p>
                <p>Democratic leaders have yet to comment but anonymous Democratic sources indicated their pleasure at the news.</p>
                `)
                e.pages.push(`<h2><b>NBC - Former Governor of Vermont Howard Dean to receive Medal of Freedom from President Newsom</b></h2>
                <p>In a statement today, President Gavin Newsom announced a dozen new recipients of the Presidential Medal of Freedom including transgender Montana state lawmaker Zooey Zephyr, gun control activist David Hogg and former Governor of Vermont Howard Dean. In his statement Newsom highlighted Dean for his “decades of advocacy for a fairer and freer democracy”. Dean previously made a bid for President in 2004 before being undone by the well known “Dean Scream” <p style="color:blue;">[link to video]</p>. He went on to serve as chairman of the Democratic National Committee for four years before fading into political obscurity, save for a failed attempt at reclaiming his former office of Governor in 2024.</p>
                <p>Newsom’s honorees have been lambasted by Republicans as some of the most partisan to date, while his allies have praised the picks as part of Newsom’s “redemocratization” agenda. California Senator Adam Schiff spoke to NBC News saying “What President Newsom is doing now is honoring those who have fought for what our country was always supposed to stand for.” When reached for comment, Governor Dean gave a brief statement thanking the President.</p>
                `)
                autoHalveVolumeOnce(setMusic("https://audio.jukehost.co.uk/kORqIcpUm2mpmVAsZxGYrBxqmcFFytRl"));
    //e.image = ""
    e.executable.push([0, (() => {e.image = e.image = 'https://i.imgur.com/d6tJNNn.png'})])
    e.executable.push([1, (() => {e.image = e.image = 'https://i.imgur.com/4MckskN.png'})])
    e.executable.push([2, (() => {e.image = e.image = 'https://i.imgur.com/wyZF1Pz.jpeg'})])
    } else if(quickstats[1] < 44 && campaignTrail_temp.candidate_json[2]["fields"].last_name == "Dean" && campaignTrail_temp.candidate_json[2]["fields"].color_hex == "#0000ff") { // Decsive loss
    e.pages.push(`
                <p>Polls in Vermont close early. So by 8, when you’ve made it to the VDP Election Event in Burlington, results are already trickling in. At first it’s too early to see anything, of course you’re overperforming Siegel by leaps and bounds, but everyone expected that. The only certainty it seems, is that it will be a close one. Other candidates have no such difficulties. Sanders, Zuckerman, and Balint deliver their victory speeches to great applause in the main hall while you and your staff over-analyze returns from small towns with 200 votes. But you’re not even looking at that, you’re checking the initial results from Pennsylvania. That race too, will be close.</p>
                <p>But with time, there’s change, and it’s not the change you sought. Phil Scott retains a stubborn lead, and though your staff points to unreported results in Chittenden county that will no doubt save the day, there is no savior coming. Phil Scott has won this election, and it’s not particularly close. Not only that, but Democrats have lost their legislative supermajority. There is a sense of great deflation, all that work, all that effort, waging a negative campaign that Vermont did not care to see, all to just be the next man to lose to Phil Scott. With your humor and charm, you cheer up your staffers, but their disappointment is clear.</p>
                <p>When you call Governor Scott, he’s gracious and polite, and you share a brief chat. Your concession speech is brief, and ends with an urge to continue the fight for a better future. Ending your career this way was probably not the most dignified way, but you can’t think of that. You’re only thinking of the presidential race, which is razor-thin. You’re unable to sleep that night. But there is one thing keeping you calm, you know that Vermont is a good state with good people, and with a Governor like Phil Scott, surely it will remain the brave little state you love, and not become the victim of encroaching tyranny or cynical politics. When the sun rises in the morning, your faith in the future, in the next generation, feels renewed.</p>
                `)
                e.pages.push 
                (`<h2><b>The Young Turks - August 15th, 2026</b></h2>
                <p>CENK: Good news in Vermont! Home of Bernie Sanders! Member of the Progressive Party, Sanders, Our Revolution, endorsed David Zuckerman defeats moderate Democrat Mike Pieciak in the Democratic gubernatorial primary by a whopping 9%!</p>
                <p>ANA: Wow</p>
                <p>CENK: This is incredible! Zuckerman ran on single-payer healthcare, raising income taxes on the highest earners, and cracking down on abusive practices of private developers! Unafraid, bold, very progressive.</p>
                <p>ANA: What's the Progressive Party?</p>
                <p>CENK: So in Vermont they have a real, viable left-wing third party, democratic socialist, progressive. They have several seats in the state legislature. I wish we had that nationwide.</p>
                <p>ANA: That's exciting.</p>
                <p>CENK: I fully expect this guy to win in a landslide in November. What we’re seeing all around the country in this election is that people don't want this neoliberal corporate bullshit, we lost with that with Harris, they want real change, this is real change. Look out for David Zuckerman folks. The revolution is coming.</p>
                `)
                e.pages.push(`<h2><b><p style="text-align: center">VTDigger- UNH Poll: Close race for Governor (May 2028)</p></b></h2>
                <p>If polls are any indication, Governor Zuckerman may be in trouble.</p>
                <p>According to recently released results from polling conducted by the University of New Hampshire for WCAX, Zuckerman holds only a single-digit lead over his prospective Republican challenger Caledonia Senator Scott Beck in the gubernatorial race. Of those polled, 42% said that if the election were held today they would vote for Zuckerman, while 36% said they would support Beck, giving Zuckerman a 6-point lead with decided voters</p>
                <p>Independent candidates H. Brook Paige and Peter Duval each polled in the single digits. Currently undecided voters made up 20% percent of those polled.</p>
                <p>The poll was conducted online between May 5. and May. 9, and 768 Vermonters participated. The margin of error is 3.5%.</p>
                <p>Governor Zuckerman has struggled to move his agenda through the legislature and it has been reflected in his approval rating, with the same poll putting Governor Zuckerman at 47% favorable and 39% unfavorable, with 14% unsure.</p>
                `)
                autoHalveVolumeOnce(setMusic("https://audio.jukehost.co.uk/FxJum5cgahiiFfmAY0m0zWqFsOxhQ24y"));
    //e.image = ""
    e.executable.push([0, (() => {e.image = e.image = 'https://i.imgur.com/8qRKc2r.png'})])
    e.executable.push([1, (() => {e.image = e.image = 'https://i.imgur.com/ZE0LjZ4.png'})])
    e.executable.push([2, (() => {e.image = e.image = 'https://i.imgur.com/dI7I21b.png'})])
    } else if (campaignTrail_temp.candidate_json[2]["fields"].last_name == "Weinberger" && aa[0].candidate != 201) { // Dean chooses not to run
    e.pages.push(`
                <p>When you went down to Waterbury to tell folks you wouldn’t run for Governor, the disappointment in the room was palpable. But you never regretted your decision, not for a moment. It would never have been worth it to force Vermont into a negative campaign so you could be Governor again, and Phil Scott is hardly the biggest issue this country faces. That would be the wrong thing to do. Besides, you’ve been saying for years that the next generation needs to take over, and this would be the very opposite of that. You spent the summer BBQing and campaigning for a few state legislative candidates instead, even hosting a fundraiser for Mayor Weinberger, it was a lot more relaxing than running a campaign.</p>
                <p>As you attempt to relax while watching the MSNBC broadcast of the election results, you get a mobile phone reminder indicating that Governor Scott has won a landslide re-election. It’s no surprise of course, you knew when you passed on the race it would be effectively conceding it for the party. But that was a deliberate choice. A negative campaign would have been bad for the state, bad for Vermonters. Would that really have been the best use of resources? No, it would not have been. Not with democracy itself on the ballot.</p>
                <p>You pull out your mobile phone and find the contact information for Phil Scott. “Congratulations. You deserve it.”</p>
                <p>Phil Scott and you have your disagreements, you sincerely believe he has disappointed as Governor. But he’s a good man, and in times of crisis he showed his worth as a leader, and he has always opposed the cynical, divisive, dangerous politics of the national Republican Party. Even if, God forbid, Trump triumphs, you’re reassured knowing Phil Scott will defend Vermont. And you will be there to support him.</p>
                `)
                e.pages.push(`
                <p><b>MSNBC Broadcast - March 2nd, 2025</b></p>
                <p>Chris Hayes: With us now is former DNC Chairman and Vermont Governor Howard Dean, to discuss President Trump’s new tariffs.</p>
                <p>Howard Dean: Thanks Chris.</p>
                <p>Chris Hayes: So Governor, Trump campaigned on a whole slate of new trade policies, now he’s implementing them, what’s your reaction?</p>
                <p>Howard Dean: Well this is effectively an attempt to repeal the last 80 years of trade policy in this country. We saw during the Great Depression, with the Smoot Hawley tariff, that this kind of policy is a source of incredible global economic stability, and it’s catastrophic for American working families who are trying to pay the bills each month, or buy basic goods. They’re a disaster for taxpayers, who will need to fund new subsidies to finance sectors disadvantaged by the tariffs. It’s simply not the way the world works anymore.</p>
                <p>Chris Hayes: Do you anticipate this to be a political winner at least for the White House? This is supposed to be, right, a strategy to lockdown the midwestern voters who delivered Trump back into the White House.</p>
                <p>Howard Dean: Absolutely not Chris. Just look at how Governors are reacting. Take my own state of Vermont, which is going to be slammed by these new tariffs on Canadian goods. I can tell you Governor Scott is furious, he’s incensed. Look at this inter-state compact he’s got with Governor Healey and Governor Ayotte to basically go around the tariffs. People are sick and tired of these kinds of antics from the White House, and Governor Scott is a good example. It’s not just tariffs, and the more executive insanity we see, the more Governors will step up to stand for some kind of sanity in this country.</p>
                `)
                e.pages.push(`<h2><b>C-SPAN - Bernie Sanders delivers farewell address to the U.S. Senate</b></h2>
                <p>December 19th, 2030</p>
                <p>Senator Bernie Sanders (I-VT) delivers his farewell address to the United States Senate after 24 years of service, in addition to 16 years of service in the United States House of Representatives, making for a combined 40 years in the United States Congress.</p>
                <p>Sanders’ address was succinct, with the majority of the speech spent thanking staffers, his wife Jane Sanders, and the people of Vermont for giving him the opportunity to serve.</p>
                <p>Sanders briefly reflected on his advocacy for universal healthcare, Wall Street reform, and labor rights, resolving that “this struggle will continue long after my, or indeed anyone else’s retirement or even death, it is larger than individual careers, it is bigger than political egos.”</p>
                <p>Senator Sanders will be succeeded by Senator-elect Becca Balint next month. </p>
                <p>You can watch the entire speech <p style="color:blue;"><u>HERE.</u></p></p>
                `)
                autoHalveVolumeOnce(setMusic("https://audio.jukehost.co.uk/vYu1RwEB1CcMLkcjgTGRsg7pJCATozDJ"));
    //e.image = ""
    e.executable.push([0, (() => {e.image = e.image = 'https://i.imgur.com/z3nFl3L.png'})])
    e.executable.push([1, (() => {e.image = e.image = 'https://i.imgur.com/hnDHPaT.png'})])
    e.executable.push([2, (() => {e.image = e.image = 'https://i.imgur.com/xjM4txK.png'})])
    } 
    else if (campaignTrail_temp.candidate_json[2]["fields"].last_name == "Weinberger" && aa[0].candidate == 201 && campaignTrail_temp.candidate_json[2]["fields"].color_hex == "#0000ff") { //Miro Secreat Ending
        e.pages.push(`
        <h2><b>2012 AND WE WERE ON THIN ICE. WEIGHED DOWN BY DEBT AND COULDN’T PAY THE PRICE. NO FUTURE FOR OUR CITY’S INTERNET. BUT THEN THE PEOPLE MADE A SMARTER BET.</b></h2>
        <h2><b>WE’RE ON A ROLL OH OH /b></h2>
        <h2><b>THE ENERGY’S SHOWING </b></h2>
        <h2><b>WE’RE VOTING MIRO OH OH </b></h2>\
        <h2><b>TO KEEP THE BALL ROLLING</b></h2>
        <h2><b>WE’RE ON A ROLL OH OH </b></h2>
        <h2><b>WE’RE KNOW WHERE WE’RE GOING</b></h2>
        <h2><b>WE’RE VOTING MIRO OH OH</b></h2>
        <h2><b>TO KEEP THE BALL ROLLING</b></h2>
        `)
        autoHalveVolumeOnce(setMusic("https://audio.jukehost.co.uk/0up2vMM9ECXpfXsf1Jlil2xwW5xMLv5Z"));
        //e.image = ""
        e.executable.push([0, (() => {e.image = e.image = 'https://i.imgur.com/9gX0SKe.png'})])
        } 
    
  //Dean Prog Endings  
    
    
else if (aa[0].candidate == 201 && campaignTrail_temp.candidate_json[2]["fields"].last_name == "Dean" && campaignTrail_temp.candidate_json[2]["fields"].color_hex == "#a52a2a") { // Prog Dean Win
    e.pages.push(`
                <p>Polls in Vermont close early. So by 8, when you’ve made it to the VDP Election Event in Burlington, results are already trickling in. At first it’s too early to see anything, of course you’re overperforming Siegel by leaps and bounds, but everyone expected that. The only certainty it seems, is that it will be a close one. Other candidates have no such difficulties. Sanders, Zuckerman, and Balint deliver their victory speeches to great applause in the main hall while you and your staff over-analyze returns from small towns with 200 votes. But you’re not even looking at that, you’re checking the initial results from Pennsylvania. That race too, will be close.</p>
                <p>But with time, there’s a change. You take the lead, and you hold the lead. With every return the window for Governor Scott to win the day grows smaller and smaller. Eventually, it’s all over. When the AP calls the race, there’s a great cheer from the hall, and within your private room, it’s all hugs and shaking hands.</p>
                <p>When you step out of your team’s chambers, you see the shocked look on the face of Democratic Party insiders, they can’t believe what’s happened. The first Progressive governor in state history, and it was someone who until this year was a machine Democrat, it is nothing short of inconceivable. You see their shock, and you relish in it, you see the astonished looks on the faces of those you know were privately supporting Scott while lambasting you for betraying the party. It’s euphoric. Your speech lights up the hall despite the shock of insiders. It’s like 2004 all over again. When Phil Scott calls you to concede, you can hear the utter shock in his voice.</p>
                <p>But the party doesn’t stop, as Vice President Harris crosses 270 electoral votes with ease in what seems like the final glorious triumph over Donald Trump. There are some in your circle who worry about navigating the newfound split you’ve drawn into Vermont politics, but it’s not important. This isn’t about the VDP or the VPP. You sleep soundly, knowing that all may yet be well, and you will have the great opportunity to serve Vermont yet again.</p>
                `)
                e.pages.push(`<img src=https://i.imgur.com/NMjedeT.png width="600" height="200">
                <h2><b>Socialist Forum - A Democratic Socialists of America Publication 
                The Progressive Party Experiment has Failed</b></h2>
                <p>April 22nd, 2026</p>
                <p>Vermont is a very unique place in the American political landscape. It is the only state where the neoliberal Democratic Party faces organized party opposition to its left, the Progressive Party. The Progressive Party is not a socialist party, but it has advanced serious criticisms of the police state and the corporate party duopoly, and in some ways has provided a model for what many DSA members hope to achieve, a real break from the Democratic Party. In recent years, we socialists in Vermont have attempted to build socialist hegemony within the Progressive Party, with goodwill, solidarity, and respect towards non-socialist leftists in that movement. Unfortunately, at this point we can only resolve that these efforts have failed.</p>
                <p>Governor Howard Dean, who despite his unearned national reputation as a leftist firebrand is best known in Vermont as a fiscally conservative moderate, having burned his bridges with the Democratic Party over personal factional spats, was welcomed into the Progressive Party with open arms. We, the DSA, were always strenuously opposed to this development, viewing the rank self-interested entryism for what it was. We correctly predicted that welcoming this opportunism would weaken the party. Dean was not interested in building VPP power, just getting back at his rivals in the Democratic Party. And it has, Howard Dean has not governed as anything other than a center-left technocrat, and he has dragged the party along with him, which has essentially transformed into a liberal party with occasional performative disagreements with only the most right-wing Democrats. More than anything, it has become a vessel for Howard Dean to increase his influence in the Democratic Party, funneling money and energy back into the VDP, leaving the VPP in ruin. </p>
                <p>Therefore we must conclude that socialist organization in Vermont must be carried out outside the VPP for it to be successful going forward.</p>
                `)
                e.pages.push(`<h2><b>VTDigger - Senator Phil Baruth wins Democratic primary for Governor </b></h2>
                <p>August 18th, 2028</p>
                <p>Senator Phil Baruth of Burlington has won the tightly contested contest for the Democratic nomination for Governor of Vermont. The longtime State Senator and UVM English Professor was considered an unlikely contender for the Democratic nomination, especially considering the overwhelming fundraising advantage held by State Treasurer Mike Pieciak, but nevertheless Senator Baruth has won the nomination by a narrow 2 percentage points.</p>
                <p>Senator Baruth was not considered a likely candidate for statewide office, let alone the governorship, but reportedly ran at the strong encouragement of Governor Howard Dean, whom he enjoyed strong support from during the primary process, especially after Dean formerly re-affiliated with the Democratic Party in the fall after the VPP controlled Burlington City Council voted to cut the police budget by half, in a repeat of a 2020 experiment that was considered a failure.</p>
                <p>Governor Dean was a longtime leader of the state Democratic Party, including leading the Democratic National Committee, but changed his public affiliation in Summer 2024 (Vermont has no partisan registration) after a breakdown in relations with party insiders, shifting support to the Progressive Party in what was considered a highly shocking move. Senator Baruth is affiliated with the Democratic Party, but runs as a Progressive as well, and has always been considered an advocate for a more cooperative relationship between the two parties. </p>
                <p>Senator Baruth’s victory party was characterized by visible surprise and shock from attendants. Senator Baruth said in brief celebratory remarks that he hopes to “take the fight” to Republican nominee for Governor Mark Coester, and “deliver a mandate for more change for working Vermonters.” </p>
                `)
                autoHalveVolumeOnce(setMusic("https://audio.jukehost.co.uk/MGgxkXRrSq6tjmqdgMfR60InHojBrn2b"));
    //e.image = ""
    e.executable.push([0, (() => {e.image = e.image = 'https://i.imgur.com/Rk35ZQY.png'})])
    e.executable.push([1, (() => {e.image = e.image = 'https://i.imgur.com/WuYJXES.png'})])
    e.executable.push([2, (() => {e.image = e.image = 'https://i.imgur.com/qxRX61J.png'})])
    
} else if (quickstats[1] < 44 && campaignTrail_temp.candidate_json[2]["fields"].last_name == "Dean" && campaignTrail_temp.candidate_json[2]["fields"].color_hex == "#a52a2a") { // Dean Prog loss
    e.pages.push(`
                <p>Polls in Vermont close early. So by 8, when you’ve made it to the VDP Election Event in Burlington, results are already trickling in. At first it’s too early to see anything, of course you’re overperforming Siegel by leaps and bounds, but everyone expected that. The only certainty it seems, is that it will be a close one. Other candidates have no such difficulties. Sanders, Zuckerman, and Balint deliver their victory speeches to great applause in the main hall while you and your staff over-analyze returns from small towns with 200 votes. But you’re not even looking at that, you’re checking the initial results from Pennsylvania. That race too, will be close.</p>
                <p>But with time, there’s change, and it’s not the change you sought. Phil Scott retains a stubborn lead, and though your staff points to unreported results in Chittenden county that will no doubt save the day, there is no savior coming. Phil Scott has won this election. There is a sense of great deflation, all that work, all that effort, waging a negative campaign that Vermont did not care to see, all to just be the next man to lose to Phil Scott. With your humor and charm, you cheer up your staffers, but their disappointment is clear.</p>
                <p>But their disappointment does not hurt nearly as much as the smirks from the Democratic Party insiders you so scorned by taking up the auburn moose banner of the Progressive Party. They are so pleased with themselves. Of course you would fail, it serves you right, you abandoned the party for your ego trip. Your rebellion was pointless, doomed to fail. You are furious inside as you watch them tout the value of party unity while you know they voted for Scott behind your back.</p>
                <p>When you call Governor Scott himself, he’s gracious and polite, and you share a brief chat. Your concession speech is brief, and ends with an urge to continue the fight for a better future. Ending your career this way was probably not the most dignified way, but you can’t think of that. You’re only thinking of the presidential race, which is razor-thin. You’re unable to sleep that night. But there is one thing keeping you calm, you know that Vermont is a good state with good people, and with a Governor like Phil Scott, surely it will remain the brave little state you love, and not become the victim of encroaching tyranny or cynical politics. When the sun rises in the morning, your faith in the future, in the next generation, feels renewed.</p>
                `)
    e.pages.push(`<h2><b>Democratic Left - A Publication of the Democratic Socialists of America Vermont Progressives say YES to Socialism!</b></h2>
                <p>June 15th, 2027</p>
                <p>Vermont, land of Bernie Sanders and Murray Bookchin, has always been somewhat of an idealized socialist utopia. This, of course, has never been true, what with its politics controlled by real estate lobbies, corporate Democratic Party, and love for electing “moderate” Republican Governors. But socialists in Vermont have made a major breakthrough!</p>
                <p>The Progressive Party is a non-socialist hippie-ish left-wing party that has the unique distinction of being the only organized party opposition to the Democratic Party in the United States. The Party is on the whole a good one, with a record of standing up for organized labor, the unemployed, the disabled, and queer people against the real estate dominated two party duopoly. It however, is not a socialist party. Or shall I say was, because times are changing!</p>
                <p>The Champlain Valley DSA and other local DSA organizations have worked hard to make the case for socialism to the Vermont Progressive Party as the best tool for organizational opposition to the Democratic Party and the best program for class politics in Vermont. After the disastrous decision by party leaders to let Former Governor Howard Dean to take up the progressive banner in his egotistical crusade for Governor in 2024, and subsequent demolition of the VPP by the Democratic Party in 2026, party members have agreed with the argument for radical class politics!</p>
                <p>Members of the Champlain Valley DSA have been elected to the party Coordinating Committee, now holding a majority position, as well as taking the position of Executive Director and Party Chair. Make no mistake comrades, the United States now has an organized, capable, and popular working class party! This is a great win.</p>
                `)
    e.pages.push(`<h2><b>VTDigger - Commentary</b></h2>
                <p>David Zuckerman: The Progressive Party has Changed</p>
                <p>July 29th, 2028</p>
                <p>For all my political life, I have been a proud member of the Vermont Progressive Party. I was proud that our Brave Little State had a party that stood outside the two-party system, a system that too often ignored average people in favor of special interest money. A party with a rich history of change-makers including Bernie Sanders, Anthony Pollina, Peter Clavelle, and Martha Abbott. I served in the State House for 14 years and the State Senate for 4 years under the Progressive Party label, not to mention 8 years as your Lieutenant Governor. I was proud to be the only third party statewide office holder in the country.</p>
                <p>However, I have become concerned about the direction of my longtime political home. In the past year, the party has taken a concerning turn towards the fringe. Now, I’m no stranger to being labelled an extremist, or a radical. There’s no crime in standing for what’s right, even if its unpopular. Reaganomics was popular, the Iraq War was popular, and often those who stand alone on principle end up being vindicated. But I am concerned about the Progressive Party’s turn towards dogmatism, and shutting down alternative viewpoints in the party. </p>
                <p>The VPP elected to embrace a “Democratic Socialist” platform, I am not a member of the DSA nor am I a socialist, I’m a farmer first and foremost. I did not, however, necessarily reject this decision, even if I disagreed. There are many strong and decent advocates in the DSA, who I have met in the Vermont AFL-CIO and on my campaigns. But what I strongly rejected is the sidelining of longtime party stalwarts like Brian Cina and Martha Abbott who expressed concerns about the direction of the party, or the decision of the Progressive Party to refuse endorsing Governor Newsom in this year’s election, or the Executive Committee statement supporting withdrawal from NATO. These choices range from disrespectful, to deeply dangerous, to downright wrong. These choices will marginalize the Progressive Party, and reduce our ability to gain the trust of voters.</p>
                <p>There’s been a lot of soul-searching in the party since Governor Dean’s defeat in 2024. At the time I was a loud voice in favor of embracing Governor Dean’s turn towards our party, and I worked hard to elect him, and was saddened when he was defeated. I was hopeful that this was a gesture towards unity, and one that could move Progressive ideas into the mainstream. I know many Progressives, including former Representative Brian Cina, strongly agreed with me. The party’s new leaders view this decision, a welcoming, open decision, as a terrible mistake. It’s no surprise therefore that Governor Dean, one of the greatest statesmen our state has produced, has once again distanced himself from the VPP. I find that I must as well, while I am no longer directly involved in state politics, I find myself more than ever an independent progressive Vermonter, much like Senator Sanders.</p>
                `)

                autoHalveVolumeOnce(setMusic("https://audio.jukehost.co.uk/0CaE44J45I3TjgW2ksOZGCtjxz3Kh17O"));
    //e.image = ""
    e.executable.push([0, (() => {e.image = e.image = 'https://i.imgur.com/6Ab129h.jpeg'})])
    e.executable.push([1, (() => {e.image = e.image = 'https://i.imgur.com/sxfR2eQ.jpeg'})])
    e.executable.push([2, (() => {e.image = e.image = 'https://i.imgur.com/QHx4Ywp.jpeg'})])
    } else if (quickstats[1] > 44 && campaignTrail_temp.candidate_json[2]["fields"].last_name == "Dean" && campaignTrail_temp.candidate_json[2]["fields"].color_hex == "#a52a2a") { // Dean Prog loss
        e.pages.push(`
                    <p>Polls in Vermont close early. So by 8, when you’ve made it to the VDP Election Event in Burlington, results are already trickling in. At first it’s too early to see anything, of course you’re overperforming Siegel by leaps and bounds, but everyone expected that. The only certainty it seems, is that it will be a close one. Other candidates have no such difficulties. Sanders, Zuckerman, and Balint deliver their victory speeches to great applause in the main hall while you and your staff over-analyze returns from small towns with 200 votes. But you’re not even looking at that, you’re checking the initial results from Pennsylvania. That race too, will be close.</p>
                    <p>But with time, there’s change, and it’s not the change you sought. Phil Scott retains a stubborn lead, and though your staff points to unreported results in Chittenden county that will no doubt save the day, there is no savior coming. Phil Scott has won this election. There is a sense of great deflation, all that work, all that effort, waging a negative campaign that Vermont did not care to see, all to just be the next man to lose to Phil Scott. With your humor and charm, you cheer up your staffers, but their disappointment is clear.</p>
                    <p>But their disappointment does not hurt nearly as much as the smirks from the Democratic Party insiders you so scorned by taking up the auburn moose banner of the Progressive Party. They are so pleased with themselves. Of course you would fail, it serves you right, you abandoned the party for your ego trip. Your rebellion was pointless, doomed to fail. You are furious inside as you watch them tout the value of party unity while you know they voted for Scott behind your back.</p>
                    <p>When you call Governor Scott himself, he’s gracious and polite, and you share a brief chat. Your concession speech is brief, and ends with an urge to continue the fight for a better future. Ending your career this way was probably not the most dignified way, but you can’t think of that. You’re only thinking of the presidential race, which is razor-thin. You’re unable to sleep that night. But there is one thing keeping you calm, you know that Vermont is a good state with good people, and with a Governor like Phil Scott, surely it will remain the brave little state you love, and not become the victim of encroaching tyranny or cynical politics. When the sun rises in the morning, your faith in the future, in the next generation, feels renewed.</p>
                    `)
        e.pages.push(`<h2><b>Democratic Left - A Publication of the Democratic Socialists of America Vermont Progressives say YES to Socialism!</b></h2>
                    <p>June 15th, 2027</p>
                    <p>Vermont, land of Bernie Sanders and Murray Bookchin, has always been somewhat of an idealized socialist utopia. This, of course, has never been true, what with its politics controlled by real estate lobbies, corporate Democratic Party, and love for electing “moderate” Republican Governors. But socialists in Vermont have made a major breakthrough!</p>
                    <p>The Progressive Party is a non-socialist hippie-ish left-wing party that has the unique distinction of being the only organized party opposition to the Democratic Party in the United States. The Party is on the whole a good one, with a record of standing up for organized labor, the unemployed, the disabled, and queer people against the real estate dominated two party duopoly. It however, is not a socialist party. Or shall I say was, because times are changing!</p>
                    <p>The Champlain Valley DSA and other local DSA organizations have worked hard to make the case for socialism to the Vermont Progressive Party as the best tool for organizational opposition to the Democratic Party and the best program for class politics in Vermont. After the disastrous decision by party leaders to let Former Governor Howard Dean to take up the progressive banner in his egotistical crusade for Governor in 2024, and subsequent demolition of the VPP by the Democratic Party in 2026, party members have agreed with the argument for radical class politics!</p>
                    <p>Members of the Champlain Valley DSA have been elected to the party Coordinating Committee, now holding a majority position, as well as taking the position of Executive Director and Party Chair. Make no mistake comrades, the United States now has an organized, capable, and popular working class party! This is a great win.</p>
                    `)
        e.pages.push(`<h2><b>VTDigger - Commentary</b></h2>
                    <p>David Zuckerman: The Progressive Party has Changed</p>
                    <p>July 29th, 2028</p>
                    <p>For all my political life, I have been a proud member of the Vermont Progressive Party. I was proud that our Brave Little State had a party that stood outside the two-party system, a system that too often ignored average people in favor of special interest money. A party with a rich history of change-makers including Bernie Sanders, Anthony Pollina, Peter Clavelle, and Martha Abbott. I served in the State House for 14 years and the State Senate for 4 years under the Progressive Party label, not to mention 8 years as your Lieutenant Governor. I was proud to be the only third party statewide office holder in the country.</p>
                    <p>However, I have become concerned about the direction of my longtime political home. In the past year, the party has taken a concerning turn towards the fringe. Now, I’m no stranger to being labelled an extremist, or a radical. There’s no crime in standing for what’s right, even if its unpopular. Reaganomics was popular, the Iraq War was popular, and often those who stand alone on principle end up being vindicated. But I am concerned about the Progressive Party’s turn towards dogmatism, and shutting down alternative viewpoints in the party. </p>
                    <p>The VPP elected to embrace a “Democratic Socialist” platform, I am not a member of the DSA nor am I a socialist, I’m a farmer first and foremost. I did not, however, necessarily reject this decision, even if I disagreed. There are many strong and decent advocates in the DSA, who I have met in the Vermont AFL-CIO and on my campaigns. But what I strongly rejected is the sidelining of longtime party stalwarts like Brian Cina and Martha Abbott who expressed concerns about the direction of the party, or the decision of the Progressive Party to refuse endorsing Governor Newsom in this year’s election, or the Executive Committee statement supporting withdrawal from NATO. These choices range from disrespectful, to deeply dangerous, to downright wrong. These choices will marginalize the Progressive Party, and reduce our ability to gain the trust of voters.</p>
                    <p>There’s been a lot of soul-searching in the party since Governor Dean’s defeat in 2024. At the time I was a loud voice in favor of embracing Governor Dean’s turn towards our party, and I worked hard to elect him, and was saddened when he was defeated. I was hopeful that this was a gesture towards unity, and one that could move Progressive ideas into the mainstream. I know many Progressives, including former Representative Brian Cina, strongly agreed with me. The party’s new leaders view this decision, a welcoming, open decision, as a terrible mistake. It’s no surprise therefore that Governor Dean, one of the greatest statesmen our state has produced, has once again distanced himself from the VPP. I find that I must as well, while I am no longer directly involved in state politics, I find myself more than ever an independent progressive Vermonter, much like Senator Sanders.</p>
                    `)
    
                    autoHalveVolumeOnce(setMusic("https://audio.jukehost.co.uk/0CaE44J45I3TjgW2ksOZGCtjxz3Kh17O"));
        //e.image = ""
        e.executable.push([0, (() => {e.image = e.image = 'https://i.imgur.com/6Ab129h.jpeg'})])
        e.executable.push([1, (() => {e.image = e.image = 'https://i.imgur.com/sxfR2eQ.jpeg'})])
        e.executable.push([2, (() => {e.image = e.image = 'https://i.imgur.com/QHx4Ywp.jpeg'})])
        }
    return construct(0);
}

  setMusic = (url, override = false) => {
    let aud;
    if ($("#music_player")[0]) {
      $("#music_player")[0].remove();
    } 
    if (override && document.getElementById("endingAudio")) {
      aud = document.getElementById("endingAudio");
      aud.src = url;
      aud.play();
      return 0;
    }
    if (document.getElementById("endingAudio")) {
      return 0;
    }
    aud = document.createElement("audio");
    aud.id = "endingAudio";
    aud.src = url;
    aud.loop = false;
    aud.autoplay = true;
    document.body.appendChild(aud);
    aud.play();
    return 0;
  }
//Counties insted of states code
  function changechart(){
if (document.getElementById("overall_vote_statistics")!=null) {
overallthing=document.getElementById("overall_vote_statistics").innerHTML;
overallthing.toString()
overallthing=overallthing.replace("Electoral Votes","Counties Won")
document.getElementById("overall_vote_statistics").innerHTML=overallthing
}
}
window.setInterval(changechart,200)



