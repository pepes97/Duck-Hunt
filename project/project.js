var camera, scene, renderer, canvas, frustum;
var directionalLight, directionalLight2, directionalLight3;
var sky, skyMaterial, skyGeo;

var trees,model1,model2,model3,model4;
var clouds;
var bushes, bush1, bush2, bush3, bush4, bush5, bush6, bush7, bush8, bush9;
var gun, rifle, world,duck;

var dog, body, upperBackLegLeft, upperBackLegRight, upperFrontLegRight, upperFrontLegLeft, lowerBackLegLeft, lowerBackLegRight, lowerFrontLegLeft, lowerFrontLegRight, tail;
var leftBackLeg, rightBackLeg, leftFrontLeg, rightFrontLeg;
var dogInterval, dogInterval2;

var play_game;
var pause = 0;

var audioon = 0;

var textGeo, textMesh, txt, txtError, textError, text, txtLevelUp, textLevelUp, textPause, txtPause;
var loaderFT;

var all_birds;
var mouse, plane, raycaster, pointOfIntersection;
var raycaster2, pointOfIntersection2;

var texture, material;
var bullets =[];
var count=0, countDog = 0;

var difficulty, pointsToReach, level, temp;

// Initial speed of the game. When changing it, remember to change even the one in the restart button event
var speed;

// Set to one to start the game, to zero to pause it
var startGame, resetGame;

// counter of ducks hit by player
var points = 0;

// max number errors before game over
var errors = 5;

// Clouds
var numClouds = 5;
var showedClouds;
var clouds2;
var leftRightDividerClouds = 2;

// Ducks currently shown
var numDucks = 15;
let showedDucks;
let availableDucks;
var leftRightDivider = 9; // Ducks 0-2 goes to the left, >=3 goes to the right
var leftRemaining, rightRemaining;
var countElem, x_keyFramesDucks, y_keyFramesDucks, hit, flying, wingLeft, wingRight, leg, birds, versoLeft, versoRight, incrementWingLeft, incrementWingRight;

var dog_trans_x = [-0.6,-0.55,-0.5,-0.45,-0.4,-0.35,-0.3,-0.25,-0.2,-0.15,-0.15];
var dog_trans_z = [1.5,1.4,1.3,1.2,1.1,1.,0.9,0.8,0.7, 0.6, 0.6];
 
var dog_upper_back_right_rot_walk = [-0.05, 0.0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.2, 0.15, 0.1, 0.05, 0.0, -0.05];
var dog_upper_back_right_trans_walk_y = [0.0, 0.003, 0.006, 0.01, 0.013, 0.016, 0.019, 0.016, 0.013, 0.01, 0.006, 0.003, 0.0];
var dog_upper_front_right_rot_walk = [-0.05, 0.0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.2, 0.15, 0.1, 0.05, 0.0, -0.05];
var dog_upper_front_right_trans_walk_y = [0.0, -0.003, -0.006, -0.009, -0.012, -0.015, -0.018, -0.015, -0.012, -0.009, -0.006, -0.003, 0.0];

var dog_upper_back_left_rot_walk = [0.25, 0.2, 0.15, 0.1, 0.05, 0.0, -0.05, 0.0, 0.05, 0.1, 0.15, 0.2, 0.25];
var dog_upper_back_left_trans_walk_y = [0.019, 0.016, 0.013, 0.01, 0.006, 0.003, 0.0, 0.003, 0.006, 0.01, 0.013, 0.016, 0.019];
var dog_upper_front_left_rot_walk = [0.25, 0.2, 0.15, 0.1, 0.05, 0.0, -0.05, 0.0, 0.05, 0.1, 0.15, 0.2, 0.25];
var dog_upper_front_left_trans_walk_y = [-0.018, -0.015, -0.012, -0.009, -0.006, -0.003, 0.0, -0.003, -0.006, -0.009, -0.012, -0.015, -0.018];

var dog_trans_x_2 = [-0.15,-0.12,-0.09,-0.06,-0.03,0,0.03,0.06,0.09,0.12,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55,0.6,0.65,0.7,0.75,0.8,0.85,0.9,0.95,1.,1.05,1.1,1.15,1.2,1.25,1.3,1.35,1.4,1.45,1.5,1.55,1.6,1.65,1.7,1.75,1.8,1.85,1.9,1.95,2.,2.05,2.1,2.15,2.2,2.25,2.3,2.35,2.4,2.45];
var dog_trans_z_2 = [0.6,0.58,0.56,0.54,0.52,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5];
var dog_rot = [1.0,0.9,0.8,0.7,0.6,0.5,0.4,0.3,0.2,0.1,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0, 0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0];

var dog_lower_back_right_rot_walk = [0.05, 0.005, -0.04, -0.085, -0.13, -0.175, -0.22, -0.175, -0.13, -0.085, -0.04, 0.005,0.05];
var dog_lower_front_right_rot_walk =  [0.05, 0.005, -0.04, -0.085, -0.13, -0.175, -0.22, -0.175, -0.13, -0.085, -0.04, 0.005,0.05];

var dog_lower_back_left_rot_walk = [-0.22, -0.175, -0.13, -0.085, -0.04, 0.005, 0.05, 0.005, -0.04, -0.085, -0.13, -0.175, -0.22];
var dog_lower_front_left_rot_walk = [-0.22, -0.175, -0.13, -0.085, -0.04, 0.005, 0.05, 0.005, -0.04, -0.085, -0.13, -0.175, -0.22];

var dog_rot_tail = [0.4, 0.3, 0.2, 0.1, 0.0, - 0.1, -0.2, -0.3, -0.4, -0.4, -0.3, -0.2, -0.1, 0.0, 0.1, 0.2, 0.3, 0.4];

/*********** MUSIC ************/
var music = [];
music[0] = new Audio('music/title.mp3');
music[1] = new Audio('music/level.mp4');
music[2] = new Audio('music/gameover.mp4');
music[3] = new Audio('music/pause.mp4');
music[4] = new Audio('music/sparo.mp3');

/******************* MANAGER **********************/
var firstStart = 1
var manager = new THREE.LoadingManager();
manager.onStart = function (url, itemsLoaded, itemsTotal) {
    if(firstStart) document.getElementById("loaded").textContent = "Loading " + itemsLoaded.toString() + "/" + itemsTotal.toString();
};

manager.onLoad = function () {
    if (firstStart) {
        firstStart = 0;
        document.getElementById("loadingScreen").style.display = 'none';
        document.getElementById("centerBox").style.visibility = 'visible';
    }
    
};

manager.onProgress = function (url, itemsLoaded, itemsTotal) {
    if (firstStart) document.getElementById("loaded").textContent = "Loading " + itemsLoaded.toString() + "/" + itemsTotal.toString();
};

manager.onError = function (url) {
    if (firstStart) document.getElementById("loaded").textContent = "Error loading the following media " + url.toString();
};

/*********************** RESIZE CAMERA *******************/

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );

}

/**************** INTERPOLATION FOR ANIMATION **************/

function interpolation(keyframe_list, tick, interv){
    var i = Math.floor(tick/interv)%(keyframe_list.length-1);
    return (1 - (tick%interv)/interv)*keyframe_list[i] + ((tick%interv)/interv)*keyframe_list[i+1]
}


