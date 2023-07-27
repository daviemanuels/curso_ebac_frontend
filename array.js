const arrayAlunos = [
    { aluno: 'Davi', nota: 9.0},
    { aluno: 'Melissa', nota: 9.5},
    { aluno: 'Emanuel', nota: 7.0},
    { aluno: 'Gabriel', nota: 5.5},
    { aluno: 'Aluízio', nota: 4.3},
    { aluno: 'William', nota: 3.5},
    { aluno: 'Gabiela', nota: 8.7},
    { aluno: 'Hiuri', nota: 6.0},
    { aluno: 'José', nota: 5.9}
];

const alunosAprovados = arrayAlunos.filter((aluno) => {
    return aluno.nota >= 6;
})

console.log(alunosAprovados);