document.addEventListener('DOMContentLoaded', () => {
  // Aplica classe de fade-in após carregamento
  document.querySelectorAll('.fade-in').forEach(el => {
    el.classList.add('show');
  });

  // Acessibilidade e interação aprimorada nos botões
  document.querySelectorAll('.botao-transparente').forEach(botao => {
    // Garante foco via teclado
    botao.setAttribute('tabindex', '0');

    // Adiciona classe visual ao receber foco
    botao.addEventListener('focus', () => {
      botao.classList.add('focus-visible');
    });

    // Remove classe ao perder foco
    botao.addEventListener('blur', () => {
      botao.classList.remove('focus-visible');
    });

    // Permite ativar com Enter ou Espaço
    botao.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        botao.click();
      }
    });
  });
});