/****************** Set and clear variables  *****************/
function setReset(set) {
    pause = 0;
    //audioon = 0
    count = 0;
    countDog = 0;
    countDog2 = 0;
    countDog3 = 0;
    countDog4=0;
    difficulty = 1;
    pointsToReach = 10;
    temp = 10;
    level = 1;
    startGame = 0;
    resetGame = 0;
    points = 0;
    errors = 5;
    speed = 30;
    showedDucks = [];
    availableDucks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    countElem = [];
    x_keyFramesDucks = [];
    y_keyFramesDucks = [];
    leftRemaining = leftRightDivider;
    rightRemaining = numDucks - leftRightDivider;
    if(set){
        hit = Array(numDucks).fill(false);
        flying = Array(numDucks).fill(null);
        wingLeft = Array(numDucks).fill(null);
        wingRight = Array(numDucks).fill(null);
        leg = Array(numDucks).fill(null);
        birds = Array(numDucks).fill(null);
    }
    versoLeft = Array(numDucks).fill(1);
    versoRight = Array(numDucks).fill(0);
    incrementWingLeft = Array(numDucks).fill(0);
    incrementWingRight = Array(numDucks).fill(0);

    clouds2 = Array(numClouds).fill(null);
    showedClouds = [0,1,2,3,4];
}

/************************** MOVE GUN *******************************/

function mouseMove(event){
        if (gun){
            mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            raycaster.ray.intersectPlane(plane, pointOfIntersection);
            rifle.position.set(
                camera.position.x + 0.35,
                camera.position.y - 0.65,
                camera.position.z
            );
            rifle.lookAt(pointOfIntersection);
        }
}

/**************************** SHOT  *********************************/

function mouseClick(event) {

    if(audioon) music[4].play();

    if (gun) {

        var bullet = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 8), new THREE.MeshBasicMaterial({ color: 0xffffff }));
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        raycaster.ray.intersectPlane(plane, pointOfIntersection);
        bullet.position.set(pointOfIntersection.x, pointOfIntersection.y, pointOfIntersection.z);
        bullet.velocity = new THREE.Vector3(
            -Math.sin(camera.rotation.y),
            0,
            Math.cos(camera.rotation.y)
        );
        setTimeout(function () {
            bullet.alive = false;
            scene.remove(bullet);
        }, 100);

        raycaster2 = new THREE.Raycaster();
        raycaster2.setFromCamera(mouse, camera);
        var intersects = raycaster2.intersectObjects(all_birds.children, true);

        if (intersects.length > 0 && startGame) {
            for (var i = 0; i < intersects.length; i++) {
                for (var j = showedDucks.length - 1; j >= 0; j--) {
                    if (intersects[i].object.parent.parent.parent.parent.parent == birds[showedDucks[j]]) {
                        if (!hit[showedDucks[j]]) {
                            points += 1;
                            
                            hit[showedDucks[j]] = true;

                            /*** HANDLE DIFFICULTY BASED ON CURRENT POINTS ***/
                            if (points == pointsToReach) {
                                temp++;
                                pointsToReach += temp;
                                if (difficulty < 15) difficulty++;
                                if(speed > 10) speed -= 5;
                                scene.remove(txtLevelUp);
                                level++;
                                levelUpText();

                            }
                        }
                    }
                }
            }
            scene.remove(txt);
            createText(points);
        }
        bullets.push(bullet);
        scene.add(bullet);
    }
}

/********************* SCORE TEXT ***************************************/

function createText(score){
    text = "Score: ".concat(score.toString());

    //loaderFL.load('../three.js-master/examples/fonts/optimer_bold.typeface.json', function(font) {
    loaderFL.load('./models3D/font/BubbleGum_Regular.json', function(font) {


        var geometry = new THREE.TextGeometry(text, {
            font: font,
            size: 0.07,
            height: 0.0035
        });
        geometry.center();

        //var material = new THREE.MeshBasicMaterial({
        //    color: 0xff9933
        //});

        var material = new THREE.MeshPhongMaterial({
            color: 0xff9933,
            specular: 0x0,
        })

        txt = new THREE.Mesh(geometry, material);
        txt.position.x = 1.25;
        txt.position.y = -0.5;

        scene.add(txt);
    });
}

/******************************* ERROR TEXT  *********************/
function createError(error){
    textError = "Errors: ".concat(error.toString());

    loaderFL.load('./models3D/font/BubbleGum_Regular.json', function(font) {


        var geometryError = new THREE.TextGeometry(textError, {
            font: font,
            size: 0.07,
            height: 0.0035
        });

        geometryError.center();

        var materialError = new THREE.MeshPhongMaterial({
            color: 0x660000,
            specular: 0x0,
        })

        txtError = new THREE.Mesh(geometryError, materialError);
        txtError.position.x = 1.25;
        txtError.position.y = -0.62;

        scene.add(txtError);
    });
}

/********************* LEVEL UP TEXT ***************************************/

function levelUpText(){

    document.getElementById("ButtonPause").style.visibility = "hidden";
    textLevelUp = "Level "+level;           

    if(errors == 0) textLevelUp = "Game Over";

    if (errors != 0 && audioon) music[1].play();
    else if(audioon && errors ==0) {
        music[2].play();
        setTimeout(function() {music[0].play(); music[0].loop = true;}, 7000);
    }

    loaderFL.load('./models3D/font/BubbleGum_Regular.json', function(font) {

        var geometry = new THREE.TextGeometry(textLevelUp, {
            font: font,
            size: 0.32,
            height: 0.04,
        });
        geometry.center();

        var col;
        if(textLevelUp == "Game Over") col = 0xbf0606;
        else col = 0xff9933;
        
        var material = new THREE.MeshPhongMaterial({
            color: col,
            specular: 0x0,
        })

        txtLevelUp = new THREE.Mesh(geometry, material);
        txtLevelUp.position.x = 0.0;
        txtLevelUp.position.y = 0.0;
        txtLevelUp.position.z = 0.1;

        scene.add(txtLevelUp);
        txtLevelUp.visible = true;
        startGame = 0;
        setTimeout(function() {  txtLevelUp.visible = false;}, 6000);
        if(!resetGame)setTimeout(function() {if (pause == 0 && errors != 0) {startGame = 1; document.getElementById("ButtonPause").style.visibility = "visible";}}, 7000);
        dogInterval = setInterval(function(){
            animationDog();
        }, 30);

        clearInterval(dogInterval2);

        dogInterval2 = setInterval(function(){
            animationDog2();
        }, 30);

        if(textLevelUp == "Game Over"){
            setInterval(function(){
                animationDog3();
            }, 30);
        }
    });
}

/********PAUSE*******/
function Pause(){
    textPause = "PAUSE";
    loaderFL.load('./models3D/font/BubbleGum_Regular.json', function(font) {

        var geometry = new THREE.TextGeometry(textPause, {
            font: font,
            size: 0.32,
            height: 0.05,
        });
        geometry.center();
        var material = new THREE.MeshPhongMaterial({
                color: 0xfff400,
                specular: 0x0,
        });
        

        txtPause = new THREE.Mesh(geometry, material);
        txtPause.position.x = 0.0;
        txtPause.position.y = 0.0;
        txtPause.position.z = 0.1;

        scene.add(txtPause);
        txtPause.visible = true;
        document.getElementById("ButtonPause").style.background = "url('img/pause.png') no-repeat";
        document.getElementById("ButtonPause").style.backgroundSize = "cover";
        startGame = 0;
    });
}



