

var camera, scene, renderer, canvas;

var trees,model1,model2,model3,model4;
var clouds,clouds1,clouds2,clouds3;
var bushes, bush1, bush2, bush3, bush4, bush5, bush6, bush7, bush8, bush9;
var gun, base, world,duck;

var game_over;

var textGeo, textMesh, txt, txtError, textError, text;
var loaderFT;

var all_birds, birds1,birds2,birds3,birds4,birds5;
var wingLeft1, wingRight1, wingLeft2, wingRight2, wingLeft3, wingRight3, wingLeft4, wingRight4, wingLeft5, wingRight5;
var leg1, leg2, leg3,leg4, leg5;
var flying1,flying2,flying3, flying4, flying5;

var mouse, plane, raycaster, pointOfIntersection;
var raycaster2, pointOfIntersection2;

var texture, material;
var bullets =[];
var count=0;

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

var speed = 40;

// counter of ducks hit by player
var points = 0;

// max number errors before game over
var errors = 5;

var x_pos = [-0.03,-0.09,-0.12,-0.15,-0.18,-0.21,-0.24,-0.27,-0.3,-0.33,-0.36,-0.40,-0.43,-0.46,-0.49,-0.51,-0.54, -0.57,-0.60,-0.63,-0.66,-0.69];
var y_pos = [-0.15,-0.1,-0.05,0.0,0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55, 0.60,0.65, 0.70,0.75,0.80,0.85,0.90];

// var x_sbatti = [-0.515,-0.488,-0.415,-0.307,-0.176,-0.034,0.109,0.240,0.348,0.421,0.348,0.240,0.109,-0.034,-0.176,-0.307,-0.415,-0.488]
// var y_sbatti = [0.309,0.283,0.211,0.105,-0.024,-0.164,-0.305,-0.434,-0.540,-0.612,-0.540,-0.434,,-0.305,-0.164,-0.024,0.105,0.211,0.283]
// var z_sbatti = [-0.799,-0.794,-0.781,-0.762,-0.738,-0.713,-0.687,-0.663,-0.644,-0.631,-0.644,-0.663,-0.687,-0.713,-0.738,-0.762,-0.781,-0.794]
var x_sbatti = [-0.515,-0.445,-0.270,-0.041,0.196,0.378,0.448,0.378,0.196,-0.041,-0.270,-0.445,-0.515];
var y_sbatti = [0.309,0.240,0.068,-0.157,-0.391,-0.569,-0.638,-0.569,-0.391,-0.157,0.068,0.240,0.309];
var z_sbatti = [-0.799,-0.787,-0.755,-0.714,-0.671,-0.639,-0.626,-0.639,-0.671,-0.714,-0.755,-0.787,-0.799];

var x_sbatti_2 = [0.448,0.378,0.196,-0.041,-0.270,-0.445,-0.515,-0.445,-0.270,-0.041,0.196,0.378,0.448];
var y_sbatti_2 = [-0.638,-0.569,-0.391,-0.157,0.068,0.240,0.309,0.240,0.068,-0.157,-0.391,-0.569,-0.638];
var z_sbatti_2 = [-0.626,-0.639,-0.671,-0.714,-0.755,-0.787,-0.799,-0.787,-0.755,-0.714,-0.671,-0.639,-0.626];

// var x_sbatti_3 = [0.644,0.641,0.632,0.620,0.607,0.598,0.594,0.598,0.607,0.620,0.632,0.641,0.644];
// var y_sbatti_3 = [0.651,0.656,0.671,0.690,0.709,0.724,0.730,0.724,0.709,0.690,0.671,0.656,0.651];
// var z_sbatti_3 = [0.402,0.348,0.213,0.038,-0.144,-0.281,-0.337,-0.281,-0.144,0.038,0.213,0.348,0.402];

var x_sbatti_3 = [-0.451,-0.376,-0.186,0.062,0.318,0.510,0.590,0.510,0.318,0.062,-0.186,-0.376,-0.451];
var y_sbatti_3 = [0.534,0.454,0.253,-0.008,-0.279,-0.482,-0.567,-0.482,-0.279,-0.008,0.253,0.454,0.534];
var z_sbatti_3 = [-0.715,-0.705,-0.679,-0.646,-0.611,-0.586,-0.575,-0.586,-0.611,-0.646,-0.679,-0.705,-0.715];

