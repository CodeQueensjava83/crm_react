import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

function Sobregrupo() {
  const members = [
    { id: 1, name: 'Carina Bentlin', role: 'Scrum Master', bio: 'Focada em estratégia e comunicação.', github: 'https://github.com/carinabentlin', linkedin: 'https://www.linkedin.com/in/carina-bentlin/', photo: 'https://ik.imagekit.io/codequeens/FOTOS_grupo/carina_png.png' },
    { id: 2, name: 'Maria Medeiros', role: 'Developer', bio: 'APIs escaláveis e banco de dados.', github: 'https://github.com/Maju2016', linkedin: 'https://www.linkedin.com/in/mariajulia-medeiros', photo: 'https://ik.imagekit.io/codequeens/FOTOS_grupo/maria_png.png' },
    { id: 3, name: 'Luana Vicaria', role: 'Tech Lead', bio: 'Liderança da.', github: 'https://github.com/LuVicaria', linkedin: 'https://www.linkedin.com/in/luana-borghetti-vicaria/', photo: 'https://ik.imagekit.io/codequeens/FOTOS_grupo/luana_png.png' },
    { id: 4, name: 'Milena Svitras', role: 'Developer', bio: 'Arquiteto de software e dev senior.', github: 'https://github.com/misoliv', linkedin: 'https://www.linkedin.com/in/milenasoliv/', photo: 'https://ik.imagekit.io/codequeens/FOTOS_grupo/milena_png.png' },
    { id: 5, name: 'Myriam Liston', role: 'Developer', bio: 'Testes automatizados e CI/CD.', github: 'https://github.com/MyListon', linkedin: 'https://www.linkedin.com/in/myriam-liston-ferreira-perdiza/', photo: 'https://ik.imagekit.io/codequeens/FOTOS_grupo/myriam_png.png' },
  ];
  
  // Separação por filas
  const topMembers = members.filter(m => m.role === 'Scrum Master' || m.role === 'Tech Lead');
  const bottomMembers = members.filter(m => m.role !== 'Scrum Master' && m.role !== 'Tech Lead');

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-6">
      <section className="max-w-6xl mx-auto">
        
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-slate-900">Equipe</h1>
          <p className="mt-2 text-slate-600">Integrantes Code Queens</p>
        </header>

        {/* ----------------------- LINHA 1 ----------------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {topMembers.map((m) => (
            <article
              key={m.id}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md hover:shadow-xl transition-shadow"
            >
          {/* FOTO */}
          <figure className="flex items-center justify-center">
            {m.photo ? (
              <img
                src={m.photo}
                alt={`Foto de ${m.name}`}
                className="h-50 w-50 rounded-full object-cover"
              />
            ) : (
              <div className="h-50 w-50 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                Inserir Foto
              </div>
            )}
          </figure>

              {/* Infos */}
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-violet-500 text-white font-semibold text-lg">
                  {getInitials(m.name)}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900">{m.name}</h3>
                  <p className="text-sm text-slate-500">{m.role}</p>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <a href={m.github} target="_blank" rel="noopener noreferrer" className="rounded-full p-2 hover:bg-slate-100">
                    <GithubLogoIcon size={36} weight="bold" />
                  </a>
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full p-2 hover:bg-slate-100">
                    <LinkedinLogoIcon size={36} weight="bold" />
                  </a>
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-600">{m.bio}</p>
            </article>
          ))}
        </div>

        {/* ----------------------- LINHA 2 ----------------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {bottomMembers.map((m) => (
            <article
              key={m.id}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
          {/* FOTO */}
                    <figure className="flex items-center justify-center">
                      {m.photo ? (
                        <img
                          src={m.photo}
                          alt={`Foto de ${m.name}`}
                          className="h-50 w-50 rounded-full object-cover"
                        />
                      ) : (
                        <div className="h-50 w-50 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                          Inserir Foto
                        </div>
                      )}
                    </figure>

              {/* Infos */}
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-violet-500 text-white font-semibold text-lg">
                  {getInitials(m.name)}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">{m.name}</h3>
                  <p className="text-sm text-slate-500">{m.role}</p>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <a href={m.github} target="_blank" rel="noopener noreferrer" className="rounded-full p-2 hover:bg-slate-100">
                    <GithubLogoIcon size={28} weight="bold" />
                  </a>
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full p-2 hover:bg-slate-100">
                    <LinkedinLogoIcon size={28} weight="bold" />
                  </a>
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-600">{m.bio}</p>
            </article>
          ))}
        </div>

      </section>
    </main>
  );
}

function getInitials(name: string) {
  const parts = name.split(' ');
  return (parts[0][0] + (parts[1]?.[0] || '')).toUpperCase();
}

export default Sobregrupo;