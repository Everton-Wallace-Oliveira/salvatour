// Constantes que definem os ícones para os modos escuro e claro
const DARK_MODE_ICON = 'la-moon';
const LIGHT_MODE_ICON = 'la-sun';

// Constantes que definem as variáveis de CSS para cores de fundo
const DARK_MODE_BG_COLOR = '--dark-mode-bg-color';
const DARK_MODE_COL_BG_COLOR = '--dark-mode-bg-col-color';
const LIGHT_MODE_BG_COLOR = '--background';

// Constantes para cores específicas em modo claro/escuro
const WHITE_COLOR = '--white-color';
const BLACK_COLOR = '--black-color';

/**
 * Função que altera o modo de cor da interface.
 * 
 * @param refIcon - Referência para o elemento do ícone que indica o modo atual.
 * @param subtitle - Referência para os elementos que exibem o subtítulo.
 * @param colForm - Referência para o elemento de formulário que deve ter sua cor de fundo alterada.
 */
function setDarkMode(refIcon: HTMLElement, subtitle: HTMLCollectionOf<Element>, colForm: HTMLElement): void {
    // Verifica se o ícone atualmente possui a classe de modo claro (indica que o modo claro está ativo)
    const isDarkMode = refIcon.classList.contains(LIGHT_MODE_ICON);
    
    if (isDarkMode) {
        // Muda para o modo escuro
        refIcon.classList.remove(LIGHT_MODE_ICON);
        refIcon.classList.add(DARK_MODE_ICON);
        
        // Altera a cor de fundo do corpo para a cor definida para o modo escuro
        document.body.style.setProperty('background-color', getComputedStyle(document.documentElement).getPropertyValue(DARK_MODE_BG_COLOR));
        
        // Altera a cor de fundo do formulário para a cor definida para o modo escuro
        colForm.style.setProperty('background-color', getComputedStyle(document.documentElement).getPropertyValue(DARK_MODE_COL_BG_COLOR));
        
        // Altera a cor do subtítulo para a cor branca definida
        if (subtitle[0]) {
            subtitle[0].setAttribute('style', `color: ${getComputedStyle(document.documentElement).getPropertyValue(WHITE_COLOR)}`);
        }
    } else {
        // Muda para o modo claro
        refIcon.classList.remove(DARK_MODE_ICON);
        refIcon.classList.add(LIGHT_MODE_ICON);
        
        // Altera a cor de fundo do corpo para a cor definida para o modo claro
        document.body.style.setProperty('background-color', getComputedStyle(document.documentElement).getPropertyValue(LIGHT_MODE_BG_COLOR));
        
        // Altera a cor de fundo do formulário para a cor branca definida
        colForm.style.setProperty('background-color', getComputedStyle(document.documentElement).getPropertyValue(WHITE_COLOR));
        
        // Altera a cor do subtítulo para a cor preta definida
        if (subtitle[0]) {
            subtitle[0].setAttribute('style', `color: ${getComputedStyle(document.documentElement).getPropertyValue(BLACK_COLOR)}`);
        }
    }
    
}

/**
 * Função que ativa o modo escuro, obtendo os elementos necessários e chamando `setDarkMode`.
 */
function darkModeActive(): void {
    const refIcon = document.getElementById('icon-mode') as HTMLElement; // Obtém o elemento do ícone de modo
    const subtitle = document.getElementsByClassName('subtitle') as HTMLCollectionOf<Element>; // Obtém elementos de subtítulo
    const colForm = document.getElementById('col-form') as HTMLElement; // Obtém o elemento de formulário
    
    setDarkMode(refIcon, subtitle, colForm); // Chama a função que ajusta o modo de cor
}
