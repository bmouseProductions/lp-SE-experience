import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Quem não é da área da saúde também pode ir ao evento?',
    children: 'Claro, o evento está aberto a todos que querem expandir seu conhecimento no âmbito do empreendedorismo.'
  },
  {
    key: '2',
    label: 'Como recebo meu ingresso?',
    children: 'Se a compra for através do Sympla, você vai receber o QR Code do ingresso assim que efetuar a compra dentro da própria plataforma e também por e-mail. É necessário levar impresso ou um print. Caso a compra seja presencial, você receberá seu ingresso impresso.',
  },
  {
    key: '3',
    label: 'O evento vai falar somente sobre práticas médicas?',
    children: 'Não. O evento é sobre empreendedorismo e vai abordar temas relevantes para o desenvolvimento e planejamento de carreira de profissionais da saúde, mas todos os tópicos também podem agregar positivamente em outras áreas.',
  },
  {
    key: '4',
    label: 'Quando e onde o evento será realizado?',
    children: 'O evento será no dia 20 de setembro de 2024, no Centro de Convenções e Eventos Unipam, em Patos de Minas, MG.',
  },
  {
    key: '5',
    label: 'Como faço para me inscrever?',
    children: 'A compra de ingressos pode ser feita pelo site do Sympla ou através do WhatsApp 34 9 9930-6776.',
  },
  {
    key: '6',
    label: 'O que está incluído na inscrição?',
    children: 'A inscrição inclui acesso às palestras, kit do evento, coffee break, entrada na After Party com música e networking.',
  },
];

const Faq: React.FC = () => <Collapse items={items} bordered={false} />;

export default Faq;