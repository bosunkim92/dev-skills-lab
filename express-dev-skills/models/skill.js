const skills = [
    {id: 111111, skill: 'HTML', obtained: true},
    {id: 222222, skill: 'CSS', obtained: true},
    {id: 333333, skill: 'JavaScript', obtained: true},
    {id: 444444, skill: 'MERN Stack', obtained: false},
    {id: 555555, skill: 'Python', obtained: false},
    {id: 666666, skill: 'React', obtained: false}
];

module.exports = {
    getAll
};

function getAll() {
    return skills;
}