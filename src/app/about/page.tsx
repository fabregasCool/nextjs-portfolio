"use client";

export default function AboutPage() {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          À propos de notre entreprise
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Nous sommes une plateforme de <strong>formation en ligne</strong>{" "}
          dédiée à rendre l’apprentissage accessible à tous. Que vous soyez
          étudiant, professionnel ou en reconversion, notre mission est de vous
          accompagner dans le développement de vos compétences.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Grâce à nos cours interactifs, nos formateurs experts et notre
          approche pédagogique innovante, nous aidons chaque apprenant à
          progresser à son rythme, où qu’il soit.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Rejoignez notre communauté de milliers d’apprenants et commencez à
          transformer votre avenir dès aujourd’hui.
        </p>
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white py-2 px-5 rounded-lg transition transform duration-150"
        >
          Contactez-nous
        </button>
      </div>
    </section>
  );
}
