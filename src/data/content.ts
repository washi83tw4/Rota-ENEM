import { ModuleItem, BonusItem, TestimonialItem, FaqItem } from '../types';

export const MODULES_DATA: ModuleItem[] = [
  {
    id: 'mod-1',
    badge: 'PILAR 01 • ESTRATÉGIA',
    tag: '⭐ Foco & Direção',
    title: 'Interpretação de Enunciados & Estratégia de Prova',
    description:
      'Aprenda como pensar nas questões, reconhecer o que o comando realmente quer e eliminar alternativas absurdas antes de sair calculando ou tentando adivinhar. Entenda como o algoritmo da TRI funciona na prática para não perder pontos preciosos por inconsistência.',
    features: ['✔️ Leitura de Evidências no Enunciado', '✔️ Eliminação Rápida de Distratores'],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBE2jrRVZhF-mk1yuPxx97x_CZ3alCvbq6NqyEY6zGOn11KYztK1z9BXehgWcU0FBn1FbkasuZ9MuwdT22jylDBVHhgBnSBTkZw7XyXlLeEn1Ea7a5Q-esCBGA99Zzj3vcy3FpJtYl6973DGtVZ3Mg5jFHo7Ct-RRJSr0ezYajoTTXF4lKGi7XdJ9ts5klQlWPdCXm_wgRJLqILaRCXkwsQlCniWWfz_uaIVc9j7uUMIKKQdaY2KDCC',
    largeCard: true,
  },
  {
    id: 'mod-2',
    badge: 'PILAR 02 • REDAÇÃO',
    title: 'Método Completo de Redação: Do Tema ao Texto Pronto',
    description:
      'Aprenda a sair do tema até uma redação estruturada com tese clara, argumentos sólidos, repertório produtivo e proposta de intervenção completa. Descubra os erros mais comuns que custam pontos nos critérios dos corretores e como blindar seu texto.',
    features: ['Construção de Tese & Argumentação', 'Checklist Anti-Erros de Corretores'],
    largeCard: false,
  },
  {
    id: 'mod-3',
    badge: 'PILAR 03 • EXATAS & NATUREZA',
    title: 'Matemática e Ciências Aplicadas ao Estilo do ENEM',
    description:
      'Aprenda a reconhecer qual cálculo usar antes de sair aplicando fórmulas — e evite perder questões por escolher o caminho errado. Domine os modelos práticos de Biologia, Química e Física conectando raciocínio lógico aos problemas do cotidiano.',
    features: ['Fórmulas Essenciais sem Decoreba', 'Resolução Guiada Passo a Passo'],
    largeCard: false,
  },
  {
    id: 'mod-4',
    badge: 'PILAR 04 • CORREÇÃO & ERROS',
    title: 'Análise de Erros & Linguagens/Humanas por Evidências',
    description:
      'Pratique o método, descubra exatamente por que errou e transforme cada erro em uma revisão mais inteligente. Em Linguagens e Humanas, aprenda a fundamentar cada resposta em evidências textuais sem cair em pegadinhas subjetivas.',
    features: ['Transformação de Erros em Plano de Ação', 'Interpretação Crítica Baseada em Fatos'],
    largeCard: false,
  },
  {
    id: 'mod-5',
    badge: 'PILAR 05 • REVISÃO & PROVA',
    title: 'Plano de Reta Final & Execução no Dia da Prova',
    description:
      'Chegue à reta final sabendo o que revisar, como administrar o tempo e o que fazer quando uma questão travar. Tenha uma rotina diária equilibrada para chegar no dia da prova com energia, clareza mental e controle emocional.',
    features: ['Cronograma Direto ao Ponto', 'Estratégia de Gestão das 5 Horas de Exame'],
    largeCard: false,
  },
];