var x_pos_2 = [-0.60, -0.63,-0.66, -0.69,-0.71,-0.73,-0.76,-0.79,-0.81, -0.84,-0.87, -0.90, -0.93,-0.96,-0.99,-1.01, -1.04, -1.07,-1.10,-1.13,-1.16,-1.19];
var y_pos_2 = [-0.15,-0.1,-0.05,0.0,0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55, 0.60,0.65, 0.70,0.75,0.80,0.85,0.90];
var x_sbatti2 = [1.,0.2,-0.2,-1.,-0.2,0.2,0.6]
var x_pos_3 = [-1.10,-1.13,-1.17,-1.20,-1.23,-1.26,-1.29,-1.32,-1.35,-1.38,-1.41, -1.44,-1.47, -1.50,-1.53, -1.56,-1.59, -1.62,-1.65,-1.68,-1.71,-1.74];
var y_pos_3 = [-0.15,-0.1,-0.05,0.0,0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55, 0.60,0.65, 0.70,0.75,0.80,0.85,0.90];

var x_pos_4 = [-0.03,0.0,0.03,0.06,0.09,0.12,0.15,0.18,0.21,0.24, 0.27,0.30, 0.33,0.37, 0.4,0.43, 0.46,0.49, 0.52,0.55,0.58,0.61];
var y_pos_4 = [-0.15,-0.1,-0.05,0.0,0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55, 0.60,0.65, 0.70,0.75,0.80,0.85,0.90];

var x_pos_5 = [0.70,0.73,0.76,0.79,0.82,0.85,0.88,0.91,0.94, 0.97,1.0, 1.03,1.06, 1.09,1.12, 1.15,1.18, 1.21,1.24,1.27,1.30,1.33];
var y_pos_5 = [-0.15,-0.1,-0.05,0.0,0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55, 0.60,0.65, 0.70,0.75,0.80,0.85,0.90];
var interval = 60;

/*********************** RESIZE CAMERA *******************/

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );

}

/************************ INTERPOLATION FOR ANIMATION ********/

function interpolation(keyframe_list, tick, interv){
    var i = Math.floor(tick/5)%(keyframe_list.length-1);
    return (1 - (tick%interv)/interv)*keyframe_list[i] + ((tick%interv)/interv)*keyframe_list[i+1]
}


/************************** MOVE GUN *******************************/

function mouseMove(event){

        if (gun){

            mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            raycaster.ray.intersectPlane(plane, pointOfIntersection);
            base.lookAt(pointOfIntersection);
        }
}

/**************************** SHOT  *********************************/

