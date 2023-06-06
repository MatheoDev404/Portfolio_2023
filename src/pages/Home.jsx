const CV_FILE_URL = 'http://localhost:3000/CV_matheostunault.pdf'

function Home() {
  const downloadFileAtURL = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]))
        const fileName = url.split('/').pop()
        const aTag = document.createElement('a')
        aTag.href = blobURL
        aTag.setAttribute('download', fileName)
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
      })
  }
  return (
    <div className="Home">
      <h1 className="Home__title">Développeur Web</h1>
      <section className="Home__text">
        <p className="Home__text__paragraph">
          Je suis Mathéo Stunault, un développeur web passionné. Je crois en la
          puissance du code pour créer des expériences en ligne nouvelles et
          fonctionnelles.
        </p>
        <p className="Home__text__paragraph">
          Mon objectif est de donner vie aux idées et de transformer les
          concepts en réalité numérique. J'ai acquis de l'expérience dans le
          développement front-end et back-end, en travaillant avec des langages
          tels que HTML, CSS, JavaScript, ainsi que des frameworks populaires.
          Mon approche est axée sur la recherche de solutions techniques et sur
          la création d'interfaces utilisateur intuitives.
        </p>
        <p className="Home__text__paragraph">
          Je vous invite à découvrir mes projets les plus récents et réussis.
          Chaque projet représente un défi que j'ai relevé avec le plus grand
          intérêt. Je crois en la collaboration étroite avec mes clients, en
          écoutant attentivement leurs besoins et en fournissant des solutions
          sur mesure.
        </p>
        <p className="Home__text__paragraph">
          Je suis toujours à l'affût des dernières tendances du développement
          web et je cherche constamment à me perfectionner. Ma curiosité et ma
          volonté d'apprendre de nouvelles technologies sont mes moteurs pour
          créer des produits de haute qualité. Je vous invite à parcourir mon
          portfolio et à découvrir mon travail. Merci d'avoir visité mon
          portfolio et j'espère avoir l'occasion de collaborer avec vous bientôt
          !
        </p>
      </section>
      <button
        className="Home__downloadButton"
        onClick={() => {
          downloadFileAtURL(CV_FILE_URL)
        }}
      >
        Télécharger mon CV
      </button>
    </div>
  )
}

export default Home
