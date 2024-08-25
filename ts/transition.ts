// Constantes para classes de estilo usadas para visibilidade e estado ativo
const CLASS_HIDDEN = 'hidden';
const BUTTON_ACTIVE = 'btn-active';

/**
 * Função que controla a visibilidade dos formulários de login e registro.
 *
 * @param formLogin - Referência ao formulário de login.
 * @param formRegister - Referência ao formulário de registro.
 * @param featuredImage - Referência à imagem de destaque que será alterada.
 */
function visibilyControlForm(
    formLogin: HTMLElement,
    formRegister: HTMLElement,
    featuredImage: HTMLImageElement
  ): void {
    // Verifica se o formulário de registro está oculto
    const registerIsActive = formRegister.classList.contains(CLASS_HIDDEN);
    if (registerIsActive) {
      // Exibe o formulário de registro e oculta o de login
      formRegister.classList.remove(CLASS_HIDDEN);
      formLogin.classList.add(CLASS_HIDDEN);
      // Altera a imagem de destaque para uma imagem específica
      featuredImage.src = '/img/farol.jpg';
    } else {
      // Exibe o formulário de login e oculta o de registro
      formRegister.classList.add(CLASS_HIDDEN);
      formLogin.classList.remove(CLASS_HIDDEN);
      // Altera a imagem de destaque para outra imagem
      featuredImage.src = '/img/elevador.jpg';
    }
  }
  