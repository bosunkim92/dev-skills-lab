const skills = [
    {id: 000001, skill: 'HTML', obtained: true},
    {id: 000002, skill: 'CSS', obtained: true},
    {id: 000003, skill: 'JavaScript', obtained: true},
    {id: 000004, skill: 'MongoDB', obtained: true},
    {id: 000005, skill: 'Express', obtained: true},
    {id: 000006, skill: 'React', obtained: false},
    {id: 000007, skill: 'Node.js', obtained: true},
    {id: 000008, skill: 'Python', obtained: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function getOne(id){
    return skills.find(skill => skill.id === parseInt(id));
}
function getAll() {
    return skills;
}
function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.obtained = false;
    skills.push(skill);
}
function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}