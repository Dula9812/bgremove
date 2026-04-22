async function removeBackground() {
  const fileInput = document.getElementById("imageInput");
  const file = fileInput.files[0];

  if (!file) {
    alert("Select an image first!");
    return;
  }

  const formData = new FormData();
  formData.append("image", file);

  const response = await fetch("/.netlify/functions/removebg", {
    method: "POST",
    body: formData
  });

  const blob = await response.blob();
  const url = URL.createObjectURL(blob);

  document.getElementById("output").src = url;
}