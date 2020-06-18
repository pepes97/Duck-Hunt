var camera, scene, renderer, canvas, frustum;

var trees,model1,model2,model3,model4;
var clouds;
var bushes, bush1, bush2, bush3, bush4, bush5, bush6, bush7, bush8, bush9;
var gun, base, world,duck;

var game_over;
var pause = 0;

var textGeo, textMesh, txt, txtError, textError, text, txtLevelUp, textLevelUp, textPause, txtPause;
var loaderFT;

var all_birds, birds1,birds2,birds3,birds4,birds5;
var wingLeft1, wingRight1, wingLeft2, wingRight2, wingLeft3, wingRight3, wingLeft4, wingRight4;
var leg1, leg2, leg3,leg4;
var flying1,flying2,flying3, flying4, flying5;

var mouse, plane, raycaster, pointOfIntersection;
var raycaster2, pointOfIntersection2;

var texture, material;
var bullets =[];
var count=0;

var difficulty = 1;
var pointsToReach = 5;
var level = 1;

// control for hit ducks
var hit1 = true;
var hit2 = true;
var hit3 = true;
var hit4 = true;
var hit5 = true;

// control for error ducks
var error1 = true;
var error2 = true;
var error3 = true;
var error4 = true;
var error5 = true;

var speed = 30;

// Set to one to start the game, to zero to pause it
var startGame = 0;

// counter of ducks hit by player
var points = 0;

// max number errors before game over
var errors = 5;

// Clouds
var showedClouds = [0,1,2];
//var availableClouds = [0,1,2];
var clouds2 = [null, null, null];
var leftRightDividerClouds = 2;

// Ducks currently showed
var numBirds = 5;
var showedDucks = [];
var availableDucks = [0,1,2,3,4];
var restoreIndex = [0,1,2,3,4];
var leftRightDivider = 3; // Ducks 0-2 goes to the left, >=3 goes to the right
var leftRemaining = 3, rightRemaining = 2;
var countElem = [];
var positionDucks  = [];
var directionDucks = [];
var x_keyFramesDucks = [];
var y_keyFramesDucks = [];
var hit = [false, false, false, false, false];
var flying = [null, null, null, null, null];
var wingLeft = [null, null, null, null, null];
var wingRight = [null, null, null, null, null];
var leg = [null, null, null, null, null];
var birds = [null, null, null, null, null];
var versoLeft = [1,1,1,1,1];
var versoRight = [0,0,0,0,0];
var incrementWingLeft = [0,0,0,0,0];
var incrementWingRight = [0,0,0,0,0];
 
// var x_sbatti = [-0.515,-0.445,-0.270,-0.041,0.196,0.378,0.448,0.378,0.196,-0.041,-0.270,-0.445,-0.515];
// var y_sbatti = [0.309,0.240,0.068,-0.157,-0.391,-0.569,-0.638,-0.569,-0.391,-0.157,0.068,0.240,0.309];
// var z_sbatti = [-0.799,-0.787,-0.755,-0.714,-0.671,-0.639,-0.626,-0.639,-0.671,-0.714,-0.755,-0.787,-0.799];

// var x_sbatti_2 = [0.448,0.378,0.196,-0.041,-0.270,-0.445,-0.515,-0.445,-0.270,-0.041,0.196,0.378,0.448];
// var y_sbatti_2 = [-0.638,-0.569,-0.391,-0.157,0.068,0.240,0.309,0.240,0.068,-0.157,-0.391,-0.569,-0.638];
// var z_sbatti_2 = [-0.626,-0.639,-0.671,-0.714,-0.755,-0.787,-0.799,-0.787,-0.755,-0.714,-0.671,-0.639,-0.626];

// var x_sbatti_3 = [0.644,0.641,0.632,0.620,0.607,0.598,0.594,0.598,0.607,0.620,0.632,0.641,0.644];
// var y_sbatti_3 = [0.651,0.656,0.671,0.690,0.709,0.724,0.730,0.724,0.709,0.690,0.671,0.656,0.651];
// var z_sbatti_3 = [0.402,0.348,0.213,0.038,-0.144,-0.281,-0.337,-0.281,-0.144,0.038,0.213,0.348,0.402];

// var x_sbatti_3 = [-0.451,-0.376,-0.186,0.062,0.318,0.510,0.590,0.510,0.318,0.062,-0.186,-0.376,-0.451];
// var y_sbatti_3 = [0.534,0.454,0.253,-0.008,-0.279,-0.482,-0.567,-0.482,-0.279,-0.008,0.253,0.454,0.534];
// var z_sbatti_3 = [-0.715,-0.705,-0.679,-0.646,-0.611,-0.586,-0.575,-0.586,-0.611,-0.646,-0.679,-0.705,-0.715];



