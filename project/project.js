

var camera, scene, renderer, canvas;
var trees,model1,model2,model3,model4;
var clouds,clouds1,clouds2,clouds3;
var bushes, bush1, bush2, bush3, bush4, bush5, bush6, bush7, bush8,bush9;
var gun, base, world;
var duck, bird;
var mouse, plane, raycaster, pointOfIntersection;
var texture, material;
var bullets =[];

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
            base.lookAt(pointOfIntersection);
        }

}

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
        bullets.push(bullet);
		scene.add(bullet);
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
    var mltLoader = new THREE.MTLLoader();
    var mltLoader2 = new THREE.MTLLoader();
    var objLoader = new THREE.OBJLoader();
    var objLoader2 = new THREE.OBJLoader();

    /***************** GROUPS **************************/

    world = new THREE.Group();
    world.name="world";
    scene.add(world);
    clouds = new THREE.Group();
    bushes = new THREE.Group();
    trees = new THREE.Group();

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
    world.add(mesh);
    
    /*********** SKY **************************/

    var skyGeo = new THREE.CubeGeometry( 1000, 1000, 1000 );
    var skyMaterial = new THREE.MeshBasicMaterial( { color: 0x9999ff, side: THREE.BackSide } );
    var sky = new THREE.Mesh( skyGeo, skyMaterial );
    world.add(sky);


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
        model3.rotation.y = -0.2;
        model3.position.x =1.3;
        model3.position.y -=0.2;
        
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
        clouds.add( clouds3); 
    }, 
    undefined, function ( error ) 
    { console.error( error ); } );
    world.add(clouds);

    /*************************** 5 BUSHES ******************************/

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

    /************************** DUCK  ***************************************/

    loader.load( './models3D/birds/Parrot.glb', function ( gltf ) { 

        parrot =gltf.scene.children[0];
        parrot.scale.x /=500;
        parrot.scale.y /=500;
        parrot.scale.z /=500;
        parrot.position.y = 0.2;
        parrot.position.x= -0.5;

        parrot.rotation.z = 0.3;
        parrot.rotation.y = -1.5;
        parrot.rotation.x = 0.3;
       
        scene.add(parrot); 
    }, 
    undefined, function ( error ) 
    { console.error( error ); } );

    
    loader.load( './models3D/birds/scene.gltf', function ( gltf ) { 

        bi =gltf.scene;
        bi.scale.x /=12;
        bi.scale.y /=12;
        bi.scale.z /=12;
        bi.position.y = 0.2;
        bi.position.x = -0.15;
        bi.rotation.y = -1.5;
        bi.rotation.z = -0.6;
       
        scene.add(bi); 
    }, 
    undefined, function ( error ) 
    { console.error( error ); } );


    mltLoader.load("./models3D/duck/I19T6510H6KIQ8UWZV6ONLS80.mtl", function(materials){
        materials.preload();
        objLoader.setMaterials(materials);
        objLoader.load("./models3D/duck/I19T6510H6KIQ8UWZV6ONLS80.obj", function(object){
            console.log(object);
            object.scale.x /= 10;
            object.scale.y /= 10;
            object.scale.z /= 10;
            object.rotation.y = 1.8;
            object.rotation.z = 0.6;
            object.position.y = 0.3;
            object.position.x = 0.3;
            
            scene.add(object);
        });
    });




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
