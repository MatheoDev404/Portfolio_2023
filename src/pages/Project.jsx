import Tag from '../components/Tag'

import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Project() {
  const navigate = useNavigate()
  const params = useParams()

  const [project, setProject] = useState(null)

  const getData = () => {
    fetch('../datas/projects.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (projects) {
        const existingProject = projects.find(
          (project) => project.id === params.id
        )
          ? projects.find((project) => project.id === params.id)
          : 'not exist'
        return existingProject
      })
      .then((existingProject) => {
        if (existingProject === 'not exist') {
          navigate('/page404')
        } else if (project === null) {
          setProject(existingProject)
        }
      })
  }

  useEffect(() => {
    getData()
  })

  return (
    <>
      {project != null ? (
        <div className="Project">
          <h1 className="Project__title">{project.title}</h1>
          <section className="Project__content">
            <section className="Project__content__leftSection">
              <img
                className="Project__content__leftSection__cover"
                src={process.env.PUBLIC_URL + project.cover}
                alt="aperçu du projet"
              />
              <div className="Project__content__leftSection__tagContainer">
                {project.tags.map((tag, index) => (
                  <Tag key={index} tagName={tag} />
                ))}
              </div>
            </section>
            <section className="Project__content__rightSection">
              <p className="Project__content__rightSection__description">
                {project.description}
              </p>
              <ul className="Project__content__rightSection__objectifList">
                {project.objectifs.map((index) => {
                  return <li key={index}> {index}</li>
                })}
              </ul>
              <a
                href={project.github}
                className="Project__content__rightSection__github"
              >
                Repertoire Github
              </a>
            </section>
          </section>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default Project
