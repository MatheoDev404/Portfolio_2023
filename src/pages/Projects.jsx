import Card from '../components/Card'
import { useState, useEffect } from 'react'

function Projects() {
  const [projects, setProjects] = useState([])

  const getData = () => {
    fetch('datas/projects.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (projects) {
        setProjects(projects)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="Projects">
      <h1 className="Projects__title">Projets</h1>
      <section className="Projects__gallery">
        {projects.map((project) => (
          <Card
            key={project.id}
            id={project.id}
            title={project.title}
            picture={process.env.PUBLIC_URL + project.cover}
            tags={project.tags}
            description={project.description}
          />
        ))}
      </section>
    </div>
  )
}

export default Projects
