PImage LifestealLogo;
PImage Heart;
PImage Background;
PImage Parchment;
PImage Back;
PImage AKey;
PImage BKey;
PImage APre;
PImage AUnPre;
PImage BUnPre;
PImage BPre;
PImage APre;

PImage Ash;
PImage Bacon;
PImage Clown;
PImage Cube;
PImage Jarom;
PImage Leo;
PImage Pangi;
PImage Parrot;
PImage Planet;
PImage Rek;
PImage Red;
PImage Ro;
PImage Spepticle;
PImage Spoke;
PImage Subz;
PImage Terrain;
PImage Woogie; 
PImage Zam;
PImage Vitalasy;
PImage Poafa;
PImage Clutch;
PImage Mapicc;


            
var IntroAnimationY = 750;        
var IntroAnimationX1 = 1400;      
var IntroAnimationX2 = -400;   
var SunY = 0;
var SunX = 1400;   
var SunHitY = IntroAnimationY;
var SunHitX = -1200;   
var SunHitH = 650;
var SunHitW = 1200;  
var RotateLogo = 0;
var whooshy= 0;
var whooshy2= 0;
var Timey= 0;
var Time=0;
var Begin = 0;
var musicmix = 0;
var buttony1 = 450;
var scene = 1;
var me = 0;
var opacity1 = 255;
var Day = 1;
var Hearts = 10;
var Name= "";
var BackX= -120;
var DayChange = 1;
var Nextshow = 0;
var Result = 0;
var Resulty = 0;
var Respond = "";
var AAnswer = "";
var BAnswer = "";
var AResult = 0;
var BResult = 0; 
var Showy = 0;
var OChange = 0;
var Now = 1;


var PlayersR = "";
var PlayerRand;
var PR = round(PlayerRand);
var Rand = "";

var Situations = "";
var T;
var T2 = round(T);
var ShowSit = "";
var AFinal = "";
var BFinal = "";
var ARes = 1;
var BRes = 1;

/* 
Bacon 1
Pangi 2
Spoke 3
Zam 4
Clown 5
Parrot 6
Woogie 7
Subz 8
Cube 9
Jarom 10
Spepticle 11
Terrain 12
Planet 13
Ro 14
Leo 15
Ash 16
Red 17
Rek 18
Vitalasy 19
Clutch 20
Poafa 21
Mapicc 22



*/