// var x_sbatti = [-0.515,-0.488,-0.415,-0.307,-0.176,-0.034,0.109,0.240,0.348,0.421,0.348,0.240,0.109,-0.034,-0.176,-0.307,-0.415,-0.488]
// var y_sbatti = [0.309,0.283,0.211,0.105,-0.024,-0.164,-0.305,-0.434,-0.540,-0.612,-0.540,-0.434,,-0.305,-0.164,-0.024,0.105,0.211,0.283]
// var z_sbatti = [-0.799,-0.794,-0.781,-0.762,-0.738,-0.713,-0.687,-0.663,-0.644,-0.631,-0.644,-0.663,-0.687,-0.713,-0.738,-0.762,-0.781,-0.794]
// var x_sbatti = [-0.515,-0.445,-0.270,-0.041,0.196,0.378,0.448,0.378,0.196,-0.041,-0.270,-0.445,-0.515];
// var y_sbatti = [0.309,0.240,0.068,-0.157,-0.391,-0.569,-0.638,-0.569,-0.391,-0.157,0.068,0.240,0.309];
// var z_sbatti = [-0.799,-0.787,-0.755,-0.714,-0.671,-0.639,-0.626,-0.639,-0.671,-0.714,-0.755,-0.787,-0.799];

// var x_sbatti_2 = [0.644,0.641,0.632,0.620,0.607,0.598,0.594,0.598,0.607,0.620,0.632,0.641,0.644];
// var y_sbatti_2 = [0.651,0.656,0.671,0.690,0.709,0.724,0.730,0.724,0.709,0.690,0.671,0.656,0.651];
// var z_sbatti_2 = [0.402,0.348,0.213,0.038,-0.144,-0.281,-0.337,-0.281,-0.144,0.038,0.213,0.348,0.402];


// var x_sbatti2 = [1.,0.2,-0.2,-1.,-0.2,0.2,0.6]
var interval = 60;

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


/************************** MOVE GUN *******************************/

function mouseMove(event){
    var speed = 4.0;

        if (gun){
            mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            raycaster.ray.intersectPlane(plane, pointOfIntersection);
            base.position.set(
                camera.position.x + 0.35,
                camera.position.y - 0.65,
                camera.position.z
            );
            
            base.lookAt(pointOfIntersection);

            //base.rotateY(pointOfIntersection.x * - Math.PI/2);

        }
}

/**************************** SHOT  *********************************/

function mouseClick(event) {

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

        if (intersects.length > 0) {
            for (var i = 0; i < intersects.length; i++) {
                for (var j = showedDucks.length - 1; j >= 0; j--) {
                    if (intersects[i].object.parent.parent.parent.parent.parent == birds[showedDucks[j]]) {
                        if (!hit[showedDucks[j]]) {
                            points += 1;
                            scene.remove(txt);
                            createText(points);
                            hit[showedDucks[j]] = true;

                            /*** HANDLE DIFFICULTY BASED ON CURRENT POINTS ***/
                            if (points == pointsToReach) {
                                pointsToReach += 5;
                                if (level % 3 == 0) difficulty++;
                                speed -= 5;
                                scene.remove(txtLevelUp);
                                level++;
                                levelUpText();

                            }
                        }
                    }
                }
            }
        }
        bullets.push(bullet);
        scene.add(bullet);
    }
}

/********************* SCORE TEXT ***************************************/

function createText(score){
    text = "Score: ".concat(score.toString());

    loaderFL.load('../three.js-master/examples/fonts/optimer_bold.typeface.json', function(font) {

        var geometry = new THREE.TextGeometry(text, {
            font: font,
            size: 0.08,
            height: 0.00
        });
        geometry.center();

        var material = new THREE.MeshBasicMaterial({
            color: 0xff9933
        });

        txt = new THREE.Mesh(geometry, material);
        txt.position.x = 1.3;
        txt.position.y = -0.5;

        scene.add(txt);
    });
}

/******************************* ERROR TEXT  *********************/
function createError(error){
    textError = "Errors: ".concat(error.toString());

    loaderFL.load('../three.js-master/examples/fonts/optimer_bold.typeface.json', function(font) {

        var geometryError = new THREE.TextGeometry(textError, {
            font: font,
            size: 0.08,
            height: 0.00
        });
        geometryError.center();

        var materialError = new THREE.MeshBasicMaterial({
            color: 0x660000
        });

        txtError = new THREE.Mesh(geometryError, materialError);
        txtError.position.x = 1.3;
        txtError.position.y = -0.62;

        scene.add(txtError);
    });
}

/********************* LEVEL UP TEXT ***************************************/

