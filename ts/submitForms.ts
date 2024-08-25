function login(): void {
    // Usando 'HTMLInputElement[]' para garantir que sabemos que estamos lidando com elementos de entrada.
    const emailElements = document.getElementsByName('email') as NodeListOf<HTMLInputElement>;
    const passwordElements = document.getElementsByName('password') as NodeListOf<HTMLInputElement>;

    // Obtendo os valores dos elementos
    const email = emailElements[0].value;
    const password = passwordElements[0].value;

    alert(`Email: ${email} \n Senha: ${password}`);
}

function register(): void {
    const nameElements = document.getElementsByName('nameRegister') as NodeListOf<HTMLInputElement>;
    const emailElements = document.getElementsByName('emailRegister') as NodeListOf<HTMLInputElement>;
    const passwordElements = document.getElementsByName('passwordRegister') as NodeListOf<HTMLInputElement>;

    // Obtendo os valores dos elementos
    const name = nameElements[0].value;
    const email = emailElements[0].value;
    const password = passwordElements[0].value;

    alert(`Nome: ${name} \n Email: ${email} \n Senha: ${password}`);
}
