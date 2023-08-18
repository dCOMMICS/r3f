//console.log("Starting: three seconds")
//console.log("THREE")
console.log(THREE)

// threejs will generate a scene  //console    
const scene = new THREE.Scene();

// red box //

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const Mesh = new THREE.Mesh(geometry, material)
 // const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


// camera //
const camera = new THREE.PerspectiveCamera();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
scene.add(camera);
camera.position.z = 5;