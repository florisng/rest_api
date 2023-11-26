const getGoals = (req, res) => {
    res.status(200).json({ message: "Get goals" })
}

const addGoal = (req, res) => {
    res.status(200).json({ message: "Add Goal" })
}

const updateGoal = (req, res) => {
    res.status(200).json({ message: `Update Goal ${req.params.id}` })
}

const deleteGoal = (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
}

module.exports = {
    getGoals, addGoal, updateGoal, deleteGoal,
}