/******************** SPAWN DUCK RANDOMLY **********************/
function chooseStartingPoint() {
    var rndV = -1 + Math.random() *2;
    var startP = new THREE.Vector3(rndV, -0.2, 0.0);
    return startP;
}

function chooseDirection(pos) {
    var xComp; 
    var leftDir = false;
    if((Math.random() < 0.5 && leftRemaining > 0) || rightRemaining == 0) {
        xComp = Math.random(pos.x - 0.6, pos.x - 0.2);
        leftDir = true;
    } else xComp = Math.random(pos.x + 0.2, pos.x + 0.6);
    var p2 = new THREE.Vector3(xComp, -0.17, 0.0);
    return [p2, leftDir];
}

function generateKeyFrames(pos, dir, leftDir){
    var increment = 0.06;
    var x_keyTemp = [], y_keyTemp = [];
    x_keyTemp.push(pos.x);
    y_keyTemp.push(pos.y);
    var dirX = 0.0;
    var dirY = 0.0;
    for (var i = 0; i < 150; i++) {  
        if(leftDir) dirX -= increment*dir.x;
        else dirX += increment*dir.x;
        dirY -= increment*dir.y;
        x_keyTemp.push(pos.x + dirX);
        y_keyTemp.push(pos.y + dirY);
    }
   
    x_keyFramesDucks.unshift(x_keyTemp);
    y_keyFramesDucks.unshift(y_keyTemp);

}

function removeBird(currDuck){
    birds[currDuck].visible = false;
    if (currDuck < leftRightDivider) {
        availableDucks.unshift(currDuck);
        leftRemaining++;
        console.log(availableDucks);
    } else {
        availableDucks.push(currDuck);
        rightRemaining++;
        console.log(availableDucks);
    }
}

/********************** CLOUDS MOVING **************************/
function animationClouds(){
    if(startGame) {
        for(var i=showedClouds.length-1; i >= 0; i--){
            var currCloud = showedClouds[i];
            if (clouds2[currCloud].position.x < 3 && currCloud < leftRightDividerClouds) {
                clouds2[currCloud].position.x += 0.002;
            } else if (clouds2[currCloud].position.x >= 2.5 && currCloud < leftRightDividerClouds){
                clouds2[currCloud].position.x = -2.5;
            } else if(clouds2[currCloud].position.x > -4.5 && currCloud >= leftRightDividerClouds) {
                clouds2[currCloud].position.x -= 0.002;
            } else {
                clouds2[currCloud].position.x = 4.5;
            }
        }
    }
}

/********************* ANIMATION DOG ***************************/
var countDog2 = 0;

function animationDog(){
    countDog++;
    countDog2++;
    if(countDog > (dog_trans_x.length-2)*20) clearInterval(dogInterval);

    rightBackLeg.rotation.z = interpolation(dog_upper_back_right_rot_walk, countDog, 3);        
    rightBackLeg.position.y = interpolation(dog_upper_back_right_trans_walk_y, countDog, 3);
    rightFrontLeg.rotation.z = interpolation(dog_upper_front_right_rot_walk, countDog, 3);
    rightFrontLeg.position.y = interpolation(dog_upper_front_right_trans_walk_y, countDog, 3);
    leftBackLeg.rotation.z = interpolation(dog_upper_back_left_rot_walk, countDog, 3);
    leftBackLeg.position.y = interpolation(dog_upper_back_left_trans_walk_y, countDog, 3);
    leftFrontLeg.rotation.z = interpolation(dog_upper_front_left_rot_walk, countDog, 3);
    leftFrontLeg.position.y = interpolation(dog_upper_front_left_trans_walk_y, countDog, 3);
    dog.position.x = interpolation(dog_trans_x, countDog2, 20);
    dog.position.z = interpolation(dog_trans_z, countDog2, 20);

}

var countDog3 = 0;
function animationDog2(){
    countDog3++;
    tail.rotation.z = interpolation(dog_rot_tail, countDog3, 3);
}

var countDog4=0;
function animationDog3(){
    countDog4++;
    rightBackLeg.rotation.z = interpolation(dog_upper_back_right_rot_walk, countDog4, 3);
    rightBackLeg.position.y = interpolation(dog_upper_back_right_trans_walk_y, countDog4, 3);
    rightFrontLeg.rotation.z = interpolation(dog_upper_front_right_rot_walk, countDog4, 3);
    rightFrontLeg.position.y = interpolation(dog_upper_front_right_trans_walk_y, countDog4, 3);
    leftBackLeg.rotation.z = interpolation(dog_upper_back_left_rot_walk, countDog4, 3);
    leftBackLeg.position.y = interpolation(dog_upper_back_left_trans_walk_y, countDog4, 3);
    leftFrontLeg.rotation.z = interpolation(dog_upper_front_left_rot_walk, countDog4, 3);
    leftFrontLeg.position.y = interpolation(dog_upper_front_left_trans_walk_y, countDog4, 3);
    lowerBackLegRight.rotation.y = interpolation(dog_lower_back_right_rot_walk, countDog4, 3);
    lowerFrontLegRight.rotation.y = interpolation(dog_lower_front_right_rot_walk, countDog4, 3);
    lowerBackLegLeft.rotation.y = interpolation(dog_lower_back_left_rot_walk, countDog4, 3);
    lowerFrontLegLeft.rotation.y = interpolation(dog_lower_front_left_rot_walk, countDog4, 3);
    dog.rotation.y = interpolation(dog_rot, countDog4, 10);
    dog.position.x = interpolation(dog_trans_x_2, countDog4, 10);
    dog.position.z = interpolation(dog_trans_z_2, countDog4, 10);
}
    