function mouseClick(event){

    if (gun){

        var bullet = new THREE.Mesh(new THREE.SphereGeometry(0.05,8,8), new THREE.MeshBasicMaterial({color:0xffffff}));
        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        raycaster.ray.intersectPlane(plane, pointOfIntersection);
        bullet.position.set(pointOfIntersection.x,pointOfIntersection.y,pointOfIntersection.z);
        bullet.velocity = new THREE.Vector3(
			-Math.sin(camera.rotation.y),
			0,
			Math.cos(camera.rotation.y)
        );
        setTimeout(function(){
			bullet.alive = false;
			scene.remove(bullet);
        }, 100);

        raycaster2 = new THREE.Raycaster();
        raycaster2.setFromCamera(mouse, camera);
        var intersects = raycaster2.intersectObjects( all_birds.children, true);

        if(intersects.length > 0){


            var x_intersects = intersects[0].point.x.toPrecision(1);
            var y_intersects = intersects[0].point.y.toPrecision(1);
            var z_intersects = intersects[0].point.z.toPrecision(1);
            console.log(x_intersects);

            if (x_intersects == flying1.position.x.toPrecision(1)){
                if (hit1){
                    if (y_intersects == flying1.position.y.toPrecision(1)){
                        points+=1;
                        scene.remove(txt);
                        createText(points);
                        hit1 = false;
                    }
                }
            }
            else if (x_intersects == flying2.position.x.toPrecision(1)){
                if (hit2){
                    if (y_intersects == flying2.position.y.toPrecision(1)){
                        points+=1;
                        scene.remove(txt);
                        createText(points);
                        hit2=false;
                    }
                }
            }
            else if (x_intersects == flying3.position.x.toPrecision(1)){
                if (hit3){
                    if (y_intersects == flying3.position.y.toPrecision(1)){
                        points+=1;
                        scene.remove(txt);
                        createText(points);
                        hit3=false;
                    }
                }
            }
            else if (x_intersects == flying4.position.x.toPrecision(1)){
                if (hit4){
                    if (y_intersects == flying4.position.y.toPrecision(1)){
                        points+=1;
                        scene.remove(txt);
                        createText(points);
                        hit4=false;
                    }
                }
            }
            else{
                if (x_intersects == flying5.position.x.toPrecision(1)){
                    if (hit5){
                        if (y_intersects == flying5.position.y.toPrecision(1)){
                            points+=1;
                            scene.remove(txt);
                            createText(points);
                            hit5=false;
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

/*********************** BIRDS FLYING **************************/

function animationBirds(){
    count+=1;

    var m = 5;



    //console.log(count);
    if (count<(21*m)){
        birds1.visible=true;
        if (hit1){

            // flying1.position.x = 0.0;
            // flying1.position.y = 0.0;
            // wingLeft1.position.x = - 0.5 - 0.005;
            // wingLeft1.position.y =  - 0.01;
            // wingRight1.position.x = 0.5- 0.005;
            // wingRight1.position.y =  - 0.01;

            flying1.position.x = interpolation(x_pos,count,m);
            flying1.position.y = interpolation(y_pos,count,m);
            
            wingLeft1.position.x = interpolation(x_pos,count,m) - 0.005;
            wingLeft1.position.y = interpolation(y_pos,count,m) - 0.005;
            wingLeft1.position.z = 0.02;
            wingLeft1.rotation.x = interpolation(x_sbatti,count,m);
            wingLeft1.rotation.y = interpolation(y_sbatti,count,m);
            wingLeft1.rotation.z = interpolation(z_sbatti,count,m);

            wingRight1.position.x = interpolation(x_pos,count,m) - 0.005;
            wingRight1.position.y = interpolation(y_pos,count,m) - 0.005;
            wingRight1.position.z = -0.05;
            wingRight1.rotation.x = -interpolation(x_sbatti_2,count,m);
            wingRight1.rotation.y = -interpolation(y_sbatti_2,count,m);
            wingRight1.rotation.z = interpolation(z_sbatti_2,count,m);
            
            leg1.position.x =  interpolation(x_pos,count,m)+ 0.045;
            leg1.position.y = interpolation(y_pos,count,m)- 0.03;


        }
        else{
            fall_birds(flying1, birds1);
            fall_birds(wingLeft1, birds1);
            fall_birds(wingRight1, birds1);
            leg1.visible=false;
        }

        /*********************** FOR LEVELS ---> ADD DUCK **************/
        // IF YOU UNCOMMENT THIS PART TWO DUCKS START AT THE SAME TIME
        // "COUNT" VARIABLE IDENTIFIES THE TIME

        // birds2.visible=true;
        // if (flag_birds2){
        //     flying2.position.x = interpolation(x_pos_2,count,60);
        //     flying2.position.y = interpolation(y_pos_2,count,60);
        // }
        // else{
        //     fall_birds(flying2, birds2);
        // }

    }
    else{
        if (hit1){
            if (error1){
                errors-=1;
                scene.remove(txtError);
                createError(errors);
                error1 = false;
            }

        }
        if (errors == 0){
            clearInterval(game_over);
        }
        birds1.visible=false;
        if(count>(21*m)){
            if (count <(42*m)){
                birds2.visible=true;
                if (hit2){
                    flying2.position.x = interpolation(x_pos_2,count,m);
                    flying2.position.y = interpolation(y_pos_2,count,m);
                    
                    // wingLeft2.position.x = interpolation(x_pos_2,count,60);
                    // wingLeft2.position.y = interpolation(y_pos_2,count,60);
                    // wingLeft2.rotation.x = interpolation(x_sbatti,count,60);
                    // wingLeft2.rotation.z = interpolation(x_sbatti,count,60);

                    wingLeft2.position.x = interpolation(x_pos_2,count,m) - 0.005;
                    wingLeft2.position.y = interpolation(y_pos_2, count, m) - 0.005;
                    wingLeft2.position.z = 0.0013;
                    wingLeft2.rotation.x = interpolation(x_sbatti, count, m);
                    wingLeft2.rotation.y = interpolation(y_sbatti, count, m);
                    wingLeft2.rotation.z = interpolation(z_sbatti, count, m);
                    
                    wingRight2.position.x = interpolation(x_pos_2, count, m) - 0.005;
                    wingRight2.position.y = interpolation(y_pos_2, count, m) - 0.005;
                    wingRight2.position.z = -0.11;
                    //wingRight1.rotation.x = interpolation(x_sbatti,count,m);
                    // wingRight1.rotation.z = interpolation(x_sbatti,count,m);
                    wingRight2.rotation.x = -interpolation(x_sbatti_2, count, m);
                    wingRight2.rotation.y = -interpolation(y_sbatti_2, count, m);
                    wingRight2.rotation.z = interpolation(z_sbatti_2, count, m);
                    leg2.position.x =  interpolation(x_pos_2,count,m)+ 0.045;
                    leg2.position.y = interpolation(y_pos_2,count,m)- 0.03;
                }
                else{
                    fall_birds(flying2, birds2);
                    fall_birds(wingLeft2, birds2);
                    fall_birds(wingRight2, birds2);
                    leg2.visible=false;
                }
            }
            else{
                birds2.visible=false;
                if (hit2){
                    if (error2){
                        errors-=1;
                        scene.remove(txtError);
                        createError(errors);
                        error2 = false;
                    }
                }
                if (errors == 0){
                    clearInterval(game_over);
                }

                if(count>42*m){
                    if (count < 63*m){
                        birds3.visible=true;
                        if (hit3){
                            flying3.position.x = interpolation(x_pos_3,count,m);
                            flying3.position.y = interpolation(y_pos_3,count,m);
                            wingLeft3.position.x = interpolation(x_pos_3,count,m) - 0.005;
                            wingLeft3.position.y = interpolation(y_pos_3,count,m) - 0.005;
                            wingLeft3.position.z = 0.0011;
                            wingLeft3.rotation.x = interpolation(x_sbatti, count, m);
                            wingLeft3.rotation.y = interpolation(y_sbatti, count, m);
                            wingLeft3.rotation.z = interpolation(z_sbatti, count, m);

                            wingRight3.position.x = interpolation(x_pos_3,count,m) - 0.015;
                            wingRight3.position.y = interpolation(y_pos_3,count,m) - 0.005;
                            wingRight3.position.z = -0.1;
                            wingRight3.rotation.x = -interpolation(x_sbatti_2, count, m);
                            wingRight3.rotation.y = -interpolation(y_sbatti_2, count, m);
                            wingRight3.rotation.z = interpolation(z_sbatti_2, count, m);
                            leg3.position.x =  interpolation(x_pos_3,count,m)+ 0.045;
                            leg3.position.y = interpolation(y_pos_3,count,m)- 0.03;
                        }
                        else{
                            fall_birds(flying3, birds3);
                            fall_birds(wingLeft3, birds3);
                            fall_birds(wingRight3, birds3);
                            leg3.visible=false;
                        }
                    }

                    else{
                        if (hit3){
                            if (error3){
                                errors-=1;
                                scene.remove(txtError);
                                createError(errors);
                                error3 = false;
                            }
                        }
                        if (errors == 0){
                            clearInterval(game_over);
                        }
                        birds3.visible=false;
                        if (count >63*m){
                            if (count < 84*m){

                                birds4.visible=true;
                                if (hit4){

                                    // wingLeft4.position.x = -0.5- 0.005;
                                    // wingLeft4.position.y =  + 0.3;
                                    // wingRight4.position.x = 0.5 - 0.005;
                                    // wingRight4.position.y =  + 0.3;
                                    /*
                                    flying1.position.x = interpolation(x_pos,count,m);
                                    flying1.position.y = interpolation(y_pos,count,m);

                                    wingLeft1.position.x = interpolation(x_pos,count,m) - 0.005;
                                    wingLeft1.position.y = interpolation(y_pos,count,m) - 0.005;
                                    wingLeft1.position.z = 0.02;
                                    wingLeft1.rotation.x = interpolation(y_sbatti,count,2);
                                    wingLeft1.rotation.y = interpolation(x_sbatti,count,2);
                                    wingLeft1.rotation.z = interpolation(z_sbatti,count,2);

                                    // wingRight1.position.x = interpolation(x_pos,count,m) - 0.005;
                                    // wingRight1.position.y = interpolation(y_pos,count,m) - 0.005;
                                    wingRight1.position.z = -0.05;
                                    //wingRight1.rotation.x = interpolation(x_sbatti,count,m);
                                    // wingRight1.rotation.z = interpolation(x_sbatti,count,m);
                                    wingRight1.rotation.x = interpolation(y_sbatti_2,count,m);
                                    wingRight1.rotation.y = interpolation(x_sbatti_2,count,m);
                                    wingRight1.rotation.z = interpolation(z_sbatti_2,count,m);

                                    leg1.position.x =  interpolation(x_pos,count,m)+ 0.045;
                                    leg1.position.y = interpolation(y_pos,count,m)- 0.03;

                                    */

                                    flying4.position.x = interpolation(x_pos_4,count,m);
                                    flying4.position.y = interpolation(y_pos_4,count,m);
                                    wingLeft4.position.x = interpolation(x_pos_4,count,m) + 0.005;
                                    wingLeft4.position.y = interpolation(y_pos_4,count,m) + 0.005;
                                    wingLeft4.position.z = -0.1;
                                    wingLeft4.rotation.x = -interpolation(x_sbatti,count,m);
                                    wingLeft4.rotation.y = interpolation(y_sbatti,count,m);
                                    wingLeft4.rotation.z = -interpolation(z_sbatti,count,m);

                                    wingRight4.position.x = interpolation(x_pos_4,count,m) + 0.005;
                                    wingRight4.position.y = interpolation(y_pos_4,count,m) + 0.0005;
                                    wingRight4.position.z = 0.032;
                                    wingRight4.rotation.x = -interpolation(x_sbatti_3,count,m);
                                    wingRight4.rotation.y = interpolation(y_sbatti_3,count,m);
                                    wingRight4.rotation.z = -interpolation(z_sbatti_3,count,m);

                                    leg4.position.x =  interpolation(x_pos_4,count,m)- 0.045;
                                    leg4.position.y = interpolation(y_pos_4,count,m)- 0.05;
                                }
                                else{
                                    fall_birds(flying4, birds4);
                                    fall_birds(flying4, birds4);
                                    fall_birds(wingLeft4, birds4);
                                    fall_birds(wingRight4, birds4);
                                    leg4.visible=false;

                                }
                            }
                            else{
                                if (hit4){
                                    if (error4){
                                        errors-=1;
                                        scene.remove(txtError);
                                        createError(errors);
                                        error4 = false;
                                    }
                                }
                                if (errors == 0){
                                    clearInterval(game_over);
                                }
                                birds4.visible=false;
                                if (count > 84*m){
                                    if (count < 105*m){
                                        birds5.visible=true;
                                        if (hit5){
                                            flying5.position.x = interpolation(x_pos_5, count, m);
                                            flying5.position.y = interpolation(y_pos_4, count, m);
                                            wingLeft5.position.x = interpolation(x_pos_5, count, m) + 0.005;
                                            wingLeft5.position.y = interpolation(y_pos_5, count, m) + 0.005;
                                            wingLeft5.position.z = -0.1;
                                            wingLeft5.rotation.x = -interpolation(x_sbatti, count, m);
                                            wingLeft5.rotation.y = interpolation(y_sbatti, count, m);
                                            wingLeft5.rotation.z = -interpolation(z_sbatti, count, m);

                                            wingRight5.position.x = interpolation(x_pos_5, count, m) + 0.005;
                                            wingRight5.position.y = interpolation(y_pos_5, count, m) + 0.0005;
                                            wingRight5.position.z = 0.032;
                                            wingRight5.rotation.x = -interpolation(x_sbatti_3, count, m);
                                            wingRight5.rotation.y = interpolation(y_sbatti_3, count, m);
                                            wingRight5.rotation.z = -interpolation(z_sbatti_3, count, m);

                                            leg5.position.x = interpolation(x_pos_5, count, m) - 0.045;
                                            leg5.position.y = interpolation(y_pos_5, count, m) - 0.05;
                                        }
                                        else{
                                            fall_birds(flying5, birds5);
                                            fall_birds(wingLeft5, birds5);
                                            fall_birds(wingRight5, birds5);
                                            leg5.visible=false;
                                        }
                                    }
                                    else{
                                        if (hit5){
                                            if (error5){
                                                errors-=1;
                                                scene.remove(txtError);
                                                createError(errors);
                                                error5 = false;
                                            }
                                        }
                                        if (errors == 0){
                                            clearInterval(game_over);
                                        }
                                        birds5.visible=false;
                                        count =0;

                                        flying1.rotation.x = 0.0;
                                        flying1.rotation.z = 1.5;

                                        flying2.rotation.x = 0.0;
                                        flying2.rotation.z = 1.5;

                                        flying3.rotation.x = 0.0;
                                        flying3.rotation.z = 1.5;

                                        flying4.rotation.x = 0.0;
                                        flying4.rotation.z = 1.5;

                                        flying5.rotation.x = 0.0;
                                        flying5.rotation.z = 1.5;

                                        hit1=true;
                                        hit2=true;
                                        hit3=true;
                                        hit4=true;
                                        hit5=true;

                                        error1=true;
                                        error2=true;
                                        error3=true;
                                        error4=true;
                                        error5=true;


                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

}

/*************************************** FALL DOWN *******************************/

function fall_birds(bird, group){

    if (bird.position.y > 0.0){
        bird.position.y-=0.1;
        bird.rotation.x+=1;
    }
    else{
        group.visible = false;

    }
}

function fall_legs(bird, group){
    if (bird.position.y > 0.0){
        bird.position.y-=0.1;
        bird.rotation.x+=1;
    }
    else{
        group.visible = false;

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

    scene.add(directionalLight);
    scene.add(directionalLight2);


    /************ RENDER ************/

    renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    canvas = renderer.domElement;
    document.body.appendChild(renderer.domElement);

    /*********** RESIZE WINDOW ***********/

    window.addEventListener( 'resize', onWindowResize, false );

    /************* LOAD MODELS 3D ***********/

    var loader = new THREE.GLTFLoader();
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
    birds1 = new THREE.Group();
    birds1.name = "birds1";
    birds2 = new THREE.Group();
    birds2.name = "birds2";
    birds3 = new THREE.Group();
    birds3.name = "birds3";
    birds4 = new THREE.Group();
    birds4.name = "birds4";
    birds5 = new THREE.Group();
    birds5.name = "birds5";


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

        clouds1 =gltf.scene;
        clouds1.scale.x /=15;
        clouds1.scale.y /=15;
        clouds1.scale.z /=15;
        clouds1.rotation.x=0.0;
        clouds1.position.y = 0.4;
        clouds1.position.x =-0.2;
        clouds1.position.z = -0.3;
        clouds.add( clouds1);
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/clouds/scene.gltf', function ( gltf ) {

        clouds2 =gltf.scene;
        clouds2.scale.x /=15;
        clouds2.scale.y /=15;
        clouds2.scale.z /=15;
        clouds2.rotation.x=0.0;
        clouds2.position.y = 0.5;
        clouds2.position.x =-1.2;
        clouds2 .position.z = -0.3;
        clouds.add( clouds2);
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/clouds/scene.gltf', function ( gltf ) {

        clouds3 =gltf.scene;
        clouds3.scale.x /=15;
        clouds3.scale.y /=15;
        clouds3.scale.z /=15;
        clouds3.rotation.x=0.0;
        clouds3.position.y = 0.5;
        clouds3.position.x =0.7;
        clouds3.position.z = -0.3;
        clouds.add( clouds3);
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
        gun.scale.x /=50;
        gun.scale.y /=50;
        gun.scale.z /=50;
        gun.position.x = -0.1;
        gun.position.z = -1.5;
        gun.position.y = -0.5;

        gun.rotation.z = 0;
        gun.rotation.y = -3;
        gun.rotation.x = 0;

        base.add(gun);
    },
    undefined, function ( error )
    { console.error( error ); } );

    /************************** 5 DUCKS  ***************************************/

    loader.load( './models3D/duck/firstpartduck.glb', function ( gltf ) {

        flying1 =gltf.scene;
        flying1.scale.x /=55;
        flying1.scale.y /=55;
        flying1.scale.z /=55;
        flying1.rotation.y = 1.0;
        flying1.rotation.z = 1.5;
        flying1.rotation.x = 0.0;
        flying1.position.y = -0.2;
        flying1.position.x = 0.0;
        birds1.add(flying1);
        birds1.visible = true;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

        wingLeft1 =gltf.scene;
        wingLeft1.scale.x /=55;
        wingLeft1.scale.y /=55;
        wingLeft1.scale.z /=55;
        wingLeft1.rotation.y = -0.5;
        wingLeft1.rotation.z = 0;
        wingLeft1.rotation.x = 0.2;
        wingLeft1.position.y = -0.2;
        wingLeft1.position.x = 0.0;
        birds1.add(wingLeft1);
        birds1.visible = true;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

        wingRight1 =gltf.scene;
        wingRight1.scale.x /=55;
        wingRight1.scale.y /=55;
        wingRight1.scale.z /=55;
        wingRight1.rotation.y = -0.5;
        wingRight1.rotation.z = 0;
        wingRight1.rotation.x = 0.2;
        wingRight1.position.y = -0.2;
        wingRight1.position.x = 0.0;
        birds1.add(wingRight1);
        birds1.visible = true;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/thirdpartduck.glb', function ( gltf ) {

        leg1 =gltf.scene;
        leg1.scale.x /=40;
        leg1.scale.y /=40;
        leg1.scale.z /=40;
        leg1.rotation.y = 2;
        leg1.rotation.z = -1;
        leg1.rotation.x = -0.4;
        leg1.position.y = -0.26;
        leg1.position.x = 0.025;
        birds1.add(leg1);
        birds1.visible = true;
    },
    undefined, function ( error )
    { console.error( error ); } );


   loader.load( './models3D/duck/firstpartduck.glb', function ( gltf ) {

        flying2 =gltf.scene;
        flying2.scale.x /=50;
        flying2.scale.y /=50;
        flying2.scale.z /=50;
        flying2.rotation.y = 1.0;
        flying2.rotation.z = 1.8;
        flying2.rotation.x = 0.0;
        flying2.position.y = -0.2;
        flying2.position.x = -0.51;
        birds2.add(flying2);
        birds2.visible = false; 
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

        wingLeft2 =gltf.scene;
        wingLeft2.scale.x /=55;
        wingLeft2.scale.y /=55;
        wingLeft2.scale.z /=55;
        wingLeft2.rotation.y = -0.5;
        wingLeft2.rotation.z = 0;
        wingLeft2.rotation.x = 0.2;
        wingLeft2.position.y = -0.2;
        wingLeft2.position.x = -0.51;
        birds2.add(wingLeft2);
        birds2.visible = false;
    },
    undefined, function ( error )
    { console.error( error ); } );


    loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

        wingRight2 =gltf.scene;
        wingRight2.scale.x /=55;
        wingRight2.scale.y /=55;
        wingRight2.scale.z /=55;
        wingRight2.rotation.y = 0.5;
        wingRight2.rotation.z = 0;
        wingRight2.rotation.x = 3;
        wingRight2.position.y = -0.2;
        wingRight2.position.x = -0.51;
        birds2.add(wingRight2);
        birds2.visible =false;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/thirdpartduck.glb', function ( gltf ) {

        leg2 =gltf.scene;
        leg2.scale.x /=40;
        leg2.scale.y /=40;
        leg2.scale.z /=40;
        leg2.rotation.y = 2;
        leg2.rotation.z = -0.5;
        leg2.rotation.x = -1;
        leg2.position.y = -0.25;
        leg2.position.x = -0.47;
        birds2.add(leg2);
        birds2.visible = false;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/firstpartduck2.glb', function ( gltf ) {

        flying3 =gltf.scene;
        flying3.scale.x /=50;
        flying3.scale.y /=50;
        flying3.scale.z /=50;
        flying3.rotation.y =1.0;
        flying3.rotation.z = 1.8;
        flying3.rotation.x = 0.0;
        flying3.position.y = -0.2;
        flying3.position.x = -1.10;
        birds3.add(flying3);
        birds3.visible = false;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

        wingLeft3 =gltf.scene;
        wingLeft3.scale.x /=55;
        wingLeft3.scale.y /=55;
        wingLeft3.scale.z /=55;
        wingLeft3.rotation.y = -0.5;
        wingLeft3.rotation.z = 0;
        wingLeft3.rotation.x = 0.2;
        wingLeft3.position.y = -0.2;
        wingLeft3.position.x = -1.10;
        birds3.add(wingLeft3);
        birds3.visible = false;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

        wingRight3 =gltf.scene;
        wingRight3.scale.x /=55;
        wingRight3.scale.y /=55;
        wingRight3.scale.z /=55;
        wingRight3.rotation.y = 0.5;
        wingRight3.rotation.z = 0;
        wingRight3.rotation.x = 3;
        wingRight3.position.y = -0.2;
        wingRight3.position.x = -1.10;
        birds3.add(wingRight3);
        birds3.visible = false;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/thirdpartduck.glb', function ( gltf ) {

        leg3 =gltf.scene;
        leg3.scale.x /=55;
        leg3.scale.y /=55;
        leg3.scale.z /=55;
        leg3.rotation.y = 2;
        leg3.rotation.z = -0.5;
        leg3.rotation.x = -1.5;
        leg3.position.y = -0.25;
        leg3.position.x = -1.06;
        birds3.add(leg3);
        birds3.visible = false;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/firstpartduck3.glb', function ( gltf ) {

        flying4 =gltf.scene;
        flying4.scale.x /=50;
        flying4.scale.y /=50;
        flying4.scale.z /=50;
        flying4.rotation.y = -1.0;
        flying4.rotation.z = 1.8;
        flying4.rotation.x = 0.0;
        flying4.position.y = -0.2;
        flying4.position.x = -0.3;
        birds4.add(flying4);
        birds4.visible = false;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

        wingLeft4 =gltf.scene;
        wingLeft4.scale.x /=55;
        wingLeft4.scale.y /=55;
        wingLeft4.scale.z /=55;
        wingLeft4.rotation.y = -2.5;
        wingLeft4.rotation.z = 0;
        wingLeft4.rotation.x = 0.1;
        wingLeft4.position.y = -0.2;
        wingLeft4.position.x = -0.3;
        birds4.add(wingLeft4);
        birds4.visible = false;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

        wingRight4 =gltf.scene;
        wingRight4.scale.x /=55;
        wingRight4.scale.y /=55;
        wingRight4.scale.z /=55;
        wingRight4.rotation.y = 0.5;
        wingRight4.rotation.z = 0;
        wingRight4.rotation.x = 0.2;
        wingRight4.position.y = -0.2;
        wingRight4.position.x = -0.3;
        birds4.add(wingRight4);
        birds4.visible = false;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/thirdpartduck.glb', function ( gltf ) {

        leg4 =gltf.scene;
        leg4.scale.x /=40;
        leg4.scale.y /=40;
        leg4.scale.z /=40;
        leg4.rotation.y = -0.5;
        leg4.rotation.z = -1.8;
        leg4.rotation.x = 0;
        leg4.position.y = -0.255;
        leg4.position.x = -0.3;
        birds4.add(leg4);
        birds4.visible = false;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/firstpartduck2.glb', function ( gltf ) {

        flying5 =gltf.scene;
        flying5.scale.x /=50;
        flying5.scale.y /=50;
        flying5.scale.z /=50;
        flying5.rotation.y = -1.0;
        flying5.rotation.z = 1.5;
        flying5.rotation.x = 0.0;
        flying5.position.y = -0.2;
        flying5.position.x = 0.70;
        birds5.add(flying5);
        birds5.visible = false;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

        wingLeft5 =gltf.scene;
        wingLeft5.scale.x /=55;
        wingLeft5.scale.y /=55;
        wingLeft5.scale.z /=55;
        wingLeft5.rotation.y = -2.5;
        wingLeft5.rotation.z = 0;
        wingLeft5.rotation.x = 0.1;
        wingLeft5.position.y = -0.2;
        wingLeft5.position.x = -0.3;
        birds5.add(wingLeft5);
        birds5.visible = false;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/secondpartduck2.glb', function ( gltf ) {

        wingRight5 =gltf.scene;
        wingRight5.scale.x /=55;
        wingRight5.scale.y /=55;
        wingRight5.scale.z /=55;
        wingRight5.rotation.y = 0.5;
        wingRight5.rotation.z = 0;
        wingRight5.rotation.x = 0.2;
        wingRight5.position.y = -0.2;
        wingRight5.position.x = -0.3;
        birds5.add(wingRight5);
        birds5.visible = false;
    },
    undefined, function ( error )
    { console.error( error ); } );

    loader.load( './models3D/duck/thirdpartduck.glb', function ( gltf ) {

        leg5 =gltf.scene;
        leg5.scale.x /=40;
        leg5.scale.y /=40;
        leg5.scale.z /=40;
        leg5.rotation.y = -0.5;
        leg5.rotation.z = -1.8;
        leg5.rotation.x = 0;
        leg5.position.y = -0.255;
        leg5.position.x = -0.3;
        birds5.add(leg5);
        birds5.visible = false;
    },
    undefined, function ( error )
    { console.error( error ); } );

    // mltLoader.load("./models3D/duck/I19T6510H6KIQ8UWZV6ONLS80.mtl", function(materials){
    //     materials.preload();
    //     objLoader.setMaterials(materials);
    //     objLoader.load("./models3D/duck/I19T6510H6KIQ8UWZV6ONLS80.obj", function(object){
    //         object.scale.x /= 10;
    //         object.scale.y /= 10;
    //         object.scale.z /= 10;
    //         object.rotation.y = 1.8;
    //         object.rotation.z = 0.6;
    //         object.position.y = -0.2;
    //         object.position.x = 0.3;
    //         duck = object;
    //         scene.add(duck);
    //     });
    // });

    all_birds.add(birds1);
    all_birds.add(birds2);
    all_birds.add(birds3);
    all_birds.add(birds4);
    all_birds.add(birds5);

    scene.add(all_birds);
    scene.add(world);

    /******************** SET INTERVAL FOR SPAWN DUCKS *******************/

    game_over = setInterval(function(){
        animationBirds();
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