export const BONUSES_DATA: BonusItem[] = [
  {
    id: 'bonus-1',
    title: 'Comunidade de Alunos & Apoio Mútuo',
    description:
      'Espaço de suporte e troca de experiências com outros vestibulandos focados, compartilhando planos de estudo, redações analisadas e estratégias de revisão.',
    originalPrice: 'Incluso',
    currentPrice: 'R$ 0,00',
    iconName: 'telegram',
  },
  {
    id: 'bonus-2',
    title: 'Simulador Estratégico de Metas SISU',
    description:
      'Ferramenta prática para simular pesos e notas de corte das universidades públicas, ajudando você a descobrir onde concentrar seus esforços para garantir a vaga.',
    originalPrice: 'Incluso',
    currentPrice: 'R$ 0,00',
    iconName: 'calculator',
  },
  {
    id: 'bonus-3',
    title: 'Guia de Controle Emocional & Foco Pré-Prova',
    description:
      'Técnicas práticas e exercícios de foco para manter a tranquilidade durante a semana de provas, evitar o famoso "branco" e manter a concentração nas 5 horas de exame.',
    originalPrice: 'Incluso',
    currentPrice: 'R$ 0,00',
    iconName: 'headphones',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Lucas M.',
    locationScore: 'São Paulo, SP • 812 Pontos',
    courseTag: 'Medicina USP',
    feedback:
      '"Eu estudava o dia inteiro, mas na hora dos simulados travava nos enunciados e não entendia o que a questão realmente queria. O método me ensinou a ler o comando com olhar crítico, eliminar alternativas absurdas e destravar a redação. Saí de 640 para 960 na redação! Valeu cada centavo dos R$ 19,90."',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCkywtExLwyzow420QKuKAGK7lpJ0K8uFZ5dCLwySp0u1d_0qBP0TqnRfsnDgLBFGCpRwOvYGMc35Z4UqjTgoz9OSQ7J2HldT07B3xw0RF9jvAIkUsWLkp0PUsz2p0vB4c1m8GpiuPupijpSe38gGJUiti1qD4US7NZzwmkMxDKlEFtZdDeFtC7kyal-iyJWvGf_ZjPPo7OstU7zztsljpFLFi8ZzsFwXhXw8qfxQb-f8baa8vVi0pn',
    rating: 5,
  },
  {
    id: 'test-2',
    name: 'Beatriz S.',
    locationScore: 'Rio de Janeiro, RJ • 785 Pontos',
    courseTag: 'Direito UFRJ',
    feedback:
      '"Eu trabalhava e tinha pouco tempo. Sentia que tinha matéria demais e tempo de menos. Quando parei de acumular apostilas e passei a aplicar o ciclo Entender → Aplicar → Corrigir → Revisar, meus erros viraram meu guia de estudo. Conquistei o 4º lugar em Direito na UFRJ!"',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA_R76KVt3LnGvG77NTS_CUY0B5EwxjSq5_Ug907kfnSdh0qZlVdkmA_Xg4DizsUIw6aP122aea1nl2bQY-LMl-RgppZYAmE899XKqy3CO9VT61z4PeITW8cRdYj4UR1QQ02dlIms6cNNbbzOLxvuejkV7y-b-zi3MiRxUkNl-pWdhC8_fVYY1XcA64aS-KMqIYq9WtmiTq3FPprim2Zr7EUOALDKD6NrdEeav2SQXQdDlbDflIyyWQ',
    rating: 5,
  },
  {
    id: 'test-3',
    name: 'Matheus F.',
    locationScore: 'Belo Horizonte, MG • 792 Pontos',
    courseTag: 'Engenharia UFMG',
    feedback:
      '"Em Matemática e Física, meu maior erro era sair aplicando fórmula na situação errada. O método me ensinou a reconhecer o padrão da questão antes de fazer contas. Cheguei no dia da prova calmo e sabendo exatamente como administrar o tempo."',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC_FV9w6CllgtH51ow5QkNuUVQXKIXF_kp9mXBYqP-X-Ugy-DsgMZuObL6bxZZTG6HAwQebUjz6HXfizCe-i76w6zA1Fra1f41fjrVlKcodroQN9lQco9oc_OP3EiygBcQfE6PKd4_6caF81knT13n3wPmSdfI9dK1Qlba84sn7N60tlGZX4aIL8CO-GuTtHJOzuTnJBmF46AoUDtaZDIZCrW2b6HHEqS9DphstpJz8UJtt_c8aEFYG',
    rating: 5,
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Como e quando recebo o acesso ao método?',
    answer:
      'O envio é instantâneo e automático! Assim que o pagamento via PIX ou Cartão for aprovado, você receberá um e-mail com as instruções de acesso para entrar imediatamente na área de membros e começar sua preparação prática.',
  },
  {
    id: 'faq-2',
    question: 'Para quem esse método foi criado?',
    answer:
      'Ele foi feito para quem não sabe exatamente o que estudar, estuda muito mas sente que não evolui, trava na hora de resolver questões, lê o enunciado e não entende o comando, tem dificuldade com redação, esquece fórmulas ou não sabe como revisar os próprios erros sem se perder em conteúdo acumulado.',
  },
  {
    id: 'faq-3',
    question: 'Qual é o valor e como funciona o pagamento?',
    answer:
      'O valor é de apenas R$ 19,90 em pagamento único. Não há mensalidades, cobranças recorrentes ou taxas extras. É um investimento pequeno para entrar no ENEM com muito mais direção e segurança.',
  },
  {
    id: 'faq-4',
    question: 'Por que o método é diferente de simplesmente ler apostilas ou PDFs soltos?',
    answer:
      'Porque o aluno não precisa de mais conteúdo para acumular; precisa de método. O foco está no ciclo ENTENDER → APLICAR → CORRIGIR → REVISAR. Você aprende como pensar nas questões, como construir a redação do zero e como transformar seus erros em um plano prático de evolução.',
  },
  {
    id: 'faq-5',
    question: 'O material tem aulas em vídeo ou é em PDF?',
    answer:
      'O método é 100% focado na prática: são cadernos de exercícios comentados, guias estruturados e materiais completos em PDF. Não tem aulas em vídeo longas ou cansativas, justamente para você não perder tempo assistindo teoria passiva e ir direto para a resolução de questões e correção dos erros.',
  },
  {
    id: 'faq-6',
    question: 'Posso acessar pelo celular ou preciso de computador?',
    answer:
      'Você pode acessar pelo celular, tablet ou computador quando e onde quiser. Os PDFs e guias foram otimizados para leitura dinâmica e rápida aplicação em qualquer dispositivo, ou para imprimir se você preferir estudar no papel.',
  },
];

