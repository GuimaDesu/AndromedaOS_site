import './App.css'
import { Navbar } from './components/Navbar/Navbar.jsx'

function App() {
  const profile = {
    name: 'Seu Nome Aqui',
    title: 'Desenvolvedor(a) Full Stack / Programador(a)',
    location: 'Cidade, Estado',
    email: 'email@exemplo.com',
    phone: '(00) 00000-0000',
    linkedin: 'linkedin.com/in/seunome',
    github: 'github.com/seunome',
    summary:
      'Programador(a) com experiência em desenvolvimento de aplicações web modernas, boas práticas de código e colaboração em equipe. Habilidade para projetar soluções escaláveis, focar em performance e aprendizado contínuo em novas tecnologias.',
    skills: [
      'JavaScript / TypeScript',
      'React / React Router / Vite',
      'Node.js / Express',
      'HTML5 / CSS3 / Sass',
      'Git / GitHub / CI/CD',
      'Testes unitários e integração',
      'APIs REST e GraphQL',
    ],
    experience: [
      {
        role: 'Desenvolvedor(a) Front-end',
        company: 'Empresa de Tecnologia',
        period: 'Jan 2024 – Presente',
        description:
          'Criação de interfaces responsivas e componentes reutilizáveis em React, otimização de performance, integração com APIs REST e suporte ao time de design para melhorar a experiência do usuário.',
      },
      {
        role: 'Estagiário(a) em Desenvolvimento',
        company: 'Agência Digital',
        period: 'Fev 2023 – Dez 2023',
        description:
          'Participação na construção de aplicações web, manutenção de funcionalidades em JavaScript e colaboração em deploys automáticos com controle de versão e revisões de código.',
      },
    ],
    education: [
      {
        degree: 'Bacharelado em Ciência da Computação',
        institution: 'Universidade Exemplo',
        period: '2020 – 2024',
      },
      {
        degree: 'Cursos online e certificações',
        institution: 'Platzi / Udemy / Alura',
        period: '2022 – Presente',
      },
    ],
    projects: [
      {
        name: 'Painel de Controle Administrativo',
        details:
          'Aplicação web para gestão de usuários, relatórios e dashboards com gráficos interativos. Desenvolvida com React, Tailwind CSS e consumo de API em Node.js.',
      },
      {
        name: 'Landing Page de Produto',
        details:
          'Página institucional com animações leves, layout responsivo e otimização de SEO. Projeto focado em conversão e velocidade de carregamento.',
      },
    ],
  }

  return (
    <div className="app-container">
      <Navbar />
      <main className="resume">
        <section className="hero-section" id="home">
          <div>
            <p className="pretitle">Currículo de Programador</p>
            <h1>{profile.name}</h1>
            <p className="subtitle">{profile.title}</p>
          </div>
          <div className="contact-card">
            <p>{profile.location}</p>
            <p>{profile.email}</p>
            <p>{profile.phone}</p>
            <p>{profile.linkedin}</p>
            <p>{profile.github}</p>
          </div>
        </section>

        <section className="section" id="sobre">
          <h2>Resumo Profissional</h2>
          <p>{profile.summary}</p>
        </section>

        <section className="section" id="competencias">
          <h2>Competências Técnicas</h2>
          <ul className="skills-list">
            {profile.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="section" id="experiencia">
          <h2>Experiência</h2>
          {profile.experience.map((item) => (
            <div className="card" key={item.role + item.company}>
              <div className="card-header">
                <h3>{item.role}</h3>
                <span>{item.period}</span>
              </div>
              <p className="company-name">{item.company}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </section>

        <section className="section" id="projetos">
          <h2>Projetos Relevantes</h2>
          {profile.projects.map((project) => (
            <div className="card" key={project.name}>
              <h3>{project.name}</h3>
              <p>{project.details}</p>
            </div>
          ))}
        </section>

        <section className="section" id="educacao">
          <h2>Formação</h2>
          {profile.education.map((item) => (
            <div className="education-item" key={item.degree + item.institution}>
              <h3>{item.degree}</h3>
              <p className="company-name">{item.institution}</p>
              <span>{item.period}</span>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

export default App
