import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

function Sobregrupo() {
  const members = [
    { id: 1, name: 'Carina Bentlin', role: 'Scrum Master', bio: 'Promove uma cultura ágil', github: 'https://github.com/carinabentlin', linkedin: 'https://www.linkedin.com/in/carina-bentlin/', photo: 'https://ik.imagekit.io/codequeens/FOTOS_grupo/carina_png.png' },
    { id: 2, name: 'Myriam Liston', role: 'Developer', bio: 'Desenvolvedora Front-end', github: 'https://github.com/MyListon', linkedin: 'https://www.linkedin.com/in/myriam-liston-ferreira-perdiza/', photo: 'https://ik.imagekit.io/codequeens/FOTOS_grupo/myriam_png.png' },
    { id: 3, name: 'Luana Vicaria', role: 'Tech Lead', bio: 'Liderança da equipe', github: 'https://github.com/LuVicaria', linkedin: 'https://www.linkedin.com/in/luana-borghetti-vicaria/', photo: 'https://ik.imagekit.io/codequeens/FOTOS_grupo/luana_png.png' },
    { id: 4, name: 'Milena Svitras', role: 'Developer', bio: 'Desenvolvedora Front-end', github: 'https://github.com/misoliv', linkedin: 'https://www.linkedin.com/in/milenasoliv/', photo: 'https://ik.imagekit.io/codequeens/FOTOS_grupo/milena_png.png' },
    { id: 5, name: 'Maria Medeiros', role: 'Developer', bio: 'Desenvolvedora Front-end', github: 'https://github.com/Maju2016', linkedin: 'https://www.linkedin.com/in/mariajulia-medeiros', photo: 'https://ik.imagekit.io/codequeens/FOTOS_grupo/maria_png.png' },
  ];

  const topMembers = members.filter(m => m.role === 'Scrum Master' || m.role === 'Tech Lead');
  const bottomMembers = members.filter(m => m.role !== 'Scrum Master' && m.role !== 'Tech Lead');

  return (

    <main className="min-h-screen bg-blue-900 py-12 px-6 relative">

      {/*  LOGO FIXO EM RELAÇÃO AO MAIN (não empurra nada) */}
        <img 
          src="https://ik.imagekit.io/codequeens/code_queens_logo.png" 
          alt="Logo Code Queens"
          className="w-80 h-auto"
        />

      <section className="max-w-6xl mx-auto">

        {/* Header */}
        <header className="mb-15 text-center">
          <h1 className="text-5xl font-extrabold text-slate-100">Equipe</h1>
        </header>

        {/* ----------------------- LINHA 1 ----------------------- */}
        <div className="flex justify-center flex-wrap gap-6 mb-10">
          {topMembers.map((m) => (
            <article
              key={m.id}
              className="w-full sm:w-[320px] shrink-0 rounded-2xl bg-blue-300 p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <figure className="flex items-center justify-center mb-4">
                {m.photo ? (
                  <img
                    src={m.photo}
                    alt={`Foto de ${m.name}`}
                    className="h-48 w-48 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-48 w-48 rounded-full bg-slate-300 flex items-center justify-center text-slate-500">
                    Inserir Foto
                  </div>
                )}
              </figure>

              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-blue-900">{m.name}</h3>
                  <p className="text-sm text-blue-700">{m.role}</p>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <a href={m.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-slate-200 rounded-full">
                    <GithubLogoIcon size={36} weight="bold" />
                  </a>
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-slate-200 rounded-full">
                    <LinkedinLogoIcon size={36} weight="bold" />
                  </a>
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-700">{m.bio}</p>
            </article>
          ))}
        </div>

        {/* ----------------------- LINHA 2 ----------------------- */}
        <div className="flex justify-center flex-wrap gap-6">
          {bottomMembers.map((m) => (
            <article
              key={m.id}
              className="w-full sm:w-[320px] shrink-0 rounded-2xl bg-blue-300 p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <figure className="flex items-center justify-center mb-4">
                {m.photo ? (
                  <img
                    src={m.photo}
                    alt={`Foto de ${m.name}`}
                    className="h-48 w-48 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-48 w-48 rounded-full bg-blue-900 flex items-center justify-center text-slate-500">
                    Inserir Foto
                  </div>
                )}
              </figure>

              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-extrabold text-blue-900">{m.name}</h3>
                  <p className="text-sm text-blue-700">{m.role}</p>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <a href={m.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-slate-200 rounded-full">
                    <GithubLogoIcon size={28} weight="bold" />
                  </a>
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-slate-200 rounded-full">
                    <LinkedinLogoIcon size={28} weight="bold" />
                  </a>
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-700">{m.bio}</p>
            </article>
          ))}
        </div>

      </section>
    </main>
  );
}

export default Sobregrupo;



