document.addEventListener('DOMContentLoaded', () => {
  // Animação fade-in
  const fadeInElements = document.querySelectorAll('.fade-in');
  fadeInElements.forEach(el => {
    el.classList.add('show');
  });

  // Melhora foco e acessibilidade nos botões
  const botoes = document.querySelectorAll('.botao-transparente');

  botoes.forEach(botao => {
    botao.setAttribute('tabindex', '0');

    botao.addEventListener('focus', () => {
      botao.classList.add('focus-visible');
    });

    botao.addEventListener('blur', () => {
      botao.classList.remove('focus-visible');
    });

    botao.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        botao.click();
      }
    });
  });
});