/*********************** BIRDS FLYING **************************/
function animationBirds(){
    count+=1;

    var m = 5;

    if (startGame) {

        // Generate new ducks if those showed are lower than the expected value
        if (showedDucks.length < difficulty && availableDucks.length != 0 && errors != 0) {
            for (var i = difficulty - showedDucks.length; i > 0; i--) {
                console.log("*******************\nSto aggiungendo un'anatra\n******************");
                var currPos = chooseStartingPoint();
                var [currDir, leftDir] = chooseDirection(currPos);

                console.log("> L'anatra deve andare a sinistra? " + leftDir.toString() + " e deve essere selezionata fra quelle disponibili " + availableDucks.toString())

                if (leftDir) {
                    var duckToTake = availableDucks.splice(Math.floor(Math.random() * leftRemaining), 1);
                    leftRemaining--;
                    wingLeft[duckToTake[0]].rotation.x = 0.2;
                    wingRight[duckToTake[0]].rotation.x = 2.94157792;
                } else {
                    var duckToTake = availableDucks.splice(Math.floor(leftRemaining + Math.random() * rightRemaining), 1);
                    rightRemaining--;
                    wingLeft[duckToTake[0]].rotation.x = 2.94157792;
                    wingRight[duckToTake[0]].rotation.x = 0.2;
                }
                incrementWingLeft[duckToTake[0]] = 0;
                incrementWingRight[duckToTake[0]] = 0;
                versoLeft[duckToTake[0]] = 1;
                versoRight[duckToTake[0]] = 0;

                generateKeyFrames(currPos, currDir, leftDir);
                birds[duckToTake[0]].position.x = x_keyFramesDucks[0][0];
                birds[duckToTake[0]].position.y = y_keyFramesDucks[0][0];

                countElem.unshift(0);
                showedDucks.unshift(duckToTake[0]);

                console.log("> L'anatra selezionata è la " + duckToTake[0] + ", le anatre attualmente in uso sono " + showedDucks.toString() + " e le anatre disponibili sono " + availableDucks.toString());
            
            }
        }

        // ITERATE OVER THE DUCKS TO SHOW
        for (var i = showedDucks.length - 1; i >= 0 && errors != 0; i--) {
            var currDuck = showedDucks.pop();
            var x_keyFrame = x_keyFramesDucks.pop();
            var y_keyFrame = y_keyFramesDucks.pop();
            count = countElem.pop();

            console.log("*************\n Sto iterando sull'anatra " + currDuck.toString());

            var posToCheck = currDuck < leftRightDivider ? new THREE.Vector3(birds[currDuck].position.x + 0.05, birds[currDuck].position.y - 0.06, birds[currDuck].position.z) :
                                                            new THREE.Vector3(birds[currDuck].position.x - 0.05, birds[currDuck].position.y - 0.06, birds[currDuck].position.z);
            
            if (frustum.containsPoint(posToCheck)) {
                
                if (!hit[currDuck]) {
                    birds[currDuck].visible = true;

                    if (currDuck < leftRightDivider) {

                        if(versoLeft[currDuck] == 0){
                            wingLeft[currDuck].rotation.x += 0.1;
                            incrementWingLeft[currDuck] += 0.1
                            if(incrementWingLeft[currDuck] > 0.8) versoLeft[currDuck] = 1;
                        }else if(versoLeft[currDuck] == 1) {
                            wingLeft[currDuck].rotation.x -= 0.1;
                            incrementWingLeft[currDuck] -= 0.1
                            if(incrementWingLeft[currDuck] < -0.8) versoLeft[currDuck] = 0;
                        }

                        if(versoRight[currDuck] == 0){
                            wingRight[currDuck].rotation.x += 0.1;
                            incrementWingRight[currDuck] += 0.1
                            if(incrementWingRight[currDuck] > 0.8) versoRight[currDuck] = 1;
                        }else if(versoRight[currDuck] == 1) {
                            wingRight[currDuck].rotation.x -= 0.1;
                            incrementWingRight[currDuck] -= 0.1
                            if(incrementWingRight[currDuck] < -0.8) versoRight[currDuck] = 0;
                        }

                    } else {

                        if(versoLeft[currDuck] == 0){
                            wingLeft[currDuck].rotation.x += 0.1;
                            incrementWingLeft[currDuck] += 0.1
                            if(incrementWingLeft[currDuck] > 0.8) versoLeft[currDuck] = 1;
                        }else if(versoLeft[currDuck] == 1) {
                            wingLeft[currDuck].rotation.x -= 0.1;
                            incrementWingLeft[currDuck] -= 0.1
                            if(incrementWingLeft[currDuck] < -0.8) versoLeft[currDuck] = 0;
                        }

                        if(versoRight[currDuck] == 0){
                            wingRight[currDuck].rotation.x += 0.1;
                            incrementWingRight[currDuck] += 0.1
                            if(incrementWingRight[currDuck] > 0.8) versoRight[currDuck] = 1;
                        }else if(versoRight[currDuck] == 1) {
                            wingRight[currDuck].rotation.x -= 0.1;
                            incrementWingRight[currDuck] -= 0.1
                            if(incrementWingRight[currDuck] < -0.8) versoRight[currDuck] = 0;
                        }
                    }

                    birds[currDuck].position.x = interpolation(x_keyFrame, count, m);
                    birds[currDuck].position.y = interpolation(y_keyFrame, count, m);

                    showedDucks.unshift(currDuck);
                    countElem.unshift(++count);
                    x_keyFramesDucks.unshift(x_keyFrame);
                    y_keyFramesDucks.unshift(y_keyFrame);

                }
                else {
                    console.log("> Anatra uccisa");
                    fall_bird(birds[currDuck], x_keyFrame, y_keyFrame, currDuck);
                }

            } else {
                console.log(currDuck.toString());
                console.log("> Entrato in zona rimozione");
                removeBird(currDuck);

                errors -= 1;
                scene.remove(txtError);
                createError(errors);

                console.log("Rimossa anatra: " + currDuck.toString());
                
                if (errors == 0) { 
                    startGame = 0; 
                    resetGame = 1;
                    
                    console.log("> Devo anche rimuovere le altre anatre, gioco finito. Anatre ancora mostrate " + showedDucks.toString() + ". Lunghezza array " + showedDucks.length.toString());
                    for(let toRemove = showedDucks.length; toRemove > 0; toRemove--){
                        var currDuckRemove = showedDucks.pop();
                        removeBird(currDuckRemove);
                        console.log("Ho rimosso anche l'anatra " + currDuckRemove.toString());
                    }
                    console.log("> RIMOSSO TUTTO");
                    console.log("Le anatre disponibili risultano essere " + availableDucks.length.toString() + ", le anatre mostrate sono " + showedDucks.length.toString());
                    levelUpText();
                    setTimeout(function() {
                        document.getElementById("centerBox2").style.visibility = "visible";
                        document.getElementById("score").innerHTML = "Your Score: " + points;
                    }, 6000);
                }
            }

            console.log("************")
        }

    }

}

/*************************************** FALL DOWN *******************************/

function fall_bird(bird, x_keyFrame, y_keyFrame, currDuck){
    if (bird.position.y > -0.2){
        bird.rotation.x -= 0.08;
        bird.position.y -=0.01;
        showedDucks.unshift(currDuck);
        countElem.unshift(++count);
        x_keyFramesDucks.unshift(x_keyFrame);
        y_keyFramesDucks.unshift(y_keyFrame);
    } else {
        removeBird(currDuck);
        hit[currDuck] = false;
        bird.position.y = 0.0;
        bird.rotation.x = 0.0;
    }
}

