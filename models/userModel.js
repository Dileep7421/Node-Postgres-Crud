const db = require('../config/db')

const getUsers = async () => {
    const result = await db.query("select * from userdetails");
    return result.rows;
};

const getUserById = async (userId) => {
    const result = await db.query("select * from userdetails where id= $1", [userId]);
    return result.rows[0];
};

const createUser = async (name, email, age) => {
    const result = await db.query(
      "INSERT INTO userdetails (name, email, age) VALUES ($1, $2, $3) RETURNING *",
      [name, email, age]
    );
    return result.rows[0];
  };
  

const updateUser = async (id, name, email, age) => {
    const result = await db.query(
        "UPDATE userdetails SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *",
        [name, email, age, id]
    );
    return result.rows[0];
};

const deleteUser = async (id) => {
    const result = await db.query("DELETE FROM userdetails WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
