
var camera, scene, renderer, canvas;
var model1,model2,model3,model4;
var clouds,clouds2,clouds3;
var bush, bush2, bush3, bush4, bush5;
var gun, base;
var mouse, plane, raycaster, pointOfIntersection;
var texture, material;

/*********************** RESIZE CAMERA *******************/

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );

}


/************************** MOVE GUN *******************************/

function mouseMove(event){
    
        if (gun){
            

            mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            raycaster.ray.intersectPlane(plane, pointOfIntersection);
            console.log(pointOfIntersection);
            base.lookAt(pointOfIntersection);
        }

}


window.onload = function init() {

    /********* SCENE  ************/

	scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xffffff );

    /**** CAMERA  **************/

    camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,1000);
    camera.position.x = 0.0;
	camera.position.y = 0.0;
	camera.position.z = 2.0;
    camera.lookAt(scene.position);

    /********* DIRECTIONALE LIGHT *********/
	
	var directionalLight = new THREE.DirectionalLight(0xffffff);
	directionalLight.position.set(-2, 0, 10);
    scene.add(directionalLight);

    /************ RENDER ************/
    
    renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    canvas = renderer.domElement;
    document.body.appendChild(renderer.domElement);

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
    scene.add( mesh );

    /*********** SKY **************************/

    var skyGeo = new THREE.CubeGeometry( 1000, 1000, 1000 );
    var skyMaterial = new THREE.MeshBasicMaterial( { color: 0x9999ff, side: THREE.BackSide } );
    var sky = new THREE.Mesh( skyGeo, skyMaterial );
    scene.add(sky);

    /*********** RESIZE WINDOW ***********/

    window.addEventListener( 'resize', onWindowResize, false ); 

    /************* LOAD MODELS 3D ***********/

    var loader = new THREE.GLTFLoader(); 

    /************** 4 TREES ************************/
    
    loader.load( './models3D/tree/scene.gltf', function ( gltf ) { 
        model1 =gltf.scene;
        model1.scale.x /=15;
        model1.scale.y /=15;
        model1.scale.z /=15;
        model1.rotation.y = -0.2;
        model1.position.x +=1;
        model1.position.y -=0.2;
        scene.add( model1); 
    }, 
    undefined, function ( error ) 
    { console.error( error ); } );


    loader.load( './models3D/tree/scene.gltf', function ( gltf ) { 
        model2 =gltf.scene;
        model2.scale.x /=15;
        model2.scale.y /=15;
        model2.scale.z /=15;
        model2.rotation.y = 0.4;
        model2.position.x -=1.2;
        model2.position.y -=0.2;
        scene.add( model2); 
    }, 
    undefined, function ( error ) 
    { console.error( error ); } );

    loader.load( './models3D/tree/scene.gltf', function ( gltf ) { 
        model3 =gltf.scene;
        model3.scale.x /=15;
        model3.scale.y /=15;
        model3.scale.z /=15;
        model3.rotation.y = -0.2;
        model3.position.x =1.3;
        model3.position.y -=0.2;
        scene.add( model3); 
    }, 
    undefined, function ( error ) 
    { console.error( error ); } );

    loader.load( './models3D/tree/scene.gltf', function ( gltf ) { 
        model4 =gltf.scene;
        model4.scale.x /=15;
        model4.scale.y /=15;
        model4.scale.z /=15;
        model4.rotation.y = 0.4;
        model4.position.x =-1.4;
        model4.position.y -=0.2;
        scene.add( model4); 
    }, 
    undefined, function ( error ) 
    { console.error( error ); } );

    /***************** 3 CLOUDS ****************************/

    loader.load( './models3D/clouds/scene.gltf', function ( gltf ) { 

        clouds =gltf.scene;
        clouds.scale.x /=15;
        clouds.scale.y /=15;
        clouds.scale.z /=15;
        console.log(clouds);
        clouds.rotation.x=0.0;
        clouds.position.y = 0.4;
        clouds.position.x =0;
        scene.add( clouds); 
    }, 
    undefined, function ( error ) 
    { console.error( error ); } );

    loader.load( './models3D/clouds/scene.gltf', function ( gltf ) { 

        clouds2 =gltf.scene;
        clouds2.scale.x /=15;
        clouds2.scale.y /=15;
        clouds2.scale.z /=15;
        console.log(clouds);
        clouds2.rotation.x=0.0;
        clouds2.position.y = 0.5;
        clouds2.position.x =-0.7;
        scene.add( clouds2); 
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
        scene.add( clouds3); 
    }, 
    undefined, function ( error ) 
    { console.error( error ); } );

    /*************************** 5 BUSHES ******************************/

    loader.load( './models3D/bush/scene.gltf', function ( gltf ) { 

        bush =gltf.scene;
        bush.scale.x /=200;
        bush.scale.y /=200;
        bush.scale.z /=200;
        bush.rotation.x=0.0;
        bush.position.y = -0.38;
        bush.position.x =0.8;
        scene.add( bush); 
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
        scene.add( bush2); 
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
        bush3.position.z = 0.4;
        bush3.position.x =0.0;
        scene.add( bush3); 
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
        bush4.position.z = 0.4;
        bush4.position.x =-0.4;
        scene.add( bush4); 
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
        bush5.position.z = 0.4;
        bush5.position.x =0.4;
        scene.add( bush5); 
    }, 
    undefined, function ( error ) 
    { console.error( error ); } );

    /************************ GUN **********************************/

    base = new THREE.Group();
    scene.add(base);
    
    loader.load( './models3D/gun/scene.gltf', function ( gltf ) { 

        gun =gltf.scene;
        gun.scale.x /=30;
        gun.scale.y /=30;
        gun.scale.z /=30;
        gun.position.z = -1.3;
        gun.rotation.y = -1.5;
        gun.rotation.x = -0.1;
        gun.position.x =0.4;
        base.add(gun); 
    }, 
    undefined, function ( error ) 
    { console.error( error ); } );


    /**************************** MOUSE + GUN *******************************/

    plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 5);
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    pointOfIntersection = new THREE.Vector3();

    document.addEventListener("mousemove",mouseMove, false);
    render();
    
}

function render() {
	
	requestAnimationFrame(render);
	renderer.render(scene, camera);
}
