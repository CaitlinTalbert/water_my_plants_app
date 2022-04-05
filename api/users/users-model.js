const db = require("../data/db-config");

const getAllUsers = async () => {
  let result = await db("users").select(
    "users.user_id",
    "users.username",
    "users.phoneNumber"
  );
  return result;
};

const findByUsername = async (username) => {
  let result = await db("users").where("username", username);
  return result[0];
};

const findById = async (id) => {
  return db("users").where("id", id).first();
};

const insertUser = async (user) => {
  let result = await db("users").insert(user, [
    "user_id",
    "username",
    "password",
  ]);
  return findById(result);
};

const updateUser = async (user, user_id) => {
  let result = await db("users")
    .where("user_id", user_id)
    .update(user, ["user_id", "username", "phoneNumber", "password"]);
  return result;
};

const deleteUserById = async (user_id) => {
  let result = await db("users")
    .where("user_id", user_id)
    .del(["user_id", "username", "phoneNumber", "password"]);
  return result;
};

module.exports = {
  getAllUsers,
  insertUser,
  findById,
  findByUsername,
  updateUser,
  deleteUserById,
};

// async function insertUser(user) {
//     // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
//     // AND OBTAIN WHATEVER COLUMNS WE NEED FROM THE NEWLY CREATED/UPDATED RECORD
//     const [newUserObject] = await db('users').insert(user, ['user_id', 'username', 'password'])
//     return newUserObject // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
//   }

// server.get('/api/users', async (req, res) => {
//     res.json(await getAllUsers())
//   })

//   server.post('/api/users', async (req, res) => {
//     res.status(201).json(await insertUser(req.body))
//   })