var AshX = 0;
var AshY = 0;
var BaconX = 0;
var BaconY = 0;
var ClownX = 0;
var ClownY = 0;
var CubeX = 0;
var CubeY = 0;
var JaromX = 0;
var JaromY = 0;
var LeoX = 0;
var LeoY = 0;
var PangiX = 0;
var PangiY = 0;
var ParrotX = 0;
var ParrotY = 0;
var PlanetX = 0;
var PlanetY = 0;
var RedX = 0;
var RedY = 0;
var RoX = 0;
var RoY = 0;
var SpepticleX = 0;
var SpepticleY = 0;
var SpokeX = 0;
var SpokeY = 0;
var SubzX = 0;
var SubzY = 0;
var TerrainX = 0;
var TerrainY = 0;
var WoogieX = 0;
var WoogieY = 0;
var ZamX = 0;
var ZamY = 0;
var RekX = 0;
var RekY = 0;
var VitalasyX = 0;
var VitalasyY = 0;
var ClutchX = 0;
var ClutchY = 0;
var PoafaX = 0;
var PoafaY = 0;
var MapiccX = 0;
var MapiccY = 0;
var move = 0;



            size(1408, 792);
           
      
          
      
      LifestealLogo = loadImage("Lifesteal_Logo.png");
      Heart = loadImage("Minecraft heart.png");
      Background = loadImage("Minecraft background.jpg");
      Parchment = loadImage("Parchment.png");
      Back = loadImage("WorldLifesteal.png");
      AKey = loadImage("AKey.png");
      BKey = loadImage("BKey.png");
      APre = loadImage("APressed.png");
      BPre = loadImage("BPressed.png");
      AUnPre = loadImage("AUnpressed.png");
      BUnPre = loadImage("BUnpressed.png");


      Ash = loadImage("Ash.png");
      Bacon = loadImage("Bacon.png");
      Clown = loadImage("Clown.png");
      Cube = loadImage("Cube.png");
      Jarom = loadImage("Jarom.png");
      Leo = loadImage("Leo.png");
      Pangi = loadImage("Pangi.png");
      Parrot = loadImage("Parrot.png");
      Planet = loadImage("Planet.png");
      Planet = loadImage("Planet.png");
      Red = loadImage("Red.png");
      Ro = loadImage("Ro.png");
      Spepticle = loadImage("Spepticle.png");
      Spoke = loadImage("Spoke.png");
      Subz = loadImage("Subz.png");
      Terrain = loadImage("Terrain.png");
      Woogie = loadImage("Woogie.png");
      Zam = loadImage("Zam.png");
      Rek = loadImage("Rek.png");
      Vitalasy = loadImage("Vitalasy.png");
      Clutch = loadImage("Clutch.png");
      Poafa = loadImage("Poafa.png");
      Mapicc = loadImage("Mapicc.png");



      size(1408, 792);
    
    
    


      
      
      var tbd = function() {
        scene = 500;
        draw = function (){
      background(180, 10, 100);



      }}
      
      
        var game = function() {

          scene = 3;
           // -85  35  -3585

          draw = function() {

            
            if (BackX > -85 - Day * 35) {
            BackX = BackX - 0.45;
            }

            background(212, 255, 253);

            image(Back, BackX, 0, 5000, 792);
          image(Parchment, 300, 50, 825, 750);

          fill(255, 255, 255);
            stroke(0, 0, 0);
            strokeWeight(10);
            rect(3, 3, 400, 175);

            textSize(80);
            fill(0, 0, 0);
            text("Day:"+ Day, 10, 70);
            text("Hearts:"+ Hearts, 10, 150);
            textSize(90);
            text(Name, 10, 775);

            if (Now === 1){
            image(AKey, 100, 350, 150, 150);
            image(BKey, 1150, 350, 150, 150);
            }if (Now === 2){
              image(AUnPre, 100, 350, 150, 150);
              image(BUnPre, 1150, 350, 150, 150); 

            } if (Now === 3){

              image(APre, 100, 350, 150, 150);
              image(BKey, 1150, 350, 150, 150);

            }if (Now === 4){

            image(AKey, 100, 350, 150, 150);
            image(BPre, 1150, 350, 150, 150);

            }

            if (Nextshow != 1){

            if (mouseX >= 100 && mouseX <= 250 &&
              mouseY >= 350 && mouseY <= 500) {

            Now = 3;
      
          }else if (mouseX >= 1150 && mouseX <= 1300 &&
            mouseY >= 350 && mouseY <= 500) {
              
              Now = 4;
        }else {
          Now =1;


        }}





            if (scene === 3 && Nextshow === 1){
              image(AUnPre, 100, 350, 150, 150);
              image(BUnPre, 1150, 350, 150, 150); 
              Now = 2;
              fill(255, 255, 255);
              rect(1090, 3, 315, 175);
              fill(0, 0, 0);
              textSize(146);
              text("Next", 1090, 130);
          

           mouseClicked = function() {
                if (mouseX >= 1070 && mouseX <= 1408 &&
                    mouseY >= 0 && mouseY <= 180 && scene === 3 && Nextshow === 1) {
                      Day = Day + 1;
                      image(AUnPre, 100, 350, 150, 150);
                      image(BUnPre, 1150, 350, 150, 150); 
                      Nextshow = 0;
                      DayChange = 1;
                      
                  
                }



            };
          }
          




            if(DayChange === 1) {


              Now = 2;
              fill(255, 255, 255);
              rect(1090, 3, 315, 175);
              fill(0, 0, 0);
              textSize(146);
              text("Next", 1090, 130);
              image(AUnPre, 100, 350, 150, 150);
              image(BUnPre, 1150, 350, 150, 150); 

            Showy = 1;
            PlayersR = ["Bacon", "Pangi", "Spoke", "Zam", "Clown", "Parrot", "Woogie", "Subz", "Cube", "Jaron", "Spepticle", "Terrain", "Planet", "Ro", "Leo", "Ash", "Red", "Rek", "Vitalasy", "Cluch", "Poafa", "Mapicc"];
            PlayerRand = random(0, 21);
            PR = round(PlayerRand);
            Rand = "" + PlayersR[PR];
          
            if(PR != me - 1){

            Situations = 

            [Rand + " starts chasing you, \ndo you fight him or run?\nA:Fight\nB:Run", 
            "You spot " + Rand + ", \ndo you go talk to him?\nA:Yes\nB:No", 
            "You find a random beacon, \ndo you take it?\nA:Yes\nB:No",
            Rand + " finds your secret base \nwhat do you do?\nA:Try to make him join \nyour team\nB:Make a new base",
            Rand + " blows up your \ncactus farm. What do you do?\nA:Blow up his farms\nB:Cry",
            "You trick " + Rand + " with a\ntexture pack. \nYou gain a heart.",
            "Everyone on the server \nbuilds frogs. \nThat's it.",
            "You mine 100 diamonds. \nGear (Luck) increased",
            "You trap " + Rand + " with entity \ncramming. \nYou gain a heart.",
            Rand + " offers a fair fight \nDo you fight him?\nA:Yes\nB:No",
            Rand + " finds your hidden base.\nWhat do you do?\nA:Call your allies\nB:Fight him yourself",
            Rand + " offers you a full beacon.\nDo you take it?\nA:Yes\nB:No",
            "You have the opportunity to \ntrap " + Rand + ". Do you take it?\nA:Yes\nB:No",
            "You see " + Rand + " what do \nyou say?\nA: Hello Sir!\nB: Sup, loser!",
            Rand + " steals your pet.\nWhat do you do?\nA:Fight him\nB:Try to steal him back.",
            Rand + " says you trapped him\nwith a tnt trap.\nA:Say it's a lie\nB:Frame someone else",
            "You dig a void trap.\nShould you trap " + Rand + "\nA:Yes\nB:No",
            "You fall in lava but log off.\nWhat do you do\nA:Ask your ally to save you\nB:Try to save yourself",
            "You see " + Rand + "\nwhat do you do?\nA:Go say hi\nB:Leave them alone",
            Rand + " starts chasing you!\nWhat do you do?\nA:Fight him!\nB:Keep running!",
            Rand + " isn't subscribed \nto GearShift.\nWhat do you do?\nA:Fight him\nB:Leave him alone",
            Rand + " killed your dog.\nWhat do you do?\nA:Fight him\nB:Talk to him about it",
            "You suspect " + Rand + " to \nbe hacking\nWhat do you do?\nA:Challenge him to a duel\nB:Let him be",
            "You have free time,\nwhat do you do?\A:Make a trap\nB:Go mining",
            Rand + " made a scavenger hunt.\nDo you do it?\nA:Yes\nB:No"


          
          
          ];

          AAnswer = 
          
          [Rand + " got his teammate\nto help him and he killed you", 
          "He was just lonely", 
          "It was a trap, you died",
          "He didn't want to join\nbut let you live",
          "You found a heart while\nblowing up his base!",
          "",
          "",
          "",
          "",
          "You lost",
          "It was a trap and your\nallies killed you.",
          "Congrats! " + Rand + " gave \nyou a beacon!",
          "He didn't fall for it",
          Rand + " walks away, confused.",
          "He killed you",
          Rand + " didn't believe you\nHe killed you",
          "They fell for it but \nyou didn't get the heart",
          Rand + " saved you",
          "You made a new ally!",
          "You lost the fight",
          "You won of course!!!",
          "They didn't do it and you were \npublicly executed because of it",
          "He wasn't hacking and you won!",
          "You made a trap!",
          "You lost and died in\nthe process."
        
        
        
        ];



        BAnswer = 
          
          [Rand + " chased and killed you", 
          "He was just lonely\nYou now feel bad", 
          "You'll get another someday.",
          "He declared war on you\nLose three lives",
          Rand + " felt bad and gave\nyou a life",
          "",
          "",
          "",
          "",
          "He killed you anyway",
          "You won the fight!",
          "You'd rather play it safe",
          "There's always another day",
          Rand + " changes their skin to\nthe Hulk and starts chasing\nyou around. You are\nvery confused.",
          "He saw and killed you",
          "He believed you but the\nperson you framed, killed you",
          "Maybe someone else will be better",
          "You grabbed the water \njust in time",
          "Better to play it safe",
          "You barely got away",
          "You got bad luck and fell\ninto a void trap",
          "Apparently they didn't do it",
          "He never was hacking",
          "You got some good materials",
          "It wasn't a choice and you\nwere forced to do it.\nYou died in the process"
          


        
        
        ];

        AResult = 
          
        [3, 
        1, 
        3,
        1,
        2,
        1,
        1,
        1,
        1,
        3,
        3,
        1,
        1,
        1,
        3,
        3,
        1,
        1,
        1,
        3,
        2,
        3,
        2,
        1,
        3
      
      
      
      ];



      BResult = 
        
        [3, 
        1, 
        1,
        4,
        2,
        1,
        1,
        1,
        1,
        3,
        2,
        1,
        1,
        1,
        3,
        3,
        1,
        1,
        1,
        1,
        3,
        1,
        1,
        1,
        3
      
      
      
      ];


          Result = 

          [
            4,5,6,7,8,2,1,1,2,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24
           ];



            T = random(0, 23);
            T2 = round(T);
            ShowSit = "" + Situations[T2];
            AFinal = "" + AAnswer[T2];
            BFinal = "" + BAnswer[T2];
            ARes = AResult[T2];
            BRes = BResult[T2];
            Resulty = Result[T2];

           
      
      
      

           if (Resulty === 1) {
            Nextshow = 1;
           }if (Resulty === 2) {
            Nextshow = 1;
            Hearts = Hearts + 1;
            Resulty = 1;
           }if (Resulty === 3) {
            Nextshow = 1;
            Hearts = Hearts - 1;
            Resulty = 1;
           }if (Resulty >= 4){
            
         
            mouseClicked = function() {
              if (mouseX >= 100 && mouseX <= 250 &&
                  mouseY >= 350 && mouseY <= 500 && scene === 3) {

                OChange = 1;
                Showy = 2;
                Now = 2;
          
              }else if (mouseX >= 1150 && mouseX <= 1300 &&
                mouseY >= 350 && mouseY <= 500 && scene === 3) {
                  OChange = 1;
                  Showy = 3;
                  Now = 2;
            }
    
            
            };




           }
           







            DayChange = 0;

            } else {

              PlayerRand = random(0, 21);
              PR = round(PlayerRand);
              Rand = "" + PlayersR[PR];


            }
          
          
          
          }
          
          if(Showy === 1){
            textSize(50);
            text(ShowSit, 365, 320);
          

          }if (Showy === 2) {

            textSize(50);
            text(AFinal, 365, 320);



            

            if (OChange === 1){

            if (ARes === 1){

            OChange = 0;
             

            }if(ARes === 2){

            Hearts = Hearts + 1;
            OChange = 0;
          
           
            }if(ARes === 3){

              Hearts = Hearts - 1;
              OChange = 0;
            
  
  
              }if (ARes === 4){
                Hearts = Hearts - 3;
                OChange = 0;
              }





            }
            Nextshow = 1;

          }if (Showy === 3){

            textSize(50);
            text(BFinal, 365, 320);

            if (OChange === 1){

              if (BRes === 1){
  
              OChange = 0;
               
  
              }if(BRes === 2){
  
              Hearts = Hearts + 1;
              OChange = 0;
            
             
              }if(BRes === 3){
  
                Hearts = Hearts - 1;
                OChange = 0;
              
    
    
                }if (BRes === 4){
                  Hearts = Hearts - 3;
                  OChange = 0;
                }
  
  
  
  
  
              }






            Nextshow = 1;




          }
            




            AshX = -1000;
            AshY = -1000;
            BaconX = -1000;
            BaconY = -1000;
            ClownX = -1000;
            ClownY = -1000;
            CubeX = -1000;
            CubeY = -1000;
            JaromX = -1000;
            JaromY = -1000;
            PangiX = -1000;
            PangiY = -1000;
            ParrotX = -1000;
            ParrotY = -1000;
            PlanetX = -1000;
            PlanetY = -1000;
            RedX = -1000;
            RedY = -1000;
            RoX = -1000;
            RoY = -1000;
            LeoX = -1000;
            LeoY = -1000;
            SpepticleX = -1000;
            SpepticleY = -1000;
            SpokeX = -1000;
            SpokeY = -1000;
            TerrainX = -1000;
            TerrainY = -1000;
            WoogieX = -1000;
            WoogieY = -1000;
            ZamX = -1000;
            ZamY = -1000;
            SubzX = -1000;
            SubzY = -1000;
            RekX = -1000;
            RekY = -1000;
            VitalasyX = -1000;
            VitalasyY = -1000;
            ClutchX = -1000;
            ClutchY = -1000;
            PoafaX = -1000;
            PoafaY = -1000;
            MapiccX = -1000;
            MapiccY = -1000;

            if (me===1){
              BaconX = 255;
              BaconY = 650;

            }else if (me===2){
              PangiX = 250;
              PangiY = 653;

            }else if (me===3){
              SpokeX = 255;
              SpokeY = 650;

            }else if (me===4){
              ZamX = 175;
              ZamY = 650;

            }else if (me===5){
              ClownX = 255;
              ClownY = 650;

            }else if (me===6){
              ParrotX = 255;
              ParrotY = 653;

            }else if (me===7){
              WoogieX = 285;
              WoogieY = 650;

            }else if (me===8){
              SubzX = 200;
              SubzY = 650;

            }else if (me===9){
              CubeX = 225;
              CubeY = 670;

            }else if (me===10){
              JaromX = 240;
              JaromY = 650;

            }else if (me===11){
              SpepticleX = 380;
              SpepticleY = 673;

            }else if (me===12){
              TerrainX = 280;
              TerrainY = 660;

            }else if (me===13){
              PlanetX = 277;
              PlanetY = 650;

            }else if (me===14){
              RoX = 120;
              RoY = 655;

            }else if (me===15){
              LeoX = 363;
              LeoY = 660;

            }else if (me===16){
              AshX = 367;
              AshY = 660;

            }else if (me===17){
              RedX = 410;
              RedY = 660;

            }else if (me===18){
              RekX = 285;
              RekY = 660;

            }else if (me===19){
              VitalasyX = 315;
              VitalasyY = 655;

            }else if (me===20){
              ClutchX = 245;
              ClutchY = 664;

            }else if (me===21){
              PoafaX = 236;
              PoafaY = 660;

            }else if (me===22){
              MapiccX = 281;
              MapiccY = 660;

            }



            image(Bacon, BaconX, BaconY, 120, 150);
            image(Clown, ClownX, ClownY, 190, 150);
            image(Cube, CubeX, CubeY, 90, 130);
            image(Jarom, JaromX, JaromY, 120, 150);
            image(Pangi, PangiX, PangiY, 120, 150);
            image(Parrot, ParrotX, ParrotY, 120, 150);
            image(Planet, PlanetX, PlanetY, 120, 150);
            image(Red, RedX, RedY, 110, 150);
            image(Ro, RoX, RoY, 150, 150);
            image(Leo, LeoX, LeoY, 145, 150);
            image(Spepticle, SpepticleX, SpepticleY, 100, 130);
            image(Spoke, SpokeX, SpokeY, 135, 150);
            image(Subz, SubzX, SubzY, 120, 150);
            image(Terrain, TerrainX, TerrainY, 120, 150);
            image(Woogie, WoogieX, WoogieY, 120, 150);
            image(Zam, ZamX, ZamY, 130, 150);
            image(Ash, AshX, AshY, 115, 150);
            image(Rek,  RekX, RekY, 115, 150);
            image(Vitalasy,  VitalasyX, VitalasyY, 115, 150);
            image(Clutch,  ClutchX, ClutchY, 115, 150);
            image(Poafa,  PoafaX, PoafaY, 115, 150);
            image(Mapicc,  MapiccX, MapiccY, 135, 160); 

          }}




      
      var character = function() {

        scene= 2;

        AshX = 1160;
        AshY = 250;
        BaconX = 1025;
        BaconY = 437;
        ClownX = 255;
        ClownY = 450;
        CubeX = 625 - 45;
        CubeY = 460;
        JaromX = 705 - 50;
        JaromY = 435;
        PangiX = -10;
        PangiY = 470;
        ParrotX = 650;
        ParrotY = 200;
        PlanetX = 875;
        PlanetY = 100;
        RedX = 1110;
        RedY = 460;
        RoX = 830;
        RoY = 440;
        LeoX = 930;
        LeoY = 450;
        SpepticleX = 810 - 55;
        SpepticleY = 460;
        SpokeX = 83;
        SpokeY = 435;
        TerrainX = 680;
        TerrainY = 600;
        WoogieX = 430 - 45;
        WoogieY = 440;
        ZamX = 185;
        ZamY = 440;
        SubzX = 520 - 205;
        SubzY = 225;
        RekX = 1190;
        RekY = 440;
        VitalasyX = 520 - 295;
        VitalasyY = 230;
        ClutchX = 935;
        ClutchY = 333;
        PoafaX = 1290;
        PoafaY = 460;
        MapiccX = 1287;
        MapiccY = 322;



        
        draw = function (){

          if (me != 0){

            if (me===1){
              Name = "Bacon"

            }else if (me===2){
              Name = "Pangi"

            }else if (me===3){
              Name = "Spoke"

            }else if (me===4){
              Name = "Zam"

            }else if (me===5){
              Name = "Clown"

            }else if (me===6){
              Name = "Parrot"

            }else if (me===7){
              Name = "Woogie"

            }else if (me===8){
              Name = "Subz"

            }else if (me===9){
              Name = "Cube"

            }else if (me===10){
              Name = "Jaron"

            }else if (me===11){
              Name = "Spepticle"

            }else if (me===12){
              Name = "Terrain"

            }else if (me===13){
              Name = "Planet"

            }else if (me===14){
              Name = "Ro"

            }else if (me===15){
              Name = "Leowook"

            }else if (me===16){
              Name = "Ashswag"

            }else if (me===17){
              Name = "Reddoons"

            }else if (me===18){
              Name = "Rekrap"

            }else if (me===19){
              Name = "Vitalasy"

            }else if (me===20){
              Name = "Clutch"

            }else if (me===21){
              Name = "Poafa"

            }else if (me===22){
              Name = "Mapicc"

            }

            





 














        game();
          }


          if (scene === 2 && me === 0) {




      background(80, 90, 250);
      image(Background, 0, -1, 1408, 792);


      if (mouseX >= BaconX + 10 && mouseX <= BaconX + 100 &&
        mouseY >= BaconY + 5 && mouseY <= BaconY + 145) {

          fill(242,242,242);
          stroke(0,0,0);
        rect(BaconX + 8, BaconY + 2, 100, 150);


        }if (mouseX >= PangiX + 10 && mouseX <= PangiX + 100 &&
          mouseY >= PangiY + 10 && mouseY <= PangiY + 140) {
  
            fill(242,242,242);
            stroke(0,0,0);
          rect(PangiX + 10, PangiY + 10, 100, 135);
  
  
          }if (mouseX >= SpokeX + 10 && mouseX <= SpokeX + 100 &&
            mouseY >= SpokeY + 5 && mouseY <= SpokeY + 145) {
    
              fill(242,242,242);
              stroke(0,0,0);
            rect(SpokeX + 5, SpokeY -1, 107, 153);
    
    
            }if (mouseX >= ZamX + 10 && mouseX <= ZamX + 100 &&
              mouseY >= ZamY + 5 && mouseY <= ZamY + 145) {
      
                fill(242,242,242);
                stroke(0,0,0);
              rect(ZamX + 14, ZamY + 2, 95, 150);
      
      
              }if (mouseX >= ClownX + 35 && mouseX <= ClownX + 145 &&
                mouseY >= ClownY + 10 && mouseY <= ClownY + 145) {
        
                  fill(242,242,242);
                  stroke(0,0,0);
                rect(ClownX + 40, ClownY + 12, 103, 137);
        
        
                }if (mouseX >= ParrotX + 10 && mouseX <= ParrotX + 100 &&
                  mouseY >= ParrotY + 5 && mouseY <= ParrotY + 145) {
          
                    fill(242,242,242);
                    stroke(0,0,0);
                  rect(ParrotX + 10, ParrotY +1, 97, 145);
          
          
                  }if (mouseX >= WoogieX + 17 && mouseX <= WoogieX + 100 &&
                    mouseY >= WoogieY + 10 && mouseY <= WoogieY + 145) {
            
                      fill(242,242,242);
                      stroke(0,0,0);
                    rect(WoogieX + 10, WoogieY +4, 97, 145);
            
            
                    }if (mouseX >= SubzX + 12 && mouseX <= SubzX +98 &&
                      mouseY >= SubzY + 15 && mouseY <= SubzY + 145) {
              
                        fill(242,242,242);
                        stroke(0,0,0);
                      rect(SubzX + 14, SubzY + 13, 90, 135);
              
              
                      }if (mouseX >= CubeX + 3 && mouseX <= CubeX +87 &&
                        mouseY >= CubeY + 3 && mouseY <= CubeY + 133) {
                
                          fill(242,242,242);
                          stroke(0,0,0);
                        rect(CubeX + 1, CubeY + 2, 87, 132);
                
                
                        }if (mouseX >= JaromX + 15 && mouseX <= JaromX + 97 &&
                          mouseY >= JaromY + 5 && mouseY <= JaromY + 145) {
                  
                            fill(242,242,242);
                            stroke(0,0,0);
                          rect(JaromX + 10, JaromY +2, 97, 148);
                  
                  
                          }if (mouseX >= SpepticleX + 3 && mouseX <= SpepticleX +87 &&
                            mouseY >= SpepticleY + 5 && mouseY <= SpepticleY + 127) {
                    
                              fill(242,242,242);
                              stroke(0,0,0);
                            rect(SpepticleX + 4, SpepticleY + 5, 88, 123);
                    
                    
                            }if (mouseX >= TerrainX + 17 && mouseX <= TerrainX + 100 &&
                              mouseY >= TerrainY + 10 && mouseY <= TerrainY + 140) {
                      
                                fill(242,242,242);
                                stroke(0,0,0);
                              rect(TerrainX + 7, TerrainY +4, 104, 140);
                      
                      
                              }if (mouseX >= PlanetX + 10 && mouseX <= PlanetX + 100 &&
                                mouseY >= PlanetY + 5 && mouseY <= PlanetY + 145) {
                        
                                  fill(242,242,242);
                                  stroke(0,0,0);
                                rect(PlanetX + 1, PlanetY -1, 119, 153);
                        
                        
                                }if (mouseX >= RoX + 15 && mouseX <= RoX + 125 &&
                                  mouseY >= RoY + 5 && mouseY <= RoY + 137) {
                          
                                    fill(242,242,242);
                                    stroke(0,0,0);
                                  rect(RoX + 15, RoY + 4, 113, 140);
                          
                          
                                  }if (mouseX >= LeoX + 30 && mouseX <= LeoX + 100 &&
                                    mouseY >= LeoY + 17 && mouseY <= LeoY + 145) {
                            
                                      fill(242,242,242);
                                      stroke(0,0,0);
                                    rect(LeoX + 25, LeoY + 2, 85, 150);
                            
                            
                                    }if (mouseX >= AshX + 10 && mouseX <= AshX + 100 &&
                                      mouseY >= AshY + 5 && mouseY <= AshY + 145) {
                              
                                        fill(242,242,242);
                                        stroke(0,0,0);
                                      rect(AshX + 7, AshY + 5, 100, 145);
                              
                              
                                      }if (mouseX >= RedX + 18 && mouseX <= RedX + 100 &&
                                        mouseY >= RedY + 5 && mouseY <= RedY + 145) {
                                
                                          fill(242,242,242);
                                          stroke(0,0,0);
                                        rect(RedX + 10, RedY +1, 97, 145);
                                
                                
                                        }if (mouseX >= RekX + 23 && mouseX <= RekX + 100 &&
                                          mouseY >= RekY + 5 && mouseY <= RekY + 145) {
                                  
                                            fill(242,242,242);
                                            stroke(0,0,0);
                                          rect(RekX + 10, RekY +10, 97, 135);
                                  
                                  
                                          }if (mouseX >= VitalasyX + 18 && mouseX <= VitalasyX + 95 &&
                                            mouseY >= VitalasyY + 5 && mouseY <= VitalasyY + 145) {
                                    
                                              fill(242,242,242);
                                              stroke(0,0,0);
                                            rect(VitalasyX + 10, VitalasyY +10, 93, 135);
                                    
                                    
                                            }if (mouseX >= ClutchX + 23 && mouseX <= ClutchX + 100 &&
                                              mouseY >= ClutchY + 5 && mouseY <= ClutchY + 125) {
                                      
                                                fill(242,242,242);
                                                stroke(0,0,0);
                                              rect(ClutchX + 17, ClutchY + 15, 85, 113);
                                      
                                      
                                              }if (mouseX >= PoafaX + 15 && mouseX <= PoafaX + 100 &&
                                                mouseY >= PoafaY + 8 && mouseY <= PoafaY + 145) {
                                        
                                                  fill(242,242,242);
                                                  stroke(0,0,0);
                                                rect(PoafaX + 6, PoafaY +10, 105, 140);
                                        
                                        
                                                }if (mouseX >= MapiccX + 15 && mouseX <= MapiccX + 100 &&
                                                  mouseY >= MapiccY + 5 && mouseY <= MapiccY + 145) {
                                          
                                                    fill(242,242,242);
                                                    stroke(0,0,0);
                                                  rect(MapiccX + 6, MapiccY +10, 105, 140);
                                          
                                          
                                                  }





                                  







                                        mouseClicked = function() {

                                        if (mouseX >= BaconX + 10 && mouseX <= BaconX + 100 &&
                                          mouseY >= BaconY + 5 && mouseY <= BaconY + 145) {

                                            me = 1;
                                            
                                          }if (mouseX >= PangiX + 10 && mouseX <= PangiX + 100 &&
                                            mouseY >= PangiY + 10 && mouseY <= PangiY + 140) {
                                               me = 2;
                                              
                                            }if (mouseX >= SpokeX + 10 && mouseX <= SpokeX + 100 &&
                                              mouseY >= SpokeY + 5 && mouseY <= SpokeY + 145) {
                                                me = 3;
                                                
                                      
                                              }if (mouseX >= ZamX + 10 && mouseX <= ZamX + 100 &&
                                                mouseY >= ZamY + 5 && mouseY <= ZamY + 145) {
                                                  me = 4;
                                                  
                                        
                                                }if (mouseX >= ClownX + 35 && mouseX <= ClownX + 145 &&
                                                  mouseY >= ClownY + 10 && mouseY <= ClownY + 145) {
                                                    me = 5;
                                                   
                                          
                                                  }if (mouseX >= ParrotX + 10 && mouseX <= ParrotX + 100 &&
                                                    mouseY >= ParrotY + 5 && mouseY <= ParrotY + 145) {
                                                      me = 6;
                                                     
                                            
                                                    }if (mouseX >= WoogieX + 17 && mouseX <= WoogieX + 100 &&
                                                      mouseY >= WoogieY + 10 && mouseY <= WoogieY + 145) {
                                                        me = 7;
                                                        
                                              
                                                      }if (mouseX >= SubzX + 12 && mouseX <= SubzX +98 &&
                                                        mouseY >= SubzY + 15 && mouseY <= SubzY + 145) {
                                                          me = 8;
                                                         
                                                        }if (mouseX >= CubeX + 3 && mouseX <= CubeX +87 &&
                                                          mouseY >= CubeY + 3 && mouseY <= CubeY + 133) {
                                                            me = 9;
                                                           
                                                  
                                                          }if (mouseX >= JaromX + 15 && mouseX <= JaromX + 97 &&
                                                            mouseY >= JaromY + 5 && mouseY <= JaromY + 145) {
                                                              me = 10;
                                                              
                                                    
                                                            }if (mouseX >= SpepticleX + 3 && mouseX <= SpepticleX +87 &&
                                                              mouseY >= SpepticleY + 5 && mouseY <= SpepticleY + 127) {
                                                                me = 11;
                                                               
                                                      
                                                              }if (mouseX >= TerrainX + 17 && mouseX <= TerrainX + 100 &&
                                                                mouseY >= TerrainY + 10 && mouseY <= TerrainY + 140) {
                                                                  me = 12;
                                                                
                                                        
                                                                }if (mouseX >= PlanetX + 10 && mouseX <= PlanetX + 100 &&
                                                                  mouseY >= PlanetY + 5 && mouseY <= PlanetY + 145) {
                                                                    me = 13;
                                                                   
                                                          
                                                          
                                                                  }if (mouseX >= RoX + 15 && mouseX <= RoX + 125 &&
                                                                    mouseY >= RoY + 5 && mouseY <= RoY + 137) {
                                                                      me = 14;
                                                                    
                                                            
                                                            
                                                                    }if (mouseX >= LeoX + 30 && mouseX <= LeoX + 100 &&
                                                                      mouseY >= LeoY + 5 && mouseY <= LeoY + 145) {
                                                                        me = 15;
                                                                       
                                                              
                                                              
                                                                      }if (mouseX >= AshX + 10 && mouseX <= AshX + 100 &&
                                                                        mouseY >= AshY + 5 && mouseY <= AshY + 145) {
                                                                          me = 16;
                                                                       
                                                                
                                                                
                                                                        }if (mouseX >= RedX + 18 && mouseX <= RedX + 100 &&
                                                                          mouseY >= RedY + 5 && mouseY <= RedY + 145) {
                                                                            me = 17;
                                                                            
                                                                  
                                                                  
                                                                          }if (mouseX >= RekX + 23 && mouseX <= RekX + 100 &&
                                                                            mouseY >= RekY + 5 && mouseY <= RekY + 145) {
                                                                              me = 18;
                                                                              
                                                                    
                                                                    
                                                                            }if (mouseX >= VitalasyX + 18 && mouseX <= VitalasyX + 95 &&
                                                                              mouseY >= VitalasyY + 5 && mouseY <= VitalasyY + 145) {
                                                                      
                                                                                me = 19
                                                                      
                                                                      
                                                                              }if (mouseX >= ClutchX + 23 && mouseX <= ClutchX + 100 &&
                                                                                mouseY >= ClutchY + 5 && mouseY <= ClutchY + 125) {
                                                                        
                                                                                  me =20;
                                                                        
                                                                        
                                                                                }if (mouseX >= PoafaX + 15 && mouseX <= PoafaX + 100 &&
                                                                                  mouseY >= PoafaY + 8 && mouseY <= PoafaY + 145) {
                                                                          
                                                                                 me =21;
                                                                          
                                                                          
                                                                                  }if (mouseX >= MapiccX + 15 && mouseX <= MapiccX + 100 &&
                                                                                    mouseY >= MapiccY + 5 && mouseY <= MapiccY + 145) {
                                                                            
                                                                                      me =22;
                                                                            
                                                                                    }
                                                                        
                                                                        
                                                                        
                                                                        }
















      
      image(Bacon, BaconX, BaconY, 120, 150);
      image(Clown, ClownX, ClownY, 190, 150);
      image(Cube, CubeX, CubeY, 90, 130);
      image(Jarom, JaromX, JaromY, 120, 150);
      image(Pangi, PangiX, PangiY, 120, 150);
      image(Parrot, ParrotX, ParrotY, 120, 150);
      image(Planet, PlanetX, PlanetY, 120, 150);
      image(Red, RedX, RedY, 110, 150);
      image(Ro, RoX, RoY, 150, 150);
      image(Leo, LeoX, LeoY, 145, 150);
      image(Spepticle, SpepticleX, SpepticleY, 100, 130);
      image(Spoke, SpokeX, SpokeY, 135, 150);
      image(Subz, SubzX, SubzY, 120, 150);
      image(Terrain, TerrainX, TerrainY, 120, 150);
      image(Woogie, WoogieX, WoogieY, 120, 150);
      image(Zam, ZamX, ZamY, 130, 150);
      image(Ash, AshX, AshY, 115, 150);
      image(Rek, RekX, RekY, 115, 150);
      image(Vitalasy,  VitalasyX, VitalasyY, 115, 150);
      image(Clutch,  ClutchX, ClutchY, 115, 150);
      image(Poafa,  PoafaX, PoafaY, 115, 150);
      image(Mapicc,  MapiccX, MapiccY, 135, 160);                                                                  }
        
        





      }}
      var menu = function() {
       
        draw= function () {
          background(33, 33, 33);
          if (scene === 1){
          move = move - 0.5;}
          if (move <= -30){
            move = 0;

          }


          for (var i = 0; i < 50; i+=1) {
            var x = i * 30;
            stroke(80, 8, 8);
            strokeWeight(8);
            line(x + move, 800, x + move, 0);
        }
        if (Timey >= 50) {
       
      background(33, 33, 33);
      for (var i = 0; i < 50; i+=1) {
        var x = i * 30;
        stroke(80, 8, 8);
        strokeWeight(8);
        line(x + move, 800, x + move, 0);
    }
      image(Heart, IntroAnimationX1, 450, 400, 400);
      image(Heart, IntroAnimationX2, 450, 400, 400);
      textSize(100);
      text("PLAY", IntroAnimationX2 + 75, buttony1);

      
      



       
     
      
        if (whooshy === 1){
          let whoosh = new Audio("RakeSwingWhooshClose.mp3");
          
          whoosh.play()
          whooshy =0;
         
        } 
        if (whooshy2 === 1){
          let whoosh2 = new Audio("WhooshEffect.mp3");
          whoosh2.play()
          whooshy2 = 0;
         
        } 
        if (musicmix === 1){
          let music = new Audio("GameMusic.mp3");
          music.volume = volume;
          music.play()
          musicmix = 0;
         
        } 
        
       
        if (IntroAnimationY === 750) {
          Time= 0;
          
        

      }
        if (IntroAnimationY > -100) {
            IntroAnimationY = IntroAnimationY - 50;
            image(LifestealLogo, 100, IntroAnimationY, 1200, 650);
            
            
          

        }else if(IntroAnimationY <= -100 && IntroAnimationX1 >= 1025) {
          IntroAnimationX1 = IntroAnimationX1 - 30;
          IntroAnimationX2 = IntroAnimationX2 + 30;
          
          image(LifestealLogo, 100, IntroAnimationY, 1200, 650);}
          else{
            image(LifestealLogo, 100, IntroAnimationY, 1200, 650);
            
            mouseClicked = function() {
              if (mouseX >= IntroAnimationX1 + 50 && mouseX <= IntroAnimationX1 + 340 &&
                  mouseY >= buttony1 + 15 && mouseY <= buttony1 + 300 && scene === 1) {
    
                  tbd();  
              }else if (mouseX >= IntroAnimationX2 + 50 && mouseX <= IntroAnimationX2 + 340 &&
                mouseY >= buttony1 + 15 && mouseY <= buttony1 + 300 && scene === 1) {
  
                character();  
            }
    
            
            };
            
          }
        
          
            
        
        
        
        
        if (Time === 1){
          whooshy=1;
  
         } else if (Time === 2){
          whooshy2=1;
  
         } 
        }
        
        Timey = Timey + 1;
        Time = Time + 1;

      };


     
    }

        

        
       
        menu();
        
       


      
    


    





