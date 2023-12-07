window.onload = () => {
  const inputs = document.querySelectorAll('input');

  inputs.forEach((input) => {
    input.onclick = () => {
      document.documentElement.className = input.id;
    }
  });
}