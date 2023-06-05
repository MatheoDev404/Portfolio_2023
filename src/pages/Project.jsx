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
          <div className="Project">
            <h1 className="Project__title">{project.title}</h1>
            <div className="Project__tagContainer">
              {project.tags.map((tag, index) => (
                <Tag key={index} tagName={tag} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default Project
