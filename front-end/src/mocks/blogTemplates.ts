// Respostas prontas da "IA" de blog. {tema} é substituído pelo tema digitado.
export type BlogTemplate = {
    title: string;
    subTitle: string;
    complementTitle: string;
    catchyPhrase: string;
    introductoryText: string;
    developmentText: string;
    conclusion: string;
    img: string[];
}

const pexels = (id: number) =>
    `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;

export const blogTemplates: BlogTemplate[] = [
    {
        title: "Tudo o que você precisa saber sobre {tema}",
        subTitle: "Um guia completo para quem quer começar do jeito certo",
        complementTitle: "Os pilares de {tema}",
        catchyPhrase: "Entender {tema} hoje pode mudar os seus resultados amanhã.",
        introductoryText:
            "Falar sobre {tema} nunca foi tão importante. Todos os dias surgem novas informações, tendências e oportunidades, e quem se mantém atualizado sai na frente. Neste artigo, vamos explicar de forma simples e direta o que realmente importa para você começar.",
        developmentText:
            "O primeiro passo é conhecer os fundamentos. Em {tema}, o que separa quem tem bons resultados de quem fica parado é a consistência: pequenas ações repetidas todos os dias valem mais do que grandes esforços isolados. Em seguida, vale acompanhar os números, testar novas abordagens e aprender com cada erro. Por fim, busque referências confiáveis e converse com pessoas que já passaram pelo mesmo caminho.",
        conclusion:
            "Agora que você já conhece o básico sobre {tema}, é hora de colocar em prática. Comece pequeno, mantenha o ritmo e ajuste a rota sempre que necessário. Os resultados aparecem para quem não desiste.",
        img: [3184418, 3183150, 1181244, 546819, 1170412, 3183197].map(pexels),
    },
    {
        title: "5 erros comuns em {tema} (e como evitá-los)",
        subTitle: "Aprenda com os tropeços dos outros e ganhe tempo",
        complementTitle: "Como corrigir a rota em {tema}",
        catchyPhrase: "Errar é humano, mas repetir o mesmo erro em {tema} sai caro.",
        introductoryText:
            "Quase todo mundo que começa com {tema} comete os mesmos deslizes. A boa notícia é que eles são previsíveis, e dá para evitar a maioria deles com um pouco de planejamento. Separamos os cinco erros mais frequentes e o que fazer em cada caso.",
        developmentText:
            "O primeiro erro é não ter objetivo claro: sem saber aonde quer chegar com {tema}, qualquer caminho parece bom. O segundo é querer resultado imediato e abandonar o processo cedo demais. O terceiro é ignorar os dados e decidir apenas pela intuição. O quarto é tentar fazer tudo sozinho, sem pedir ajuda. E o quinto é nunca revisar o que foi feito. Corrigir isso passa por metas simples, acompanhamento semanal e abertura para feedback.",
        conclusion:
            "Evitar esses erros não garante sucesso instantâneo em {tema}, mas coloca você anos-luz à frente de quem repete os mesmos tropeços. Escolha um ponto para melhorar ainda hoje.",
        img: [267350, 1181675, 590016, 1181263, 3861969, 374720].map(pexels),
    },
    {
        title: "{tema}: tendências que vão dominar os próximos anos",
        subTitle: "O que esperar e como se preparar desde já",
        complementTitle: "Onde estão as oportunidades em {tema}",
        catchyPhrase: "Quem enxerga a tendência de {tema} primeiro, lidera o mercado depois.",
        introductoryText:
            "O cenário de {tema} está mudando rápido. Tecnologia, novos hábitos de consumo e mudanças de comportamento estão redesenhando as regras do jogo. Neste texto, reunimos as principais tendências para você se antecipar.",
        developmentText:
            "A primeira grande tendência é a personalização: as pessoas esperam experiências feitas para elas, e isso vale também para {tema}. A segunda é a automação, que reduz tarefas repetitivas e libera tempo para o que realmente importa. A terceira é a busca por autenticidade, em que marcas e profissionais que mostram quem são conquistam mais confiança. Quem se preparar agora para essas mudanças vai colher os frutos antes da concorrência.",
        conclusion:
            "As tendências de {tema} apontam para um futuro mais conectado, mais personalizado e mais humano. Comece a testar hoje, aprenda rápido e mantenha os olhos abertos para o que vem por aí.",
        img: [3184291, 3184465, 669615, 4065876, 1089438, 1181406].map(pexels),
    },
    {
        title: "Como começar com {tema} em 7 dias",
        subTitle: "Um plano simples para sair do zero sem complicação",
        complementTitle: "Seu plano de ação para {tema}",
        catchyPhrase: "Uma semana é suficiente para dar o primeiro passo em {tema}.",
        introductoryText:
            "Você não precisa de meses de estudo para começar a se mover em {tema}. Com um plano objetivo e um pouco de disciplina, é possível ter uma base sólida em apenas sete dias. Confira o passo a passo.",
        developmentText:
            "Nos dois primeiros dias, dedique-se a pesquisar e entender o básico de {tema}. Do terceiro ao quinto dia, escolha uma ação prática e execute, mesmo que de forma imperfeita. No sexto dia, revise o que funcionou e o que não funcionou. No sétimo, ajuste o plano e defina as metas da semana seguinte. O segredo é manter o foco em avançar um pouco todos os dias.",
        conclusion:
            "Em sete dias você não vai dominar {tema}, mas terá saído da estaca zero e criado um hábito. A partir daí, é só repetir o ciclo e evoluir a cada semana.",
        img: [1181244, 3183197, 546819, 3184418, 374720, 590016].map(pexels),
    },
];
