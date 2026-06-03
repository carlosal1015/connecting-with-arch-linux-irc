import type { ComponentType } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
// SLIDES — AUR Workshop Components
// ─────────────────────────────────────────────────────────────────────────────
import Slide01Cover         from '../components/slides/Slide01Cover'
import Slide01bStatsEcosystem from '../components/slides/Slide01bStatsEcosystem'
import Slide01cStatsTools   from '../components/slides/Slide01cStatsTools'
import Slide01dStatsPeru    from '../components/slides/Slide01dStatsPeru'
import Slide01eRepoStats    from '../components/slides/Slide01eRepoStats'
import Slide01fTesting      from '../components/slides/Slide01fTesting'
import Slide01gSecurity     from '../components/slides/Slide01gSecurity'
import Slide02Agenda        from '../components/slides/Slide02Agenda'
import Slide03Philosophy    from '../components/slides/Slide03Philosophy'
import Slide03cArch4edu     from '../components/slides/Slide03cArch4edu'
import Slide03bFreedoms     from '../components/slides/Slide03bFreedoms'
import Slide04Terminology   from '../components/slides/Slide04Terminology'
import Slide05Anatomy       from '../components/slides/Slide05Anatomy'
import Slide05bPacVis       from '../components/slides/Slide05bPacVis'
import Slide05cPactree      from '../components/slides/Slide05cPactree'
import Slide06PackageTypes  from '../components/slides/Slide06PackageTypes'
import Slide07Workflow      from '../components/slides/Slide07Workflow'
import Slide07bMiniconda    from '../components/slides/Slide07bMiniconda'
import Slide08Automation    from '../components/slides/Slide08Automation'
import Slide09Community     from '../components/slides/Slide09Community'
import Slide09bWikiMaintainers from '../components/slides/Slide09bWikiMaintainers'
import Slide10Closing       from '../components/slides/Slide10Closing'

export interface SlideConfig {
  id: string
  label: string
  section: string
  component: ComponentType
}

export const SLIDES_CONFIG: SlideConfig[] = [
  { id: 'cover',        label: 'Portada: Taller AUR',      section: '00',  component: Slide01Cover },
  { id: 'stats-eco',    label: 'Ecosistema y Popularidad', section: '01b', component: Slide01bStatsEcosystem },
  { id: 'stats-tools',  label: 'Kernels y Editores',       section: '01c', component: Slide01cStatsTools },
  { id: 'stats-peru',   label: 'Presencia en Perú',        section: '01d', component: Slide01dStatsPeru },
  { id: 'agenda',       label: 'Agenda del Taller',        section: '01',  component: Slide02Agenda },
  { id: 'philosophy',   label: 'Filosofía y Principio KISS', section: '02',  component: Slide03Philosophy },
  { id: 'freedoms',     label: 'Las 4 Libertades del SL',  section: '02b', component: Slide03bFreedoms },
  { id: 'wiki-maintainers', label: 'ArchWiki Maintainers', section: '02c', component: Slide09bWikiMaintainers },
  { id: 'testing',      label: 'Arch Testing y Sign-offs', section: '02d', component: Slide01fTesting },
  { id: 'security',     label: 'Arch Security Team',       section: '02g', component: Slide01gSecurity },
  { id: 'stats-repos',  label: 'Repositorios Oficiales',   section: '02e', component: Slide01eRepoStats },
  { id: 'arch4edu',     label: 'Proyecto Arch4edu',        section: '02f', component: Slide03cArch4edu },
  { id: 'terminology',  label: 'Glosario de Términos AUR', section: '03',  component: Slide04Terminology },
  { id: 'anatomy',      label: 'Anatomía de un PKGBUILD',  section: '04',  component: Slide05Anatomy },
  { id: 'pacvis',       label: 'Visualización (PacVis)',   section: '04b', component: Slide05bPacVis },
  { id: 'pactree',      label: 'Árbol de Dependencias',    section: '04c', component: Slide05cPactree },
  { id: 'pkg-types',    label: 'Clasificación de Paquetes', section: '05',  component: Slide06PackageTypes },
  { id: 'workflow',     label: 'Flujo de Trabajo (VCS)',   section: '06',  component: Slide07Workflow },
  { id: 'demo',         label: 'Demo: Miniconda',          section: '06b', component: Slide07bMiniconda },
  { id: 'automation',   label: 'Automatización y CI/CD',   section: '07',  component: Slide08Automation },
  { id: 'community',    label: 'Participación Comunitaria', section: '08',  component: Slide09Community },
  { id: 'closing',      label: 'Conclusiones y Preguntas', section: '09',  component: Slide10Closing },
]