function levelUpText(){
    textLevelUp = "Level "+level;
    if(errors == 0) textLevelUp = "Game Over";

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




        //MeshBasicMaterial({
        //    color: 0xff9933, specular: 0xffffff
        //});
        txtLevelUp = new THREE.Mesh(geometry, material);
        txtLevelUp.position.x = 0.0;
        txtLevelUp.position.y = 0.0;
        txtLevelUp.position.z = 0.1;

        scene.add(txtLevelUp);
        txtLevelUp.visible = true;
        startGame = 0;
        setTimeout(function() {  txtLevelUp.visible = false;}, 3000);
        setTimeout(function() {if (pause ==0 && errors != 0) startGame  = 1;}, 4000);
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
		})

        txtPause = new THREE.Mesh(geometry, material);
        txtPause.position.x = 0.0;
        txtPause.position.y = 0.0;
        txtPause.position.z = 0.1;

        scene.add(txtPause);
        txtPause.visible = true;
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
        console.log("/*/*/*//**//*/*/*/*/*/*/*/*/*");
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
        /*
        if(availableClouds.length > 0) {
            var cloudToShow = availableClouds.pop();
            showedClouds.unshift(cloudToShow);
            if(cloudToShow < leftRightDividerClouds) {
                clouds2[cloudToShow].position.x = -2;
            } else {
                clouds2[cloudToShow].position.x = 2;
            }
        }*/
        for(var i=showedClouds.length-1; i >= 0; i--){
            var currCloud = showedClouds[i];
            //var posToCheck = currCloud < leftRightDividerClouds ? new THREE.Vector3(cloud2[currCloud].position.x - 0.1, cloud2[currCloud].position.y, cloud2[currCloud].position.z) :
             //                                               new THREE.Vector3(cloud2[currCloud].position.x + 0.1, cloud2[currCloud].position.y, cloud2[currCloud].position.z);
            if (clouds2[currCloud].position.x < 2.5 && currCloud < leftRightDividerClouds) {
                clouds2[currCloud].position.x += 0.011;
            } else if (clouds2[currCloud].position.x >= 2.5 && currCloud < leftRightDividerClouds){
                clouds2[currCloud].position.x = -2.5;
            } else if(clouds2[currCloud].position.x > -4.5 && currCloud >= leftRightDividerClouds) {
                clouds2[currCloud].position.x -= 0.011;
            } else {
                clouds2[currCloud].position.x = 4.5;
            }
        }

    }
}

