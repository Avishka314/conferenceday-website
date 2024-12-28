const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("three-canvas") });


renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);


// Create a rotating cube for visual appeal

const geometry = new THREE.BoxGeometry();

const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);


camera.position.z = 5;


function animate() {
  
requestAnimationFrame(animate);

 
 // Rotate the cube
  
cube.rotation.x += 0.01;
  
cube.rotation.y += 0.01;

  
renderer.render(scene, camera);

}


animate();


// Fetch and display the schedule 
(same as before)
fetch('/api/sessions/schedule')
  
.then(response => response.json())
  
.then(sessions => {
    
const scheduleContainer = document.getElementById('schedule');
    
sessions.forEach(session => {
      
const sessionElement = document.createElement('div');
      
sessionElement.innerHTML = `
        
<p>${session.title} - ${session.speaker} | ${session.time} | ${session.venue}</p>
      
`;
      
scheduleContainer.appendChild(sessionElement);
    
});
  
});


// Handle participant registration (same as before)

document.getElementById('registerForm').addEventListener('submit', (e) => {
  
e.preventDefault();

  
const name = document.getElementById('name').value;
  
const email = document.getElementById('email').value;

  
fetch('/api/participants/register', {
    
method: 'POST',
    
headers: {
      
'Content-Type': 'application/json'
    
},
    
body: JSON.stringify({ name, email })
  
})
  
.then(response => response.json())
  
.then(data => {
    
document.getElementById('qrCode').innerHTML = `<img src="${data.participant.qrCode}" alt="QR Code" />`;
  
});

});