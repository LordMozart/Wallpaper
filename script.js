<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good evening";
} else {
  greeting = "Good evening";
}
document.getElementById("demo").innerHTML = greeting;
</script>

</body>
</html>

document.addEventListener('mousemove', function(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const particles = document.getElementsByClassName('particle');
  const numberOfParticles = particles.length;

  for (let i = 0; i < numberOfParticles; i++) {
    const particle = particles[i];
    const particleX = particle.getBoundingClientRect().left + particle.offsetWidth / 2;
    const particleY = particle.getBoundingClientRect().top + particle.offsetHeight / 2;

    const deltaX = mouseX - particleX;
    const deltaY = mouseY - particleY;

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (distance < 100) {
      const speed = 0.1; // Adjust the speed factor
      const velX = deltaX * speed;
      const velY = deltaY * speed;

      particle.style.transform = `translate(${velX}px, ${velY}px)`;
    }
  }
});
