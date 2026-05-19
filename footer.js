const footerContainer = document.getElementById('footer-container')
if (footerContainer) {
  fetch('footer.html')
    .then((response) => {
      if (!response.ok) throw new Error('Falha ao carregar o footer')
      return response.text()
    })
    .then((html) => {
      footerContainer.innerHTML = html
    })
    .catch((error) => {
      console.error(error)
      footerContainer.innerHTML = '<footer class="site-footer"><p style="color:#fff; text-align:center;">Erro ao carregar o rodapé.</p></footer>'
    })
}