/*********************** BIRDS FLYING **************************/
function animationBirds(){
    count+=1;

    var m = 5;

    if (startGame) {

        // Generate new ducks if those showed are lower than the expected value
        if (showedDucks.length < difficulty && availableDucks.length != 0) {
            for (var i = difficulty - showedDucks.length; i > 0; i--) {
                console.log("*******************\nSto aggiungendo un'anatra");
                var currPos = chooseStartingPoint();
                console.log("La sua posizione è ");
                console.log(currPos);
                var [currDir, leftDir] = chooseDirection(currPos);
                //console.log(currDir);
                console.log("La sua direzione è ");
                console.log(currDir);
                console.log(leftDir);

                console.log("Duck available");
                console.log(availableDucks);
                console.log("Used duck");
                console.log(showedDucks);

                if (leftDir) {
                    var duckToTake = availableDucks.splice(Math.floor(Math.random() * leftRemaining), 1);
                    leftRemaining--;
                    // wingLeft[duckToTake[0]].rotation.x = 0.2;
                    // wingRight[duckToTake[0]].rotation.x = 3;
                    // flying[duckToTake[0]].rotation.y = 1.0;
                    // flying[duckToTake[0]].rotation.z = 1.5;
                    // flying[duckToTake[0]].rotation.x = 0.0;
                } else {
                    var duckToTake = availableDucks.splice(Math.floor(leftRemaining + Math.random() * rightRemaining), 1);
                    rightRemaining--;
                    // flying[duckToTake[0]].rotation.y = -1.0;
                    // flying[duckToTake[0]].rotation.z = 1.5;
                    // flying[duckToTake[0]].rotation.x = 0.0;
                    // wingLeft[duckToTake[0]].rotation.x = 0.1;
                    // wingRight[duckToTake[0]].rotation.x = 0.2;

                }

                console.log("Valore randomico" + Math.floor(Math.random(0, leftRemaining).toString()));

                console.log("Duck available");
                console.log(availableDucks);


                console.log("L'id dell'anatra è: " + duckToTake[0].toString());

                generateKeyFrames(currPos, currDir, leftDir);
                birds[duckToTake[0]].position.x = x_keyFramesDucks[0][0];
                birds[duckToTake[0]].position.y = y_keyFramesDucks[0][0];

                console.log("Ho generato i keyFrames");
                console.log(x_keyFramesDucks[0]);

                countElem.unshift(0);
                showedDucks.unshift(duckToTake[0]);
                //console.log(x_keyFramesDucks);
                console.log("Aggiunta anatra: " + duckToTake[0].toString());
                console.log("La posizione dell'anatra è:");
                //console.log(flying[currDuck].position);
                console.log("Used duck");
                console.log(showedDucks);
            }
        }

        


        for (var i = showedDucks.length - 1; i >= 0; i--) {
            var currDuck = showedDucks.pop();
            var x_keyFrame = x_keyFramesDucks.pop();
            var y_keyFrame = y_keyFramesDucks.pop();
            count = countElem.pop();

            //console.log("curr duck "  + currDuck.toString());
            var posToCheck = currDuck < leftRightDivider ? new THREE.Vector3(birds[currDuck].position.x + 0.05, birds[currDuck].position.y - 0.06, birds[currDuck].position.z) :
                                                            new THREE.Vector3(birds[currDuck].position.x - 0.05, birds[currDuck].position.y - 0.06, birds[currDuck].position.z);
            if (frustum.containsPoint(posToCheck)) {
                console.log("Anatra " + currDuck.toString() + "ancora dentro lo schermo");
                if (!hit[currDuck]) {
                    birds[currDuck].visible = true;
                    // flying[currDuck].position.x = interpolation(x_keyFrame, count, m);
                    // flying[currDuck].position.y = interpolation(y_keyFrame, count, m);

                    if (currDuck < leftRightDivider) {
                        // wingLeft[currDuck].position.x = interpolation(x_keyFrame, count, m) - 0.005;
                        // wingLeft[currDuck].position.y = interpolation(y_keyFrame, count, m) - 0.005;
                        // wingLeft[currDuck].position.z = 0.05;
                        // wingLeft[currDuck].rotation.x = interpolation(x_sbatti, count, m);
                        // wingLeft[currDuck].rotation.y = interpolation(y_sbatti, count, m);
                        // wingLeft[currDuck].rotation.z = interpolation(z_sbatti, count, m);
                        if(versoLeft[currDuck] == 0){
                            wingLeft[currDuck].rotation.x += 0.1;
                            incrementWingLeft[currDuck] += 0.1
                            if(incrementWingLeft[currDuck] > 0.8) versoLeft[currDuck] = 1;
                        }else if(versoLeft[currDuck] == 1) {
                            wingLeft[currDuck].rotation.x -= 0.1;
                            incrementWingLeft[currDuck] -= 0.1
                            if(incrementWingLeft[currDuck] < -0.8) versoLeft[currDuck] = 0;
                        }


                        // wingRight[currDuck].position.x = interpolation(x_keyFrame, count, m) - 0.005;
                        // wingRight[currDuck].position.y = interpolation(y_keyFrame, count, m) - 0.005;
                        // wingRight[currDuck].position.z = -0.05;
                        // wingRight[currDuck].rotation.x = -interpolation(x_sbatti_2, count, m);
                        // wingRight[currDuck].rotation.y = -interpolation(y_sbatti_2, count, m);
                        // wingRight[currDuck].rotation.z = interpolation(z_sbatti_2, count, m);
                        if(versoRight[currDuck] == 0){
                            wingRight[currDuck].rotation.x += 0.1;
                            incrementWingRight[currDuck] += 0.1
                            if(incrementWingRight[currDuck] > 0.8) versoRight[currDuck] = 1;
                        }else if(versoRight[currDuck] == 1) {
                            wingRight[currDuck].rotation.x -= 0.1;
                            incrementWingRight[currDuck] -= 0.1
                            if(incrementWingRight[currDuck] < -0.8) versoRight[currDuck] = 0;
                        }

                        // leg[currDuck].position.x = interpolation(x_keyFrame, count, m) + 0.045;
                        // leg[currDuck].position.y = interpolation(y_keyFrame, count, m) - 0.03;

                    } else {
                        
                        // wingLeft[currDuck].position.x = interpolation(x_keyFrame, count, m) + 0.005;
                        // wingLeft[currDuck].position.y = interpolation(y_keyFrame, count, m) + 0.005;
                        // wingLeft[currDuck].position.z = -0.05;
                        //wingLeft[currDuck].position.z = 0.9;

                        if(versoLeft[currDuck] == 0){
                            wingLeft[currDuck].rotation.x += 0.1;
                            incrementWingLeft[currDuck] += 0.1
                            if(incrementWingLeft[currDuck] > 0.8) versoLeft[currDuck] = 1;
                        }else if(versoLeft[currDuck] == 1) {
                            wingLeft[currDuck].rotation.x -= 0.1;
                            incrementWingLeft[currDuck] -= 0.1
                            if(incrementWingLeft[currDuck] < -0.8) versoLeft[currDuck] = 0;
                        }
                        /*
                        wingLeft[currDuck].rotation.x = -interpolation(x_sbatti, count, m);
                        wingLeft[currDuck].rotation.y = interpolation(y_sbatti, count, m);
                        wingLeft[currDuck].rotation.z = -interpolation(z_sbatti, count, m);

                        wingRight[currDuck].position.x = 0.1;
                        wingRight[currDuck].position.y = 0.1; */

                        if(versoRight[currDuck] == 0){
                            wingRight[currDuck].rotation.x += 0.1;
                            incrementWingRight[currDuck] += 0.1
                            if(incrementWingRight[currDuck] > 0.8) versoRight[currDuck] = 1;
                        }else if(versoRight[currDuck] == 1) {
                            wingRight[currDuck].rotation.x -= 0.1;
                            incrementWingRight[currDuck] -= 0.1
                            if(incrementWingRight[currDuck] < -0.8) versoRight[currDuck] = 0;
                        }

                        // wingRight[currDuck].position.x = interpolation(x_keyFrame, count, m) + 0.005;
                        // wingRight[currDuck].position.y = interpolation(y_keyFrame, count, m) + 0.0005;
                       
                        // wingRight[currDuck].position.z = 0.032; 
                        /*wingRight[currDuck].position.z = 0.9;
                        wingRight[currDuck].rotation.x = interpolation(x_sbatti_3, count, m);
                        wingRight[currDuck].rotation.y = interpolation(y_sbatti_3, count, m);
                        wingRight[currDuck].rotation.z = interpolation(z_sbatti_3, count, m);
                        */
                        // leg[currDuck].position.x = interpolation(x_keyFrame, count, m) - 0.045;
                        // leg[currDuck].position.y = interpolation(y_keyFrame, count, m) - 0.05;
                    }

                    birds[currDuck].position.x = interpolation(x_keyFrame, count, m);
                    birds[currDuck].position.y = interpolation(y_keyFrame, count, m);


                    showedDucks.unshift(currDuck);
                    countElem.unshift(++count);
                    x_keyFramesDucks.unshift(x_keyFrame);
                    y_keyFramesDucks.unshift(y_keyFrame);

                }
                else {
                    console.log("UCCISSAAAAAAAAAAAAA");


                    fall_bird(birds[currDuck], x_keyFrame, y_keyFrame, currDuck);
                    // fall_bird_part(wingLeft[currDuck], birds[currDuck]);
                    // fall_bird_part(wingRight[currDuck], birds[currDuck]);
                }



            } else {
                console.log("ENTRATO IN AREA RIMOZIONE");
                removeBird(currDuck);

                console.log(availableDucks);
                console.log(x_keyFramesDucks);

                errors -= 1;
                scene.remove(txtError);
                createError(errors);

                //console.log(availableDucks);
                //console.log("Curr duck");
                //console.log(currDuck);
                //console.log("ARRAy");
                //console.log(showedDucks);
                console.log("Rimossa anatra: " + currDuck.toString());
                incrementWingLeft[currDuck] = 0;
                incrementWingRight[currDuck] = 0;
                
                if (errors == 0) { 
                    startGame = 0; 
                    levelUpText(); 
                    setTimeout(function() {
                        document.getElementById("centerBox2").style.visibility = "visible";
                        document.getElementById("score").innerHTML = "Your Score: " + points;
                    }, 4000);
                }
            }
        }

    }

}