window.onload = function init() {

    /********* SCENE  ************/

    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xffffff );

    /********** CAMERA  **************/

    camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,1000);
    camera.position.x = 0.0;
    camera.position.y = 0.0;
    camera.position.z = 2.0;
    camera.lookAt(scene.position);

    /********* DIRECTIONALE LIGHT *********/

    directionalLight =  new THREE.DirectionalLight( 0xffffff, 1.5 );
    directionalLight.position.set( -5, 2, 1 );

    directionalLight2 =  new THREE.DirectionalLight( 0xffffff, 1.5 );
    directionalLight2.position.set( 5, -2, 1 );

    directionalLight3 =  new THREE.DirectionalLight( 0xffffff, 0.4 );
    directionalLight3.position.set( 0, 0, 5 );

    scene.add(directionalLight);
    scene.add(directionalLight2);
    scene.add(directionalLight3);

    /************ RENDER ************/

    renderer = new THREE.WebGLRenderer(antialias = true);
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    canvas = renderer.domElement;
    document.body.appendChild(renderer.domElement);

    /*********** RESIZE WINDOW ***********/

    window.addEventListener( 'resize', onWindowResize, false );

    /************* Frustum ******************/
    camera.updateMatrix(); 
    camera.updateMatrixWorld(); 
    frustum = new THREE.Frustum();
    frustum.setFromProjectionMatrix(new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse));  

    /************* LOAD MODELS 3D ***********/

    var loader = new THREE.GLTFLoader(manager);
    loaderFL = new THREE.FontLoader();

    /********** SET ALL THE REQUIRED ARRAY ********/

    setReset(1);

    /***************** GROUPS **************************/

    world = new THREE.Group();
    world.name="world";
    clouds = new THREE.Group();
    clouds.name = "clouds";
    bushes = new THREE.Group();
    bushes.name = "bushes";
    trees = new THREE.Group();
    trees.name = "trees";
    all_birds = new THREE.Group();
    all_birds.name = "all_birds"
    
    for(let i = 0; i < numDucks; i++){
        birds[i] = new THREE.Group();
        birds[i].name = "birds" + i.toString();
    }

    dog = new THREE.Group();
    dog.name = "dog";
    leftBackLeg = new THREE.Group();
    leftBackLeg.name = "leftBackLegDog";
    rightBackLeg = new THREE.Group();
    rightBackLeg.name = "rightBackLegDog";
    leftFrontLeg = new THREE.Group();
    leftFrontLeg.name = "leftFrontLegDog";
    rightFrontLeg = new THREE.Group();
    rightFrontLeg.name = "leftFrontLegDog";


    /************ TEXTURE  **************/

    var textureLoader = new THREE.TextureLoader();
    var groundTexture = textureLoader.load( '../three.js-master/examples/textures/terrain/grasslight-big.jpg' );
    groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
    groundTexture.repeat.set( 256, 256 );
    var groundMaterial = new THREE.MeshBasicMaterial( { map: groundTexture } );
    //var groundMaterial = new THREE.MeshPhongMaterial( { map: groundTexture } );
    var groundGeo = new THREE.PlaneGeometry( 200, 200 );
    var mesh = new THREE.Mesh(groundGeo,groundMaterial);
    mesh.position.y =-1.9;
    mesh.rotation.x = -Math.PI/2;
    mesh.doubleSided = true;
    scene.add(mesh);

    /**************** PANEL SCORE AND ERROR ****************/

    createText(points);
    createError(errors);

    /***************** WELCOME BOX  *************/
    document.getElementById("howtoplay").onclick = function(){ 
        document.getElementById("welcome").style.display = "none";
        document.getElementById("howto").style.display = "block";
    };

    document.getElementById("exitHowto").onclick = function(){ 
        document.getElementById("welcome").style.display = "block";
        document.getElementById("howto").style.display = "none";
    };

    document.getElementById("credits").onclick = function(){ 
        document.getElementById("welcome").style.display = "none";
        document.getElementById("creditsBox").style.display = "block";
    };

    document.getElementById("exitCredits").onclick = function(){ 
        document.getElementById("welcome").style.display = "block";
        document.getElementById("creditsBox").style.display = "none";
    };

    document.getElementById("reportBug").onclick = function(){ 
        pause = 1; Pause(); window.open('segnalabug.html');
    };

    /**** START GAME ****/
    document.getElementById("start").onclick = function(){ 
        document.getElementById("centerBox").style.visibility = "hidden";
        music[0].pause();
        setTimeout(function(){levelUpText();}, 1000);
        
    };

    /**** RESTART GAME ****/

    document.getElementById("restart").onclick = function(){ 
        music[0].pause();
        resetGame = 0;
        setReset(0);
        scene.remove(txt);
        createText(points);
        scene.remove(txtError);
        createError(errors);
        document.getElementById("centerBox2").style.visibility = "hidden";
        setTimeout(function(){
            levelUpText();
        }, 1500);
    };

    /********* MUSIC *********/

