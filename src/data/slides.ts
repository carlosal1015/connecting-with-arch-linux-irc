import type { ComponentType } from 'react'

import Slide01Cover         from '../components/slides/Slide01Cover'
import Slide02Mentimeter    from '../components/slides/Slide02Mentimeter'
import Slide03AboutMe       from '../components/slides/Slide03AboutMe'
import Slide04Contributions from '../components/slides/Slide04Contributions'
import Slide05Arch4edu      from '../components/slides/Slide05Arch4edu'
import Slide06IRC           from '../components/slides/Slide06IRC'
import Slide07Workshop      from '../components/slides/Slide07Workshop'
import Slide08Closing       from '../components/slides/Slide08Closing'

export interface SlideConfig {
  id: string
  label: string
  section: string
  component: ComponentType
}

export const SLIDES_CONFIG: SlideConfig[] = [
  { id: 'cover',         label: 'Portada',                 section: '00', component: Slide01Cover },
  { id: 'mentimeter',    label: 'Interacción Inicial',     section: '01', component: Slide02Mentimeter },
  { id: 'aboutme',       label: 'Sobre Mí',                section: '02', component: Slide03AboutMe },
  { id: 'contributions', label: 'Formas de Contribuir',    section: '03', component: Slide04Contributions },
  { id: 'arch4edu',      label: 'Ecosistema Global',       section: '04', component: Slide05Arch4edu },
  { id: 'irc',           label: 'Comunicación FOSS',       section: '05', component: Slide06IRC },
  { id: 'workshop',      label: 'Taller Práctico',         section: '06', component: Slide07Workshop },
  { id: 'closing',       label: 'Preguntas y Cierre',      section: '07', component: Slide08Closing },
]
