/**
 * Configuração central do Checkout da Hotmart
 * Altere a constante HOTMART_CHECKOUT_URL com o seu link oficial da Hotmart quando desejar.
 */
export const HOTMART_CHECKOUT_URL: string =
  'https://pay.hotmart.com/W107647120N?off=mwzmrqzy&checkoutMode=10';

/**
 * Função utilitária acionada por todos os botões de ação ("Quero Aprender", "Quero Me Preparar", etc.)
 */
export const goToHotmartCheckout = () => {
  if (typeof window !== 'undefined') {
    if (HOTMART_CHECKOUT_URL && HOTMART_CHECKOUT_URL.trim() !== '' && HOTMART_CHECKOUT_URL !== '#') {
      window.location.href = HOTMART_CHECKOUT_URL;
    } else {
      const el = document.getElementById('oferta');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};