/*************************************** FALL DOWN *******************************/


function fall_bird_part(bird, group){

    if (bird.position.y > -0.2){
        bird.position.y-=0.005;
        bird.rotation.x += 0.05;
    }
    else{
        group.visible = false;

    }
}


function fall_bird(bird, x_keyFrame, y_keyFrame, currDuck){
    if (bird.position.y > -0.2){
        bird.rotation.x -= 0.08;
        bird.position.y -=0.01;
        showedDucks.unshift(currDuck);
        countElem.unshift(++count);
        x_keyFramesDucks.unshift(x_keyFrame);
        y_keyFramesDucks.unshift(y_keyFrame);
    }
    else{
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

    var directionalLight =  new THREE.DirectionalLight( 0xffffff, 1.5 );
    directionalLight.position.set( -5, 2, 1 );

    var directionalLight2 =  new THREE.DirectionalLight( 0xffffff, 1.5 );
    directionalLight2.position.set( 5, -2, 1 );

    var directionalLight3 =  new THREE.DirectionalLight( 0xffffff, 0.4 );
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
    birds[0] = new THREE.Group();
    birds[0].name = "birds1";
    birds[1] = new THREE.Group();
    birds[1].name = "birds2";
    birds[2] = new THREE.Group();
    birds[2].name = "birds3";
    birds[3] = new THREE.Group();
    birds[3].name = "birds4";
    birds[4] = new THREE.Group();
    birds[4].name = "birds5";


    /************ TEXTURE  **************/

    var textureLoader = new THREE.TextureLoader();
    var groundTexture = textureLoader.load( '../three.js-master/examples/textures/terrain/grasslight-big.jpg' );
    groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
    groundTexture.repeat.set( 256, 256 );
    var groundMaterial = new THREE.MeshBasicMaterial( { map: groundTexture } );
    var groundGeo = new THREE.PlaneGeometry( 200, 200 );
    var mesh = new THREE.Mesh(groundGeo,groundMaterial);
    mesh.position.y =-1.9;
    mesh.rotation.x = -Math.PI/2;
    mesh.doubleSided = true;
    scene.add(mesh);

    /**************** PANEL SCORE AND ERROR ****************/

    createText(points);
    createError(errors);

    /**** START GAME ****/
    document.getElementById("start").onclick = function(){ 
        document.getElementById("centerBox").style.visibility = "hidden";
        setTimeout(function(){levelUpText();}, 1000);
        
    }

    /**** RESTART GAME ****/
    document.getElementById("restart").onclick = function(){ 
        window.location.reload();
    }

    /*******PAUSE******/
    document.getElementById("ButtonPause").onclick = function(){ 
        if(pause == 0) {pause = 1; Pause(); }
        else {pause = 0; startGame = 1; txtPause.visible = false;}};

    /*********** SKY **************************/

    var skyGeo = new THREE.CubeGeometry( 1000, 1000, 1000 );
    var skyMaterial = new THREE.MeshBasicMaterial( { color: 0x9999ff, side: THREE.BackSide } );
    var sky = new THREE.Mesh( skyGeo, skyMaterial );
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

    loader.load( './models3D/clouds/scene.gltf', function ( gltf ) {

        clouds2[0] =gltf.scene;
        clouds2[0].scale.x /=15;
        clouds2[0].scale.y /=15;
        clouds2[0].scale.z /=15;
        clouds2[0].rotation.x=0.0;
        clouds2[0].position.y = 0.6;
        clouds2[0].position.x =-0.2;
        clouds2[0].position.z = -0.3;
        clouds.add(clouds2[0]);
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/clouds/scene.gltf', function ( gltf ) {

        clouds2[1] =gltf.scene;
        clouds2[1].scale.x /=15;
        clouds2[1].scale.y /=15;
        clouds2[1].scale.z /=15;
        clouds2[1].rotation.x=0.0;
        clouds2[1].position.y = 0.7;
        clouds2[1].position.x =-1.2;
        clouds2[1].position.z = -0.3;
        clouds.add(clouds2[1]);
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/clouds/scene.gltf', function ( gltf ) {

        clouds2[2] =gltf.scene;
        clouds2[2].scale.x /=15;
        clouds2[2].scale.y /=15;
        clouds2[2].scale.z /=15;
        clouds2[2].rotation.x=0.0;
        clouds2[2].position.y = 0.5;
        clouds2[2].position.x =0.7;
        clouds2[2].position.z = -2.3;
        clouds.add(clouds2[2]);
    },
    undefined, function ( error )
    { console.error( error ); } );
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

    base = new THREE.Group();
    scene.add(base);


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

        base.add(gun);
    },
    undefined, function ( error )
    { console.error( error ); } );

    /************************** 5 DUCKS  ***************************************/

    loader.load( './models3D/duck/firstpartduck.glb', function ( gltf ) {

        flying[0] = gltf.scene;
        console.log(flying);
        flying[0].scale.x /=55;
        flying[0].scale.y /=55;
        flying[0].scale.z /=55;
        flying[0].rotation.x = 0.0;
        flying[0].rotation.y = 1.55;
        flying[0].rotation.z = 1.5;
        flying[0].position.x = 0.0;
        flying[0].position.y = 0.0;
        birds[0].add(flying[0]);
        birds[0].visible = false;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

        wingLeft[0] = gltf.scene;
        wingLeft[0].scale.x /=55;
        wingLeft[0].scale.y /=55;
        wingLeft[0].scale.z /=55;
        wingLeft[0].rotation.x = 0.2;
        wingLeft[0].rotation.y = -0.1;
        wingLeft[0].rotation.z = 0.;
        wingLeft[0].position.x = 0.0;
        wingLeft[0].position.y = -0.01;
        wingLeft[0].position.z = 0.02;
        birds[0].add(wingLeft[0]);
        birds[0].visible = false;
        
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

        wingRight[0] =gltf.scene;
        wingRight[0].scale.x /=55;
        wingRight[0].scale.y /=55;
        wingRight[0].scale.z /=55;
        wingRight[0].rotation.x = 2.94157792;
        wingRight[0].rotation.y = 0;
        wingRight[0].rotation.z = 3.14159;
        wingRight[0].position.x = 0.0;
        wingRight[0].position.y = -0.01;
        wingRight[0].position.z = -0.02;
        birds[0].add(wingRight[0]);
        birds[0].visible = false;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/thirdpartduck.glb', function ( gltf ) {

        leg[0] =gltf.scene;
        leg[0].scale.x /=40;
        leg[0].scale.y /=40;
        leg[0].scale.z /=40;
        leg[0].rotation.x = 0.;
        leg[0].rotation.y = 1.5708;
        leg[0].rotation.z = -1.5708;
        leg[0].position.x = 0.047;
        leg[0].position.y = -0.0663;
        leg[0].position.z = -0.004;
        birds[0].add(leg[0]);
        birds[0].visible = false;
    },
    undefined, function ( error )
    { console.error( error ); } );


    loader.load( './models3D/duck/firstpartduck.glb', function ( gltf ) {

        flying[1] = gltf.scene;
        console.log(flying);
        flying[1].scale.x /=50;
        flying[1].scale.y /=50;
        flying[1].scale.z /=50;
        flying[1].rotation.x = 0.0;
        flying[1].rotation.y = 1.55;
        flying[1].rotation.z = 1.5;
        flying[1].position.x = 0.0;
        flying[1].position.y = 0.0;
        birds[1].add(flying[1]);
        birds[1].visible = false;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

        wingLeft[1] =gltf.scene;
        wingLeft[1].scale.x /=55;
        wingLeft[1].scale.y /=55;
        wingLeft[1].scale.z /=55;
        wingLeft[1].rotation.y = -0.1;
        wingLeft[1].rotation.z = 0.;
        wingLeft[1].rotation.x = 0.2;
        wingLeft[1].position.x = 0.0;
        wingLeft[1].position.y = -0.01;
        wingLeft[1].position.z = 0.02;
        birds[1].add(wingLeft[1]);
        birds[1].visible = false;
    },
    undefined, function ( error )
    { console.error( error ); } );


    loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

        wingRight[1] =gltf.scene;
        wingRight[1].scale.x /=55;
        wingRight[1].scale.y /=55;
        wingRight[1].scale.z /=55;
        wingRight[1].rotation.x = 2.94157792;
        wingRight[1].rotation.y = 0;
        wingRight[1].rotation.z = 3.14159;
        wingRight[1].position.x = 0.0;
        wingRight[1].position.y = -0.01;
        wingRight[1].position.z = -0.02;
        birds[1].add(wingRight[1]);
        birds[1].visible =false;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/thirdpartduck.glb', function ( gltf ) {

        leg[1] =gltf.scene;
        leg[1].scale.x /=40;
        leg[1].scale.y /=40;
        leg[1].scale.z /=40;
        leg[1].rotation.x = 0.;
        leg[1].rotation.y = 1.5708;
        leg[1].rotation.z = -1.5708;
        leg[1].position.x = 0.047;
        leg[1].position.y = -0.0726;
        leg[1].position.z = -0.004;
        birds[1].add(leg[1]);
        birds[1].visible = false;
    },
    undefined, function ( error )
    { console.error( error ); } );
    

    loader.load( './models3D/duck/firstpartduck2.glb', function ( gltf ) {

        flying[2] = gltf.scene;
        console.log(flying);
        flying[2].scale.x /=50;
        flying[2].scale.y /=50;
        flying[2].scale.z /=50;
        flying[2].rotation.x = 0.0;
        flying[2].rotation.y = 1.55;
        flying[2].rotation.z = 1.5;
        flying[2].position.x = 0.0;
        flying[2].position.y = 0.0;
        birds[2].add(flying[2]);
        birds[2].visible = false;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

        wingLeft[2] =gltf.scene;
        wingLeft[2].scale.x /=55;
        wingLeft[2].scale.y /=55;
        wingLeft[2].scale.z /=55;
        wingLeft[2].rotation.y = -0.1;
        wingLeft[2].rotation.z = 0.;
        wingLeft[2].rotation.x = 0.2;
        wingLeft[2].position.x = 0.0;
        wingLeft[2].position.y = -0.01;
        wingLeft[2].position.z = 0.02;
        birds[2].add(wingLeft[2]);
        birds[2].visible = false;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

        wingRight[2] =gltf.scene;
        wingRight[2].scale.x /=55;
        wingRight[2].scale.y /=55;
        wingRight[2].scale.z /=55;
        wingRight[2].rotation.x = 2.94157792;
        wingRight[2].rotation.y = 0;
        wingRight[2].rotation.z = 3.14159;
        wingRight[2].position.x = 0.0;
        wingRight[2].position.y = -0.01;
        wingRight[2].position.z = -0.02;
        birds[2].add(wingRight[2]);
        birds[2].visible = false;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/thirdpartduck.glb', function ( gltf ) {

        leg[2] =gltf.scene;
        leg[2].scale.x /=55;
        leg[2].scale.y /=55;
        leg[2].scale.z /=55;
        leg[2].rotation.x = 0.;
        leg[2].rotation.y = 1.5708;
        leg[2].rotation.z = -1.5708;
        leg[2].position.x = 0.047;
        leg[2].position.y = -0.07;
        leg[2].position.z = -0.004;
        birds[2].add(leg[2]);
        birds[2].visible = false;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/firstpartduck3.glb', function ( gltf ) {

        flying[3] = gltf.scene;
        console.log(flying);
        flying[3].scale.x /=50;
        flying[3].scale.y /=50;
        flying[3].scale.z /=50;
        flying[3].rotation.x = -1.5708;
        flying[3].rotation.y = -1.5708;
        flying[3].rotation.z = -0.13;
        flying[3].position.y = 0.0;
        flying[3].position.x = 0.0;
        birds[3].add(flying[3]);
        birds[3].visible = false;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

        wingLeft[3] =gltf.scene;
        wingLeft[3].scale.x /=55;
        wingLeft[3].scale.y /=55;
        wingLeft[3].scale.z /=55;
        wingLeft[3].rotation.x = 2.94157792;
        wingLeft[3].rotation.y = 0;
        wingLeft[3].rotation.z = 3.14159;
        wingLeft[3].position.x = 0.0;
        wingLeft[3].position.y = -0.008;
        wingLeft[3].position.z = -0.02;
        birds[3].add(wingLeft[3]);
        birds[3].visible = false;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

        wingRight[3] =gltf.scene;
        wingRight[3].scale.x /=55;
        wingRight[3].scale.y /=55;
        wingRight[3].scale.z /=55;
        wingRight[3].rotation.y = -0.1;
        wingRight[3].rotation.z = 0.;
        wingRight[3].rotation.x = 0.2;
        wingRight[3].position.x = 0.0;
        wingRight[3].position.y = -0.008;
        wingRight[3].position.z = 0.02;
        birds[3].add(wingRight[3]);
        birds[3].visible = false;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/thirdpartduck.glb', function ( gltf ) {

        leg[3] =gltf.scene;
        leg[3].scale.x /=40;
        leg[3].scale.y /=40;
        leg[3].scale.z /=40;
        leg[3].rotation.x = 0.;
        leg[3].rotation.y = -1.5708;
        leg[3].rotation.z = -1.5708;
        leg[3].position.x = -0.047;
        leg[3].position.y = -0.073;
        leg[3].position.z = +0.002;
        birds[3].add(leg[3]);
        birds[3].visible = false;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/firstpartduck2.glb', function ( gltf ) {

        flying[4] = gltf.scene;
        console.log(flying);
        flying[4].scale.x /=50;
        flying[4].scale.y /=50;
        flying[4].scale.z /=50;
        flying[4].rotation.x = -1.5708;
        flying[4].rotation.y = -1.5708;
        flying[4].rotation.z = -0.13;
        flying[4].position.y = 0.0;
        flying[4].position.x = 0.0;
        birds[4].add(flying[4]);
        birds[4].visible = false;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

        wingLeft[4] =gltf.scene;
        wingLeft[4].scale.x /=55;
        wingLeft[4].scale.y /=55;
        wingLeft[4].scale.z /=55;
        wingLeft[4].rotation.x = 2.94157792;
        wingLeft[4].rotation.y = 0;
        wingLeft[4].rotation.z = 3.14159;
        wingLeft[4].position.x = 0.0;
        wingLeft[4].position.y = -0.008;
        wingLeft[4].position.z = -0.02;
        birds[4].add(wingLeft[4]);
        birds[4].visible = false;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

        wingRight[4] =gltf.scene;
        wingRight[4].scale.x /=55;
        wingRight[4].scale.y /=55;
        wingRight[4].scale.z /=55;
        wingRight[4].rotation.y = -0.1;
        wingRight[4].rotation.z = 0.;
        wingRight[4].rotation.x = 0.2;
        wingRight[4].position.x = 0.0;
        wingRight[4].position.y = -0.008;
        wingRight[4].position.z = 0.02;
        birds[4].add(wingRight[4]);
        birds[4].visible = false;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/thirdpartduck.glb', function ( gltf ) {

        leg[4] =gltf.scene;
        leg[4].scale.x /=40;
        leg[4].scale.y /=40;
        leg[4].scale.z /=40;
        leg[4].rotation.x = 0.;
        leg[4].rotation.y = -1.5708;
        leg[4].rotation.z = -1.5708;
        leg[4].position.x = -0.047;
        leg[4].position.y = -0.073;
        leg[4].position.z = +0.002;
        birds[4].add(leg[4]);
        birds[4].visible = false;
    },
    undefined, function ( error )
    { console.error( error ); } );


    all_birds.add(birds[0]);
    all_birds.add(birds[1]);
    all_birds.add(birds[2]);
    all_birds.add(birds[3]);
    all_birds.add(birds[4]);

    scene.add(all_birds);
    scene.add(world);



    /******************** SET INTERVAL FOR SPAWN DUCKS *******************/

    game_over = setInterval(function(){
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