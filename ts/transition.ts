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
  
/**
 * Função que controla a visibilidade dos botões de abrir e registrar.
 *
 * @param btnOpen - Referência ao botão de abrir (login).
 * @param btnRegister - Referência ao botão de registro.
 */
function visibilityControlButton(
    btnOpen: HTMLElement,
    btnRegister: HTMLElement
  ): void {
    // Verifica se o botão de abrir está ativo
    if (btnOpen.classList.contains(BUTTON_ACTIVE)) {
      // Se estiver ativo, desativa o botão de abrir e ativa o botão de registro
      btnOpen.classList.remove(BUTTON_ACTIVE);
      btnRegister.classList.add(BUTTON_ACTIVE);
    } else {
      // Caso contrário, ativa o botão de abrir e desativa o botão de registro
      btnOpen.classList.add(BUTTON_ACTIVE);
      btnRegister.classList.remove(BUTTON_ACTIVE);
    }
  }

  /**
 * Função que oculta todos os formulários exceto o de redefinição de senha.
 *
 * @param formLogin - Referência ao formulário de login.
 * @param formRegister - Referência ao formulário de registro.
 * @param toggleBtn - Referência ao botão de alternância.
 * @param formPasswordReset - Referência ao formulário de redefinição de senha.
 */
function hiddenForms(
    formLogin: HTMLElement,
    formRegister: HTMLElement,
    toggleBtn: HTMLElement,
    formPasswordReset: HTMLElement
  ): void {
    // Oculta os formulários de login e registro e o botão de alternância
    formLogin.classList.add(CLASS_HIDDEN);
    formRegister.classList.add(CLASS_HIDDEN);
    toggleBtn.classList.add(CLASS_HIDDEN);
    // Exibe o formulário de redefinição de senha
    formPasswordReset.classList.remove(CLASS_HIDDEN);
  }