import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

const items: CollapseProps['items'] = [
  {
    key: '7',
    label: 'Todos os ingressos dão direito ao After Party?',
    children: 'Sim, independente do ingresso adquirido, você terá acesso a todos os benefícios do evento, incluindo o after party.',
  },
  {
    key: '8',
    label: 'Há estacionamento disponível?',
    children: 'Sim, o local possui estacionamento, mas as vagas são limitadas e serão ocupadas por ordem de chegada.',
  },
  {
    key: '9',
    label: 'Como será o credenciamento?',
    children: 'O credenciamento acontecerá das 13h às 13h30 na entrada do evento. Chegue cedo para evitar filas.',
  },
  {
    key: '10',
    label: 'O que fazer se eu tiver uma necessidade especial?',
    children: 'O local é acessível, mas se precisar de assistência adicional, entre em contato pelo WhatsApp 34 9 9930-6776.',
  },
  {
    key: '11',
    label: 'O que acontece se eu não puder comparecer?',
    children: 'Para falar sobre reembolso, entre em contato pelo WhatsApp 34 9 9930-6776.',
  },
];

const Faq2: React.FC = () => <Collapse items={items} bordered={false} />;

export default Faq2;