document.getElementById("MusicButton").onclick = function(){ 
        if(audioon == 0) {
            document.getElementById("MusicButton").style.background = 'url("img/audioon.png") no-repeat'; 
            audioon = 1; 
            if(document.getElementById("centerBox").style.visibility == "visible" || document.getElementById("centerBox2").style.visibility == "visible"){ 
                music[0].play();
                music[0].loop = true;
            }
            else if(document.getElementById("ButtonPause").style.visibility == "hidden") music[1].play();
        }
        else { 
            document.getElementById("MusicButton").style.background = 'url("img/audiooff.png") no-repeat'; 
            audioon = 0; 
            music[0].pause();
            music[1].pause();
            music[2].pause();
            music[3].pause();
            music[4].pause();}
            document.getElementById("MusicButton").style.backgroundSize = "cover";
    }

    /******* PAUSE ******/

    document.getElementById("ButtonPause").onclick = function(){ 
        if(audioon) music[3].play();
        if(!pause) {pause = 1; Pause(); }
        else {
            pause = 0; 
            startGame = 1; 
            txtPause.visible = false;
            document.getElementById("ButtonPause").style.background = "url('img/play.png') no-repeat";
            document.getElementById("ButtonPause").style.backgroundSize = "cover";
        }
    };

    /*********** SKY **************************/

    skyGeo = new THREE.CubeGeometry( 1000, 1000, 1000 );
    skyMaterial = new THREE.MeshBasicMaterial( { color: 0x9999ff, side: THREE.BackSide } );
    //skyMaterial = new THREE.MeshPhongMaterial( { color: 0x9999ff, side: THREE.BackSide } );
    sky = new THREE.Mesh( skyGeo, skyMaterial );
    scene.add(sky);


    /************** 4 TREES ************************/

    loader.load( './models3D/tree/scene.gltf', function ( gltf ) {
        model1 =gltf.scene;
        model1.scale.x /=15;
        model1.scale.y /=15;
        model1.scale.z /=15;
        model1.rotation.y = -0.2;
        model1.position.x += 1;
        model1.position.y -=0.2;
        model1.position.z= -0.4;
        trees.add(model1);
    },
    undefined, function ( error )
    { console.error( error ); } );


    loader.load( './models3D/tree/scene.gltf', function ( gltf ) {
        model2 =gltf.scene;
        model2.scale.x /=15;
        model2.scale.y /=15;
        model2.scale.z /=15;
        model2.rotation.y = -5.4;
        model2.position.x -=1.2;
        model2.position.y -=0.2;
        model2.position.z= -0.6;

        trees.add( model2);
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/tree/scene.gltf', function ( gltf ) {
        model3 =gltf.scene;
        model3.scale.x /=15;
        model3.scale.y /=15;
        model3.scale.z /=15;
        model3.rotation.y = -0.3;
        model3.position.x =1.75;
        model3.position.y -=0.2;
        model3.position.z= -0.6;

        trees.add( model3);
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/tree/scene.gltf', function ( gltf ) {
        model4 =gltf.scene;
        model4.scale.x /=15;
        model4.scale.y /=15;
        model4.scale.z /=15;
        model4.rotation.y = 0.4;
        model4.position.x =-1.9;
        model4.position.y -=0.2;
        model4.position.z= -0.6;
        trees.add( model4);
    },
    undefined, function ( error )
    { console.error( error ); } );

    world.add(trees);

    /***************** 3 CLOUDS ****************************/

    loader.load('./models3D/clouds/scene.gltf', function (gltf) {
        clouds2[0] = gltf.scene;
        clouds2[0].scale.x /= 15;
        clouds2[0].scale.y /= 15;
        clouds2[0].scale.z /= 15;
        clouds2[0].rotation.x = 0.0;
        clouds2[0].position.y = 0.6;
        clouds2[0].position.x = -0.1;
        clouds2[0].position.z = -0.3;
        clouds.add(clouds2[0]);
    },
        undefined, function (error) { console.error(error); });
    loader.load('./models3D/clouds/scene.gltf', function (gltf) {
        clouds2[1] = gltf.scene;
        clouds2[1].scale.x /= 15;
        clouds2[1].scale.y /= 15;
        clouds2[1].scale.z /= 15;
        clouds2[1].rotation.x = 0.0;
        clouds2[1].position.y = 0.7;
        clouds2[1].position.x = -1.2;
        clouds2[1].position.z = -0.3;
        clouds.add(clouds2[1]);
    },
        undefined, function (error) { console.error(error); });
    loader.load('./models3D/clouds/scene.gltf', function (gltf) {

        clouds2[2] = gltf.scene;
        clouds2[2].scale.x /= 8;
        clouds2[2].scale.y /= 8;
        clouds2[2].scale.z /= 8;
        clouds2[2].rotation.x = 0.0;
        clouds2[2].position.y = 1.0;
        clouds2[2].position.x = 1.7;
        clouds2[2].position.z = -2.3;
        clouds.add(clouds2[2]);
    },
        undefined, function (error) { console.error(error); });
    loader.load('./models3D/clouds/scene.gltf', function (gltf) {
        clouds2[3] = gltf.scene;
        clouds2[3].scale.x /= 15;
        clouds2[3].scale.y /= 15;
        clouds2[3].scale.z /= 15;
        clouds2[3].rotation.x = 0.0;
        clouds2[3].position.y = 0.5;
        clouds2[3].position.x = 0.7;
        clouds2[3].position.z = -2.3;
        clouds.add(clouds2[3]);
    },
        undefined, function (error) { console.error(error); });
    loader.load('./models3D/clouds/scene.gltf', function (gltf) {
        clouds2[4] = gltf.scene;
        clouds2[4].scale.x /= 11;
        clouds2[4].scale.y /= 11;
        clouds2[4].scale.z /= 11;
        clouds2[4].rotation.x = 0.0;
        clouds2[4].position.y = 0.7;
        clouds2[4].position.x = -1.2;
        clouds2[4].position.z = -2.3;
        clouds.add(clouds2[4]);
    },
        undefined, function (error) { console.error(error); });
    world.add(clouds);

    /*************************** 11 BUSHES ******************************/

    loader.load( './models3D/bush/scene.gltf', function ( gltf ) {

        bush1 =gltf.scene;
        bush1.scale.x /=200;
        bush1.scale.y /=200;
        bush1.scale.z /=200;
        bush1.rotation.x=0.0;
        bush1.position.y = -0.38;
        bush1.position.x =-0.8;
        bush1.position.z =-2.8;

        bushes.add( bush1);
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/bush/scene.gltf', function ( gltf ) {

        bush2 =gltf.scene;
        bush2.scale.x /=200;
        bush2.scale.y /=200;
        bush2.scale.z /=200;
        bush2.rotation.x=0.0;
        bush2.position.y = -0.38;
        bush2.position.x =-0.8;
        bush2.position.z =-1.0;
        bushes.add( bush2);
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/bush/scene.gltf', function ( gltf ) {

        bush3 =gltf.scene;
        bush3.scale.x /=200;
        bush3.scale.y /=200;
        bush3.scale.z /=200;
        bush3.rotation.x=0.0;
        bush3.position.y = -0.38;
        bush3.position.x =-2.0;
        bush3.position.z =-2.8;
        bushes.add( bush3);
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/bush/scene.gltf', function ( gltf ) {

        bush4 =gltf.scene;
        bush4.scale.x /=200;
        bush4.scale.y /=200;
        bush4.scale.z /=200;
        bush4.rotation.x=0.0;
        bush4.position.y = -0.38;
        bush4.position.x =1.6;
        bush4.position.z =-2.8;
        bushes.add( bush4);
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/bush/scene.gltf', function ( gltf ) {

        bush5 =gltf.scene;
        bush5.scale.x /=200;
        bush5.scale.y /=200;
        bush5.scale.z /=200;
        bush5.rotation.x=0.0;
        bush5.position.y = -0.38;
        bush5.position.x =0.8;
        bush5.position.z =-1.0;
        bushes.add( bush5);
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/bush/scene.gltf', function ( gltf ) {

        bush6 =gltf.scene;
        bush6.scale.x /=200;
        bush6.scale.y /=200;
        bush6.scale.z /=200;
        bush6.rotation.x=0.0;
        bush6.position.y = -0.38;
        bush6.position.x =0.0;
        bush6.position.z =-2.6;
        bushes.add( bush6);
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/bush/scene.gltf', function ( gltf ) {

        bush7 =gltf.scene;
        bush7.scale.x /=200;
        bush7.scale.y /=200;
        bush7.scale.z /=200;
        bush7.rotation.x=0.0;
        bush7.position.y = -0.38;
        bush7.position.x =0.0;
        bush7.position.z =-0.6;
        bushes.add( bush7);
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/bush/scene.gltf', function ( gltf ) {

        bush8 =gltf.scene;
        bush8.scale.x /=200;
        bush8.scale.y /=200;
        bush8.scale.z /=200;
        bush8.rotation.x=0.0;
        bush8.position.y = -0.38;
        bush8.position.x =1.5;
        bush8.position.z =-0.6;
        bushes.add( bush8);
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/bush/scene.gltf', function ( gltf ) {

        bush9 =gltf.scene;
        bush9.scale.x /=200;
        bush9.scale.y /=200;
        bush9.scale.z /=200;
        bush9.rotation.x=0.0;
        bush9.position.y = -0.38;
        bush9.position.x =3;
        bush9.position.z =-2.6;
        bushes.add( bush9);
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/bush/scene.gltf', function ( gltf ) {

        bush10 =gltf.scene;
        bush10.scale.x /=200;
        bush10.scale.y /=200;
        bush10.scale.z /=200;
        bush10.rotation.x=0.0;
        bush10.position.y = -0.38;
        bush10.position.x =-3;
        bush10.position.z =-2.6;
        bushes.add( bush10);
    },
    undefined, function ( error )
    { console.error( error ); } );


    loader.load( './models3D/bush/scene.gltf', function ( gltf ) {

        bush11 =gltf.scene;
        bush11.scale.x /=200;
        bush11.scale.y /=200;
        bush11.scale.z /=200;
        bush11.rotation.x=0.0;
        bush11.position.y = -0.38;
        bush11.position.x =-2;
        bush11.position.z =-0.3;
        bushes.add( bush11);
    },
    undefined, function ( error )
    { console.error( error ); } );
    world.add(bushes);

    /************************ GUN **********************************/

    rifle = new THREE.Group();
    scene.add(rifle);


    loader.load( './models3D/shotgun/scene.gltf', function ( gltf ) {

        gun =gltf.scene;
        gun.scale.x /=70;
        gun.scale.y /=70;
        gun.scale.z /=70;
        gun.position.x = + 0.0;
        gun.position.z = 0;
        gun.position.y = 0;

        gun.rotation.z = 0;
        gun.rotation.y = -3;
        gun.rotation.x = -0.05;

        rifle.add(gun);
    },
    undefined, function ( error )
    { console.error( error ); } );

    /************************** 5 DUCKS  ***************************************/

    for(let iDuck = 0; iDuck < numDucks; iDuck++){
        console.log(iDuck);
        let pathModel;
        if(iDuck < leftRightDivider){
            // Duck directed to the left
            
            if(iDuck%2==0) pathModel = './models3D/duck/firstpartduck.glb';
            else pathModel = './models3D/duck/firstpartduck2.glb';
                
            loader.load( pathModel, function ( gltf ) {

                flying[iDuck] = gltf.scene;
                flying[iDuck].scale.x /=50;
                flying[iDuck].scale.y /=50;
                flying[iDuck].scale.z /=50;
                flying[iDuck].rotation.x = 0.0;
                flying[iDuck].rotation.y = 1.55;
                flying[iDuck].rotation.z = 1.5;
                flying[iDuck].position.x = 0.0;
                flying[iDuck].position.y = 0.0;
                birds[iDuck].add(flying[iDuck]);
                birds[iDuck].visible = false;
            },
            undefined, function ( error )
            { console.error( error ); } );


            loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

                wingLeft[iDuck] =gltf.scene;
                wingLeft[iDuck].scale.x /=55;
                wingLeft[iDuck].scale.y /=55;
                wingLeft[iDuck].scale.z /=55;
                wingLeft[iDuck].rotation.x = 0.2;
                wingLeft[iDuck].rotation.y = -0.1;
                wingLeft[iDuck].rotation.z = 0.;
                wingLeft[iDuck].position.x = 0.0;
                wingLeft[iDuck].position.y = -0.01;
                wingLeft[iDuck].position.z = 0.02;
                birds[iDuck].add(wingLeft[iDuck]);
                birds[iDuck].visible = false;
            },
            undefined, function ( error )
            { console.error( error ); } );
        
        
            loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {
        
                wingRight[iDuck] =gltf.scene;
                wingRight[iDuck].scale.x /=55;
                wingRight[iDuck].scale.y /=55;
                wingRight[iDuck].scale.z /=55;
                wingRight[iDuck].rotation.x = 2.94157792;
                wingRight[iDuck].rotation.y = 0;
                wingRight[iDuck].rotation.z = 3.14159;
                wingRight[iDuck].position.x = 0.0;
                wingRight[iDuck].position.y = -0.01;
                wingRight[iDuck].position.z = -0.02;
                birds[iDuck].add(wingRight[iDuck]);
                birds[iDuck].visible =false;
            },
            undefined, function ( error )
            { console.error( error ); } );
        
            loader.load( './models3D/duck/thirdpartduck.glb', function ( gltf ) {
        
                leg[iDuck] =gltf.scene;
                leg[iDuck].scale.x /=40;
                leg[iDuck].scale.y /=40;
                leg[iDuck].scale.z /=40;
                leg[iDuck].rotation.x = 0.;
                leg[iDuck].rotation.y = 1.5708;
                leg[iDuck].rotation.z = -1.5708;
                leg[iDuck].position.x = 0.047;
                leg[iDuck].position.y = -0.0726;
                leg[iDuck].position.z = -0.004;
                birds[iDuck].add(leg[iDuck]);
                birds[iDuck].visible = false;
            },
            undefined, function ( error )
            { console.error( error ); } );
        } else {

            if(iDuck%2==0) pathModel = './models3D/duck/firstpartduck3.glb';
            else pathModel = './models3D/duck/firstpartduck2.glb';
                
            loader.load( pathModel, function ( gltf ) {

                flying[iDuck] = gltf.scene;
                flying[iDuck].scale.x /=50;
                flying[iDuck].scale.y /=50;
                flying[iDuck].scale.z /=50;
                flying[iDuck].rotation.x = -1.5708;
                flying[iDuck].rotation.y = -1.5708;
                flying[iDuck].rotation.z = -0.13;
                flying[iDuck].position.y = 0.0;
                flying[iDuck].position.x = 0.0;
                birds[iDuck].add(flying[iDuck]);
                birds[iDuck].visible = false;
            },
            undefined, function ( error )
            { console.error( error ); } );

            loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

                wingLeft[iDuck] =gltf.scene;
                wingLeft[iDuck].scale.x /=55;
                wingLeft[iDuck].scale.y /=55;
                wingLeft[iDuck].scale.z /=55;
                wingLeft[iDuck].rotation.x = 2.94157792;
                wingLeft[iDuck].rotation.y = 0;
                wingLeft[iDuck].rotation.z = 3.14159;
                wingLeft[iDuck].position.x = 0.0;
                wingLeft[iDuck].position.y = -0.008;
                wingLeft[iDuck].position.z = -0.02;
                birds[iDuck].add(wingLeft[iDuck]);
                birds[iDuck].visible = false;
            },
            undefined, function ( error )
            { console.error( error ); } );
        
            loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {
        
                wingRight[iDuck] =gltf.scene;
                wingRight[iDuck].scale.x /=55;
                wingRight[iDuck].scale.y /=55;
                wingRight[iDuck].scale.z /=55;
                wingRight[iDuck].rotation.x = 0.2;
                wingRight[iDuck].rotation.y = -0.1;
                wingRight[iDuck].rotation.z = 0.;
                wingRight[iDuck].position.x = 0.0;
                wingRight[iDuck].position.y = -0.008;
                wingRight[iDuck].position.z = 0.02;
                birds[iDuck].add(wingRight[iDuck]);
                birds[iDuck].visible = false;
            },
            undefined, function ( error )
            { console.error( error ); } );
        
            loader.load( './models3D/duck/thirdpartduck.glb', function ( gltf ) {
        
                leg[iDuck] =gltf.scene;
                leg[iDuck].scale.x /=40;
                leg[iDuck].scale.y /=40;
                leg[iDuck].scale.z /=40;
                leg[iDuck].rotation.x = 0.;
                leg[iDuck].rotation.y = -1.5708;
                leg[iDuck].rotation.z = -1.5708;
                leg[iDuck].position.x = -0.047;
                leg[iDuck].position.y = -0.073;
                leg[iDuck].position.z = +0.002;
                birds[iDuck].add(leg[iDuck]);
                birds[iDuck].visible = false;
            },
            undefined, function ( error )
            { console.error( error ); } );
        }
        console.log("Aggiunta anatra " + iDuck );
    }

    /************ DOG **************/

    loader.load( './models3D/dog/dog.glb', function ( gltf ) {
        body =gltf.scene;
        body.scale.x /=30;
        body.scale.y /=30;
        body.scale.z /=30;
        body.rotation.x = 1.5708;
        body.rotation.y = 0.;
        body.rotation.z = 0.;
        body.position.x = 0.;
        body.position.y = 0.;
        body.position.z = 0.;
        dog.add(body);
        dog.visible = true;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/dog/upper_back_leg.glb', function ( gltf ) {
        upperBackLegLeft =gltf.scene;
        upperBackLegLeft.scale.x /=30;
        upperBackLegLeft.scale.y /=30;
        upperBackLegLeft.scale.z /=30;
        upperBackLegLeft.rotation.x = 1.5708;
        upperBackLegLeft.rotation.y = 0.;
        upperBackLegLeft.rotation.z = 0.;
        upperBackLegLeft.position.x = -0.085;
        upperBackLegLeft.position.y = -0.02;
        upperBackLegLeft.position.z = -0.044;
        leftBackLeg.add(upperBackLegLeft);
        leftBackLeg.visible = true;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/dog/upper_back_leg.glb', function ( gltf ) {
        upperBackLegRight =gltf.scene;
        upperBackLegRight.scale.x /=30;
        upperBackLegRight.scale.y /=30;
        upperBackLegRight.scale.z /=30;
        upperBackLegRight.rotation.x = 1.5708;
        upperBackLegRight.rotation.y = 0.;
        upperBackLegRight.rotation.z = 0.;
        upperBackLegRight.position.x = -0.085;
        upperBackLegRight.position.y = -0.02;
        upperBackLegRight.position.z = +0.01;
        rightBackLeg.add(upperBackLegRight);
        rightBackLeg.visible = true;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/dog/upper_front_leg.glb', function ( gltf ) {
        upperFrontLegLeft =gltf.scene;
        upperFrontLegLeft.scale.x /=30;
        upperFrontLegLeft.scale.y /=30;
        upperFrontLegLeft.scale.z /=30;
        upperFrontLegLeft.rotation.x = 1.5708;
        upperFrontLegLeft.rotation.y = 0.;
        upperFrontLegLeft.rotation.z = 0.;
        upperFrontLegLeft.position.x = +0.045;
        upperFrontLegLeft.position.y = -0.02;
        upperFrontLegLeft.position.z = -0.05;
        leftFrontLeg.add(upperFrontLegLeft);
        leftFrontLeg.visible = true;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/dog/upper_front_leg.glb', function ( gltf ) {
        upperFrontLegRight =gltf.scene;
        upperFrontLegRight.scale.x /=30;
        upperFrontLegRight.scale.y /=30;
        upperFrontLegRight.scale.z /=30;
        upperFrontLegRight.rotation.x = 1.5708;
        upperFrontLegRight.rotation.y = 0.;
        upperFrontLegRight.rotation.z = 0.;
        upperFrontLegRight.position.x = +0.045;
        upperFrontLegRight.position.y = -0.02;
        upperFrontLegRight.position.z = +0.009;
        rightFrontLeg.add(upperFrontLegRight);
        rightFrontLeg.visible = true;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/dog/lower_back_leg.glb', function ( gltf ) {
        lowerBackLegLeft =gltf.scene;
        lowerBackLegLeft.scale.x /=30;
        lowerBackLegLeft.scale.y /=30;
        lowerBackLegLeft.scale.z /=30;
        lowerBackLegLeft.rotation.x = 1.5708;
        lowerBackLegLeft.rotation.y = 0.;
        lowerBackLegLeft.rotation.z = 0.;
        lowerBackLegLeft.position.x = -0.125;
        lowerBackLegLeft.position.y = -0.0836;
        lowerBackLegLeft.position.z = -0.0433;
        leftBackLeg.add(lowerBackLegLeft);
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/dog/lower_back_leg.glb', function ( gltf ) {
        lowerBackLegRight =gltf.scene;
        lowerBackLegRight.scale.x /=30;
        lowerBackLegRight.scale.y /=30;
        lowerBackLegRight.scale.z /=30;
        lowerBackLegRight.rotation.x = 1.5708;
        lowerBackLegRight.rotation.y = 0.;
        lowerBackLegRight.rotation.z = 0.;
        lowerBackLegRight.position.x = -0.125;
        lowerBackLegRight.position.y = -0.0836;
        lowerBackLegRight.position.z = +0.0091;
        rightBackLeg.add(lowerBackLegRight);
    },
    undefined, function ( error )
    { console.error( error ); } );


    loader.load( './models3D/dog/lower_front_leg.glb', function ( gltf ) {
        lowerFrontLegLeft =gltf.scene;
        lowerFrontLegLeft.scale.x /=30;
        lowerFrontLegLeft.scale.y /=30;
        lowerFrontLegLeft.scale.z /=30;
        lowerFrontLegLeft.rotation.x = 1.5708;
        lowerFrontLegLeft.rotation.y = 0.;
        lowerFrontLegLeft.rotation.z = 0.;
        lowerFrontLegLeft.position.x = +0.038;
        lowerFrontLegLeft.position.y = -0.0931;
        lowerFrontLegLeft.position.z = -0.05;
        leftFrontLeg.add(lowerFrontLegLeft);
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/dog/lower_front_leg.glb', function ( gltf ) {
        lowerFrontLegRight =gltf.scene;
        lowerFrontLegRight.scale.x /=30;
        lowerFrontLegRight.scale.y /=30;
        lowerFrontLegRight.scale.z /=30;
        lowerFrontLegRight.rotation.x = 1.5708;
        lowerFrontLegRight.rotation.y = 0.2;
        lowerFrontLegRight.rotation.z = 0.;
        lowerFrontLegRight.position.x = +0.038;
        lowerFrontLegRight.position.y = -0.0931;
        lowerFrontLegRight.position.z = +0.009;
        rightFrontLeg.add(lowerFrontLegRight);
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/dog/tail.glb', function ( gltf ) {
        tail =gltf.scene;
        tail.scale.x /=30;
        tail.scale.y /=30;
        tail.scale.z /=30;
        tail.rotation.x = 1.5708;
        tail.rotation.y = 0.;
        tail.rotation.z = 0.;
        tail.position.x = -0.1;
        tail.position.y = +0.058;
        tail.position.z = -0.001;
        dog.add(tail);
    },
    undefined, function ( error )
    { console.error( error ); } );

    

    for(var j = 0; j < numDucks; j++) all_birds.add(birds[j]);
    scene.add(all_birds);

    dog.add(leftBackLeg);
    dog.add(rightBackLeg);
    dog.add(leftFrontLeg);
    dog.add(rightFrontLeg);
    scene.add(dog);

    scene.add(world);

    /************* SET DOG STARTING POSITION *************/
    dog.position.x = -0.6;
    dog.position.z = 1.5;
    dog.rotation.y = 1.;
    dog.position.y = -0.3;

    /******************** SET INTERVAL FOR SPAWN DUCKS *******************/

    play_game = setInterval(function(){
        animationBirds();
        animationClouds()
    }, speed);

    /**************************** MOUSE + GUN *******************************/

    plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 5);
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    pointOfIntersection = new THREE.Vector3();

    document.addEventListener("mousemove",mouseMove, false);
    document.addEventListener("mousedown",mouseClick, false);
    render();

}


function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}